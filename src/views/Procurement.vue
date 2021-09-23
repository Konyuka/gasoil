<template>
  <div>
   <Header /> 
  
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">EAGOL</span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Procurement Page</span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            East African Gasoil Limited (EAGOL) is a privately owned Oil Marketing Company established in 2009 under the Companies Act (Cap 486) of laws of Kenya. EAGOL has its headquarter in Nairobi- Kenya and has regional supply branches in major towns which include Mombasa, Nakuru, Kisumu and Eldoret. EAGOL is inviting registered and reputable firms to prequalify as suppliers for the following goods and services for the period 2021 – 2023 S/NO. CATEGOTY
          </p>
        </div>
        
      </div>
    </div>

    <div class="flex flex-col px-20 mb-20">
      <h1>
        <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl mb-5">Procurement List</span>
      </h1>
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tender Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Closing Date
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- Odd row -->
                <tr class="bg-white">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    General office supply
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    	2021-06-04
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"> <i class="fas fa-file mr-2"></i> Download</a>
                  </td>
                </tr>

                <!-- Even row -->
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Marketing and Branding
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2021-06-04
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"> <i class="fas fa-file mr-2"></i> Download</a>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="relative px-4 sm:px-6 lg:px-8 mb-20">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-sm text-center text-gray-800 font-semibold tracking-wide pb-5">Interested firms can contact us Through <span class="text-blue-500">+254 716 776 600</span></span>
            <span class="block text-sm text-center text-gray-800 font-semibold tracking-wide">You can email us <span class="text-blue-500">procurement@eastafricangasoil.com</span> to get vender registration forms</span>
          </h1>
        </div>
    </div>


   <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
