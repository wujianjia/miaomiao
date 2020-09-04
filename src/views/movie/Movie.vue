<template>
    <div>
        <headerconment :text="text" />
        <div class="movie-nav">
            <ul>
                <li class="city">大连<span class="iconfont">&#xe600;</span></li>
                <li>正在热映</li>
                <li>即将上映</li>
                <li class="iconfont">&#xe616;</li>
            </ul>
        </div>
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
    }
}
</script>

<style lang="sass" scoped>
    .movie-nav
        margin-top: 40px
        ul
            display: flex
            justify-content: space-around
            height: 30px
            line-height: 30px
            font-size: 16px
</style>