<template>
  <div class="admin-post-page">
      <section class="update-form">
          <admin-post-form :post="loadedPost" @submit="onSubmitted"/>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
     asyncData(context){
         console.log(context)
        return axios.get('https://udemy-nuxt-4fc5d.firebaseio.com/posts/' + context.params.postId + '.json')
        .then( result => {
            return {
            loadedPost: { ...result.data, id: context.params.postId }
            }
        })
        .catch( e => {
            console.warn( context.error(e))
        })
    },
    methods:{
        onSubmitted(editedPost){
            this.$store.dispatch('editPost', editedPost)
                .then( () => {
                    this.$router.push('/admin');
                })
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


