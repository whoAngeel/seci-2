<template>
  <div class="flex w-full h-full justify-center items-center flex-col gap-6">
    <p class="text-3xl uppercase font-medium badge " v-for="(t, index) in today" :key="index">
      {{ t }}
    </p>
  </div>

</template>

<script  setup>
import dayjs from "dayjs";
import 'dayjs/locale/es'
const today = computed(()=>{
  return dayjs().locale('es').format("dddd, MMMM D, YYYY").split(',')
})


</script>

