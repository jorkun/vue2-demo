import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard'
import Index from '@/components/index/Index'
import Work from '@/components/work/Work'

import StudyIndex from '@/components/study/Index'
import Study from '@/components/study/Study'
import Study1 from '@/components/study/Study1'
import Study2 from '@/components/study/Study2'

import System from '@/components/system/System'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        redirect: 'dashboard'
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
