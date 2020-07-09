<template>
	<div id="home">
		<div v-if="!showLoading">
			<Header></Header>
			<!--轮播图-->
			<Sowing :sowing_list="sowing_list"></Sowing>
			<!-- 中间导航 -->
			<Nav :nav_list="nav_list"></Nav>
			<!-- 秒杀 -->
			<FlashSale :flash_sale_product_list="flash_sale_product_list"></FlashSale>
			<!-- 猜你喜欢的 -->
			<YouLike :you_like_product_list="you_like_product_list"></YouLike>
		</div>
			<van-loading
			        v-else
			        type="spinner"
			        color="#75a342"
			        style="position: absolute;left:50%;top: 40%;transform: translate(-50%)"
			>
			    正在拼命加载中…
			</van-loading>
	</div>
</template>

<script>
	//1 引入
	import {getHomeData} from './../../service/api/index'
	//2 引入组件
	import Header from './components/header/Header'
	import Sowing from './components/sowing/Sowing'
	import Nav from './components/nav/Nav'
	import FlashSale from './components/flashSale/FlashSale'
	import YouLike from './components/youLike/YouLike'
	export default{
		name:"Home",
		data(){
			return {
				// 首页轮播数据
				sowing_list:[],
				//中间nav数据
				nav_list:[],
				// 秒杀数据
				flash_sale_product_list:[],
				// 猜你喜欢
				you_like_product_list:[],
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
					this.flash_sale_product_list = response.data.list[3].product_list;
					this.you_like_product_list = response.data.list[12].product_list;
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
			FlashSale,
			YouLike,
		}
	}
</script>

<style scoped>
	#home{
		width:100%;
		height:100%;
		background-color: transparent;
	}
</style>
