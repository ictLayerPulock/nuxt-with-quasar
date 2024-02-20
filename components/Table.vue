<template>
  <div class="q-pa-md q-gutter-sm">
    <div>
     <h5>Props section</h5> 
      <p class="h-3">Name : {{ name }}</p>
      <p class="h4">Category :{{ category }}</p>
      <p class="h5">Price :{{ price }}</p>
    </div>
    <br>
    <h5>Emit section</h5> 
    <!-- <q-btn label="Confirm" color="primary" @click="filter = true" /> -->

  
    <button @click="$emit('nameTest',`this is value`)">Emit Value</button> <br>
    <button @click="getData">Emit Value Way Two</button>
    <br>
    <q-dialog v-model="filter" persistent>
  
        <div class="q-pa-md"  style="width: 800px; max-width: 80vw;">
          <q-card class="my-card">
           
            <div class="q-pa-md">
              <div class="row q-gutter-sm">
              
                <div class="col-12 col-md col-sm">
                  <q-select
                    outlined
                    :dense="dense"
                    v-model="payment"
                    clearable
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    label="Payment Method"
                    :options="optionsPayment"
                    @filter="filterPayment"
                    @filter-abort="abortFilterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-12 col-md col-sm">
                  <q-select
                    outlined
                    :dense="dense"
                    v-model="model"
                    clearable
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    label="Voucher Type"
                    :options="options"
                    @filter="filterFn"
                    @filter-abort="abortFilterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-12 col-md col-sm">
                  <q-select
                    outlined
                    :dense="dense"
                    v-model="authorized"
                    clearable
                    use-input
                    input-debounce="0"
                    hide-selected
                    fill-input
                    label="Authorized"
                    :options="optionsAuthorized"
                    @filter="filterAuthorized"
                    @filter-abort="abortFilterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-12 col-md col-sm">
                  <div
                    class="row col-2 col-12 col-md-12 col-sm justify-center q-gutter-sm"
                  >
                    <div>
                      <q-btn label="Read" type="submit" color="deep-purple-4" v-close-popup />
                    </div>
                    <div>
                      <q-btn label="Reset" type="submit" color="red-14" v-close-popup />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <q-separator />
          </q-card>
        </div>
   
    </q-dialog>
  </div>
  <br>
  <h5>API calling from server </h5> 
</template>


<script setup>

  const props = defineProps({
      name: String,
      category: String,
      price: String,
  });

// 1st way
defineEmits(['nameTest'])


// 2nd way

function getData(){
    $emit("customChange",`This si s2nd time values`)
  }



// 3rd way
/*
export default{
  setup(props, {emit}){
    const getData = (event)=>{
      emit("customChange", `This si 3rd time values`)
    }
  }
  return{
    getData,
  }
}
*/

</script>


