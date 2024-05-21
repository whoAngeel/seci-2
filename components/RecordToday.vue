<template>
  <div>
    <div id="loader" v-if="isFetching" class="mx-auto w-full flex justify-center h-96 items-center -ml-10  ">
      <loader />
    </div>
    <div v-else-if="error" class="text-error text-center h-96 flex justify-center items-center">
      Error: {{ error }}
    </div>
    <div v-else>
      <!-- <CardCareer v-for="career in data.carreras" :career="career" key="career._id"/> -->
      carreras
    </div>

  </div>
</template>

<script setup>
import loader from './ui/loader.vue';
import { useFetch } from '@vueuse/core'

const carreras = ref()
const { isFetching, error, data } = useFetch('/api/records/today').get().json()


</script>

<style scoped>
/* #loader{ */
/* height: 90%; */
/* } */
</style>