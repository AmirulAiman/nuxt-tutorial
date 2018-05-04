import Vuex from 'vuex'

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
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: '1',
                                title: 'First Post',
                                previewText: 'This is my 1st post',
                                thumbnailLink: 'https://i.ytimg.com/vi/NamzxgmpM7s/maxresdefault.jpg'
                            },
                            {
                                id: '2',
                                title: 'Second Post',
                                previewText: 'This is my 2nd post',
                                thumbnailLink: 'https://78.media.tumblr.com/ddc5fd4673723188622d6c238f6b4ac0/tumblr_outtddRBI71v9x50oo1_500.gif'
                            },
                            {
                                id: '3',
                                title: 'Third Post',
                                previewText: 'This is my 3rd post',
                                thumbnailLink: 'https://cdna.artstation.com/p/assets/images/images/001/705/970/large/quy-n-anh-yellow-house-03.jpg?1451367032'
                            },
                            {
                                id: '4',
                                title: 'Forth Post',
                                previewText: 'This is my 4th post',
                                thumbnailLink: 'https://i.ytimg.com/vi/AD834QHtbfU/maxresdefault.jpg'
                            }
                        ])
                        resolve();
                    }, 1500);
                });
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