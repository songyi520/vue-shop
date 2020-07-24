<template>
	<div id="editAddress">
		<van-nav-bar
		  title="修改地址"
		  left-arrow
		  :fixed = true
		  :border = true
		  @click-left="onClickLeft"
		/>
		
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  show-delete
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
		<!-- 出口 -->
		<transition model="out-in" name="router-slider">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
</script>

<style>
	#editAddress{
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F5F5F5;
	}
</style>
