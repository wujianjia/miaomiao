<template>
    <ul class="tabbar">
        <router-link to='/movie' tag='li' class="tabbar-item">
            <span class="iconfont">&#xe6af;</span><span>电影</span>
        </router-link>
        <router-link to='/cenima' tag='li' class="tabbar-item">
            <span class="iconfont">&#xe8c0;</span><span>影院</span>
        </router-link>
        <router-link to='/mine' tag='li' class="tabbar-item">
            <span class="iconfont">&#xe62f;</span><span>我的</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style lang="sass" scoped>  
.tabbar
    position: fixed
    left: 0
    right: 0 
    bottom: 0
    height: 50px
    display: flex
    justify-content: space-around
    align-item:center
    background: #f1f1f1
    .router-link-active
        color:#f00
    .tabbar-item
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .iconfont
            font-size: 25px
</style>
