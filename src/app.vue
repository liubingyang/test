<template>
  <div>
	  <div class="clearfix wrap">
	  	<!-- 左边 -->
	  	<div class="app_left fl">
			<!-- 导航栏 -->
	  		<ul class="nav">
	      		<li><router-link to="/">首页</router-link></li>
	      		<li><router-link to="/forum">魔兽论坛</router-link></li>
	    	</ul>
			<!-- 路由页面展示 -->
	    	<router-view></router-view>
	    </div>
	    <!-- 右边 -->
	    <div class="app_aside fr">
	    </div>
	  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "./common/reset.css";
@import './common/base.css';
.wrap{
	min-height: 100%;
	background: #eee;
}	
.app_left{
	width: 75%;
	background: white;
	min-height:100vh;
	box-shadow: -1px 0 0 0 #ccc inset;
	.nav{
		width:200px;
		margin:40px auto 0;
		li{
			display: inline-block;
			padding: 5px 10px;
			margin:0 5px;
		}
	}
}
.app_aside{
	width: 25%;
}

</style>
