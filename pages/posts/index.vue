<template>
  <div class="posts-page">
      <post-list/>
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
    }
}
</script>

<style scoped>
    .posts-page{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>


