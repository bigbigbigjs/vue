<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Home></Home> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
// import Home from './pages/home'
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
