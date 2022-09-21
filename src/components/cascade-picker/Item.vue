<template>
  <div class="item-box">
    <ul>
      <li v-for="(item,index) in items" :key="index" class="item" @click="handItemSelected(item,index)">
        <van-row type="flex" justify="space-around">
          <van-col span="16" class="item-left">
            <el-checkbox v-if="multiple"  v-model="item.checked" :checked="item.checked" :indeterminate="item.indeterminate" @click.stop @change="handCheckChange(item,index)"></el-checkbox>
            <span :class="{active: item.actived}">{{item.label}}</span>
          </van-col>
          <van-col span="4">
            <van-icon v-if="item.children && item.children.length>0" name="arrow" />
          </van-col>
        </van-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    parent: { type: Object, default: null },
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    level: {
      type: Number,
      default: () => {
        return 0
      }
    },
    multiple: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  setup (props, { emit }) {
    // 改变选中选项的激活状态
    const handItemSelected = (item, index) => {
      props.items.forEach((ele) => {
        if (ele !== item) {
          ele.actived = false
          if (!props.multiple) ele.checked = false
        } else if (ele.children) {
          item.actived = true
        } else if (!props.multiple) {
          item.actived = true
          item.checked = true
          emit('changeParentChecked', {})
        }
      })
      emit('onSelected', { item, index, level: props.level })
    }
    // 选中状态的改变
    const handCheckChange = (item, index) => {
      handItemSelected(item, index)
      changeCheckedAction(item, item.checked)
      emit('changeParentChecked', {})
    }
    // 设置全部子选项的状态为全部选中或者取消选中
    const changeCheckedAction = (itemObj, flag) => {
      if (itemObj.children) {
        itemObj.children.forEach((ele) => {
          ele.checked = flag
          changeCheckedAction(ele, flag)
        })
      }
    }
    return {
      handItemSelected,
      handCheckChange
    }
  }
}
</script>

<style lang="less" scoped>
.item-box {
  width: 100%;
  height: 100%;

  .item {
    height: 35px;
    line-height: 35px;
    // border-bottom: 1px solid #e2e2e2;
  }

  .item-left {
    text-align: left;

    span {
      margin-left: 5px;
    }

    .active {
      color: #409eff;
    }
  }
}
</style>
