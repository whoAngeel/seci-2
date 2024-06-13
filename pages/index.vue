<template>
  <div class="h-full container">

    <RecordToday class="h-full counters  " :isLoading="isLoading" :error="error" />
    <div class="stats stats-vertical shadow mx-6 my-2 flex flex-col justify-center items-center">
      <stats-today />
    </div>
    <div class="calendar stats stats-vertical shadow mx-6 my-2">
      <today-date />
    </div>

  </div>
</template>


<script setup>
const dayjs = useDayjs()

const recordStore = useMyRecordStore()
const { isLoading, error } = recordStore
const dashStore = useDashboardStore()
onBeforeUnmount(async() => {
  await dashStore.fetchData()
})
</script>

<style scoped>
.container {
  display: grid;
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

.counters {
  grid-area: counters;
}

.stats {
  grid-area: stats;
}

.calendar {
  grid-area: calendar;
}
</style>
