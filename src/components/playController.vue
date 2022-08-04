<template>
<!-- 播放 -->
    <div class="playController"  v-if="$store.state.playlist[$store.state.palyCurrentIndex].al.picUrl">
         <!-- 图片和名字部分 -->
      <router-link :to="{path:'/PlayerUi',query:{id:$store.state.playlist[$store.state.palyCurrentIndex].id}}" class="left">
          <img class="playImg" :src="$store.state.playlist[$store.state.palyCurrentIndex].al.picUrl" alt="">
          <div class="content">
              <div class="title">
                 <span>{{$store.state.playlist[$store.state.palyCurrentIndex].name}} -&nbsp;</span> 
              </div>
              <div class="anthor">
                <span v-for="(item,i) in $store.state.playlist[$store.state.palyCurrentIndex].ar " :key="i">
                    <!-- 如果是最后一个就不加反斜杠 -->
                    <span v-if="i==$store.state.playlist[$store.state.palyCurrentIndex].ar.length-1">{{item.name}}</span>
                    <span v-else>{{item.name}}/</span>
                </span>
            </div>
          </div>
      </router-link >

      
      <!-- 播放按钮和列表按钮 -->
       <div class="right">
          <!-- 播放与暂停 -->
            <svg v-show="$store.state.pause" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg v-show="!$store.state.pause" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gf-playlistHeart"></use>
            </svg>
            <audio :autoplay="$store.state.autoplay" ref="audio"  :src="`https://music.163.com/song/media/outer/url?id=${$store.state.playlist[$store.state.palyCurrentIndex].id}.mp3`"></audio>

      </div>

    </div>
     
</template>


<script>
import {useStore} from 'vuex'
import {ref} from 'vue'

export default {
    setup(){
        const audio = ref(null)
        let pause = ref(true)
        const store  = useStore()
        function play(){
       
           console.log(audio);
            // 控制音乐的开关
            if(audio.value.paused){
               audio.value.play()
               store.state.pause = false
            }else{
                audio.value.pause()
                store.state.pause = true
            }
        }
        return{
            store,
            audio,
            play,
            pause
        }
    }
}
</script>


<style lang="less" scoped>



.playController{
    width: 7.5rem;
    height: 1rem;
    padding: 0 0.4rem;
    background: #808080eb;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    // justify-content: space-between;
    // 左边部分
    
        .left{
        display: flex;
        justify-content:center;
        align-items:Center;
        // 图片
        .playImg{
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 100%;
            border: 5px solid black;
        }
        // 内容
        // 内容
        .content{
            display: flex;
            padding-left: 10px;
            align-items: center;
            width: 4rem;
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            .anthor{
                font-size: 10px;
                opacity: 0.5;
            }
         }
        }
        .right{
            display: flex;    
            justify-content:center;
            align-items:Center;    
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                margin-left: 15px;
            }
        }

    
    
}


</style>
