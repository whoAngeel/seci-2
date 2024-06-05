<template>
  <div class="flex  h-full w-full items-center  flex-col rounded-2xl static ">
    <h2 class="text-2xl absolute top-16  ">
      <p class="bg-purple-400 text-zinc-800 p-6 py-7 rounded-lg">
        Carreras de Hoy - <span class="font-bold ">{{ recordToday?.date }}</span>
      </p>
    </h2>
    <div class="mt-6 bg-base-300 p-6 rounded-lg absolute top-28 z-10" >
      <tableToday :recordToday="recordToday"/>
      <p class="text-right text-lg font-medium mr-4 mt-2">Total: <span class="badge badge-primary badge-md">{{ totalDia }}</span></p>
    </div>

  </div>
</template>

<script setup>
import tableToday from '../components/ui/tableToday.vue';


const {recordToday, carreras, totalDia} = useMyRecordStore()

</script>

<style></style>