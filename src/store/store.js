import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    status: true,
    histories: []
}

const mutations = {
    switch (s) {
        state.status = !state.status
    },
    removeHistory () {
        state.histories = []
    }
}
const actions = {
    add (state) {
        state.commit('add')
    }
}
// 状态转换
Vue.filter('toStatus', v => {
    return v ? '工作中' : '自由时间'
})
export default new Vuex.Store({
    state,
    mutations,
    actions
})
