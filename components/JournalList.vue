<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="my-card">
      <q-card-section class="bg-white text-black">
        <div class="row">
          <div class="col-6">
            <div class="q-gutter-x-md">
              <strong class="text-h6">Journal</strong><i> List</i>
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
            <q-input v-model="search" dense outlined placeholder="Search">
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
          <template v-slot:header-cell-journal_id="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                dense
                outlined
                class="bg-white text-center q-my-sm rounded-borders"
                v-model="journal_id"
                placeholder="Journal ID"
              />
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-journal_date="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                outlined
                class="bg-white q-my-sm rounded-borders"
                v-model="journal_date"
                type="date"
                dense
              />
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-voucher_type="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-select
                dense
                outlined
                class="bg-white q-my-sm rounded-borders"
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
                    <q-item-section class="text-grey q-px-sm">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-amount="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white text-center q-my-sm rounded-borders"
                v-model="amount"
                dense
                outlined
                placeholder="Amount"
              />
              <div class="text-white text-right">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-payment_method="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-narration="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                outlined
                class="bg-white text-left q-my-sm rounded-borders"
                v-model="narration"
                dense
                placeholder="Narration"
              />
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-created_by="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white text-left q-my-sm rounded-borders"
                v-model="created_by"
                dense
                outlined
                placeholder="User"
              />
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-posting_date="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <q-input
                class="bg-white q-my-sm rounded-borders"
                v-model="posting_date"
                type="date"
                dense
                outlined
              />
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <template v-slot:header-cell-authorized="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <div class="text-white text-left">{{ props.col.label }}</div>
            </q-th>
          </template>
          <!-- ================ table body Start================= -->
          
          <template v-slot:body-cell-authorized="props">
            <q-td :props="props">
              <q-badge color="blue" :label="props.value" />
                <!-- <q-option-group v-model="authorized_group"  :options_authorized="options_authorized"  color="yellow" type="toggle" /> -->
            </q-td>
          </template>
          <!-- ================ table body End================= -->
          <template v-slot:header-cell-action="props">
            <q-th :props="props" class="bg-deep-purple-4">
              <div class="text-white text-left q-pt-sm">
                {{ props.col.label }}
              </div>
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

const stringOptions = [
  "Stock Journa",
  "Credit Note",
  "Receipt",
  "Physical Stock",
  "Oracle",
];

const columns = [
  {
    name: 'name',
    name: "journal_id",
    label: "Journal ID",
    align: "left",
    field: "journal_id",
  },
  {
    name: "journal_date",
    label: "Journal Date",
    align: "left",
    field: "journal_date",
  },
  {
    name: "voucher_type",
    field: "voucher_type",
    label: "Voucher Type",
    align: "left",
  },

  // 1.

  {
    name: "amount",
    align: "center",
    label: "Amount",
    field: "amount",
    align: "right",
  },
  // 2.
  {
    name: "payment_method",
    label: "Payment Method",
    field: "payment_method",
    align: "left",
  }, // 3.
  { name: "narration", label: "Narration", field: "narration", align: "left" }, // 4.
  {
    name: "created_by",
    label: "Created By",
    field: "created_by",
    align: "left",
  }, // 5.
  {
    name: "posting_date",
    label: "Posting Date",
    field: "posting_date",
    align: "left",
  }, // 6.
  {
    name: "authorized",
    label: "Authorized",
    field: "authorized",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  // 7.
  {
    name: "action",
    label: "Action",
    field: "action",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    journal_id: 100000020,
    journal_date: "03/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
    authorized: "text",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
];

export default {
  setup() {
    const options = ref(stringOptions);
    return {
      dense: ref(true),
      journal_id: ref(""),
      journal_date: ref(""),
      posting_date: ref(""),
      amount: ref(""),
      narration: ref(""),
      created_by: ref(""),
      posting_date: ref(""),
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

      authorized_group: ref(['op1']),

      options_authorized: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ]
    };
  },
};
</script>