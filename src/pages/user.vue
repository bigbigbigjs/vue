<template>
  <div class="content">
    <div class="header">
      <h2><img :src="baseUrl + data.icon " alt=""/></h2>
      <div class="user-box">
        <a href="#">{{data.nikename}}</a>
        <a href="javascript:;" @click="logout">注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{data.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{data.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>公开博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>秘密博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:{}
    }
  },
  methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'put'
      }).then(
        res=>{
          if(res.data.err===0){
            this.$router.push('/login')
          }
        }
      )
    }
  },
  beforeRouteEnter(to,from,next){
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.err===1){
          next('/login')
        }else{
          next((_this)=>{_this.data=res.data.data})
        }
      }
    )
  }
}
</script>

<style scoped>
@import url('../assets/css/user.css');

</style>
