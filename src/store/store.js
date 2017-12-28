import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1,
    histories: []
}

const mutations = {
    add (state) {
        state.count += 1
    },
    reduce (state) {
        state.count -= 1
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
export default new Vuex.Store({
    state,
    mutations,
    actions
})
