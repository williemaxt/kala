<template>
<div id="app-window">
  <h1>Weight</h1>
  <div id="app-content">
    <div class="left-section">
      <h2>Select A Unit To Find</h2>
      <select v-model="unit">
        <option value="KG">Lbs to Kg (Input lbs)</option>
        <option value="LBS">Kg to Lbs (Input kg)</option>
      </select>
      <input type="number" v-model="input" placeholder="0.00">
    </div>
    <div class="right-section">
      <h2>{{result}} {{unit}}</h2>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Weight",
      data () {
        return {
          input:'',
          unit:'KG'
        }
      },
      computed:{
          //this rounds our result to a decimal with 2 places
          result: function () {
            //will perfom calculation based on what unit is selected
            if(this.unit == 'KG'){
              return (this.input * 2.2).toFixed(2)
            } else {
              return (this.input / 2.2).toFixed(2)
            }

          }
      }
    }
</script>

<style scoped>
  #app-window{
    width: 1200px;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
  }
  #app-window h1{
    color: #ffffff;
    font-size: 5em;
  }
  #app-content{
    background: #ffffff;
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
    height: 50vh;
  }
  .left-section{
    width: 48%;
    float: left;
    background: none;
  }
  .left-section input{
    width: 90%;
    height: 50px;
    border:none;
    border-bottom: 2px solid #333333;
    outline: none;
    font-size: 2em;
  }
  .left-section select{
    width: 90%;
    height: 50px;
    font-weight: bold;
    margin-bottom: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    background: #000000;
    font-size: 2em;
    border-radius: 10px;
    margin-top: 110px;
  }
  .right-section{
    width: 48%;
    height: 100%;
    float: right;
    background: none;
  }
  .right-section h2{
    margin-top: 35%;
    font-size: 4em;
  }
</style>
