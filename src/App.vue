<template>
  <div id="app">
    <router-view/>
    <Navigation></Navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components:{Navigation}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body{
    background: #000000;
  }
</style>
