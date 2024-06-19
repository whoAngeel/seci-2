import axios from "axios"

export const useUseFetcher = (url: string) => {
  const data = ref(null)
  const isLoading = ref(true)
  const error = ref(null)

  axios.get(url).then(res => data.value = res.data).catch(err => error.value = err).finally(() => isLoading.value = false)

  return {
    data, isLoading,
    error
  }

}
