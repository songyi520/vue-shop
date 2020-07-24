<template>
	<div id="mine">
		<van-nav-bar
			title="我的"
			:fixed = true
			:border = flase
		>
		</van-nav-bar>
		
		<van-cell-group style="margin-top: 2.6rem;">
			<van-cell title="我的订单" value="查看所有订单" label="" is-link /> 
		<van-cell 
			style="background-color:#2eba5a;color:#fff;"
			 is-link
			 :center=true
			 >
		  <!-- 使用 title 插槽来自定义标题 -->
		  <template #title>
			<div class="persoMsg">
				<img src="./images/user.jpg" alt="">
				<div class="personInfo">
					<span>小笨1号</span>
					<span>微信号：225114413xdd</span>
				</div>
			</div>
		  </template>
		</van-cell>
		</van-cell-group>
	</div>
</template>

<script>
	export default{
		name:"Mine",
	}
</script>

<style scoped>
	#mine{
		width:100%;
		height:100%;
		background-color: #F5F5F5;
	}
	.van-nav-bar{
		background-color: #3bba63;
	}
	.van-nav-bar__title{
		color:#fff;
		font-size:1rem;
	}
	.persoMsg{
		display: flex;
		flex-direction: row;
		align-items:center;
	}
	.persoMsg>img{
		width:4rem;
		height:4rem;
		border-radius: 2rem;
		border:0.1rem solid #fff; 
	}
	.personInfo{
		display: flex;
		flex-direction: column;
		margin-left: 0.8rem;
	}
</style>
