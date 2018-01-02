<template>
    <div class="container">
        <kk-header></kk-header>
        <div class="nav">
            <kk-sidebar></kk-sidebar>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <kk-footer></kk-footer>
    </div>
</template>
<script>
    import kkHeader from '@/components/shared/header/Header'
    import kkSidebar from '@/components/shared/sidebar/Sidebar'
    import kkFooter from '@/components/shared/footer/Footer'
    export default {
        components: {kkHeader, kkSidebar, kkFooter},
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