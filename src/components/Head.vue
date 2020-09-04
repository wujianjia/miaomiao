<template>
    <div class="header">{{text}}</div>
</template>

<script>
export default {
    name:'headerconment',
    props:{
        text:String
    }
}
</script>

<style lang="sass" scoped>
    .header
        position: fixed
        top: 0
        left: 0
        right: 0
        height: 40px
        background: #f2f2f2
        text-align: center
        line-height: 40px
        font-size: 20px
        color:#666
</style>