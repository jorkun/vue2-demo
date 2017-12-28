<template>
    <div class="container">
        <Header></Header>
        <div class="nav">
            <sidebar></sidebar>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/shared/header/Header'
    import Sidebar from '@/components/shared/sidebar/Sidebar'
    import Footer from '@/components/shared/footer/Footer'
    export default {
        components: {Header, Sidebar, Footer},
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