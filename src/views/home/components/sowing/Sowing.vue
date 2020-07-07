<template>
	 <swiper :options="swiperOption" ref="mySwiper" id="swiper">
	    <!-- slides -->
	    <swiper-slide v-for="(sowing,index) in sowing_list" :key="sowing.public_id">
			<img :src="sowing.icon_url" :alt="sowing.public_name">
		</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		name:"Sowing",
		data(){
			return{
				swiperOption:{
					notNextTick:true,
					//分页
					pagination:{
						el:'.swiper-pagination',
						clickable:true,
					},
					//循环
					loop:true,
					autoplay:{
						delay:1000,
					},
					//速度
					speed:600,
					//滑动后回调函数
					on:{
						slideChangeTransitionEnd(){
							// console.log(this.activeIndex);
						}
					}
				},
			}
		},
		props:{
			sowing_list:Array
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted(){
			// this.swiper.slideTo(5,1000,false);
		},
		components:{
			swiper,
			swiperSlide,
		}
	}
</script>

<style>
	#swiper{
		width:100%;
		height:15rem;
		background-color:red;
	}
	#swiper img{
		width:100%;
		height:100%;
		
	}
	/* 穿透修改样式 */
	#swiper >>> .swiper-pagination-bullet-active{
		background-color:limegreen ;
	}
</style>
