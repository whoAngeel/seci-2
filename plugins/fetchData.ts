export default defineNuxtPlugin(async(nuxtApp) => {
    const store = useDashboardStore()
    console.log('Haciendo fetch de los datos del dashboard');
    await store.fetchData()
})
