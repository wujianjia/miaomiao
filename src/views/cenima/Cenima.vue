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
    name:'cenima',
    data () {
        return{
            text:'影院'
        }
    },
    components:{
        Tabbar,
        headerconment
    }
}
</script>