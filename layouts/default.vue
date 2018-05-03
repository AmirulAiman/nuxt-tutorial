<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav" />
    <the-sidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSideNav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    'the-header': TheHeader,
    'the-sidenav': TheSideNav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
  html{
    font-family: 'Open Sans', sans-serif;
  }
  body{
    margin: 0;
  }
</style>
