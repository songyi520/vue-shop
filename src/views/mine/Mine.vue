<template>
	<div id="mine" v-if="userInfo">
		<van-nav-bar
			title="我的"
			:fixed = true
			:border = flase
		>
		</van-nav-bar>
		
		<van-cell-group style="margin-top: 2.2rem;">
			<van-cell 
				style="background-color:#2eba5a;color:#fff;"
				is-link
				:center=true
				@click="$router.push('/dashboard/mine/userCenter')"
				>
			  <template #title>
				<div class="persoMsg">
					<img :src="userInfo.icon_url" alt="">
					<div class="personInfo">
						<span>{{userInfo.real_name}}</span>
						<span>手机号：{{userInfo.phone}}</span>
					</div>
				</div>
			  </template>
			</van-cell>
		</van-cell-group>
		
		<van-cell-group>
			<van-cell icon="label" title="我的订单" value="查看所有订单" label="" is-link />
			<van-grid :column-num="4">
			  <van-grid-item 
				v-for="(order,index) in orderData" 
				:key="index" 
				:icon="order.icon" 
				:text="order.title" />
			</van-grid>
		</van-cell-group>
		
		<van-cell-group style="margin-top: 0.2rem;">
			<van-cell icon="gold-coin" title="我的优惠券" value="1张" label="" is-link />
			<van-cell icon="map-marked" title="我的收货地址" value="" label="" is-link />
		</van-cell-group>
		<van-cell-group style="margin-top: 0.2rem;">
			<van-cell icon="phone" title="联系客服" value="客服时间 07:00-22:00" label="" is-link />
			<van-cell icon="comment-circle" title="意见反馈" value="" label="" is-link />
		</van-cell-group>
		<van-cell-group style="margin-top: 0.2rem;">
			<van-cell icon="gift" title="小笨买菜" value="下载APP体验更佳" label="" is-link />
		</van-cell-group>
		<!-- 路由出口 -->
		<transition model="out-in" name="router-slider">
			<router-view></router-view>
		</transition>
	</div>	
	<SelectLogin v-else></SelectLogin>
</template>

<script>
	import SelectLogin from './../../views/login/SelectLogin';
	import {mapState} from 'vuex';
	export default{
		name:"Mine",
		data(){
			return {
				orderData:[
					{icon:'cart-circle-o',title:'待支付'},
					{icon:'gift-o',title:'待收货'},
					{icon:'smile-comment-o',title:'待评价'},
					{icon:'cash-back-record',title:'售后/退款'},
				]
			}
		},
		computed:{
			...mapState(["userInfo"]), 
		},
		components:{
			SelectLogin,
		}
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
	.van-cell__left-icon{
		color:orange;
		font-size:1.2rem;
	}
	/* 转场动画 */
	.router-slider-enter-active,.router-slider-leave-active{
		transition: all 0.3s;
	}
	.router-slider-enter,.router-slider-leave-active{
		transform: translate3d(2rem,0,0);
		opacity:0;
	}
</style>
