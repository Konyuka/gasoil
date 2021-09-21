<template>
<div>
  <div class="bg-gray-100">
  <div class="pt-12 sm:pt-16 lg:pt-24">
    <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
        <h2 class="text-lg leading-6 font-semibold text-black uppercase tracking-wider">
          Karibu
        </h2>
        <p class="text-3xl font-extrabold text-gray-700 sm:text-4xl lg:text-2xl">
          More highlights on EAGOL?
        </p>
      </div>
    </div>
  </div>
  <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div class="relative">
      <div class="absolute inset-0 md:h-1/2 h-full bg-gray-100"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          <div class="flex flex-col rounded-lg overflow-hidden shadow-2xl">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div class="mt-4 flex items-baseline text-5xl md:text-6xl font-extrabold">
                Operations
              </div>
              <p class="mt-5 text-lg text-gray-500">
                See Our footprint across the E.A
              </p>
            </div>

            <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
              <div class="rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-300 hover:bg-white hover:text-yellow-400 translate duration-500 transform hover:scale-150" aria-describedby="tier-standard">
                  <i class="fas fa-directions fa-2x"></i>
                </a>
              </div>
            </div>

          </div>

          <div class="pb-8 flex flex-col rounded-lg overflow-hidden shadow-2xl">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div class="mt-4 flex items-baseline text-5xl md:text-6xl font-extrabold">
                Sustainability
              </div>
              <p class="mt-5 text-lg text-gray-500">
                Our focus on sustainability acoss E.A
              </p>
            </div>

            <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
              <div class="rounded-md shadow">
                <router-link to="/sustainability">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-300 hover:bg-white hover:text-yellow-400 translate duration-500 transform hover:scale-150" aria-describedby="tier-standard">
                  <i class="fas fa-directions fa-2x"></i>
                </a>
                </router-link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</div>  
 </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
