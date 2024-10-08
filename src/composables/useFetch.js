import { ref } from 'vue'

export default (path, onError) => {
  const loading = ref(false)
  const data = ref(null)
  const error = ref(false)

  const END_POINT = import.meta.env.VITE_API_ENDPOINT

  const doFetch = async () => {
    loading.value = true
    error.value = false
    data.value = null
    const fetch_response = await fetch(END_POINT + path)
    if (!fetch_response.ok) {
      onError()
      error.value = true
      loading.value = false
      return
    }
    const response = await fetch_response.json()
    data.value = response
    loading.value = false
  }

  doFetch()

  return {
    loading,
    data,
    error
  }
}