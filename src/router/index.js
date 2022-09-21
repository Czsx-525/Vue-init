import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/mobileLogin',
  name: 'mobileLogin',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/MobileLogin.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/gestureLogin',
  name: 'gestureLogin',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/GestureLogin.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/mainContent',
  name: 'mainContent',
  component: () => import(/* webpackChunkName: "home" */ '@/views/MainContent.vue'),
  meta: {
    index: 1
  },
  children: [{
    path: '/mainContent/',
    redirect: '/mainContent/home'
  },
  {
    path: '/mainContent/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/mainContent/componentDemo',
    name: 'componentDemo',
    component: () => import(/* webpackChunkName: "user" */ '@/views/component-demo/ComponentDemo.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/mainContent/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/mine/Mine.vue'),
    meta: {
      index: 2
    }
  }
  ]
},
{
  path: '/pdfdemo',
  name: 'pdf',
  component: () => import(/* webpackChunkName: "setting" */ '@/views/component-demo/PDFDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/stepsDemo',
  name: 'stepsDemo',
  component: () => import(/* webpackChunkName: "setting" */ '@/views/component-demo/StepsDemo.vue'),
  meta: {
    index: 1
  }
}, {
  path: '/inputBoxDemo',
  name: 'field',
  component: () => import(/* webpackChunkName: "setting" */ '@/views/component-demo/FieldDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/bmap',
  name: 'bmap',
  component: () => import('@/views/component-demo/BMap.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/signature',
  name: 'signature',
  component: () => import('@/views/component-demo/SignatureDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/languages',
  name: 'languages',
  component: () => import(/* webpackChunkName: "setting" */ '@/views/mine/Languages.vue'),
  meta: {
    index: 2
  }
},
{
  path: '/imageDemo',
  name: 'imageDemo',
  component: () => import('@/views/component-demo/ImageDemo.vue')

}, {
  path: '/industry',
  name: 'industry',
  component: () => import('@/views/component-demo/IndustryPickerDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/numberKeyboardDemo',
  name: 'numberKeyboardDemo',
  component: () => import('@/views/component-demo/NumberKeyboardDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/cascadePickerDemo',
  name: 'cascadePickerDemo',
  component: () => import('@/views/component-demo/CascadePickerDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/country',
  name: 'country',
  component: () => import('@/views/component-demo/CountryPickerDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/dropDownMenuDemo',
  name: 'dropDownMenuDemo',
  component: () => import('@/views/component-demo/DropDownMenuDemo.vue'),
  meta: {
    index: 1
  }

},
{
  path: '/table',
  name: 'table',
  component: () => import('@/views/component-demo/TableDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/riskDetectDemo',
  name: 'riskDetectDemo',
  component: () => import('@/views/component-demo/RiskDetectDemo.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/safe',
  name: 'safe',
  component: () => import('@/views/mine/SafeManage.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/about',
  name: 'about',
  component: () => import('@/views/mine/About.vue'),
  meta: {
    index: 1
  }
},
{
  path: '/themes',
  name: 'themes',
  component: () => import('@/views/mine/Themes.vue'),
  meta: {
    index: 1
  }
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
