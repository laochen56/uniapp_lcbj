<template>
	<view>
		<uni-data-select collection="opendb-app-list" field="appid as value, name as text" orderby="text asc"
			:defItem="1" label="应用选择" v-model="appId" :clear="false" />
		<iframe :src="url"></iframe>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"",
				appId:""
			}
		},
		watch: {
			appId:{
				async handler(appId){
					if(appId){
						const UniPush = uniCloud.importObject("uni-push-co")
						let res = await UniPush.getAdminUrl(appId)
						console.log(res.data+'#/statistics/351843721360372/pushStatistics?mode=uni-admin');
						this.url = res.data+'#/statistics/351843721360372/pushStatistics?mode=uni-admin'
					}else{
						uni.showToast({
							title: '请先选择一个应用',
							icon: 'none'
						});
					}
					
				},
				immediate:true
			}
		}
	}
</script>

<style>
iframe{
	height: 99vh;
	width: 100%;
	border: none;
}
</style>
