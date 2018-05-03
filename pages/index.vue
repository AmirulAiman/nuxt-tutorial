<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the Latest Tech News!</h1>
    </section>
    <post-list :posts="loadedPosts"/>
  </div>
</template>

<script>

import PostList from '@/components/Posts/PostList'

export default {
  components: {
    'post-list' : PostList
  },
  asyncData(context, callback){
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
    })
  },
  // data() {
  //   return {
  //     loadedPosts : []
  //   }
  // },
  created() {
    setTimeout(() => {
      this.loadedPosts = [
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
          thumbnailLink: 'https://t00.deviantart.net/n5eeTmCz50R0wvBRoA62N51DKdw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/e13c/th/pre/f/2016/124/1/4/vacation_home_by_nonokohime-da1cmqd.png'
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
      ]
    }, 1500);
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>

