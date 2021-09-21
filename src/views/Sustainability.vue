<template>
  <div>
   <Header /> 
   <Sustain />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sustain from '@/components/Sustain.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Sustain,
    Footer
  }
}
</script>
