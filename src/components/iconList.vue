<template>
  <div class="swipe">
    <span v-for="(ima,index) in images.list" :key="index">
      <img :src="ima.iconUrl"/>
        <p>{{ima.name}}</p>
    </span>
  </div>
</template>


<script>
import {postIcon} from '../api/index'
import {reactive,onMounted} from 'vue'
export default {
    setup(){
      let images = reactive({
        list:[]
      })

      onMounted(()=>{
        getSwipeAPI()
      })

      // 获取入口图片
      async function getSwipeAPI(){
          images.list = await postIcon()
      }

      return {
          images
      }
    }
}
</script>



<style lang="less" scoped>
  img{
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: rgb(254,90,89);
  }
  .swipe {
        display: flex;
        overflow-y: auto;
        text-align: center;
  }

 .swipe::-webkit-scrollbar {
        display: none;
  }

  .swipe span {
     margin: 18px 0px 0px 18px;
  }
  .swipe p {
      font-size: 0.1rem;
      align-items: center;
      opacity: 0.7;
  }

</style>
