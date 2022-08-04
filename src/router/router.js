const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        name: 'listview',
        path: '/listview',
        component: () => import('../views/ListView.vue')
    },
    {
        name: 'PlayerUi',
        path: '/PlayerUi',
        component: () => import('../views/PlayerUi.vue')
    },
        
    ]; 
export default routes//导出