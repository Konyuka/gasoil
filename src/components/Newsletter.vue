<template>
 <div>
  
<div class="min-h-full bg-white pb-10">

  <main>

    <div class="relative">
      <div class="px-20 absolute left-0 right-0 h-full bg-gray-800 rounded-full" aria-hidden="true"></div>
      <div class="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
          <div class="lg:w-0 lg:flex-1">
            <h2 class="text-3xl font-extrabold tracking-tight text-white">
              Sign up for our newsletter
            </h2>
          </div>
          <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form class="sm:flex">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md" placeholder="Enter your email">
              <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white bg-blue-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Notify me <i class="fas fa-bell ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </main>

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
