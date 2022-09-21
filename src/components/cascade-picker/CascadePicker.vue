<template>
  <div class="cascade-picker-box">
    <van-popup
      v-model:show="popupShow.show"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <div class="cascade-picker-header">
        <van-row>
          <van-col class="cancle" @click="onCancle" span="4">{{
            $t("common.cancle")
          }}</van-col>
          <van-col class="title" span="16">{{ popupShow.title }}</van-col>
          <van-col class="confirm" @click="onConfirm" span="4">{{
            $t("common.confirm")
          }}</van-col>
        </van-row>
      </div>
      <div class="picker-content">
        <div class="picker-nav">
          <ul>
            <li v-for="(nav, index) in navArr.value" :key="index">
              <span
                :class="index === curTabIndex ? 'tab-active' : ''"
                @click="handChangeTabIndex(index)"
                >{{ nav }}</span
              >
              <van-icon v-if="index < dataList.value.length - 1" name="arrow" />
            </li>
          </ul>
        </div>
        <div class="picker-main">
          <template v-for="(data, index) in dataList.value" :key="index">
            <item
              v-if="
                index === curTabIndex - 1 ||
                index === curTabIndex ||
                (curTabIndex == 0 && index === curTabIndex + 1)
              "
              :class="
                (curTabIndex === 0 && index === 0) || index === curTabIndex - 1
                  ? 'picker-main-left'
                  : index === curTabIndex ||
                    (curTabIndex == 0 && index === curTabIndex + 1)
                  ? 'picker-main-right'
                  : ''
              "
              :items="data"
              :level="index"
              :parent="dataList.value[index - 1]"
              :multiple="multiple"
              @onSelected="onSelected"
              @changeParentChecked="changeParentChecked"
            ></item>
          </template>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { isReactive, reactive, ref } from '@vue/reactivity'
