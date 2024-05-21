<template>
  <div class="h-full">
    <h5 class="text-3xl">
      Index {{ typeof (now) }}, {{ now }}
    </h5>
    <div>
      <h2 class="text-3xl">Registros de hoy</h2>
      <RecordToday class="h-full" />
    </div>
    <!-- <span class="badge badge-xs">{{ todso }}</span> -->


    <!-- <div>{{ today }}</div> -->
  </div>
</template>


<script lang="ts" setup>

const dayjs = useDayjs()

let now = dayjs().format('DD/MM/YYYY')
// console.log(now);
// // const today = moment().format('DD/MM/YYYY')

// const { data: todso } = useFetch('/api/records', { method: "GET" })
// const todayRecord = ref(null)
// onBeforeMount(async() => {
//   const { data: hoy, error } = await useFetch('/api/records', { method: "POST" })
//   if(error){
//     console.log("Error", error);
//   }
//   todayRecord.value = hoy.value
// })
</script>

<style></style>