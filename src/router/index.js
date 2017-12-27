import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard'
import Index from '@/components/index/Index'
import Work from '@/components/work/Work'
import Study from '@/components/study/Study'
import System from '@/components/system/System'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
      // component: HelloWorld,
            redirect: 'dashboard'
        }, {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {
                    path: '/',
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
                    name: 'study',
                    component: Study
                },
                {
                    path: '/system',
                    name: 'system',
                    component: System
                }
            ]
        }
    ]
})
