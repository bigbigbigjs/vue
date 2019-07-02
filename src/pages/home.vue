<template>
    <div class="home">
        <Swiper></Swiper>
        <List></List>
    </div>
</template>
<script scoped>
import Swiper from '../components/Swiper'
import List from '../components/List'
export default {
   components:{
       Swiper,List
   },
   mounted(){
       axios({
           url:'https://uncle9.top/api/banner'
       }).then(
           res=>console.log(res.data)
       )
   } 
}
</script>

