<template>
    <div>
        <headerconment :text="text" />
        <div class="movie-nav">
            <ul @click="handelClick">
                <router-link tag="li" to="/movie/city" class="city"><p class="city-name">大连</p><span class="iconfont">&#xe600;</span></router-link>
                <router-link tag="li" to="/movie/hot">正在热映</router-link>
                <router-link tag="li" to="/movie/comingsoon">即将上映</router-link>
                <router-link tag="li" to="/movie/search" class="iconfont">&#xe616;</router-link>
            </ul>
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
        <tabbar />
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
import headerconment from '@/components/Head.vue';
export default {
    name:'movie',
    data () {
        return {
            text:'喵喵电影'
        }
    },
    components:{
        Tabbar,
        headerconment
    },
    methods:{
        handelClick (e) {
        },
    }

}
</script>

<style lang="sass" scoped>
    .movie-nav
        margin-top: 40px
        ul
            display: flex
            justify-content: space-around
            height: 0.6rem
            font-size: 16px
            align-item: center
            line-height: 0.6rem
            li
                display: flex
                justify-content: center
                align-items: center
                flex: 1
            .iconfont
                font-size: 0.48rem
            .router-link-active
                color:#f00
                border-bottom: 1px solid #f00
        

</style>