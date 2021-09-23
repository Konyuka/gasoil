<template>
  <div>

    <div class="bg-white">
      <!-- Header -->
      <div class="flex justify-center relative pb-32 bg-gray-800">
        <div class="absolute inset-0">
          <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="">
          <div class="absolute inset-0 bg-yellow-800 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h1 class="flex justify-center text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About Us</h1>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            With operations across the Region, East African Gasoil Ltd (EAGOL)
             is a privately owned Oil Marketing Company that was established in 2009 to Energize East Africa and Beyond! <br> <br>
             Our 10 years of operations have seen us continually meet and exceed our customer’s needs by providing quality 
             petroleum products and exceptional service delivery. <br> <br>
             From a truck stop in Jomvu, Mombasa in the year 2010, EAGOL has since grown to an ISO certified Oil Marketing industry player
            with presence in 7 Counties in Kenya and across the Kenyan Boarders to Somalia, Uganda, South Sudan, and Congo.
            Our Head office in Mombasa oversees 6 retail outlets in Namanga, Kilifi, Eldoret, Kisumu, Nakuru and Kwale. <br> <br>
            Here we offer competitive prices for fuel products and go the extra mile with customer satisfaction on non-fuel products and services. We also provide efficient bulk fuel distribution from our depot stations in Mombasa, Eldoret, Nakuru, Kisumu and Nairobi with purchasing packages tailor made to suit our client’s needs.
          </p>
        </div>
      </div>

      <!-- Overlapping cards -->
      <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">

          <div class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div class="absolute top-0 p-5 inline-block bg-blue-400 rounded-xl shadow-lg transform -translate-y-1/2">
                <i class="fas fa-rocket fa-3x text-white"></i>
              </div>
              <h3 class="text-4xl font-medium text-gray-900">Mission</h3>
              <p class="mt-4 text-gray-500 text-xl italic pb-5">
                Our mission at East African Gasoil is to delight
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div class="absolute top-0 p-5 inline-block bg-blue-400 rounded-xl shadow-lg transform -translate-y-1/2">
                <i class="fas fa-eye fa-3x text-white"></i>
              </div>
              <h3 class="text-4xl font-medium text-gray-900">Vision</h3>
              <p class="mt-4 text-gray-500 text-xl italic pb-5">
                Our Vision is to be the premier Oil Marketing Company
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>

   <Stats />
   <Team />
   <Footer class="pt-14" />
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import Team from '@/components/Team.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Stats,
    Team,
    Footer
  }
}
</script>
