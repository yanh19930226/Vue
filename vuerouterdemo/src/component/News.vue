<template>
  <div>
    <span>我是新闻</span>
    <ul>
      <li v-for="item in newsList">{{item}}</li>
    </ul>
    <div>
    	<router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
	name:"news",
    data(){
        return {
        	newsList:['新闻1','新闻2','新闻3']
        }
    }
}
</script>
<style scoped>
li{
	list-style: none;
}
</style>
