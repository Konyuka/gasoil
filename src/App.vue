<template>
  <div id="app">
    <router-view/>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  
}
</script>
