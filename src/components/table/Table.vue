<template>
  <div>
    <el-table :data="data.slice((page-1)*5,page*5)" style="width: 100%" :height="height" :default-sort="defaultSort?defaultSort:{}" @row-click="rowClick">

      <el-table-column type="index" align="center">
        <template #header>
          <el-popover placement="bottom" :width="80" trigger="click">
            <div class="operation-box">
              <!-- <div class="operation-title">
                {{$t('table.fieldHide')}}
              </div> -->
              <div class="operation-checkBox">
                <template v-for="(column,index) in columns" :key="index">
                  <el-checkbox v-model="column.hide" :label="language === 'zh'? column.chValue:column.enValue"></el-checkbox>
                </template>
              </div>
            </div>
            <template #reference>
              <i class="el-icon-s-operation"></i>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <template v-for="(column,index) in columns" :key="index">
        <el-table-column
        v-if="!column.hide"
        :prop="column.name"
        :label="language === 'zh'? column.chValue:column.enValue"
        :fixed="column.fixed"
        :width="column.width"
        :sortable="column.sortable"
        :sort-method="column.sortMethod != null? (a,b) => column.sortMethod(a,b) : null"
        :sort-orders="['ascending', 'descending', null]"
        align="center">
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="data.length"
      :page-size="5"
      style="margin:15px 0 0 0"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from 'vue'
import { Toast } from 'vant'
export default {
  name: 'AmesTable',
  props: {
    data: { type: Object, default: null },
    columns: { type: Object, default: null },
    height: { type: Number, default: null },
    defaultSort: { type: Object, default: null },
    sortMethod: { type: Function, default: null }
  },
  setup (props) {
    const { proxy } = getCurrentInstance()
    const language = ref(proxy.$i18n.locale)
    const page = ref(1)
    const currentChange = (curPage) => {
      page.value = curPage
    }

    const rowClick = (row) => {
      const result = {}
      console.log(row)
      for (const key in row) {
        const ele = props.columns.find((item) => item.name === key)
        console.log(ele)
        if (ele.hide) {
          continue
        }

        if (proxy.$i18n.locale === 'zh') {
          result[ele.chValue] = row[key]
        } else {
          result[ele.enValue] = row[key]
        }
      }
      Toast(JSON.stringify(result))
    }

    return {
      language,
      page,
      currentChange,
      rowClick
    }
  }
}
</script>
<style lang="less" scoped>
.operation-box{
  width: 100%;
  height: 100%;
  font-size: 14px;

  .operation-title{
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #666666;
  }

  :deep(.el-checkbox) {
    width: 100%;
    margin: 0;
  }

}

</style>
