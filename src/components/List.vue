<template>
  <div class="newsList">
    <ul>
      <li>
        <router-link to="detail/1">
          <h2>1.IU小姐姐</h2>
          <p>女神女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/2">
          <h2>2.IU女神</h2>
          <p>小姐姐</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/3">
          <h2>3.IU小改改</h2>
          <p>女神女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/4">
          <h2>4.IU女神</h2>
          <p>女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/5">
          <h2>5.IU小姐姐</h2>
          <p>女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/6">
          <h2>6.IU女神</h2>
          <p>女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/7">
          <h2>7.IU小姐姐</h2>
          <p>女神</p>
        </router-link>
      </li>
      <li>
        <router-link to="detail/8">
          <h2>8.IU女神</h2>
          <p>女神</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;}
</style>
