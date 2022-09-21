<template>
    <div>
        <Header :title="$t('mine.about')" :left-text="$t('header.back')" :left-arrow="true" @onClickBack="back()"></Header>
        <div class="about-main">
            <img :src="logo" width="60" height="60" />
            <ul class="version">
                <li>安硕移动技术框架移动端组件库</li>
                <li>V 2.0.0Release</li>
            </ul>
            <div class="des">
                安硕移动技术框架移动端组件库主要为移动端的前端开发人员提供一套现成的组件库，减少开发人员的重复的开发工作，提供工作效率。
                <br>
                <br>
                本次版本实现：国家选择器、行业选择器、级联选择、列表、数字密码键盘、输入框、下拉选择框、百度地图、签名、步骤条、图片、风险探测、PDF预览。
            </div>
            <ul class="msg">
                <li>安硕信息 版权所有</li>
                <li>Copyright © 2021-2021 amarsoft</li>
                <li>All Rights Reserved</li>
            </ul>

        </div>

    </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import { useRouter } from 'vue-router'
export default {
  components: { Header },
  setup () {
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }

    const logo = require('../../assets/image/logo.png')

    return { logo, back }
  }

}
</script>

<style lang="less" scoped>
.about-main{
    width: 100%;

    img{
        margin: 1rem auto 0.5rem;
    }

    .version{
        font-size: 18px;

        li {
            margin: 0.2rem 0;
            font-weight: 600;
        }
    }

    .des {
        width: 70%;
        font-size: 16px;
        margin: 10px auto;
        text-align: left;
        line-height: 1.5;
    }

    .msg {
        width: 100%;
        position: fixed;
        bottom: 0.3rem;
        font-size: 12px;
        text-align: center;
    }

}

</style>
