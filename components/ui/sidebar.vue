<template>
  <div class="flex h-screen w-16 flex-col justify-between border-e bg-base-300" data-theme="">
    <div>


      <div class="border-gray-200">
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
              <NuxtLink activeClass="bg-secondary text-secondary-content" to="/"
                class="group relative flex justify-center rounded px-2 py-1.5">
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
              <NuxtLink activeClass="bg-secondary text-secondary-content" to="/registers"
                class="group relative flex justify-center rounded px-2 py-1.5 ">

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
              <NuxtLink activeClass="bg-secondary text-secondary-content" to="/dashboard" 
                class="group relative flex justify-center rounded px-2 py-1.5 ">

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

    <!-- <div>
      <div class="p-4 flex gap-4">
        <button class="btn">Hello daisyUI</button>
        <select class="select w-full max-w-xs" v-model="colorMode.preference">
          <option disabled selected>Theme</option>
          <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
      </div>
    </div> -->

    <div class="space-y-1 border-t sticky inset-x-0 bottom-0 border-gray-100 text-green-400 p-2">
      <form action="#">
        <button type="submit" class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-3xl ">
          <Icon name="dashicons:database" />

        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { _themes as daisyThemes } from '#tailwind-config/daisyui'

// const colorMode = useColorMode();

// const themes = [
//   "system", ...daisyThemes
// ];
// const { fetchData } = useDashboardStore()
// const fetchDashboard = async () => {
//   console.log('actualizando');
//   await fetchData()
// }
</script>

<style></style>
