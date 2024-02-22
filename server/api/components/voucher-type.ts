export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
  
    const data =  [
        {
          label: 'Google'
        },
        {
          label: 'Facebook'
        },
        {
          label: 'Twitter'
        },
        {
          label: 'Apple'
        },
        {
          label: 'Oracle'
        }
      ]
  
    return data
  })
  