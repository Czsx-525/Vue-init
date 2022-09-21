<template>
    <Header
      :title="$t('componentDemo.amesTable')"
      :left-text="$t('header.back')"
      :left-arrow="leftArrow"
      @onClickBack="back()"
    />
  <ames-table :columns="columns" :data="data"  :defaultSort="defaultSort"></ames-table>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import Header from '@/components/header/Header.vue'
import AmesTable from '../../components/table/Table.vue'
export default {
  components: {
    AmesTable,
    Header
  },
  setup () {
    const router = useRouter()
    const leftArrow = true
    const back = () => {
      router.go(-1)
    }
    const data = reactive([{
      date: '2016-05-02',
      name: '阿小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '包小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1517 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '曹小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1519 弄',
      zip: 200333
    }, {
      date: '2016-05-03',
      name: '东小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1516 弄',
      zip: 200333
    },
    {
      date: '2016-05-02',
      name: '恶小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '方小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1517 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '管小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1519 弄',
      zip: 200333
    }, {
      date: '2016-05-03',
      name: '何小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1516 弄',
      zip: 200333
    },
    {
      date: '2016-05-02',
      name: '将小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '刘小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1517 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '明小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1519 弄',
      zip: 200333
    }, {
      date: '2016-05-03',
      name: '牛小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1516 弄',
      zip: 200333
    }])

    const columns = reactive([
      {
        name: 'date',
        chValue: '日期',
        enValue: 'date',
        fixed: false,
        hide: false,
        width: 100,
        sortable: true
      },
      {
        name: 'name',
        chValue: '姓名',
        enValue: 'name',
        fixed: false,
        hide: false,
        width: 100,
        sortable: true,
        sortMethod: (arg1, arg2) => {
          return arg1.name.localeCompare(arg2.name, 'zh')
        }
      },
      {
        name: 'province',
        chValue: '省份',
        enValue: 'province',
        fixed: false,
        hide: false,
        width: 100,
        sortable: false
      },
      {
        name: 'city',
        chValue: '市区',
        enValue: 'city',
        fixed: false,
        hide: false,
        width: 100,
        sortable: false
      },
      {
        name: 'address',
        chValue: '地址',
        enValue: 'address',
        fixed: false,
        hide: false,
        width: 100,
        sortable: false
      },
      {
        name: 'zip',
        chValue: '邮编',
        enValue: 'zip',
        fixed: false,
        hide: false,
        width: 100,
        sortable: false
      }
    ])

    const defaultSort = { prop: 'date', order: 'descending' } // ascending / descending

    return {
      data,
      columns,
      back,
      leftArrow,
      defaultSort
    }
  }
}
</script>
