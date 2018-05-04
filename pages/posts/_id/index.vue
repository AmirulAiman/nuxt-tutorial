<template>
  <div class="single-post-page">
      <section class="post">
          <h1 class="post-title">{{ loadedPosts.title }}</h1>
          <div class="post-details">
              <div class="post-detail">Last Updated on {{ loadedPosts.updatedDate }}</div>
              <div class="post-detail">Written by {{ loadedPosts.author }}</div>
          </div>
          <p>{{ loadedPosts.content }}</p>
      </section>
      <section class="post-feedback">
          <p>feedback</p>
      </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback){
    console.info('context info:', context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          id: '1',
          author: 'Amirul Aiman Abdullah',
          previewText: 'This is my first post',
          title: 'My First Post(ID:' + context.route.params.id +')',
          thumnail:'https://78.media.tumblr.com/ddc5fd4673723188622d6c238f6b4ac0/tumblr_outtddRBI71v9x50oo1_500.gif',
          updatedDate: new Date().toDateString(),
          content: 'all text in my first post'
        }
      })
    }, 1000);
  }
}
</script>

<style scoped>
    .single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>


