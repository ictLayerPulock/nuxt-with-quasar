<template>
  <div class="q-gutter-md q-pa-md">
    <!-- Filters -->
    <q-card>
      <q-card-section class="bg-white text-black">
        <div class="">
          <div class="row q-gutter-sm">
            <div class="col-12 col-md col-sm">
              <q-input
                label="Journal Start Date"
                v-model="start_date"
                mask="date"
                color="primary"
                dense
                outlined
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Select Journal Start Date',
                ]"
              >
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date
                    v-model="start_date"
                    range
                    mask="YYYY-MM-DD"
                    color="primary"
                    v-close-popup
                  />
                </q-popup-proxy>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" color="primary" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md col-sm">
              <q-input
                label="Journal End Date"
                v-model="end_date"
                mask="date"
                color="primary"
                dense
                outlined
                :rules="[
                  (val) => (val && val.length > 0) || 'Select Journal End Date',
                ]"
              >
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date
                    v-model="end_date"
                    range
                    mask="YYYY-MM-DD"
                    color="primary"
                    v-close-popup
                  />
                </q-popup-proxy>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" color="primary" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md col-sm">
              <PaymentMethod />
            </div>
            <div class="col-12 col-md col-sm">
              <VoucherType />
            </div>
            <div class="col-12 col-md col-sm">
              <q-select
                label="Authorized"
                v-model="authorized"
                @filter="filterFn"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="authorizedList"
                dense
                outlined
                :rules="[(val) => val || 'Please select a authorized']"
              >
              </q-select>
            </div>
            <div class="col-12 col-md col-sm">
              <div
                class="row col-2 col-12 col-md-12 col-sm float-left q-gutter-sm"
              >
                <div>
                  <q-btn label="Read" type="submit" color="primary" />
                </div>
                <div><q-btn label="Reset" type="submit" color="red-14" /></div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-separator />
    </q-card>
    <!-- Balance Sheet -->
    <q-card>
      <q-card-section class="row items-center justify-between">
        <div class="text-subtitle2">Journal Book List</div>
        <div class="col row items-center justify-end q-my-none">
          <q-btn
            color="primary"
            style="width: 120px"
            type="button"
            @click="filter_show = !filter_show"
            :disable="loading"
            icon="filter_alt"
            label="Filters"
            no-caps
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const stringAuthorized = ["All", "Yes", "NO"];
const start_date = ref(null);
const end_date = ref(null);
const authorized = ref(null);
const authorizedList = ref(stringAuthorized);

async function filterFn(val, update) {
  if (val === "") {
    update(() => {
      authorizedList.value;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    authorizedList.value = authorizedList.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}
// const start_date = ref({ from: "2024/02/08", to: "2024/02/10" })
</script>