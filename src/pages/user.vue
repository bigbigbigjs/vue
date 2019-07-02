<template>
  <div class="content">
    <div class="header">
      <h2><img src="../assets/img/headimg.png" alt=""/></h2>
      <div class="user-box">
        <a href="login_m.html">昵称|</a>
        <a href="reg_m.html">注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>0</span>
          <p>关注</p>
        </li>
        <li>
          <span>0</span>
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
  export default{
    beforeRouteEnter(to,from,next){
      console.log('user beforeRouteEnter')
      if(Math.random()<.5){
        next()
        }else{
        next("/login")
        }
    }
  }
</script>
<style scoped>
@import url('../assets/css/user.css');
</style>
