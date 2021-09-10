import { IUser } from '@/models/IUser';
import AuthService from '@/services/AuthService';
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { AuthResponse } from '@/models/response/AuthResponse';
import { API_URL } from '@/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {} as IUser,
    isAuth: false
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuth = payload
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async login({ commit }, payload: { email: string, password: string }) {
      try {
        const response = await AuthService.login(payload.email, payload.password)
        localStorage.setItem('token', response.data.accessToken)
        commit('setAuth', true)
        commit('setUser', response.data.user)
      } catch (e: any) {
        console.log(e.response?.data?.message)
      }
    },
    async registration({ commit }, payload: { email: string, password: string }) {
      try {
        const response = await AuthService.registration(payload.email, payload.password)
        localStorage.setItem('token', response.data.accessToken)
        commit('setAuth', true)
        commit('setUser', response.data.user)
      } catch (e: any) {
        console.log(e.response?.data?.message)
      }
    },
    async logout({ commit }) {
      try {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        commit('setAuth', false)
        commit('setUser', {} as IUser)
      } catch (e: any) {
        console.log(e.response?.data?.message)
      }
    },
    async checkAuth({ commit }) {
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)
        commit('setAuth', true)
        commit('setUser', response.data.user)
      } catch (e: any) {
        console.log(e.response?.data?.message)

      }
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuth(state) {
      return state.isAuth
    }
  },
  modules: {},
})
