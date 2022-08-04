<template>
    <!-- 每日推荐和推荐歌单中间的线条 -->
  <div class="musicList">
      <!-- 顶部推荐歌单 -->
      <div class="musicList-top">
          <div class="title">推荐歌单</div>
          <div class="more">
              更多<van-icon name="arrow" />
           </div>
      </div>
        <!-- 歌单部分 -->
      <div class="songList">
        <router-link :to="{path:'/listview',query:{id:img.id}}"  class="imgs" v-for="(img,index) in songlistResult.list" :key="index" @click="autoplay" >
            <img :src="img.picUrl"/>
            <div class="count">
                <span>▷</span>
                <span>{{formatNum(img.playcount)}}</span>
            </div>
            <p>{{img.name}}</p>
        </router-link >
      </div>
  </div>
</template>

<script>
import {postRecommendMusic} from '../api/index'
import {onMounted,reactive,computed} from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store  = useStore()
        const state = false
        let songlistResult = reactive({
            list:[]
        })
        function autoplay(){
            store.commit('setAutoPlay',state)
        }

        onMounted(()=>{
            getRecommendMusicAPI()
        })
        
        
        
        // 格式化输出听歌人数
        const formatNum = computed(()=>{
           return function(num){
                if(num>10000) return (num/10000).toFixed(2) + '万'
            }
        })
        // 请求数据
        async function getRecommendMusicAPI(){
          songlistResult.list = await postRecommendMusic()
        }

        return {songlistResult,formatNum,autoplay}
    }
}
</script>

<style lang="less" scoped>
// 推荐歌单部分样式
    .musicList-top{
        display: flex;
        justify-content: space-between;
        margin: 5px 15px 10px 15px;
        .title{
            font-weight: 900;
        }
        .more{
            width: 50px;
            height: 20px;
            font-size: 10px;
            border: 1px solid rgb(224, 224, 224);
            border-radius: 10px;
            text-align: center;
            padding-left: 5px;
        }
    }
// 歌单部分样式
  .songList {
        display: flex;
        overflow-y: auto;  
  }
  img{
    width: 2rem;
    height: 2rem;
    border-radius: 10%;
    background: rgb(254,90,89);
    
  }



 .songList::-webkit-scrollbar {
        display: none;
  }

  .songList .imgs {
      margin: 10px 0px 0px 10px;
      position: relative;
  }
 .count{
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color:rgb(246,247,250);
        border-radius:10px;
        background-color: rgba(19, 19, 19, 0.4);
    }
  .songList p {
      font-size: 0.1rem;
      align-items: center;
      opacity: 0.7;
  }


</style>
