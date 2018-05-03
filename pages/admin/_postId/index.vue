<template>
  <div class="admin-post-page">
      <section class="update-form">
          <admin-post-form :post="loadedPost"/>
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    data() {
        return {
            loadedPost: {
                author: 'Amirul Aiman',
                title: 'HELLO WORLD!',
                thumbnailLink: 'https://i.ytimg.com/vi/AD834QHtbfU/maxresdefault.jpg',
                content: 'My amazing post',
            }
        }
    },
    components: {
        'admin-post-form': AdminPostForm
    }
}
</script>

<style scoped>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }
    @media( min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }
</style>


