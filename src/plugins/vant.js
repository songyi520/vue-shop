import Vue from 'vue';
//1 底部导航
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 2 Loading..
import {Loading} from 'vant'
Vue.use(Loading);

//3 图片懒加载
import {Image} from 'vant';
Vue.use(Image);

//4 提示
import {Toast} from 'vant';
Vue.use(Toast);

//5 蒙版提示
import { Dialog } from 'vant';
Vue.use(Dialog);