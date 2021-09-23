<template>
  <div>
   <Header /> 

    <div class="relative bg-gray-50">

    <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 mb-20 text-center lg:py-8 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">

            <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                At East African Gasoil Limited , customer satisfaction is key. We strive to understand the needs and concerns of our customers by effectively responding to them. <br> <br>
                Our policy is to: <br> <br>
                <i class="fas fa-check text-blue-400 mr-3"></i> Provide high quality products and services that meet industry specifications and our customers’ needs. <br> <br>
                <i class="fas fa-check text-blue-400 mr-3"></i> Furnish services that reliably meet standards of performance, efficiency and courtesy. <br> <br>
                <i class="fas fa-check text-blue-400 mr-3"></i> Provide accurate and sufficient information about our products and services so that customers can make informed purchasing decisions. <br> <br>
                <i class="fas fa-check text-blue-400 mr-3"></i> EAGOL adopts best practices through innovation and sharing of knowledge to achieve efficient, reliable and superior customer service. 
            </p>
        </div>
        </div>
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="">
        </div>
    </main>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Customer',
  components: {
    Header,
  }
}
</script>
