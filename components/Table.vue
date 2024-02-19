<template>
  <div class="q-pa-md q-gutter-sm">
    <div>
     <h3>Props section</h3> 
      <p class="h-3">Name : {{ name }}</p>
      <p class="h4">Category :{{ category }}</p>
      <p class="h5">Price :{{ price }}</p>
    </div>
    <q-btn label="Confirm" color="primary" @click="filter = true" />

    <br>
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
</template>


<script setup>
import event from "~/node_modules/quasar/src/utils/event";

    const props = defineProps({
        name: String,
        category: String,
        price: String,
    });

defineEmits(['nameTest'])

/*
method:{
  getData(event){
    this.$emit("customChange",`This si s2nd time values`)
  }
}
*/


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


