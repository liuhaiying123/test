<template>
   <div class="palyerUi">
    <img class="bg" :src="stateSongDetail.songs.al.picUrl" alt="">
    <img class="bg" v-if="stateSongDetail.songs.al.picUrl" :src="stateSongDetail.songs.al.picUrl" alt="">
    <img class="bg" v-else src="../assets/img/disc_default.png" alt="">

    <palyerUiTop :songs="stateSongDetail.songs"></palyerUiTop>
    <palerUiDisc :songs="stateSongDetail.songs"></palerUiDisc>
    <PlayUiButton :songs="stateSongDetail.songs"></PlayUiButton>
   </div>
   
    
</template>


<script>
import palyerUiTop  from '../components/playerUi/palyerUiTop.vue'
import palerUiDisc  from '../components/playerUi/palerUiDisc.vue'
import playUiButton  from '../components/playerUi/playUiButton.vue'
import { onMounted,reactive } from 'vue';
import {useRoute} from 'vue-router'
import {postLyric,postSongDetail} from '../api/index';
import PlayUiButton from '../components/playerUi/playUiButton.vue';
export default {
    
    components:{
    palyerUiTop,
    palerUiDisc,
    playUiButton,
    PlayUiButton
},
    setup(){
        const route = useRoute()
        let stateLyric = reactive({})
        let stateSongDetail = reactive({
            songs:{
                ar:{},
                al:{}
            }
        })
        onMounted(async()=>{
            // 接收传过来的歌曲ID
            let id = route.query.id
            // 请求
            let Lyric = await postLyric(id) 
            let SongDetail =  await postSongDetail(id)
            // 接收数据
            stateLyric = Lyric.data
            stateSongDetail.songs = SongDetail.data.songs[0]

            // console.log(stateSongDetail.songs);
        })
        return{stateLyric,stateSongDetail}
    }
}
</script>


<style scoped>
.bg{
    position:fixed;
    left:0;
    top: 0;
    width: 7.5rem;
    z-index: -1;
    filter: blur(100px);
    overflow: hidden;
    transform: scale(4);
}

.palyerUi{
    width: 7.5rem;
    /* padding: 0 0.4rem; */
}
</style>