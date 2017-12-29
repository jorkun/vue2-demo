<template>
<div class="sidebar">
    <ul>
        <li v-for="item in links">
            <router-link v-bind:to="item.name">{{ item.title }}</router-link>
        </li>
    </ul>
</div>
</template>
<script>
    export default {
        name: 'Sidebar',
        data () {
            return {
                links: [{
                    'name': 'dashboard',
                    'title': '首页',
                    'param': {}
                }, {
                    'name': 'work',
                    'title': '工作状态',
                    'param': {}
                }, {
                    'name': 'study',
                    'title': '学习平台',
                    'param': {}
                }, {
                    'name': 'system',
                    'title': '系统管理',
                    'param': {}
                }]}
        }
    }
</script>
<style lang="scss">
    @import './sidebar.scss'
</style>