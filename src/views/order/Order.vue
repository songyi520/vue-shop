<template>
	<div id="order">
		<van-nav-bar
		  title="填写订单"
		  left-arrow
		  :fixed = true
		  :border = true
 		  @click-left="onClickLeft"
		/>
		<!-- 联系人卡片 -->
		<van-contact-card
		  type="add"
		  add-text="选择收货地址"
		  @click="chooseAddress"
		  style="margin-top:3rem"
		/>
		
		<van-cell-group style="margin-top: 0.6rem;">
		  <van-cell title="送达时间" value="请选择送达时间" label="" is-link />
		  <van-cell value="内容" is-link>
		    <!-- 使用 title 插槽来自定义标题 -->
		    <template slot="title">
				<img src="./images/detail1.jpg" alt="" style="width: 3rem;">
				<img src="./images/detail1.jpg" alt="" style="width: 3rem;">
				<img src="./images/detail1.jpg" alt="" style="width: 3rem;">
		    </template>
		  </van-cell>
		</van-cell-group>
		
		<van-cell-group style="margin-top: 0.6rem;">
		  <van-cell title="支付方式" value="微信" label="" />
		  </van-cell>
		</van-cell-group>
		
		<van-cell-group style="margin-top: 0.6rem;">
		  <van-cell title="备注" >
			  <input type="text" placeholder="选填!备注您的需求!">
		  </van-cell>
		</van-cell-group>
		
		<van-cell-group style="margin-top: 0.6rem;">
		  <van-cell title="商品金额" value="¥11.22" label="" />
		  <van-cell title="配送费" value="¥11.22" label="" />
		  </van-cell>
		</van-cell-group>
		
		<van-submit-bar :price="11" button-text="提交订单" @submit="onSubmit"  label="实付"/>

		<!-- 出口 -->
		<transition model="out-in" name="router-slider">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default{
		name:"Order",
		methods:{
			onClickLeft(){ //点击左边了
				// alert(1);
				this.$router.back();
			},
			//选择地址
			chooseAddress(){
				this.$router.push('/confirmOrder/myAddress')
			},
			onSubmit(){
				alert(11)
			},
		},
	}
</script>

<style scoped>
	#order{
		widows: 100%;
		height:100%;
		background-color: #F5F5F5;
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
