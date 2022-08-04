<template>
    <div class="listviewIcon">
        <!-- 收藏 -->
        <div class="collectIcon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucangjia"></use>
            </svg>
            <p>{{playlist.subscribedCount}}</p>
        </div>
        <!-- 评论 -->
        <div class="commentIcon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
            </svg>
            <p>{{playlist.commentCount}}</p>
        </div>
        <!-- 分享 -->
        <div class="shareIcon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <p>{{playlist.shareCount}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['playlist'],
}
</script>

<style lang="less" scoped>
.listviewIcon{
    width: 6rem;
    display: flex;
    justify-content: space-around;
    // border: 1px solid red;
    border-radius: 20px;
    padding: 10px;
    // margin: 0.7rem auto -25px auto;
    background: #fff;
    // 阴影
    box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.2);
    font-size: 13px;
    // 让它在播放列表的上面
    position: absolute;
    z-index: 1;
    left: 0.7rem;
    top: 4.5rem;
    .icon{
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 10px;
    }
}
    .listviewIcon div:nth-child(n){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .listviewIcon div:nth-child(n + 2) {		//n+2就是从第二个元素开始往后所有的元素
        border-left: 1px solid rgba(77, 77, 77, 0.5);
        padding-left: 20px;
    }

</style>
