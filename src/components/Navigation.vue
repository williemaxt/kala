<template>
  <nav>
    <li><router-link to="/"><a>Home</a></router-link></li>
    <li><router-link to="/weight"><a>Weight</a></router-link></li>
    <li><router-link to="/distance"><a>Distance</a></router-link></li>
    <li><router-link to="/volume"><a>Volume</a></router-link></li>
    <li><router-link to="/developer"><a>Developer</a></router-link></li>
  </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
  nav{
    color: #ffffff;
    font-family: sans-serif;
    font-weight: bold;
    padding-left: 10px;
    position: fixed;
    display: block;
    margin: 0 auto;
    bottom: 0;
    margin-bottom: 50px;
    list-style: none;
    padding: 0;

  }
  nav li{
    display: inline-block;
    color: #000000;
    background: #ffffff;
    text-align: center;
    padding: 10px;
    border-radius: 40px;
    margin-left: 5px;
    margin-right: 5px;
  }
  nav li:hover{
    background: #c0c0c0;
    color: #ffffff;
    transition: .4s;
  }
  nav li a{
    text-decoration: none;
    color: #000000;
    font-size: 1.1em;
  }
</style>
