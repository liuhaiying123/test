<template>
  <div class="playerUiDisc">
      <div class="img">
        <img class="needle active" src="../../assets/img/needle-ab.png" alt="">
        <img class="circle" src="../../assets/img/disc-plus.png" alt="">
        <img class="playImg" v-if="songs.al.picUrl"  :src="songs.al.picUrl" alt="">
        <img class="playImg" v-else  src="../../assets/img/disc_default.png" alt="">



      </div>
     <div class="bottonIcon">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
        </svg> 
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiazai"></use>
        </svg> 
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changpian"></use>
        </svg> 
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
        </svg> 
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg> 
      </div>

    </div>
</template>

<script>
export default {
    props:['songs'],
    setup(props) {
        
    }
    
}
</script>


<style lang="less" scoped>
.img{
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
     .needle{
        width: 2.5rem;
        height: auto;
        position: absolute;
        left: 3.3rem;
        // 旋转
        transform-origin: 0.3rem 0;
        //旋转多少
        transform: rotate(-20deg);
        z-index: 10;

        .needle.active{
        width: 2.5rem;
        height: auto;
        position: absolute;
        left: 3.3rem;
        // 旋转多少度
        transform-origin: 0.3rem 0;
        transform: rotate(3deg);
        z-index: 10;
    }
    }
    .circle{
        width: 5.5rem;
        height: auto;
        position: absolute;
        left:calc(50% - 2.75rem) ;
        top: 2.5rem;
    }
    .playImg{
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 100%;
        position: absolute;
        left:calc(50% - 1.7rem) ;
        top: 3.55rem;
    }
}
    .bottonIcon{
            width: 7.5rem;
            display: flex;
            justify-content: space-evenly;
            position: absolute;
            bottom: 3rem;
            left:calc(50% - 3.7rem) ;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                fill: #fff;
            }
    }


</style>
