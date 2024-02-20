<template>
    <div class="q-pa-md q-gutter-sm">
      <q-card class="my-card">
        <q-card-section class="bg-white text-black">
          <div class="row">
            <div class="col-6">
              <div>
                <strong class="text-h6">Filter</strong>
                <i> Options</i>
              </div>
            </div>
            <div class="col-6">
              <div class="row q-pa-md q-gutter-md justify-end">
                <q-badge rounded color="green" />
                <q-badge rounded color="yellow" />
                <q-badge rounded color="red" />
              </div>
            </div>
          </div>
          <hr />
        </q-card-section>
        <div class="q-pa-md">
          <div class="row q-gutter-x-sm">
            <div class="col-12 col-md col-sm">
              <p>Journal Start Date</p>
              <q-input outlined :dense="dense" v-model="start_date" type="date" />
            </div>
            <div class="col-12 col-md col-sm">
              <p>Journal End Date</p>
              <q-input :dense="dense" outlined v-model="end_date" type="date" />
            </div>
            <div class="col-12 col-md col-sm">
              <p>Payment Method</p>
              <q-select
                :dense="dense"
                outlined
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
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
              <p>Voucher Type</p>
              <q-select
                :dense="dense"
                outlined
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
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
            <div class="col-12 col-md col-sm-2">
              <p class="q-pt">Authorized</p>
              <q-select
                :dense="dense"
                outlined
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
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
          </div>
          <br />
          <hr />
  
          <div class="row text-capitalize">
            <div class="col-10"></div>
            <div
              class="row col-2 col-12 col-md-12 col-sm justify-end q-gutter-x-sm"
            >
              <div><q-btn label="Read" type="submit" color="purple-4" /></div>
              <div><q-btn label="Reset" type="submit" color="red-14" /></div>
            </div>
          </div>
        </div>
  
        <q-separator />
      </q-card>
    </div>
  </template>
  
  
  <script>
  import { ref } from "vue";
  
  const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
  
  export default {
    setup() {
      const options = ref(stringOptions);
  
      return {
        dense: ref(true),
        start_date: ref(""),
        end_date: ref(""),
        model: ref("All"),
        options,
  
        filterFn(val, update, abort) {
          update(() => {
            const needle = val.toLowerCase();
            options.value = stringOptions.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1
            );
          });
        },
      };
    },
  };
  </script>