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
            },
            addPost(state, addPost) {
                state.loadedPosts.push(addPost);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex( post => {
                    post.id === editedPost.id
                });
                state.loadedPosts[postIndex] = editedPost
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
            },
            addPost(vuexContext, addedPost) {
                const createdPost = {
                    ...addedPost,
                    updatedDate: new Date().toLocaleDateString()
                }
                return axios.post('https://udemy-nuxt-4fc5d.firebaseio.com/posts.json', createdPost)
                .then(result => {
                    vuexContext.commit('addPost', {...createdPost, id: result.data.name})
                })
                .catch(e => {
                    console.warn(e)
                })
            },
            editPost(vuexContext, editedPost) {
                const changedPost = {
                    ...editedPost,
                    updatedDate: new Date().toLocaleDateString()
                }
                return axios.put('https://udemy-nuxt-4fc5d.firebaseio.com/posts/'+ editedPost.id +'.json', editedPost)
                .then( result => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch( e => {
                    console.warn(e)
                })
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