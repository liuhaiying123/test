

<template>
     <div>
       <router-view>
        
       </router-view>
       <play-Controller></play-Controller>
     </div>
 
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import playController from './components/playController.vue';

export default{
  components:{
      playController
  },
  setup(props) {
    
  }
  

}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

a{
  color: #333;
  text-decoration: none;
}

</style>
