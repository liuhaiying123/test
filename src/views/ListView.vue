<template>
    <div class="listView">
        <!-- 传递参数给子组件 -->
        <listviewtop :playlist = "state.playlist"></listviewtop>
        <listviewIcon :playlist = "state.playlist"></listviewIcon>
        <playlistView :playlist = "state.playlist"></playlistView>
    </div>
</template>

<script setup>
import listviewtop from '../components/listView/listviewTop1.vue'
import listviewIcon from '../components/listView/listviewIcon.vue'
import playlistView from '../components/listView/palylistView.vue'
import {useStore} from 'vuex'
import {postPlaylistDetail} from '../api/index';
import { onMounted ,reactive} from 'vue';
import {useRoute} from 'vue-router'
const store  = useStore()
const route = useRoute()
let state = reactive ({
    list:[],
    playlist:{
        creator:{},
        tracks:{}  
    },
    })
 
onMounted(async()=>{
   //  获取传入的id
    let id = route.query.id
    let result = await postPlaylistDetail(id)
    state.playlist = result.data.playlist
    store.commit('setPlaylist',state.playlist.tracks)
})

// export default {
//     components:{
//         listviewtop,
//         listviewIcon,
//         playlistView
//     },
//     setup(){
//      const store  = useStore()
//      const route = useRoute()
//      let state = reactive ({
//          list:[],
//          playlist:{
//              creator:{},
//              tracks:{}  
//          },
//          })
         
//      onMounted(async()=>{
//         //  获取传入的id
//          let id = route.query.id
//          let result = await postPlaylistDetail(id)
//          state.playlist = result.data.playlist
//          store.commit('setPlaylist',state.playlist.tracks)
//      })
//      return{
//        state
//      }
//  }
// }
</script>

<style lang="less" scoped>
.listView{
    width: 7.5rem;
}


</style>
