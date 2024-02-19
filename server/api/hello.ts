

//   export default defineEventHandler((event) => {
//     const data = await $fetch('https://dummyjson.com/products')

//     return data;
//   })

  export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
  
    const data = await $fetch('https://dummyjson.com/products', {
    //   headers: {
    //     Authorization: `token ${config.githubToken}`
    //   }
    })
  
    return data
  })
  