<template>
  <div>
    <Header :title="$t('componentDemo.cascadePicker')" :left-text="$t('header.back')" :left-arrow="true" @onClickBack="back()" />
    <van-field v-model="cascadePickerValue1" is-link readonly label="级联单选" placeholder="请选择" @click="popshow1.show = true" />
    <van-field v-model="cascadePickerValue2" is-link readonly label="级联多选" placeholder="请选择" @click="popshow2.show = true" />
    <!-- <input v-model="cascadePickerValue2" readonly placeholder="请选择" @click="popshow2.show = true" /> -->
    <cascade-picker :dataSource="items1" :multiple="false" :popup="popshow1" :defaultValue="defaultValue1" @pickerResult="pickerResult1"></cascade-picker>
    <cascade-picker :dataSource="items2" :multiple="true" :popup="popshow2" :defaultValue="defaultValue2" @pickerResult="pickerResult2"></cascade-picker>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import CascadePicker from '../../components/cascade-picker/CascadePicker.vue'
export default {
  components: {
    Header,
    CascadePicker
  },
  setup () {
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }

    const data = [
      {
        label: '北京市',
        value: 1,
        children: [
          {
            label: '北京市',
            value: 4,
            children: [
              { label: '东城区', value: 10 },
              { label: '西城区', value: 16 },
              { label: '崇文区', value: 22 }
            ]
          }
        ]
      },
      {
        label: '江苏省',
        value: 2,
        children: [
          {
            label: '南京市',
            value: 5,
            children: [
              { label: '玄武区', value: 11 },
              { label: '白下区', value: 17 },
              { label: '秦淮区', value: 23 },
              { label: '建邺区', value: 28 }
            ]
          },
          {
            label: '苏州市',
            value: 6,
            children: [
              { label: '虎丘区', value: 12 },
              { label: '吴中区', value: 18 },
              { label: '相城区', value: 24 },
              { label: '平江区', value: 29 }
            ]
          },
          {
            label: '常州市',
            value: 7,
            children: [
              { label: '天宁区', value: 13 },
              { label: '钟楼区', value: 19 },
              { label: '新北区', value: 25 },
              { label: '武进区', value: 30 }
            ]
          }
        ]
      },
      {
        label: '浙江省',
        value: 3,
        children: [
          {
            label: '杭州市',
            value: 8,
            children: [
              { label: '上城区', value: 14 },
              { label: '下城区', value: 20 },
              { label: '西湖区', value: 26 },
              { label: '余杭区', value: 31 }
            ]
          },
          {
            label: '宁波市',
            value: 9,
            children: [
              { label: '海曙区', value: 15 },
              { label: '鄞州区', value: 21 },
              { label: '余姚市', value: 27 },
              { label: '奉化市', value: 32 }
            ]
          }
        ]
      }
    ]

    const data1 = JSON.parse(JSON.stringify(data))
    const data2 = JSON.parse(JSON.stringify(data))

    const items1 = reactive(data1)
    const items2 = reactive(data2)

    const tabs = reactive(['省', '市', '区'])
    const cascadePickerValue1 = ref('')
    const cascadePickerValue2 = ref('')

    const popshow1 = reactive({ show: false, title: '级联单选' })
    const popshow2 = reactive({ show: false, title: '级联多选' })

    const pickerResult1 = (jsonData, strData) => {
      cascadePickerValue1.value = strData.join(',')
    }

    const pickerResult2 = (jsonData, strData) => {
      cascadePickerValue2.value = strData.join(',')
    }

    const defaultValue1 = ['北京市/北京市/东城区']
    // const defaultValue2 = ['北京市/北京市/东城区', '北京市/北京市/西城区']
    const defaultValue2 = [
      {
        label: '北京市',
        value: 1,
        children: [
          {
            label: '北京市',
            value: 4,
            children: [
              { label: '东城区', value: 10, checked: true },
              { label: '崇文区', value: 22, checked: true }
            ]
          }
        ]
      },
      {
        label: '江苏省',
        value: 2,
        children: [
          {
            label: '南京市',
            value: 5,
            children: [
              { label: '白下区', value: 17, checked: true }
            ]
          },
          {
            label: '苏州市',
            value: 6,
            children: [
              { label: '相城区', value: 24, checked: true }
            ]
          },
          {
            label: '常州市',
            value: 7,
            children: [
              { label: '钟楼区', value: 19, checked: true }
            ]
          }
        ]
      },
      {
        label: '浙江省',
        value: 3,
        children: [
          {
            label: '杭州市',
            value: 8,
            children: [
              { label: '西湖区', value: 26, checked: true }
            ]
          },
          {
            label: '宁波市',
            value: 9,
            children: [
              { label: '奉化市', value: 32, checked: true }
            ]
          }
        ]
      }
    ]

    return {
      back,
      pickerResult1,
      pickerResult2,
      items1,
      items2,
      tabs,
      popshow1,
      popshow2,
      cascadePickerValue1,
      cascadePickerValue2,
      defaultValue1,
      defaultValue2
    }
  }
}
</script>

<style lang="less" scoped>
</style>
