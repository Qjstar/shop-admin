import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import Router from './tools/Router'
import Store from './tools/Storage'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入所有el-icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//统一注册el-icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(Router).use(Store).use(ElementPlus).mount('#app')


// import { createApp } from 'vue'
// import App from './App'
// //引入createStore方法
// import {createStore} from 'vuex';
// //创建实例应用
// const app = createApp(App);
// const Store = createStore({
//     // 定义共享的状态数据
//     state(){
//         return {
//             count: 0,
//         } 
//     },
//     //定义修改状态的方法
//     mutations:{
//         increment(state){
//             state.count++;
//         }
//     }
// })
// //注入vueX的store
// app.use(store)
// //挂载应用
// app.mount('#app')