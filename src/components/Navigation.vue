<template>
<div class="">
<!-- fixed nav -->
<nav class="z-50 fixed bottom-0 inset-x-0 bg-gradient-to-r from-yellow-600 to-red-600 flex justify-between text-sm text-blue-500 uppercase font-mono">

  <router-link to="/" class="group transform hover:scale-125 w-full block py-5 px-3 text-center hover:bg-blue-300 hover:text-yellow-600 transition duration-500 text-black">
    <svg class="w-6 h-6 mb-2 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
   <span class="text-white group-hover:text-black">
    Home
   </span>
  </router-link>

  <router-link to="#" class="group transform hover:scale-125 w-full block py-5 px-3 text-center hover:bg-blue-300 hover:text-yellow-600 transition duration-500 text-black">
    <svg class="w-6 h-6 mb-2 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
    <span class="text-white group-hover:text-black">
    Media 
    </span>
  </router-link>


  <router-link to="/about" class="group transform hover:scale-125 w-full block py-5 px-3 text-center hover:bg-blue-300 hover:text-yellow-600 transition duration-500 text-black">
    <svg class="w-6 h-6 mb-2 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="text-white group-hover:text-black">
    About Us
    </span>
  </router-link>

  <router-link to="/customer" class="group transform hover:scale-125 w-full block py-5 px-3 text-center hover:bg-blue-300 hover:text-yellow-600 transition duration-500 text-black">
    <svg class="w-6 h-6 mb-2 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
    <span class="text-white group-hover:text-black">
    Customer Service
    </span>
  </router-link>

</nav>
</div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>

</style>
