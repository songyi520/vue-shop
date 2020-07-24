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

//6 导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

//7 Contact 联系人 地址
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);

import { AddressList } from 'vant'
Vue.use(AddressList);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

// 8 单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

// 提交订单栏
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);