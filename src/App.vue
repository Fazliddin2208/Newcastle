<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> -->
    
  
  <!-- </nav> -->
  <div id="container">
    <main-layout />
  </div>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
  
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
*{
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: Roboto;
  src: url(@/fonts/Roboto-Regular.ttf);
}



#container{
  background-color: #E5E5E5;
  border: 1px solid #2c3e50;
  margin: 0;
  // height: auto;
  display: block;
}


</style>
