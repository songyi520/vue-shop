import Vue from 'vue'
import App from './App.vue'
import router from './router/index'




//1 引入 fastclick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//2 引入全局样式
import '@/style/common.less'

//3 引入全局UI组件库-vant
import '@/plugins/vant'
//轮播插件
// import 'swiper/swiper-bundle.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
