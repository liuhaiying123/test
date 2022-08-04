<template>
<div class="topNav">
    <!-- 顶部左边 -->
    <div class="topLeft">
        <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-31liebiao"></use>
        </svg>
    </div>
    <!-- 顶部中间 -->
    <div class="topCenter">
        <span class="navBtn">我的</span>
        <span class="navBtn active" >发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
    </div>
    <!-- 顶部右边 -->
    <div class="topRight">
        <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-sousuo"></use>
        </svg>
    </div>

</div>


</template>
<script>

</script>
<style  lang="less"  scoped>
.icon{
      width: 0.4rem;
      height: 0.4rem ;
}
.topNav{
    width: 7.5rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '微软雅黑';
}

.topCenter{
      width: 4.5rem;
      display: flex;
      justify-content: space-around;
      .active{
        font-weight: 900;
}
      
}

html{
     background:linear-gradient(top,rgb(232,235,242),rgb(255,255,255)) no-repeat ;
     background:-webkit-linear-gradient(top,rgb(232,235,242),rgb(255,255,255)) no-repeat;
}

</style>