/*
* @Author: yanh
* @Date:   2018-11-01 16:27:30
* @Last Modified by:   yanh
<<<<<<< HEAD
* @Last Modified time: 2018-11-01 21:04:43
*/
import Hoem from "./component/Home.vue"
import Hoem from "./component/News.vue"
export default{
	
}

=======
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
>>>>>>> 2baa7682ff51388a2fbb9be2a7663e72e1a1861b
