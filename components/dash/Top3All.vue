<template>
    <!-- <h3 class="text-xl text-center font-extrabold">Top 3 carreras (Todo) <Icon name="ph:ranking-bold"></Icon>
    </h3> -->
    <div class="stats stats-vertical shadow w-full px-2 bg-slate-200 text-slate-800 rounded-lg flex p-2 ">
      <div class="flex content-evenly items-center gap-2 my-1">
        <p class="badge badge-error badge-lg ordinal">1°</p>
        <div>
          <div class="stat-value text-success-content text-xl">{{ store.top3AllRecords[0]?.nombre }}</div>
          <div class="stat-desc text-success-content">{{ store.top3AllRecords[0]?.total }} personas ingresadas</div>
        </div>
      </div>

      <div class="flex content-evenly items-center gap-2 my-1">
        <p class="badge badge-error badge-lg ordinal">2°</p>
        <div>
          <div class="stat-value text-success-content text-xl">{{ store.top3AllRecords[1]?.nombre }}</div>
          <div class="stat-desc text-success-content">{{ store.top3AllRecords[1]?.total }} personas ingresadas</div>
        </div>
      </div>

      <div class="flex content-evenly items-center gap-2 my-1">
        <p class="badge badge-error badge-lg">3°</p>
        <div>
          <div class="stat-value text-success-content text-xl">{{ store.top3AllRecords[2]?.nombre }}</div>
          <div class="stat-desc text-success-content">{{ store.top3AllRecords[2]?.total }} personas ingresadas</div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>

const store = useDashboardStore()

</script>

<style></style>