import Item from './Item.vue'
import { getCurrentInstance, onMounted, watch } from '@vue/runtime-core'
export default {
  components: {
    Item
  },
  props: {
    dataSource: { type: Array, default: null },
    multiple: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    popup: {
      type: Object,
      default: () => {
        return { show: false, title: '级联选择' }
      }
    },
    defaultValue: { type: Array, default: null }
  },
  setup (props, { emit }) {
    // 属性区
    // const popupShow = reactive({ show: props.popup.show, title: props.popup.title })
    const popupShow = reactive(props.popup)
    const navArr = reactive({ value: ['请选择'] })
    const dataList = reactive({ value: [] })
    const curTabIndex = ref(0)
    const confirmFlag = ref(false)
    const { proxy } = getCurrentInstance()

    // 方法区
    const handFieldClick = () => {
      popupShow.show = true
    }

    /**
     *  修改数据源，添加checked、actived、indeterminate属性
     */
    const addProperty = (data) => {
      const tempArr = []
      let temp = {}
      if (Array.isArray(data)) {
        data.forEach((ele) => {
          temp = {
            label: ele.label,
            value: ele.value,
            checked: false,
            actived: false,
            indeterminate: false
          }
          if (ele.children) {
            const children = addProperty(ele.children)
            temp.children = children
          }
          tempArr.push(temp)
        })
        return tempArr
      }
    }
    const data = addProperty(props.dataSource)
    const reactiveData = reactive(data)
    dataList.value.push(reactiveData)

    /**
     * 列表被选中，填充下一列的数据
     */
    const onSelected = ({ item, index, level }) => {
      // 清除当前级别的下一级的激活状态
      if (level < dataList.value.length - 1) {
        for (let i = level + 1; i < dataList.value.length; i++) {
          dataList.value[i].forEach((element) => {
            element.actived = false
            if (!props.multiple) {
              element.checked = false
              element.indeterminate = false
            }
          })
        }
      }

      // 单选模式  数据回显的数据不会修改的问题
      const checkedIndex = dataList.value[0].findIndex(
        (ele) => ele.checked || ele.indeterminate
      )
      if (!props.multiple && level === 0 && checkedIndex > -1) {
        // 取到回显的数据，给他置成false
        const resultJson = getResultJson(reactiveData)
        const resultStr = getResultStr(resultJson, '')
        if (resultStr && resultStr.length > 0) {
          const arr = resultStr[0].split('/')
          defaultStrValueCheck(arr[arr.length - 1], reactiveData, false)
          changeParentChecked()
        }
      }

      // 一二级面板点击，切换二三级面板数据
      console.log(level, curTabIndex.value)
      if (level <= curTabIndex.value) {
        dataList.value.splice(level + 1, dataList.value.length - 1)
        navArr.value.splice(level + 1, navArr.value.length - 1)
      }

      // 点击相应数据填充下一级数据
      navArr.value[level] = item.label
      if (item.children) {
        dataList.value[level + 1] = reactive(item.children)
        navArr.value[level + 1] = '请选择'
        curTabIndex.value = level + 1
      }
    }

    /**
     * 点击标签页，更改当前显示数据
     */
    const handChangeTabIndex = (index) => {
      curTabIndex.value = index
      // 清除当前级别的下一级的选中状态
      if (props.multiple && index < dataList.value.length - 1) {
        for (let i = index + 1; i < dataList.value.length; i++) {
          dataList.value[i].forEach((element) => {
            element.actived = false
          })
        }
      }
    }

    /**
     * 子列数据被选中，修改父列的选中状态
     */
    const changeParentChecked = () => {
      updateParentCheckStatus(reactiveData)
    }

    /**
     * 递归修改父列选中状态
     */
    const updateParentCheckStatus = (data) => {
      data.forEach((ele) => {
        if (ele.children) {
          updateParentCheckStatus(ele.children)
          // 半选中
          const indeterminateIndex = ele.children.findIndex(
            (ele) => ele.indeterminate
          )
          // 选中的
          const checkedIndex = ele.children.findIndex((ele) => ele.checked)
          // 未选中的
          const unCheckedIndex = ele.children.findIndex((ele) => !ele.checked)
          switch (true) {
            // 如果子选项中存在半选中的，或者存在选中和未选中的，那么设置父选项为半选中
            case indeterminateIndex > -1 ||
              (checkedIndex > -1 && unCheckedIndex > -1):
              ele.indeterminate = true
              if (!props.multiple && ele.indeterminate) ele.actived = true
              break
            // 如果子选项全是选中状态，那么设置父选项的为选中状态，设置半选为false
            case checkedIndex > -1 && unCheckedIndex < 0:
              ele.indeterminate = false
              ele.checked = true
              if (!props.multiple && ele.checked) ele.actived = true
              break
            // 如果子选项全是未选中状态，那么设置父选项的选中和半选全为 false
            case checkedIndex < 0 && unCheckedIndex > -1:
              ele.indeterminate = false
              ele.checked = false
              break
            default:
              break
          }
        }
      })
    }

    /**
     * 关闭触发时间
     */
    const onCancle = () => {
      popupShow.show = false
    }

    /**
     * 确认触发事件
     */
    const onConfirm = () => {
      confirmFlag.value = true
      popupShow.show = false
      const resultJson = getResultJson(reactiveData)
      const resultStr = getResultStr(resultJson, '')
      emit('pickerResult', resultJson, resultStr)
    }

    /**
     * 递归获取选中的数据--json
     */
    const getResultJson = (data) => {
      const arrData = []
      let objData = {}
      data.forEach((ele) => {
        if (ele.checked || ele.indeterminate) {
          objData = {
            label: ele.label,
            value: ele.value,
            checked: ele.checked,
            actived: ele.actived,
            indeterminate: ele.indeterminate
          }
          if (ele.children) {
            const children = getResultJson(ele.children)
            objData.children = children
          }
          arrData.push(objData)
        }
      })
      return arrData
    }

    /**
     * 递归获取选中的数据--string
     */
    const getResultStr = (arr, resultStr) => {
      let strArr = []
      let temp = ''
      arr.forEach((ele) => {
        if (!ele.children) {
          temp = resultStr + ele.label
          strArr.push(temp)
        } else {
          temp =
            resultStr === '' ? ele.label + '/' : resultStr + ele.label + '/'
          const arr = getResultStr(ele.children, temp)
          strArr = [...strArr, ...arr]
        }
      })
      return strArr
    }

    // 字符串类默认值设置
    const defaultStrValueCheck = (defaultValue, data, flag) => {
      data.forEach((ele) => {
        if (ele.label === defaultValue) {
          ele.checked = flag
          ele.actived = flag
        }
        if (ele.children) {
          defaultStrValueCheck(defaultValue, ele.children, flag)
        }
      })
    }

    // json类字符串设置
    const defaultJsonValueCheck = (defaultJsonValue, data) => {
      for (const ele of defaultJsonValue) {
        for (const item of data) {
          if (ele.label === item.label) {
            if (ele.children && item.children) {
              defaultJsonValueCheck(ele.children, item.children)
              item.checked = ele.checked
              item.actived = ele.actived
            } else if (!ele.children && !item.children) {
              item.checked = ele.checked
              item.actived = ele.actived
            }
          }
        }
      }
    }

    const resetDefaultValue = (defaultValue, datasource) => {
      defaultValue.forEach((ele) => {
        if (typeof ele === 'string') {
          const arr = ele.split('/')
          defaultStrValueCheck(arr[arr.length - 1], datasource, true)
        } else {
          defaultJsonValueCheck(defaultValue, datasource)
        }
      })
      changeParentChecked()
      onConfirm()
    }

    onMounted(() => {
      // 默认值设置
      if (props.defaultValue) {
        resetDefaultValue(props.defaultValue, reactiveData)
      }
    })

    let tempdata = null
    watch(
      () => popupShow.show,
      () => {
        if (popupShow.show) {
          tempdata = JSON.parse(JSON.stringify(getResultJson(reactiveData)))
        }
        if (!popupShow.show && !confirmFlag.value && tempdata != null) {
          console.log('执行了')
          const datasource = addProperty(props.dataSource)
          resetDefaultValue(tempdata, datasource)
          resetDefaultValue(datasource, reactiveData)
          dataList.value = []
          dataList.value.push(reactiveData)
          navArr.value = ['请选择']
          curTabIndex.value = 0
          proxy.$forceUpdate()
        }
        confirmFlag.value = false
      }
    )

    return {
      popupShow,
      confirmFlag,
      navArr,
      dataList,
      curTabIndex,
      handFieldClick,
      onSelected,
      handChangeTabIndex,
      changeParentChecked,
      onCancle,
      onConfirm
    }
  }
}
</script>

<style lang="less" scoped>
.cascade-picker-box {
  font-size: 16px;

  .cascade-picker-header {
    height: 48px;
    line-height: 48px;

    .cancle,
    .confirm {
      font-size: 14px;
      color: #969799;
    }

    .title {
      color: #323233;
    }
  }

  .picker-content {
    width: 100%;
    height: calc(~"100% - 48px");

    .picker-nav {
      width: calc(~"100% - 10px");
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding: 0px 5px;
      border-bottom: 1px solid #e2e2e2;

      li {
        display: inline-block;
      }

      .tab-active {
        display: inline-block;
        height: calc(~"100% - 2px");
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }
    }

    .picker-main {
      width: 100%;
      height: calc(~"100% - 35px");
      text-align: left;
      margin: 2px 0 0 0;

      .picker-main-left {
        display: inline-block;
        width: 40%;
        height: 100%;
        vertical-align: top;
      }

      .picker-main-right {
        display: inline-block;
        width: 60%;
        height: 100%;
        vertical-align: top;
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
