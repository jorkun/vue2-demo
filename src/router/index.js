import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/dashboard/Dashboard'
import Index from '@/components/index/Index'
// 工作状态
import Work from '@/components/work/Work'
// 学习平台
import StudyIndex from '@/components/study/Index'
import Study from '@/components/study/Study'
import Study1 from '@/components/study/Study1'
import Study2 from '@/components/study/Study2'
// 系统设置
import System from '@/components/system/System'

// 登陆配置
import Login from '@/components/login/Login'

Vue.use(Router)
// 路由设置
export default new Router({
    routes: [{
        path: '/',
        redirect: 'login'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '/dashboard',
                name: 'index',
                component: Index
            },
            {
                path: '/work',
                name: 'work',
                component: Work
            },
            {
                path: '/study',
                name: 'studyIndex',
                component: StudyIndex
            },
            {
                path: '/study/0',
                name: 'study',
                component: Study
            },
            {
                path: '/study/1',
                name: 'study1',
                component: Study1
            },
            {
                path: '/study/2',
                name: 'study2',
                component: Study2
            },
            {
                path: '/system',
                name: 'system',
                component: System
            }
        ]
    }
    ],
    linkActiveClass: 'active'
})
