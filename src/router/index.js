import Vue from 'vue'
import 	Router from 'vue-router'
// import Home from '../views/Home.vue'

//引入一级组件
import DashBoard from './../views/dashboard/DashBoard'
const Home = ()=> import('./../views/home/Home.vue'); 
const Category = ()=> import('./../views/category/Category.vue'); 
const Cart = ()=> import('./../views/cart/Cart.vue'); 
const Mine = ()=> import('./../views/mine/Mine.vue'); 

//引入组件相关
const Order = ()=> import('./../views/order/Order.vue');
const MyAddress = ()=> import('./../views/order/children/MyAddress.vue');
const AddAddress = ()=> import('./../views/order/children/children/AddAddress.vue');
const EditAddress = ()=> import('./../views/order/children/children/EditAddress.vue');

//引入登录
const Login = ()=> import('./../views/login/Login.vue');

Vue.use(Router);

export default new Router({
	routes:[
		{path:'/',redirect:'/dashboard'},
		{
			path:'/dashboard',
			name:'/dashboard',
			component:DashBoard,
			children:[
				{path:'/dashboard',redirect:'/dashboard/home'},
				{path:'home',name:'home',component:Home,meta:{keepAlive:true}},
				{path:'category',name:'category',component:Category,meta:{keepAlive:true}},
				{path:'cart',name:'cart',component:Cart},
				{path:'mine',name:'mine',component:Mine},
			]
		},
		{
			path: '/confirmOrder',
			name: 'order',
			component: Order,
			children: [
			    {
			       path:'myAddress',
			       name: 'myAddress',
			       component: MyAddress,
			       children:[
					   //添加地址
					   {path:'addAddress',name:'addAddress',component:AddAddress},
					   {path:'editAddress',name:'editAddress',component:EditAddress},
				   ]
			    },
			  
			]
		},
		{path:'/login',name:'login',component:Login},
	]
});

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })


