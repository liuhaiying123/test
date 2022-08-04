<template>
  <div class="playUiTop">
    <!-- 左边返回键 -->
    <div class="left" @click="$router.back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangxiajiantou"></use>
        </svg>
    </div>
     <!-- 中间歌名和作者名 -->
    <div class="middle">
      <!-- <div class="title">{{songs.name}}</div> -->
      <van-notice-bar   :text= "songs.name" color="#fff" background="transparent"  />
      <!-- 作者名 -->
      <div class="name">
        <span v-for="(itemName,j) in songs.ar" :key = "j">
            <span v-if="j==songs.ar.length-1">{{itemName.name}}</span>
            <span v-else>{{itemName.name}}/</span>
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <!-- 右边分享 -->
    <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
    props:['songs'],
    setup(props) {
        console.log(props.songs)
        
    }
    
}
</script>

<style lang="less" scoped>
.playUiTop{
  display: flex;
  justify-content: space-between;
  align-items:Center; 
  padding-top: 10px;
   .middle{
    color: #fff;
    align-items: center;
     .title{
      font-size: 15px;
      text-align: center;
    }
    .name{
      opacity: 0.5;
      text-align: center;
    }
    .icon{
      width: 0.24rem;
      height: 0.24rem;
    }
  }
  .icon{
    width: 0.5rem;
    height: 0.5rem;
    fill: #fff;
}
.van-notice-bar{
      font-size: 15px;
      width: 4rem;
     
    :deep(.van-notice-bar__wrap){
      .van-notice-bar__content{
        padding-left: 35px;
      }
    }
}
}


</style>