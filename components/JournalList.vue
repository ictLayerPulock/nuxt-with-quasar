<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="my-card">
      <q-card-section class="bg-white text-black">
        <div class="row">
          <div class="col-6">
            <div class="q-gutter-x-md">
              <strong class="text-h6">Journal</strong>
              <i> List</i>
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
        <div class="row q-gutter-sm">
          <div class="col-12 col-lg-2 col-md col-sm">
            <q-input
              v-model="search"
              dense
              outlined
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md col-sm q-gutter-sm row justify-end">
            <q-btn-dropdown outline color="purple-4" label="Column Visibility">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn outline color="red" label="PDF" />
            <q-btn outline color="green" label="Excel" />
            <q-btn outline color="green" label="CSV" />
            <q-btn outline color="purple-4" label="Copy" />
            <q-btn outline color="blue-grey-4" label="Print" />
            <q-btn-dropdown outline color="blue-5" label="Length">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <!-- <q-option-group
          v-model="separator"
          inline
          class="q-mb-md"
          :options="[
            { label: 'Horizontal (default)', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' },
          ]"
        /> -->

        <q-table
          flat
          bordered
          title=""
         
          :rows="rows"
          :columns="columns"
          row-key="name"
          :separator="separator"
        >
          <template v-slot:header-cell-journal_id="props" >
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
              dense

                class="bg-white text-center q-my-sm"
                v-model="journal_id"
               
                placeholder="Journal ID"
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-journal_date="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white q-my-sm"
                v-model="journal_date"
                type="date"
                dense
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-voucher_type="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-select
                dense
                class="bg-white"
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
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-amount="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white text-center"
                v-model="journal_id"
                dense
                placeholder="Amount"
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-payment_method="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-narration="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white text-center"
                v-model="journal_id"
                dense
                placeholder="Narration"
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-created_by="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white text-center"
                v-model="journal_id"
                dense
                placeholder="User"
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-posting_date="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white"
                v-model="journal_date"
                type="date"
                dense
              />
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-authorized="props">
            <q-th :props="props" class="bg-deep-purple-4">
              
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-action="props">
            <q-th :props="props" class="bg-deep-purple-4">
              
              <div class="text-white text-center">{{ props.col.label }}</div>
            </q-th>
          </template>
        </q-table>
      </div>
      <q-separator />
    </q-card>
  </div>
</template>
  
  
  <script>
import { ref } from "vue";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const columns = [
  {
    name: "journal_id",
    required: true,
    label: "Journal ID",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "journal_date",
    required: true,
    label: "Journal Date",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "voucher_type",
    required: true,
    label: "Voucher Type",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

  // 1.

  {
    name: "amount",
    align: "center",
    label: "Amount",
    field: "amount",
    sortable: true,
  },
  // 2.
  {
    name: "payment_method",
    label: "Payment Method",
    field: "payment_method",
    sortable: true,
  }, // 3.
  { name: "narration", label: "Narration", field: "narration"}, // 4.
  { name: "created_by", label: "Created By", field: "created_by" }, // 5.
  { name: "posting_date", label: "Posting Date", field: "posting_date" }, // 6.
  {
    name: "authorized",
    label: "Authorized",
    field: "authorized",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  // 7.
  {
    name: "action",
    label: "Action",
    field: "action",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },

];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
    email: "email@gmail.com",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
    email: "email@gmail.com",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
    email: "email@gmail.com",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  setup() {
    const options = ref(stringOptions);
    return {
      dense: ref(true),
      filter: ref(""),
      separator: ref("cell"),
      columns,
      rows,
      onItemClick() {
        // console.log('Clicked on an Item')
      },
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