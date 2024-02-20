<script setup lang="ts">
const { data } = await useFetch('/api/hello')

function nameTest(dataPass){
    console.log(dataPass)
   
}

</script>


<template>
    <Filter />  
    <JournalList />  

    
    <Table @name-test="nameTest" 
        :name="`iPhone`"
        :category="`Human`"
        :price="`120`"
    />
    <pre>{{ data }}</pre> 
</template>