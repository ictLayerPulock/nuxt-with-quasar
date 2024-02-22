<template>
  <div class="q-pa-md">
    <q-card >
      <q-card-section class="bg-white text-black">
        <div class="">
        <div class="row q-gutter-sm">
          <div class="col-12 col-md col-sm">
            <q-input
              :dense="dense"
              outlined
              label="Journal Start Date"
              v-model="start_date"
              type="date"
            />
          </div>
          <div class="col-12 col-md col-sm">
            <q-input
              :dense="dense"
              outlined
              v-model="end_date"
              type="date"
              label="Journal End Date"
            />
          </div>
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
                <q-btn label="Read" type="submit" color="deep-purple-4" />
              </div>
              <div><q-btn label="Reset" type="submit" color="red-14" /></div>
            </div>
          </div>
        </div>
      </div>
      </q-card-section>
    

      <q-separator />
    </q-card>
  </div>
</template>


<script>
import { ref } from "vue";

const stringOptions = [
  "Google",
  "Facebook",
  "Twitter",
  "Apple",
  "Oracle",
].reduce((acc, opt) => {
  for (let i = 1; i <= 5; i++) {
    acc.push(opt + " " + i);
  }
  return acc;
}, []);

const stringAuthorized = ["All", "Yes", "NO"];

const stringPayment = ["All", "Cash", "Online", "Bank"];

export default {
  setup() {
    const options = ref(stringOptions);
    const optionsAuthorized = ref(stringAuthorized);
    const optionsPayment = ref(stringPayment);

    return {
      dense: ref(true),
      start_date: ref(""),
      end_date: ref(""),
      model: ref(""),
      options,

      filterFn(val, update, abort) {
        // call abort() at any time if you can't retrieve data somehow

        setTimeout(() => {
          update(
            () => {
              if (val === "") {
                options.value = stringOptions;
              } else {
                const needle = val.toLowerCase();
                options.value = stringOptions.filter(
                  (v) => v.toLowerCase().indexOf(needle) > -1
                );
              }
            },

            // "ref" is the Vue reference to the QSelect
            (ref) => {
              if (val !== "" && ref.options.length > 0) {
                ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
              }
            }
          );
        }, 300);
      },

      authorized: ref(""),

      optionsAuthorized,

      filterAuthorized(val, update, abort) {
        setTimeout(() => {
          update(
            () => {
              if (val === "") {
                optionsAuthorized.value = stringAuthorized;
              } else {
                const needle = val.toLowerCase();
                optionsAuthorized.value = stringAuthorized.filter(
                  (v) => v.toLowerCase().indexOf(needle) > -1
                );
              }
            },

            // "ref" is the Vue reference to the QSelect
            (ref) => {
              if (val !== "" && ref.optionsAuthorized.length > 0) {
                ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
              }
            }
          );
        }, 300);
      },

      payment: ref(""),

      optionsPayment,

      filterPayment(val, update, abort) {
        setTimeout(() => {
          update(
            () => {
              if (val === "") {
                optionsPayment.value = stringPayment;
              } else {
                const needle = val.toLowerCase();
                optionsPayment.value = stringPayment.filter(
                  (v) => v.toLowerCase().indexOf(needle) > -1
                );
              }
            },

            // "ref" is the Vue reference to the QSelect
            (ref) => {
              if (val !== "" && ref.optionsPayment.length > 0) {
                ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
              }
            }
          );
        }, 300);
      },
    };
  },
};
</script>


