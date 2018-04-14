<template>
	<transition name='fade'>	
		<div class="wrap clearfix">
			<!-- 搜索框组件 -->
			<div class="search">	
				<search></search>
			</div>
			<!-- 掘金文章列表组件 -->
			<div class="juejinResources">
				<juejinResources></juejinResources>
			</div>
		</div>
	</transition>	
</template>

<script>
	import search from "./views/search"
	import juejinResources from "./views/juejinResources"

	export default {
		name: 'home',
		components:{
			search,
			juejinResources
		},
	}
</script>

<style lang="less" scoped>
.juejinResources{
	background: #fff;
}			
</style>