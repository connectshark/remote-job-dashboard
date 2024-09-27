import { ref } from 'vue'

export default (path) => {
  const loading = ref(false)
  const data = ref(null)

  const END_POINT = import.meta.env.VITE_API_ENDPOINT

  const doFetch = async () => {
    loading.value = true
    data.value = null
    const fetch_response = await fetch(END_POINT + path)
    const response = await fetch_response.json()
    data.value = response
    loading.value = false
  }

  doFetch()

  return {
    loading,
    data
  }
}