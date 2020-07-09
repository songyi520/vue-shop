import Vue from 'vue';
//1 底部导航
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 2 Loading..
import {Loading} from 'vant'
Vue.use(Loading);

//图片懒加载
import {Image} from 'vant';
Vue.use(Image);