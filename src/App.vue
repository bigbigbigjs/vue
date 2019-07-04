<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name:'app',
  components:{
    Header,Footer
  }
}
</script>

<style>
</style>
