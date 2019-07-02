<template>
  <div class="banner" ref="f1">
    <ul class="clearfix">
      <router-link tag="li" to="/detail/1">
        <img src="../assets/images/img_1.jpg" alt="">
        <div class="text-box">
        <h2>IU女神好好好好好好美</h2>
        <p>IU/李智恩</p>
        </div>
      </router-link>
      <router-link tag="li" to="/detail/2">
        <img src="../assets/images/img_2.jpg" alt="">
        <div class="text-box">
          <h2>IU女神唱歌好好好好好好好好好听</h2>
          <p>IU/李智恩</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Swipe from  '../assets/js/swipe.js';
import $ from 'jquery';

export default {
  mounted() {
    // new Swipe($('.banner')[0], {
    new Swipe(this.$refs.f1, {
      auto: 2000,
      continuous: true,
      stopPropation: true,
      callback: function(index, element) {
        $(".banner ol li").removeClass("active");
        $(".banner ol li")
          .eq(index)
          .addClass("active");
      }
    });
  }
};
</script>

<style>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
.banner {
  margin-top: 0.6rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.banner ul li {
  width: 6.4rem;
  float: left;
  position: relative;
}
.banner ul li img {
  width: 100%;
  display: block;
}
.banner ul li .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
}
</style>

