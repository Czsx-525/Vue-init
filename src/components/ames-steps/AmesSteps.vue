<template>
  <div>
    <div class="step" v-for="(item, index) in stepinfos" :key="index">
      <div class="main-node">
        <div class="posit" @click="stepClick(index)">
          <div :class="'radius' + '  ' + (step >= index ? 'pass-color' : '')">
            <van-icon v-if="step > index" name="success" color="#fff" />
            <span v-if="step <= index">{{ index + 1 }}</span>
          </div>
          <div
            v-if="index > 0"
            :class="'line' + ' ' + (step >= index ? 'pass-color' : '')"
            @click.stop
          ></div>
        </div>
        <div class="text">
          <h1 :class="'fonts' + ' ' + (step >= index ? 'pass-text' : '')">
            {{ item.name }}
          </h1>
        </div>
      </div>
      <div v-for="(child, childIndex) in item.children" :key="childIndex">
        <div class="children" v-if="expandIndex == index && childrenShow">
          <div class="childposit">
            <div
              :class="
                'childrenitem' +
                ' ' +
                (step > index
                  ? 'pass-color'
                  : childstep >= childIndex && step >= index
                  ? 'pass-color'
                  : '')
              "
            >
              <!-- <van-icon name="success" color="#fff" size="0.3rem" /> -->
              <div></div>
            </div>
            <div
              :class="
                'childrenline' +
                ' ' +
                (step > index
                  ? 'pass-color'
                  : childstep >= childIndex && step >= index
                  ? 'pass-color'
                  : '')
              "
            ></div>
          </div>
          <div class="childrentext">
            <h1
              :class="
                'fonts' +
                ' ' +
                (step > index
                  ? 'pass-text'
                  : childstep >= childIndex && step >= index
                  ? 'pass-text'
                  : '')
              "
            >
              {{ child.name }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  name: 'ames-steps',
  props: {
    // 配置节点信息
    stepinfos: {
      type: Array,
      default: () => [
        {
          name: '节点1',
          children: [
            {
              name: '节点A'
            },
            {
              name: '节点B'
            },
            {
              name: '节点C'
            }
          ]
        },
        {
          name: '节点2',
          children: [
            {
              name: '节点A'
            },
            {
              name: '节点B'
            }
          ]
        },
        {
          name: '节点3',
          children: [
            {
              name: '节点α'
            },
            {
              name: '节点β'
            }
          ]
        }
      ]
    },
    // 主节点索引
    step: {
      type: Number,
      default: 0
    },
    // 子节点索引
    childstep: {
      type: Number,
      default: 0
    }
  },
  setup () {
    // 控制节点展开
    const expandIndex = ref()
    const childrenShow = ref(false)
    const stepClick = (index) => {
      index === expandIndex.value
        ? (childrenShow.value = !childrenShow.value)
        : (childrenShow.value = true)
      expandIndex.value = index
    }
    return {
      stepClick,
      childrenShow,
      expandIndex
    }
  }
}
</script>
<style lang="less" scoped>
.step {
  width: 100%;
  /* height: 3rem; */
  padding-left: 2rem;
  .main-node {
    height: 1.5rem;
    /* background-color: skyblue; */
    margin-bottom: 0.1rem;
    position: relative;
    .posit {
      position: absolute;
      left: -1.5rem;
      top: 0.7rem;
      .line {
        height: 0.8rem;
        width: 1px;
        background: #999;
        position: absolute;
        left: 0.5rem;
        top: -1.15rem;
      }
      .radius {
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0.25rem;
        top: -0.3rem;
        background-color: #999;
        color: #fff;
        font-size: 0.4rem;
      }
    }
    .text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: initial !important;
      h1 {
        font-size: 0.4rem;
        color: #999;
        text-align: initial !important;
        color: #999;
      }
    }
  }
  .children {
    height: 0.8rem !important;
    margin-bottom: 0.1rem;
    position: relative;
    .childposit {
      position: absolute;
      left: -1.5rem;
      top: 0.5rem;
      .childrenitem {
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 0.37rem;
        border: none !important;
        background-color: #999;
        border-radius: 50%;
        top: -0.4rem;
        div {
          position: absolute;
          height: 0.09rem;
          width: 0.09rem;
          background-color: #fff;
          border-radius: 50%;
          left: 0.11rem;
          top: 0.11rem;
        }
        i {
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
        }
      }
      .childrenline {
        height: 0.5rem;
        top: -0.95rem;
        width: 1px;
        background: #999;
        position: absolute;
        left: 0.5rem;
      }
    }
    .childrentext {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: initial !important;
      h1 {
        font-size: 0.3rem;
        text-align: initial !important;
        color: #999;
      }
    }
  }

  .pass-color {
    background-color: #6b8bff !important;
  }
  .pass-text {
    color: #6b8bff !important;
  }
}
</style>
