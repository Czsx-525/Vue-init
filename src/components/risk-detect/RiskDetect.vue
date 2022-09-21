<template>
  <div class="component-risk">
    <!-- 顶部标题栏和过滤栏 -->
    <div class="header">
      <div class="left">
        <div class="dot"></div>
        <div class="text">风险探测</div>
      </div>
      <div class="right">
        <div class="group">
          <div
            v-for="(item, index) in group"
            :key="index"
            :class="groupSelected == index ? 'select' : ''"
            @click="selectRisk(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 风险探测列表 -->
    <div class="body">
      <div class="risk" v-for="(item, index) in riskLists" :key="index">
        <div :class="'risk-title' + '  ' + (item.isPass ? 'pass-bgcolor' : '')">
          <div class="header-title">
            <div class="header-left">
              <div
                :class="
                  'header-title-dot' + '  ' + (item.isPass ? 'pass-dot' : '')
                "
              ></div>
              <div
                :class="
                  'header-title-text' + '  ' + (item.isPass ? 'pass-text' : '')
                "
              >
                {{ item.name }}
              </div>
            </div>
            <div class="header-title-status">
              <img :src="item.isPass ? passed : unpassed" />
            </div>
          </div>
        </div>
        <div class="risk-table">
          <table class="table" style="width: 100%">
            <tr>
              <th width="25%">处理的任务</th>
              <th width="15%">处理结果</th>
              <th width="45%">信息提示</th>
            </tr>
            <tr v-for="(childitem, index) in item.data" :key="index">
              <td>{{ childitem.mission }}</td>
              <td>
                <img
                  class="result"
                  :src="
                    childitem.result == 0
                      ? iconSuccess
                      : childitem.result == 1
                      ? iconWarn
                      : iconFail
                  "
                />
              </td>
              <td>{{ childitem.tips }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- 底部按钮 固定 -->
    <div class="footer">
      <van-button plain type="primary" class="check" @click="recheck"
        >重新检查</van-button
      >
      <van-button class="sure" @click="sure" type="primary">确定</van-button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'risk-detect',
  props: {
    riskLists: {
      type: Array,
      default: () => [
        {
          name: '客户信息预警检查',
          isPass: false,
          data: [
            {
              mission: '当前客户黑名单位置',
              result: 0,
              tips: '检查通过，阿信大保健三天'
            },
            {
              mission: '当前客户黑名单位置',
              result: 1,
              tips: '警告，阿信连续大保健肾虚'
            },
            {
              mission: '当前客户黑名单位置',
              result: 2,
              tips: '检查失败，阿信连续大保健肾虚送医院'
            }
          ]
        }
      ]
    }
  },
  setup (props, context) {
    // 顶部过滤栏 内容 不会变动 所以写死
    const group = ref([
      { name: '全部', type: [] },
      { name: '预警&不通过', type: [1, 2] },
      { name: '预警', type: [1] },
      { name: '通过', type: [0] },
      { name: '不通过', type: [2] }
    ])
    // 顶部过滤栏 选中下标
    const groupSelected = ref(0)
    // 引入静态资源
    const iconSuccess = require('../../assets/image/components/risk-detect/icon-success.png')
    const iconFail = require('../../assets/image/components/risk-detect/icon-fail.png')
    const iconWarn = require('../../assets/image/components/risk-detect/icon-warn.png')
    const passed = require('../../assets/image/components/risk-detect/icon-passed.png')
    const unpassed = require('../../assets/image/components/risk-detect/icon-unpassed.png')
    const type = ref(0)
    const isPass = ref(true)
    // 顶部选择事件 全部 不通过等
    const selectRisk = (index) => {
      groupSelected.value = index
      context.emit('selectRisk', index)
    }
    // 重新检查
    const recheck = () => {
      context.emit('recheck')
    }
    // 确认
    const sure = () => {
      context.emit('sure')
    }
    return {
      group,
      type,
      iconSuccess,
      iconFail,
      iconWarn,
      isPass,
      passed,
      unpassed,
      groupSelected,
      selectRisk,
      recheck,
      sure
    }
  }
}
</script>
<style lang="less" scoped>
.component-risk {
  height: 100%;
  position: relative;
  .header {
    width: 100%;
    height: 48px;
    position: absolute;
    top: 0;
    display: flex;
    .left {
      justify-content: flex-start;
      display: flex;
      margin-left: 20px;
      line-height: 48px;
      .dot {
        border-radius: 3px;
        background-color: #4d74fe;
        width: 4px;
        margin-top: 15px;
        margin-bottom: 18px;
        margin-right: 8px;
      }
      .text {
        font-size: 14px;
        font-weight: bold;
        color: #2e354c;
      }
    }
    .right {
      flex: 1;
      justify-content: flex-end;
      text-align: end;
      margin-right: 10px;
      .group {
        margin-top: 8px;
        display: inline-flex;
        border-radius: 32px;
        background-color: rgba(60, 103, 255, 0.1);
        div {
          color: #2e354c;
          font-family: PingFangSC-Medium;
          opacity: 0.85;
          text-align: center;
          font-weight: 400;
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 28px;
        }
        .select {
          background-color: #3c67ff !important;
          color: #ffffff !important;
        }
      }
    }
  }
  .body {
    height: calc(~"100% - 96px");
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    top: 48px;
    .risk {
      padding: 0.1rem;
      padding-left: 0.2rem;
      .risk-title {
        background-color: rgba(249, 80, 88, 0.1);
        .header-title {
          display: flex;
          padding: 0.1rem 0rem 0.1rem 0.2rem;
          border-radius: 8px;
          .header-left {
            justify-content: flex-start;
            display: flex;
            .header-title-dot {
              background-color: #f95058;
              width: 0.04rem;
              height: 0.14rem;
              border-radius: 30%;
              align-self: center;
            }
            .header-title-text {
              color: #f95058;
              font-size: 0.15rem;
              font-weight: bold;
              margin-left: 0.1rem;
              align-self: center;
            }
          }
          .header-title-status {
            color: #f95058;
            font-size: 0.15rem;
            font-weight: bold;
            flex: 1;
            justify-content: flex-end;
            text-align: end;
            img {
              height: 0.25rem;
              display: inline-block;
              margin-right: 0.1rem;
            }
          }
        }
      }
      .pass-bgcolor {
        background-color: rgba(61, 212, 126, 0.1) !important;
      }
      .pass-text {
        color: #3dd47e !important;
      }
      .pass-dot {
        background-color: #3dd47e !important;
      }
      table {
        width: 100%;
        text-indent: initial;
        border-spacing: 2px;
        tr {
          background-color: #fff;
          vertical-align: inherit;
          th {
            color: rgb(46, 53, 76);
            font-size: 0.15rem;
            padding: 12px 0;
            border-bottom: 1px solid #ebeef5;
          }
          td {
            border-bottom: 1px solid #ebeef5;
            padding: 12px 0;
            min-width: 0;
            box-sizing: border-box;
            text-overflow: ellipsis;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
            line-height: 23px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 0.12rem;
          }
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    line-height: 28px;

    .check {
      width: 80px;
      height: 36px;
      border: 1px solid #3c67ff;
      border-radius: 8px;
      color: #3c67ff;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      margin-right: 10px;
    }
    .sure {
      width: 80px;
      height: 36px;
      border-radius: 8px;
      color: #ffffff;
      background-color: #3c67ff;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
</style>
