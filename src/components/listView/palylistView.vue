<template>
  <div class="playlistView">
      <!-- 图标栏 -->
      <div class="playlistIcon">
          <div class="leftIcon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <p  class="words">播放全部</p>
            <p class="count">({{playlist.tracks.length}})</p>
          </div>
          <div class="rightIcon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-quanxuan"></use>
            </svg>
          </div>
      </div>
      <!-- 播放列表栏 -->
      <div class="playlists">
          <div class="playItem" v-for="(item,i) in playlist.tracks" :key="i" @click="setIndex(i)">
            <!-- 列表左边区域 -->
              <router-link :to="{path:'/PlayerUi',query:{id:item.id}}"  class="left">
                  <!-- 编号 -->
                  <div class="index">{{i+1}}</div>
                  <div class="content">
                      <!-- 音乐名 -->
                      <div class="title">{{item.name}}</div>
                      <!-- 作者名和专辑名 -->
                      <div class="anthor" >
                        <span v-for="(itemName,j) in item.ar" :key = "j">
                            <!-- 如果是最后一个就不加反斜杠 -->
                            <span v-if="j==item.ar.length-1">{{itemName.name}}</span>
                            <span v-else>{{itemName.name}}/</span>
                        </span>
                        <span class="album"> - {{item.al.name}}</span>
                      </div>
                  </div>
              </router-link>
              <!-- 列表右边区域 -->
              <div class="right">
                  <!-- 图标部分 -->
                <svg v-if="item.mv!=0" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo-shuxiang"></use>
                </svg>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { useStore  } from 'vuex'

export default {
    
    props:['playlist'],
    setup(){
        const store  = useStore()
        const  state = true
        function setIndex(index){
            store.commit('setPlayIndex',index)
            store.commit('setAutoPlay',state)
        }
        return{
             store,
             setIndex
        }

    }
   
}
</script>

<style lang="less" scoped>
.playlistView{
    width: 7.5rem;
    background-color: rgb(255, 255, 255);
    margin-top:1rem;
    padding: 1rem 0 0 0;
    .icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .words{
        margin-right: 5px;
        line-height: 0.5rem;
    }
    .count{
        font-size: 10px;
        line-height: 0.5rem;
    }
}
.playlistIcon{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.playlistIcon div:nth-child(n){
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.rightIcon svg:nth-child(1){
    margin-right: 15px;
}
.leftIcon svg:nth-child(1){
    margin-right: 15px;
    fill: red;
}

// 播放列表栏
.playlists{
    margin-top: 0.5rem;
    .playItem{
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        .left{
            display: flex;
            justify-content: space-between;
            // align-items: center;
            // 编号
            .index{
                width: 0.5rem;
                font-size: 20px;
                opacity: 0.5;
                display: flex;
                justify-content:center; 
                align-items:center; 
            }
            // 作者名和专辑名
            .content{
                margin-left: 0.4rem;
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
                width: 0.4rem;
                height: 0.4rem;
                opacity: 0.5;
                margin-left: 15px;
            }
        }
    }
}


</style>
