<template>
  <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>


          <div class="border-t border-gray-200">
              <div class="px-2">
                  <div class="py-4">
                      <div class="avatar">
                          <div class="w-12 rounded-full">
                              <img src="/icon.png" class="" alt="logo ito">
                          </div>
                      </div>

                  </div>

                  <ul class="space-y-1 border-t border-gray-100 pt-4">
                      <li>
                          <NuxtLink to="/"
                              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                              <span class="text-3xl">
                                  <Icon name="dashicons:admin-home" />
                              </span>
                              <span
                                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                  Inicio
                              </span>
                          </NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/registers"
                              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                              <span class="text-3xl">
                                  <Icon name="dashicons:editor-table" />
                              </span>

                              <span
                                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                  Registros
                              </span>
                          </NuxtLink>
                      </li>



                      <li>
                          <NuxtLink to="/stats"
                              class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">

                              <span class="text-3xl">
                                  <Icon name="dashicons:chart-bar" />
                              </span>

                              <span
                                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                  Estadisticas
                              </span>
                          </NuxtLink>
                      </li>

                     


                  </ul>
              </div>
          </div>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="#">
              <button type="submit"
                  class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-3xl ">
                  <Icon name="dashicons:database" />

              </button>
          </form>
      </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
