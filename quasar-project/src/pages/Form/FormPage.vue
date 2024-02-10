<template>
  <div class="row q-pa-md">
    <div class="col-4"></div>
    <div class="col">
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">This is Basic Input form</div>
            <div class="text-subtitle2 pb-5">by Pulock</div>

            <q-form class="q-gutter-md">
              <q-input filled v-model="name" label="Your name *" />
              <q-input filled v-model="email" label="Your Email *" />
              <q-input filled v-model="phone" label="Your Phone *" />
              <q-select
                label="Select your login path"
                filled
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                hint="Basic filtering"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <br />

              <div>
                <q-btn label="Submit" type="submit" color="green" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-4"></div>
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
  "MySql",
  "Java",
  "PHP",
  "Nuxt",
  "Quasar",
];

export default {
  setup() {
    const options = ref(stringOptions);

    return {
      model: ref(null),
      options,

      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
      name: ref(""),
      email: ref(""),
      phone: ref(""),
    };
  },
};
</script>
