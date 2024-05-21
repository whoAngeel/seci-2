<template>
  <div class="h-full container">
    
      <RecordToday class="h-full counters pr-4 flex " />
      <div class="stats bg-slate-600">stats</div>
      <div class="calendar">calendar</div>
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

<style scoped>
.container {  display: grid;
  grid-template-columns: 3fr 1.8fr 0.8fr 2fr;
  grid-template-rows: 1.3fr 1fr 0.9fr 1fr;
  gap: 0px 0px;
  /* width: 100%; */
  grid-auto-flow: row;
  grid-template-areas:
    "counters counters counters stats"
    "counters counters counters stats"
    "counters counters counters calendar"
    "counters counters counters calendar";
}

.counters { grid-area: counters; }

.stats { grid-area: stats; }

.calendar { grid-area: calendar; }

</style>
