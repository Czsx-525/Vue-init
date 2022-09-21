
<template>
  <div>
    <el-steps :active="state.active" finish-status="success" simple>
      <el-step
        v-for="(step, index) in stepsList"
        :title="step.title"
        :icon="step.icon"
        :key="index"
        @click="nextStep(index)"
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
import PropType, { reactive, ref } from 'vue'
export default {
  name: 'steps',
  props: {
    stepsList: {
      type: Array,
      default: () => [
        { title: '步骤1', icon: 'el-icon-edit' },
        { title: '步骤2', icon: 'el-icon-upload' },
        { title: '步骤3', icon: 'el-icon-picture' }
      ]
    }
  },
  setup (props) {
    const state = ref({
      active: 0
    })
    const nextStep = (index) => {
      state.value.active = index
    }
    return {
      state,
      nextStep
    }
  }
}
</script>

<style>
</style>
