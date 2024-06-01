<template>
  <div class="">
    <div id="loader" v-if="isLoading" class="mx-auto w-full flex justify-center h-96 items-center -ml-10  ">
      <loader />
    </div>
    <div v-else-if="error" class="text-error text-center h-96 flex justify-center items-center">
      Error: {{ error }}
    </div>
    <div v-else class=" grid grid-cols-4 gap-4  px-2">
      <card-career v-for="(career, index ) in carreras" :key="index" :career="career" />
    </div>
  </div>
</template>

<script setup>
import loader from './ui/loader.vue';
const props = defineProps({
  isLoading: Boolean,
  error: String
})
const store = useMyRecordStore()
const {carreras} = store

onUnmounted(()=>{
  store.saveRecordToday()
})

window.addEventListener('beforeunload', (event)=>{
  event.preventDefault()
  store.saveRecordToday()
})
</script>

