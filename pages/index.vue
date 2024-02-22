<script setup lang="ts">
const { data } = await useFetch('/api/hello')

function nameTest(dataPass){
    console.log(dataPass)
   
}

</script>


<template>
    <Filter />  
    <li><NuxtLink to="/balance-sheet">balance</NuxtLink></li>
    <li><NuxtLink to="/journal-book">journal-book</NuxtLink></li>
    <JournalList />  

   
    <Table @name-test="nameTest" 
        :name="`iPhone`"
        :category="`Human`"
        :price="`120`"
    />
    <pre>{{ data }}</pre> 
</template>