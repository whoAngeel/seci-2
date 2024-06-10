export default defineNuxtPlugin((nuxtApp) => {
    const store = useDashboardStore()
    console.log('Haciendo fetch de los datos del dashboard');
    store.fetchData()
})
