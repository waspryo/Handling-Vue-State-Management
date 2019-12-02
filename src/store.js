import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'My Custom Title',
        links: [
            'http://google.com',
            'http://coursetro.com',
            'http://youtube.com',
        ]
    },
    getters: {
        countLinks: state => {
            return state.links.length
        }
    },
    mutations: {
        ADD_LINK: (state, link) => {
            state.links.push(link)
        },
        REMOVE_Link
    },
    actions: {
        removeLink: (context, link) => {
            context.commit("REMOVE_LINK", link)
        }
    }
})