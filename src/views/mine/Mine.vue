<template>
    <div>
        <headerconment :text="text" />
        <tabbar />
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
import headerconment from '@/components/Head.vue';
export default {
    name:'mine',
    data () {
        return{
            text:'个人信息'
        }
    },
    components:{
        Tabbar,
        headerconment
    }
}
</script>