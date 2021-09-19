<template>
  <div>
   <Header /> 
   <Hero />
   <Tabs />
   <!-- <Slider /> -->
   <Partners />
   <Newsletter />
   <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Tabs from '@/components/Tabs.vue'
// import Slider from '@/components/Slider.vue'
import Partners from '@/components/Partners.vue'
import Newsletter from '@/components/Newsletter.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Tabs,
    // Slider,
    Partners,
    Newsletter,
    Footer
  }
}
</script>
