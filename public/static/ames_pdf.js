(function (win) {
  var pdfjsLib = win.pdfjsLib || {}
  var pdfjsViewer = win.pdfjsViewer || {}

  if (!pdfjsLib.getDocument || !pdfjsViewer.PDFViewer) {
    // alert('找不到pdfjs的资源文件, 请检查index.html中是否已经引入!')
  }

  const USE_ONLY_CSS_ZOOM = true // css动画
  const TEXT_LAYER_MODE = 0 // DISABLE
  const MAX_IMAGE_SIZE = 1024 * 1024 // 最大图片尺寸
  const CMAP_URL = 'https://unpkg.com/pdfjs-dist@2.9.359/cmaps/'
  const CMAP_PACKED = true

  const DEFAULT_SCALE_DELTA = 1.1
  const MIN_SCALE = 0.25
  const MAX_SCALE = 10.0
  const DEFAULT_SCALE_VALUE = 'auto'

  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js' // js文件放public下面

  const PDFViewerApplication = {
    pdfLoadingTask: null,
    pdfDocument: null,
    pdfViewer: null,
    pdfHistory: null,
    pdfLinkService: null,
    eventBus: null,

    /**
       * Opens PDF document specified by URL.
       * @returns {Promise} - Returns the promise, which is resolved when document
       *                      is opened.
       */
    open (params) {
      if (this.pdfLoadingTask) {
        // We need to destroy already opened document
        return this.close().then(
          function () {
            // ... and repeat the open() call.
            return this.open(params)
          }.bind(this)
        )
      }

      const url = params.url
      const self = this
      this.setTitleUsingUrl(url)

      // Loading document.
      const loadingTask = pdfjsLib.getDocument({
        url,
        maxImageSize: MAX_IMAGE_SIZE,
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED
      })
      this.pdfLoadingTask = loadingTask

      // 加载进度
      loadingTask.onProgress = function (progressData) {
        // self.progress(progressData.loaded / progressData.total);
      }

      return loadingTask.promise.then(
        function (pdfDocument) {
          // Document loaded, specifying document for the viewer.
          self.pdfDocument = pdfDocument
          self.pdfViewer.setDocument(pdfDocument)
          self.pdfLinkService.setDocument(pdfDocument)
          self.pdfHistory.initialize({
            fingerprint: pdfDocument.fingerprint
          })

          self.setTitleUsingMetadata(pdfDocument)
        },
        function (exception) {
          const message = exception && exception.message
          const l10n = self.l10n
          let loadingErrorMessage

          if (exception instanceof pdfjsLib.InvalidPDFException) {
            // change error message also for other builds
            loadingErrorMessage = l10n.get(
              'invalid_file_error',
              null,
              'Invalid or corrupted PDF file.'
            )
          } else if (exception instanceof pdfjsLib.MissingPDFException) {
            // special message for missing PDFs
            loadingErrorMessage = l10n.get(
              'missing_file_error',
              null,
              'Missing PDF file.'
            )
          } else if (exception instanceof pdfjsLib.UnexpectedResponseException) {
            loadingErrorMessage = l10n.get(
              'unexpected_response_error',
              null,
              'Unexpected server response.'
            )
          } else {
            loadingErrorMessage = l10n.get(
              'loading_error',
              null,
              'An error occurred while loading the PDF.'
            )
          }

          loadingErrorMessage.then(function (msg) {
            self.error(msg, {
              message
            })
          })
        }
      )
    },

    /**
       * Closes opened PDF document.
       * @returns {Promise} - Returns the promise, which is resolved when all
       *                      destruction is completed.
       */
    close () {
      if (!this.pdfLoadingTask) {
        return Promise.resolve()
      }

      const promise = this.pdfLoadingTask.destroy()
      this.pdfLoadingTask = null

      if (this.pdfDocument) {
        this.pdfDocument = null

        this.pdfViewer.setDocument(null)
        this.pdfLinkService.setDocument(null, null)

        if (this.pdfHistory) {
          this.pdfHistory.reset()
        }
      }

      return promise
    },

    setTitleUsingUrl: function pdfViewSetTitleUsingUrl (url) {
      this.url = url
      let title = pdfjsLib.getFilenameFromUrl(url) || url
      try {
        title = decodeURIComponent(title)
      } catch (e) {
        // decodeURIComponent may throw URIError,
        // fall back to using the unprocessed url in that case
      }
      this.setTitle(title)
    },

    setTitleUsingMetadata (pdfDocument) {
      const self = this
      pdfDocument.getMetadata().then(function (data) {
        const info = data.info
        const metadata = data.metadata
        self.documentInfo = info
        self.metadata = metadata

        let pdfTitle
        if (metadata && metadata.has('dc:title')) {
          const title = metadata.get('dc:title')
          // Ghostscript sometimes returns 'Untitled', so prevent setting the
          // title to 'Untitled.
          if (title !== 'Untitled') {
            pdfTitle = title
          }
        }

        if (!pdfTitle && info && info.Title) {
          pdfTitle = info.Title
        }

        if (pdfTitle) {
          self.setTitle(pdfTitle + ' - ' + document.title)
        }
      })
    },

    setTitle: function pdfViewSetTitle (title) {
      document.title = title
    },

    error: function pdfViewError (message, moreInfo) {
      const l10n = this.l10n
      const moreInfoText = [
        l10n.get(
          'error_version_info', {
            version: pdfjsLib.version || '?',
            build: pdfjsLib.build || '?'
          },
          'PDF.js v{{version}} (build: {{build}})'
        )
      ]

      if (moreInfo) {
        moreInfoText.push(
          l10n.get(
            'error_message', {
              message: moreInfo.message
            },
            'Message: {{message}}'
          )
        )
        if (moreInfo.stack) {
          moreInfoText.push(
            l10n.get('error_stack', {
              stack: moreInfo.stack
            }, 'Stack: {{stack}}')
          )
        } else {
          if (moreInfo.filename) {
            moreInfoText.push(
              l10n.get(
                'error_file', {
                  file: moreInfo.filename
                },
                'File: {{file}}'
              )
            )
          }
          if (moreInfo.lineNumber) {
            moreInfoText.push(
              l10n.get(
                'error_line', {
                  line: moreInfo.lineNumber
                },
                'Line: {{line}}'
              )
            )
          }
        }
      }
    },

    get pagesCount () {
      return this.pdfDocument.numPages
    },

    get page () {
      return this.pdfViewer.currentPageNumber
    },

    set page (val) {
      this.pdfViewer.currentPageNumber = val
    },

    zoomIn: function pdfViewZoomIn (ticks) {
      let newScale = this.pdfViewer.currentScale
      do {
        newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2)
        newScale = Math.ceil(newScale * 10) / 10
        newScale = Math.min(MAX_SCALE, newScale)
      } while (--ticks && newScale < MAX_SCALE)
      this.pdfViewer.currentScaleValue = newScale
    },

    zoomOut: function pdfViewZoomOut (ticks) {
      let newScale = this.pdfViewer.currentScale
      do {
        newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2)
        newScale = Math.floor(newScale * 10) / 10
        newScale = Math.max(MIN_SCALE, newScale)
      } while (--ticks && newScale > MIN_SCALE)
      this.pdfViewer.currentScaleValue = newScale
    },

    initUI: function pdfViewInitUI () {
      const eventBus = new pdfjsViewer.EventBus()
      this.eventBus = eventBus

      const linkService = new pdfjsViewer.PDFLinkService({
        eventBus
      })
      this.pdfLinkService = linkService

      this.l10n = pdfjsViewer.NullL10n

      const container = document.getElementById('viewerContainer')
      const pdfViewer = new pdfjsViewer.PDFViewer({
        container,
        eventBus,
        linkService,
        l10n: this.l10n,
        useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
        textLayerMode: TEXT_LAYER_MODE
      })
      this.pdfViewer = pdfViewer
      linkService.setViewer(pdfViewer)

      this.pdfHistory = new pdfjsViewer.PDFHistory({
        eventBus,
        linkService
      })
      linkService.setHistory(this.pdfHistory)

      document.getElementById('previous').addEventListener('click', function () {
        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--
        }
      })

      document.getElementById('next').addEventListener('click', function () {
        if (PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page++
        }
      })

      document.getElementById('zoomIn').addEventListener('click', function () {
        PDFViewerApplication.zoomIn()
      })

      document.getElementById('zoomOut').addEventListener('click', function () {
        PDFViewerApplication.zoomOut()
      })

      document
        .getElementById('pageNumber')
        .addEventListener('click', function () {
          this.select()
        })

      document
        .getElementById('pageNumber')
        .addEventListener('change', function () {
          PDFViewerApplication.page = this.value | 0

          // Ensure that the page number input displays the correct value,
          // even if the value entered by the user was invalid
          // (e.g. a floating point number).
          if (this.value !== PDFViewerApplication.page.toString()) {
            this.value = PDFViewerApplication.page
          }
        })

      eventBus.on('pagesinit', function () {
        // We can use pdfViewer now, e.g. let's change default scale.
        pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE
      })

      eventBus.on('pagechanging',
        function (evt) {
          const page = evt.pageNumber
          const numPages = PDFViewerApplication.pagesCount

          if (page >= numPages) {
            try {
              PDFViewerApplication.reachToBottom()
            } catch (e) {

            }
          }

          document.getElementById('pageNumber').value = page
          document.getElementById('previous').disabled = page <= 1
          document.getElementById('next').disabled = page >= numPages
        },
        true
      )
    }
  }

  win.PDFViewerApplication = PDFViewerApplication
})(window)
