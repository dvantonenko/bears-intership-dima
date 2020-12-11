import Vue from 'vue'
import Vuex from 'vuex'


export const Widgets = {
    actions: {
            async fetchWeather({ commit }) {
                const arr = []
                const cities = ['Dnipro', 'Kyiv', 'Zaporizhia', 'Kharkiv', 'London', 'Paris', 'Berlin', 'Rome']
                for (let city of cities) {
                    const res = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&type=like&APPID=41aca50fa598eeb6350321c2a6b727e3`)
                    const fetched = await res.json()
                    arr.push(fetched.list[0])
                }
                commit('updatePosts', arr)
            },
            async fetchCurrency({ commit }) {
    
                const res = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
                const currentCurrency = await res.json()
                commit('updateCurrency', currentCurrency)
            }
        },
        mutations: {
            updatePosts(state, arr) {
                state.posts = arr
            },
            updateCurrency(state, fetched) {
                state.currency = fetched
            }
        },
        state: {
            posts: [],
            currency: []
        },
        getters: {
            allPosts(state) {
                return state.posts
            },
            currentCurrency(state) {
                return state.currency
            }
        },
}