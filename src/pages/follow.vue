<template>
    <div class="follow">
        <List :list="list" :dataName="'follow'"></List>
    </div>
</template>
<script>
import List from'../components/List'
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
        List
    },
   mounted(){
       axios({
           url:'http://rap2api.taobao.org/app/mock/223685/xy',
       }).then(
           res=>this.list = res.data.xuyan
       )
   } 

}
</script>
<style scoped>
    .follow{padding-top:.8rem;}
</style>

