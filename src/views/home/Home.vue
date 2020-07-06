<template>
	<div id="home">
		<Header></Header>
		<Sowing></Sowing>
	</div>
</template>

<script>
	//1 引入
	import {getHomeData} from './../../service/api/index'
	//2 引入组件
	import Header from './components/header/Header'
	import Sowing from './components/sowing/Sowing'
	export default{
		name:"Home",
		created(){
			// 2.请求网络数据
			getHomeData().then((response)=>{
				console.log(response);
			}).catch(error=>{
				// todo...
				console.log(error);
			})
		},
		components:{
			Header,
			Sowing,
		}
	}
</script>

<style>
	#home{
		width:100%;
		height:100%;
		background-color: skyblue;
	}
</style>
