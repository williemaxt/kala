<template>
  <div>
    <h1>{{title}}</h1>
    <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
  export default {
  name: 'Home',
    data () {
    return {
      title: 'Kala',
      subtitle: 'An Elegant Everything Conversion Tool'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: #ffffff;
    font-size: 20em;
    margin-top: 15vh;
    margin-bottom: 5vh;
  }
  p{
    color: #ffffff;
    font-size: 1.5em;
    font-weight: bold;
  }
  .lds-grid {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-grid div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 26px;
    left: 6px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 26px;
    left: 26px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 26px;
    left: 45px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 45px;
    left: 6px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 45px;
    left: 26px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 45px;
    left: 45px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

</style>
