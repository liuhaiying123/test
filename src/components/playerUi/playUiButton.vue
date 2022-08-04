<template>
  <div class="playUiButton">
       <div class="top">
            <p class="p1">00:00</p>
            <van-progress :percentage="5" pivot-text=" "  color="#fff" stroke-width="1px" />
             <p class="p2">00:00</p>
      </div>
      <div class="button">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
        </svg> 
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>


<style lang="less" scoped>
    .top{
        display: flex;
        position: absolute;
        left: 0;
        bottom: 2rem;
        :deep(.van-progress){
            color:#fff;
            width: 5rem;
            position: absolute;
            left:58px ;
            .van-progress__pivot{
                font-size: 1px;
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 100%;
            }
        }
         .p1{
            position: absolute;
            left: 0.1rem;
            top: -25px;
        }
        .p2{
            position: absolute;
            left: 6.4rem;
            top: -25px;
        }
}



</style>
