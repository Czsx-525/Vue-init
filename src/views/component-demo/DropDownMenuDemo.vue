<template>
  <div>
    <Header :title="$t('componentDemo.dropDownMenu')" :left-text="$t('header.back')" :left-arrow="true" @onClickBack="back()" />
    <div class="select">
      <div class="radio">
        <span>单选</span>
        <el-select v-model="value" placeholder="请选择" @change="change">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="multi">
        <span>多选</span>
        <el-select v-model="value1" multiple collapse-tags placeholder="请选择" @change="change">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/header/Header.vue'
export default {
  components: { Header },
  setup () {
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const back = () => {
      router.go(-1)
    }
    const value = ref('')
    const value1 = reactive([])
    const options = reactive([
      { value: 'a1', label: 'a1' },
      { value: 'b2', label: 'b2' },
      { value: 'c3', label: 'c3' },
      { value: 'd4', label: 'd4' },
      { value: 'e5', label: 'e5' }
    ])
    const options1 = reactive([
      { value: 'a1', label: 'a1' },
      { value: 'b2', label: 'b2' },
      { value: 'c3', label: 'c3' },
      { value: 'd4', label: 'd4' },
      { value: 'e5', label: 'e5' }
    ])

    const change = () => {
      proxy.$forceUpdate()
    }

    return {
      value,
      options,
      options1,
      back,
      change,
      value1
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  margin: 5px;
  font-size: 16px;
  span {
    margin-right: 10px;
  }

  .radio {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
