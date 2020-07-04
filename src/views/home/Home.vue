<template>
	<div id="home">
		首页
	</div>
</template>

<script>
	//1 引入
	import {getHomeData} from './../../service/api/index'
	export default{
		name:"Home",
		
	}
</script>

<style>
	#home{
		width:100%;
		height:100%;
		background-color: skyblue;
	}
</style>
