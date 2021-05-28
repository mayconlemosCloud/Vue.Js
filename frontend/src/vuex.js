
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        listaDePaciente: [],
        Paciente:''
       
    },
    getters: {

        getPaciente(state) {
            return state.Paciente;
        }
    },
    mutations: {

        SET_POSTS_PACIENTE(state, data) {
            state.listaDePaciente = data
        },
        GET_POSTS_PACIENTE_ID(state, data) {
            state.Paciente = data
        },
        DEL_POST_PACIENTE(state, data) {
            
            axios.post('http://localhost:3000/delete/' + data)
            .then(response => {
                console.log(response.data)
             
            })
        }

    },
    actions: {

        getPaciente({ commit }) {
            axios.get('http://localhost:3000/select')
                .then(response => {
                    commit('SET_POSTS_PACIENTE', response.data)
                })
        },

        getPacienteID({ commit },data) {
            axios.post('http://localhost:3000/BuscarPaciente/' + data)
                .then(response => {
                    commit('GET_POSTS_PACIENTE_ID', response.data)
                })
        },

      
    }
})


export { store }
