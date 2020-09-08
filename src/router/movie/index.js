export default{
    path:'/movie',
    name:'movie',
    component:()=>import('../../views/movie/Movie.vue'),
    children:[
        {
            path:'city',
            name:'city',
            component:()=>import('@/views/movie/components/city.vue')
        },
        {
            path:'hot',
            name:'hot',
            component:()=>import('@/views/movie/components/hot.vue')
        },
        {
            path:'comingsoon',
            name:'comingsoon',
            component:()=>import('@/views/movie/components/comingSoon.vue')
        },
        {
            path:'search',
            name:'search',
            component:()=>import('@/views/movie/components/search.vue')
        }, {
            path:'/movie',
            redirect : '/movie/hot'
        }
        
    ]
}