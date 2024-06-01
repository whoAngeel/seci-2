<template>
  <div class="bg-purple-400 text-slate-800 h-36  rounded-lg p-2 ">
    <h2 class="text-2xl text-center font-bold pt-2 -mb-4">{{ career?.nombre }}</h2>

    <div class="flex justify-between items-center content-center h-full">

      <div class="flex flex-row items-center w-3/5">
        <div class="flex flex-row w-full items-center content-center justify-between">
          <button class="btn btn-square border-none font-black w-1/5 btn-secondary text-2xl btn-sm"
            :disabled="career.mujeres == 0" @click="decrementCount('female')">-</button>
          <div class="text-sm font-medium flex items-center w-3/5">
            <Icon name="mdi:human-female" class="text-4xl font-bold text-pink-700" />
            <div class="stat-value text-center text-lg">{{ career.mujeres }}</div>
          </div>
          <button class="btn btn-square btn-sm btn-success w-1/5  text-2xl font-black"
            @click="incrementCount('female')">+</button>
        </div>

        <div class="flex flex-row w-full items-center content-center justify-between mt-2">
          <button class="btn btn-square border-none font-black w-1/5 btn-secondary text-2xl btn-sm"
            :disabled="career.hombres == 0" @click="decrementCount('male')">-</button>
          <div class="text-sm font-medium flex items-center w-3/5">
            <Icon name="mdi:human-male" class="text-4xl font-bold text-blue-700" />
            <div class="stat-value text-center text-lg">{{ career.hombres }}</div>
          </div>
          <button class="btn btn-square btn-sm btn-success w-1/5 text-2xl font-black"
            @click="incrementCount('male')">+</button>
        </div>

      </div>
      <div class="w-2/5  flex flex-col text-center">
        <label class="text-center text-lg font-semibold">TOTAL</label>
        <span class="text-3xl stat-value">
          {{ career.total }}
        </span>
      </div>
    </div>



  </div>
</template>

<script setup>
const router = useRouter()
const props = defineProps(['career'])
const emits = defineEmits(['count-updated'])
const store = useMyRecordStore()
const dayjs = useDayjs()

// await useAsyncData('recordToday', ()=> store.fetchTodayRecord())


const incrementCount = async (gender) => {
  // await updateCount(gender, true) 
  console.log('inc', props.career.name);
  try {
    await updateCount(gender, true)
    if (gender === 'female') {
      props.career.mujeres++
    } else if (gender === 'male') {
      props.career.hombres++
    }
    props.career.total = props.career.mujeres + props.career.hombres

  } catch (error) {
    console.log(error);
  }

}

const decrementCount = async (gender) => {
  // await updateCount(gender, false)
  console.log('dec');
  try {
    await updateCount(gender, false)
    // Decrementar los contadores localmente después de que la API haya sido actualizada
    if (gender === 'female' && props.career.mujeres > 0) {
      props.career.mujeres--
    } else if (gender === 'male' && props.career.hombres > 0) {
      props.career.hombres--
    }
    props.career.total = props.career.mujeres + props.career.hombres
  } catch (error) {
    console.error(error)
  }
}
const updateCount = async (gender, increment) => {
  let now = dayjs().format('DD/MM/YYYY')

  $fetch('/api/records/update', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: now,
      careerName: props.career.name,
      gender,
      increment,
    }),
  })
    .then((response) => {
      console.log(JSON.parse(response.body));
      // if (!response.ok) {
      //   throw new Error("Error al actualizar el contador")
      // }
      router.push('/')
    })
    .catch((error) => {
      console.error(error)
    })
}

</script>
