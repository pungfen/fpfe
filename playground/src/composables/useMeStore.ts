export const useMeStore = defineStore('me', () => {
  const data = ref({
    name: 'fp'
  })

  return { data }
})