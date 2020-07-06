<template>
	 <swiper :options="swiperOption" ref="mySwiper" id="swiper">
	    <!-- slides -->
	    <swiper-slide>I'm Slide 1</swiper-slide>
	    <swiper-slide>I'm Slide 2</swiper-slide>
	    <swiper-slide>I'm Slide 3</swiper-slide>
	    <swiper-slide>I'm Slide 4</swiper-slide>
	    <swiper-slide>I'm Slide 5</swiper-slide>
	    <swiper-slide>I'm Slide 6</swiper-slide>
	    <swiper-slide>I'm Slide 7</swiper-slide>
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
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted(){
			this.swiper.slideTo(5,1000,false);
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
		height:10rem;
		background-color:red;
	}
</style>
