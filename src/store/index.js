import { createStore } from 'vuex'

export default createStore({
    state:{
        //播放列表
        playlist:[{al:{}}],
         // 播放列表
        playlist:[{
            al:{
              id: 73828956,
              name: "年少",
              pic: 109951163901435150,
              picUrl: "http://p3.music.126.net/dHRFJJ9nfF_9YTxOz9UXUQ==/109951163901435148.jpg",
              pic_str: "109951163901435148",
            },
            ar:[
              {
                id: 30284835,
                name: "枯木逢春"},
              ],
            id: 1316921651
        }],
        // 当前播放的索引值
        palyCurrentIndex:0,
        //播放图片的显示和隐藏
        pause:true,
        // 歌曲是否自动播放
        autoplay:false,
        
    },
    getters:{

    },
    mutations:{
        //更新列表playlist
        setPlaylist(state,value){
            state.playlist = value
        },
        //更新列表playlist
        setPlayIndex(state,value){
            state.palyCurrentIndex = value
        },
        //设置自动播放功能
        setAutoPlay(state,value){
            state.pause = !value
            state.autoplay = value
      } 

    },
    actions:{

    },
    modules:{

    }

})
 
