<template>
  <div class="bg-purple-400 text-slate-800 h-36  rounded-lg p-2 ">
    <h2 class="text-2xl text-center font-bold pt-2 -mb-4">{{ career?.nombre }}</h2>

    <div class="flex justify-between items-center content-center h-full">

      <div class="flex flex-row items-center w-3/5 ">
        <div class="flex flex-row w-full items-center content-center justify-between">
          <button class="btn btn-square border-none font-black w-1/5 btn-secondary text-2xl btn-sm"
            :disabled="career.mujeres == 0" @click="decrement('mujeres', false)">-</button>
          <div class="text-sm font-medium flex items-center  w-3/5 ">
            <Icon name="mdi:human-female" class="text-4xl font-bold text-pink-700" />
            <div class="stat-value text-center text-lg">{{ career.mujeres }}</div>
          </div>
          <button class="btn btn-square btn-sm btn-success w-1/5  text-2xl font-black"
            @click="increment('mujeres', true)">+</button>
        </div>

        <div class="flex flex-row w-full items-center content-center justify-between mt-2">
          <button class="btn btn-square border-none font-black w-1/5 btn-secondary text-2xl btn-sm"
            :disabled="career.hombres == 0" @click="decrement('hombres', false)">-</button>
          <div class="text-sm font-medium flex items-center w-3/5 z-20">
            <Icon name="mdi:human-male" class="text-4xl font-bold text-blue-700" />
            <div class="stat-value text-center text-lg">{{ career.hombres }}</div>
          </div>
          <button class="btn btn-square btn-sm btn-success w-1/5 text-2xl font-black"
            @click="increment('hombres', true)">+</button>
        </div>

      </div>
      <div class="w-2/5  flex flex-col text-center">
        <label class="text-center text-base font-semibold">TOTAL</label>
        <span class="text-3xl stat-value">
          {{ career.total }}
        </span>
      </div>
    </div>



  </div>
</template>

<script setup>
const router = useRouter()
const props = defineProps({
  career: Object
})
const emits = defineEmits(['count-updated'])
const { updateCareer } = useMyRecordStore()
const dayjs = useDayjs()

const increment=(gender)=>{
  updateCareer(props.career.name, gender, true)
}

const decrement=(gender)=>{
  updateCareer(props.career.name, gender, false)
}


</script>
