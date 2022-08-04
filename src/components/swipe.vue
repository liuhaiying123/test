<template>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(image,index) in images2.list" :key="index">
            <img :src="image.pic" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import {onMounted,reactive,ref} from 'vue'
import {postBanner} from '../api/index'

export default {
   setup() {
        let images2 = reactive({
            list:[]
        })
        onMounted(async()=>{
            getSwipeAPI()
        })
       async function getSwipeAPI(){
          images2.list = await postBanner(1)
        }
    return {images2};
  },
}
</script>


<style>
.van-swipe{
    width: 7rem;
    height: 2.7rem;
    margin:0 auto;
    border-radius: 0.3rem;
    /* border: red 1px solid; */
        /* 使下面的点变成红色 */
     --van-swipe-indicator-active-background-color:rgb(255, 61, 61);
}
.van-swipe-item img{
    width: 100%;
}


</style>
