<template>
  <div class="posts-page">
      <post-list :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    data() {
        return {

        }
    },
    components: {
        'post-list': PostList
    },
  asyncData(context, callback){
    console.log('asnyncData executed')
    setTimeout(() => {
      callback( null, {
        loadedPosts: [
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
          }]
      })
    },1500)
  },    
}
</script>

<style scoped>
    .posts-page{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>


