<template>
  <section class="post-list">
      <post-preview 
        id="1" 
        :is-admin="isAdmin"
        title="Hello There" 
        previewText="1st Post" 
        thumbnail="https://cdna.artstation.com/p/assets/images/images/001/705/970/large/quy-n-anh-yellow-house-03.jpg?1451367032"
      />
      <post-preview 
        id="2" 
        :is-admin="isAdmin"
        title="Hello There" 
        previewText="2nd Post" 
        thumbnail="https://orig00.deviantart.net/c373/f/2016/237/4/f/voxel_truss_house_by_mendelian-daf8pdp.png"
      />
      <post-preview 
        id="3" 
        :is-admin="isAdmin"
        title="Hello There" 
        previewText="3rd Post" 
        thumbnail="https://img.itch.zone/aW1nLzk4Mjg2NC5wbmc=/original/%2BILFTt.png"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
    components: {
        'post-preview': PostPreview
    }
}
</script>

<style scoped>
    .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
</style>

