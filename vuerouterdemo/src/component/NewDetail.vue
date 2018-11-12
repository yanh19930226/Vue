<template>
  <div>
    <span>{{msg}}</span>
     {{$route.params}}
    <div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default{
        name:"newsdetail",
		data(){
			return{
				msg:"我是新闻详情"
			}
		}
	}
</script>
