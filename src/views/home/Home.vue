<template>
	<div id="home">
		<div v-if="!showLoading">
			<Header></Header>
			<!-- 轮播图 -->
			<Sowing :sowing_list="sowing_list"></Sowing>
			<!-- 中间nva部分 -->
			<Nav :nav_list="nav_list"></Nav>
		</div>
		<van-loading type="spinner" color="#75a342" id="loading" v-else>小笨正在拼命加载中。。。</van-loading>
	</div>
</template>

<script>
	//1 引入
	import {getHomeData} from './../../service/api/index'
	//2 引入组件
	import Header from './components/header/Header'
	import Sowing from './components/sowing/Sowing'
	import Nav from './components/nav/Nav'
	export default{
		name:"Home",
		data(){
			return {
				// 首页轮播数据
				sowing_list:[],
				//中间nav数据
				nav_list:[],
				//是否显示加载图标
				showLoading:true,
			}
		},
		created(){
			// 2.请求网络数据
			getHomeData().then((response)=>{
				console.log(response);
				if(response.success){
					this.sowing_list = response.data.list[0].icon_list;
					this.nav_list = response.data.list[2].icon_list;
					
					//隐藏加载动画
					this.showLoading = false;
				}
			}).catch(error=>{
				// todo...
				console.log(error);
			})
		},
		components:{
			Header,
			Sowing,
			Nav,
		}
	}
</script>

<style>
	#home{
		width:100%;
		height:100%;
		background-color: transparent;
	}
	#loading{
		position: absolute;
		left:50%;
		top:40%;
		transform:translate(-50%);
	}
</style>
