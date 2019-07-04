<template>
    <div class="home">
        <Swiper></Swiper>
        <List :list="list" :dataName="'home'"></List>
    </div>
</template>
<script scoped>
import Swiper from '../components/Swiper'
import List from '../components/List'
export default {
    data(){
        return {
            list:[]
        }
    },
   components:{
       Swiper,List
   },
   mounted(){
       axios({
           url:'http://rap2api.taobao.org/app/mock/223685/xy',
       }).then(
           res=>{
               this.list = res.data.xuyan
           }
       )
   } 
}
</script>

