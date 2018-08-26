<template>
    <div>
      <h1>{{name}}</h1>
      <img src="../assets/developer.jpg" alt="">
      <h2>{{nickname}}</h2>
      <p>{{bio}} <a href="http://www.611.solutions" target="_blank">Check Us Out</a></p>
      <button>Buy Me A Coffee</button>
    </div>
</template>

<script>
    export default {
        name: "Developer",
      data(){
          return{
            name: 'William',
            nickname: 'aka Code 6 (YouTube)',
            bio: 'Hello, My name is William Thompson and I am a Full Stack Developer, Android Developer and CEO. My company 611 Solutions, LLC, believes in providing professional development on demand, which is why we coined it as our motto.',
          }
      }
    }
</script>

<style scoped>
  div{
    color: #ffffff;
  }
   h1{
    color: #ffffff;
    font-size: 5em;
  }
  img{
    width: 300px;
    height: auto;
    border-radius: 50%;
    border: 5PX solid #ffffff;
  }
  p{
    width: 500px;
    margin: 0 auto;
  }
  button{
    width: 200px;
    margin: 0 auto;
    height: 50px;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 50px;
    font-weight: bold;
    color: #000000;
    background: #ffffff;
    font-size: 1.2em;
  }
  a{
    text-decoration: none;
    font-weight: bold;
    background: #ffffff;
    color: #000000;
    padding: 2px;
    border-radius: 2px;
  }
  div{
    margin-top: 12vh;
  }
</style>
