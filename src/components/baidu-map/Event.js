var CustomEvent = function () {
  this.handler = {}
}

CustomEvent.prototype.emit = function (eventName, eventData) {
  const eventHandler = this.handler[eventName]
  if (!eventHandler) {
    return
  }
  // 依次执行绑定在事件上的函数
  for (const fn of eventHandler) {
    fn(eventData)
  }
}

CustomEvent.prototype.on = function (eventName, callback) {
  if (!this.handler[eventName]) {
    this.handler[eventName] = []
  }
  this.handler[eventName].push(callback)
}

exports.CustomEvent = CustomEvent
