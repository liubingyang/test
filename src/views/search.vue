<template>
	<div class="searchWrap">	
		<div class="search clearfix">
			<input type="text" name="" v-model='searchInfo' @keyup='inputKeyUp()'>
			<div class="submit" onselectstart="return false;" @click='searchSubmit()'>
				搜索
			</div>
			<transition name='fade'>
			<div class="searchResult" v-show='searchResult.length>0'>
				<ul>
					<li v-for='(item,i) in searchResult' v-show='i<5' @click='choseSearch(item)'>{{item}}</li>
				</ul>
			</div>
			</transition>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'search',
		data(){
			return {
				searchInfo:'',
				searchResult:[],
			}
		},

		created(){
			this.removeSearchResult();
		},
		methods:{
			inputKeyUp(){
				let url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.searchInfo+'&cb=searchFunction';
				window.creatScript(url).then(data=>{
					log(data)
					this.searchResult=data.s;
				});
			},

			choseSearch(item){
				this.searchInfo=item;
				this.searchResult.splice(0)
			},
			//body绑定点击事件，使搜索显示框消失
			removeSearchResult(){
				document.body.addEventListener('click',ev=>{
					if(!(ev&&ev.target.className.indexOf('searchResult')>-1)){
						this.searchResult.splice(0)
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>

		.searchWrap{
			height: 80px;					
			background: #fff;
			position: relative;
		}
		.search{
			width:40%;
			height: 30px;
			position: absolute;
			left: 50%;
			top:20px;
			transform:translate(-50%);
			border:1px solid #ccc;
				border-radius: 4px;
				box-shadow: none;
			input{
				width: 80%;
				height: 100%;
				line-height: 100%;
				padding: 0 10px;
				border:none;
			}
			.searchResult{
				position: absolute;
				left: -1px;
				width: 100%;
				margin-top:1px;
				background:#fff;
				border:1px solid #ccc;
				border-top:none; 
				li{
					line-height: 30px;
					padding: 0 10px;
					cursor: pointer;
				}
				li:hover{
					background:#eee;
				}
			}
			.submit{
				position: absolute;
				right: 0;
				top:0;
				height: 100%;
				width: 20%;
				text-align: center;
				line-height: 30px;
				background:#ccc;
				color:white;
				cursor: pointer;
				select:none;
			}
			.submit:hover{
				box-shadow: 0 0 30px 0 #eee inset;
			}
			.submit:active{
				box-shadow: none;
			}
			
		}

</style>