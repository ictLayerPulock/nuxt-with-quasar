export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
  
    const data =  [
        {
          label: 'All'
        },
        {
          label: 'Cash'
        },
        {
          label: 'Online'
        },
        {
          label: 'Bank'
        },
        {
          label: 'Oracle'
        }
      ]
  
    return data 
  })
  