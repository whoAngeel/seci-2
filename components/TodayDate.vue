<template>
  <div class="flex w-full h-full justify-center items-center">
    <p class="text-2xl uppercase font-medium badge ">{{ today }}</p>
  </div>
</template>

<script  setup>
import dayjs from "dayjs";
import 'dayjs/locale/es'
const today = computed(()=>{
  return dayjs().locale('es').format("dddd, MMMM D, YYYY")
})
</script>

