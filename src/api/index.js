import axios from 'axios'

// const ApiUrl = "https://netease-cloud-music-api-alpha-fawn.vercel.app/";



const ApiUrl = "http://localhost:3000";

// 请求banner
 function postBanner(type1){
   return  axios.post(`${ApiUrl}/banner?type=${type1}`).then((res)=>{
       return res.data.banners ;
    })
}

//圆形图标入口列表
function postIcon(){
  return axios.post(`${ApiUrl}/homepage/dragon/ball`).then((res)=>{
       return res.data.data
   });
}


// 推荐歌单
function postRecommendMusic(){
  return axios.post(`${ApiUrl}/recommend/resource`).then((res)=>{
       return res.data.recommend
   })
}

//歌单详情
function postPlaylistDetail(id){
  return axios.post(`${ApiUrl}/playlist/detail?id=${id}`).then((res)=>{
     return res
  })
}

//  获取歌曲详细
function postSongDetail(id){
  return axios.post(`${ApiUrl}/song/detail?ids=${id}`)
}

//  获取歌词
function postLyric(id){
  return axios.post(`http://localhost:3000/lyric?id=${id}`)
}




export {postBanner,postIcon,postRecommendMusic,postPlaylistDetail,postSongDetail,postLyric}
