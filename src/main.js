import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme/global.less'
import './assets/js/lib-flexible.js'
import { i18n } from './assets/lang/index.js'
import less from 'less'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import store from './store'
import axios from './utils/axios'
import {
  Tabbar, TabbarItem, Swipe, SwipeItem, NavBar, ConfigProvider, Image, Lazyload, Form, Field, Cell, CellGroup,
  Button, Checkbox, CheckboxGroup, Icon, Skeleton, Overlay, Toast, Popup, Cascader, IndexBar, IndexAnchor,
  Sticky, Search, NumberKeyboard, Popover, Grid, GridItem, DropdownMenu, DropdownItem, Dialog, DatetimePicker,
  Step, Steps, Picker, Col, Row, Tab, Tabs, Switch
} from 'vant'
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(Step)
app.use(Steps)
app.use(DropdownMenu)
app.use(DropdownItem)
app.use(Popover)
app.use(Grid)
app.use(GridItem)
app.use(NumberKeyboard)
app.use(Skeleton)
app.use(Icon)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Tabbar)
app.use(Swipe)
app.use(SwipeItem)
app.use(TabbarItem)
app.use(NavBar)
app.use(ConfigProvider)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Cell)
app.use(Button)
app.use(Overlay)
app.use(Image)
app.use(Lazyload)
app.use(Toast)
app.use(Popup)
app.use(Cascader)
app.use(IndexBar)
app.use(IndexAnchor)
app.use(Sticky)
app.use(Search)
app.use(DatetimePicker)
app.use(Dialog)
app.use(Picker)
app.use(Col)
app.use(Row)
app.use(Tabs)
app.use(Tab)
app.use(Switch)

app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.use(less)
app.use(store)
app.mount('#app')
