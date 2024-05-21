<template>
  <div>
    <div id="loader" v-if="pending" class="mx-auto w-full flex justify-center h-96 items-center -ml-10  ">
      <loader />
    </div>
    <div v-else-if="error" class="text-error text-center h-96 flex justify-center items-center">
      Error: {{ error }}
    </div>
    <div v-else class=" grid grid-cols-4 gap-4 ">


      <!-- <div  class=""> -->
        <card-career v-for="(career, index ) in carreras" :key="index" :career="career" />

      <!-- </div> -->
      <!-- {{ data?.record.carreras }} -->
    </div>

  </div>
</template>

<script setup>
import loader from './ui/loader.vue';
import { useFetch } from '@vueuse/core'

const carreras = ref()
// const { pending, error, data } = await useAsyncData().
const { data, error, pending, refresh } = await useAsyncData('record', () => $fetch('/api/records/today'))

if (data) carreras.value = data.value?.record?.carreras
else console.log(data.value.record);
// console.log(carreras.value);
// console.log(data.value?.record);

</script>

<style scoped>
/* #loader{ */
/* height: 90%; */
/* } */
</style>