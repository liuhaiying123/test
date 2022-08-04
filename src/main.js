import { createApp } from 'vue'
import { Swipe, SwipeItem,NoticeBar,Progress } from 'vant';
import router from './router/index.js';
import state from './store/index.js';
import 'vant/lib/index.css';
import App from './App.vue';


createApp(App).use(Swipe).use(SwipeItem).use(NoticeBar).use(Progress ).use(router).use(state).mount('#app')
