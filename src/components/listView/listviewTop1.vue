<template>
    <div class="listViewTop">
        <img class="bg" :src="playlist.coverImgUrl" alt="">
        <div class="listViewTopNav">
            <div class="left">
                <!-- 返回按钮 -->
                <div class="back" @click="$router.back()" >
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xitongfanhui"></use>
                    </svg>
                </div>
                <!-- 歌单 -->
                <div class="title">
                    歌单
                </div>
            </div>
            <!-- 搜索按钮 和 更多按钮-->
            <div class="right">
                <div class="search">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </div>
                <div class="more">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gengduo-shuxiang"></use>
                    </svg>
                </div>
            </div>
        </div>
        <!-- 头像 简介部分 -->
        <div class="content">
            <div class="content_left">
                <!-- 头像 -->
                <div class="hp">
                    <img class="headPortrait" :src="playlist.coverImgUrl" alt="">
                     <div class="count">
                        <span>▷</span>
                        <!--播放量  -->
                        <span>{{formatNum(playlist.playCount)}}</span>
                    </div>
                </div>
                <!-- 头像下面的小方块 -->
                <div class="headPortraitBlock">
                    <img class="headPortraitBlockBG" :src="playlist.coverImgUrl" alt="">
                </div>
            </div>
            <div class="contnet_right">
                <div class="rightTop">
                <!-- 歌单用户姓名 -->
                    <div class="UserTitle">
                        <p>{{playlist.name}}</p>
                    </div>
                <!-- 更多图标 -->
                    <div class="contnet_right_more">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo"></use>
                        </svg>
                    </div>
                </div>
                <!-- 用户头像和姓名 -->
                <div class="UserInfo">
                    <!-- 头像 -->
                    <div class="UserImg">
                        <img class="UserPortrait"  :src="playlist.creator.avatarUrl">
                    </div>
                    <!-- 名称 -->
                    <div class="UserName">
                        <p>{{playlist.creator.nickname}}</p>
                    </div>
                    <!-- 关注图标 -->
                    <div class="UserAttention">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-plus"></use>
                        </svg>
                    </div>
                </div>
                <!-- 用户简介 -->
                <div class="UserAbout">
                    <div class="description">
                        <p>{{playlist.description}}</p>
                    </div>
                    <div class="UserAboutMore">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted,computed,watch,ref,reactive } from 'vue'
export default {
    props:['playlist'],
    setup(){
        
        
     // 格式化输出听歌人数
        const formatNum = computed(()=>{
           return function(num){
                if(num>10000) return (num/10000).toFixed(2) + '万'
            }
        })
        return {
            formatNum
        }
    }
}
</script>
<style lang="less" scoped>
.listViewTop{
    width: 7.5rem;
    padding: 0 0.4rem;
    .bg{
        position:fixed;
        left:0;
        top: 0;
        width: 7.5rem;
        height: auto;
        z-index: -1;
        // 设置滤镜模糊
        filter: blur(150px);
        // transform: scale(4);
    }
    .listViewTopNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        font-size: 0.35rem;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
            fill: #fff;
        }
        .title{
            margin-left: 0.4rem;
        }
        .search{
            margin-right: 0.5rem;
        }
    }
    .left,.right{
        display: flex;
        color: #fff;
    }


    // 标题 头像部分
    .content{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    // 左边头像部分
    .content_left{
        position: relative;
        // 头像
        .hp{
            position: absolute;
            z-index: 2;
            top: 8px;
        }
        .headPortrait{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 10%;
            }
        .headPortraitBlock{
            position: absolute;
            z-index: 1;
            left: 13px;
            // 隐藏超出的部分
            overflow: hidden;
            border-radius: 10px;
            .headPortraitBlockBG{
                width: 2rem;
                height: 2rem;
                background-size: cover;
                filter: blur(50px);
                // 局部放大取颜色
                transform: scale(3);
            }
        }
         .count{
            position: absolute;
            right: 0.1rem;
            top: 0.1rem;
            font-size: 0.24rem;
            color:rgb(246,247,250);
            border-radius:10px;
            background-color: rgba(19, 19, 19, 0.2);
        }
    }

    // 右边歌单名和用户简介部分
    .contnet_right{
         width: 4rem;
         height: 2.5rem;
        .rightTop{
            display: flex;
            justify-content: space-around;
            height: 1.25rem;
            .UserTitle{
                color: #fff;
                font-size: 15px;
            }
            .icon{
                fill: #fff;
                width: 0.5rem;
                height: 0.5rem;
            }
        }
        // 用户信息
        .UserInfo{
            display: flex;
            color: rgba(255, 255, 255, 0.5);
            .UserPortrait{
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 100%;
            }
            .UserName{
                height: 26px;
                padding-left: 4px;
                font-size: 10px;
                line-height: 26px;
            }
            .UserAttention{
                width: 0.7rem;
                height: 0.5rem;
                background-color: rgba(207, 207, 207, 0.5);
                margin-left: 10px;
                border-radius: 12px;
                display: flex;
                .icon{
                    align-self: center;
                    margin:0 auto;
                    fill: rgba(255, 255, 255, 0.6);
                }
            }
        }
        // 用户简介
        .UserAbout{
                display: flex;
                justify-content: space-around;
                margin-top: 0.3rem;
                width: 3.5rem;
                color: rgba(255, 255, 255, 0.5);
               .description{
                    width: 3rem;
                    font-size: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .icon{
                    align-self: center;
                    margin:0 auto;
                    fill: rgba(255, 255, 255, 0.6);
                }
        }
    }

}
</style>

