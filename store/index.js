import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts:[]
        },
        mutations: {
            setPosts( state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://udemy-nuxt-4fc5d.firebaseio.com/posts.json')
                    .then( result => {
                        const postArray = [];
                        for( const key in result.data) {
                            postArray.push( {...result.data[key], id: key} )
                        }
                        vuexContext.commit('setPosts', postArray)
                    })
                    .catch( e => {
                        console.warn('error:',e)
                    })
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore