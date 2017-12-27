<template>
    <div class="container">
        <div class="nav">
            <sidebar></sidebar>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Sidebar from '@/components/shared/sidebar/Sidebar'
    export default {
        components: {Sidebar},
        name: 'Dashboard',
        data () {
            return {
            }
        }
    }
</script>
<style lang="scss">
    @import './dashboard.scss'
</style>