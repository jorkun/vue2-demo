<template>
    <div class="studyIndex">
        <h2 class="mt-0">当前位置：<small>学习平台</small></h2>
        <section>
            <ol>
                <li v-for="link in toLinks">
                    <router-link v-bind:to="link.name">{{link.title}}</router-link>
                </li>
            </ol>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'StudyIndex',
        data () {
            return {
                toLinks: [{
                    name: '/study/0',
                    title: '基础学习'
                }, {
                    name: '/study/1',
                    title: '进阶一'
                }, {
                    name: '/study/2',
                    title: '进阶二'
                }]}
        }
    }
</script>