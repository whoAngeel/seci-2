<template>
  <div class="h-full container">

    <RecordToday class="h-full counters pr-4 flex " :isLoading="isLoading" :error="error"/>
    <div class="stats bg-slate-600 flex justify-center items-center">
      <stats-today />
    </div>
    <div class="calendar">calendar</div>

  </div>
</template>


<script setup>
const dayjs = useDayjs()

const recordStore = useMyRecordStore()
const { isLoading, error } = recordStore

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
