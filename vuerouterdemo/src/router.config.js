/*
* @Author: yanh
* @Date:   2018-11-01 16:27:30
* @Last Modified by:   yanh
* @Last Modified time: 2018-11-02 10:23:31
*/
import Home from './component/Home.vue'
import News from './component/News.vue'
import NewsDetail from './component/NewDetail.vue'
 export default{
 	routes:[
      {path:'/home',component:Home},
      {
      	path:'/news',
      	component:News,
        children:[
          {path:'/newsdetail',component:NewsDetail}
        ]
      },
      {path:'*',redirect:'/home'}
 	]
 }