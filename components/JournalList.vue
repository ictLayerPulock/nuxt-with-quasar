<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="my-card">
      <q-card-section class="bg-white text-black">
        <div class="row">
          <div class="col-6">
            <div>
              <strong class="text-h6">Journal</strong>
              <i class="text-subtitle1"> List</i>
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
                    <q-item-label>Journa ID</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Journa Date</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Voucher Type</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Amount</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Payment Method</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Narration</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Created By</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Posting Date</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Authorized</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Action</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Restore Default</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn outline color="red" label="PDF" />
            <q-btn
              outline
              color="green"
              label="Excel"
              no-caps
              @click="exportTable"
            />
            <q-btn outline color="green" label="CSV" />
            <q-btn outline color="purple-4" label="Copy" />
            <q-btn outline color="blue-grey-4" label="Print" />
            <q-btn-dropdown outline color="blue-5" label="Length">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>5</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>10</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>25</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>50</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>100</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>200</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <q-table
          outlined
          title=""
          :rows="rows"
          :columns="columns"
          row-key="name"
          :separator="separator"
        >
          <template v-slot:header-cell-journal_id="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                dense
                outlined
                class="bg-white text-center q-my-sm rounded-borders"
                v-model="journal_id"
                label="Journal ID"
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-journal_date="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                outlined
                class="bg-white q-my-sm rounded-borders"
                v-model="journal_date"
                type="date"
                dense
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-voucher_type="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
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
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-amount="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                class="bg-white text-center q-my-sm rounded-borders"
                v-model="amount"
                dense
                outlined
                label="Amount"
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-payment_method="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <div class="text-white text-left q-pt-sm">
                {{ props.col.label }}
              </div>
            </q-th>
          </template>
          <template v-slot:header-cell-narration="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                outlined
                class="bg-white text-left q-my-sm rounded-borders"
                v-model="narration"
                dense
                label="Narration"
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-created_by="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                class="bg-white text-left q-my-sm rounded-borders"
                v-model="created_by"
                dense
                outlined
                label="User"
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-posting_date="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              <q-input
                class="bg-white q-my-sm rounded-borders"
                v-model="posting_date"
                type="date"
                dense
                outlined
              />
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:header-cell-authorized="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white q-pt-sm">
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:body-cell-authorized="props">
            <q-td :props="props">
              <q-toggle
                v-model="authorized"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
              />
            </q-td>
          </template>

          <template v-slot:header-cell-action="props">
            <q-th :props="props" class="bg-deep-purple-4 text-white">
              {{ props.col.label }}
            </q-th>
          </template>
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn
                class="rounded-borders"
                padding="xs"
                size="15px"
                color="deep-purple-4"
                icon="add"
              >
                <q-menu
                  anchor="center start"
                  color="deep-purple-4"
                  self="top right"
                >
                  <q-item clickable>
                    <q-item-section>View</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Edit</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Authorized</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Reverse</q-item-section>
                  </q-item>
                </q-menu>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
      <p class="q-pa-sm">
        This is my table for demo Application by Pulock
      </p>
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
    name: "name",
    name: "journal_id",
    label: "Journal ID",
    align: "left",
    field: "journal_id",
    sortable: true,
  },
  {
    name: "journal_date",
    label: "Journal Date",
    align: "left",
    field: "journal_date",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "voucher_type",
    field: "voucher_type",
    label: "Voucher Type",
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },

  // 1.

  {
    name: "amount",
    align: "center",
    label: "Amount",
    field: "amount",
    align: "right",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  // 2.
  {
    name: "payment_method",
    label: "Payment Method",
    field: "payment_method",
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  }, // 3.
  {
    name: "narration",
    label: "Narration",
    field: "narration",
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  }, // 4.
  {
    name: "created_by",
    label: "Created By",
    field: "created_by",
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  }, // 5.
  {
    name: "posting_date",
    label: "Posting Date",
    field: "posting_date",
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
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
    voucher_type: "Stock ",
    payment_method: "Online",
    narration: "Adjustment for COGS",
    created_by: "Mushahadur Rahman Khan",
    posting_date: "22/05/2022",
    authorized: "text",
  },
  {
    journal_id: 1020,
    journal_date: "12/05/2021",
    amount: "11890",
    voucher_type: "Stock ",
    payment_method: "Cash",
    narration: " for COGS",
    created_by: "pulock",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100,
    journal_date: "02/05/2024",
    amount: "11,387",
    voucher_type: "Stock Journal",
    payment_method: "Online",
    narration: "Adjustment",
    created_by: "mrk",
    posting_date: "3/7/2025",
  },
  {
    journal_id: 1,
    journal_date: "02/05/2024",
    amount: "11,387.08",
    voucher_type: "Stock ",
    payment_method: "Cash",
    narration: "COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 1,
    journal_date: "02/05/2024",
    amount: "11,3",
    voucher_type: "Stock Journal",
    payment_method: "Online",
    narration: "Adjustment for",
    created_by: "mrk",
    posting_date: "02/05/2024",
  },
  {
    journal_id: 100000020,
    journal_date: "02/05/2024",
    amount: "11",
    voucher_type: "Stock Journal",
    payment_method: "Cash",
    narration: "for COGS",
    created_by: "Mushahadur",
    posting_date: "02/05/2024",
  },
];

export default {
  setup() {
    const options = ref(stringOptions);
    return {
      search: ref(""),
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
      authorized: ref(false),
      onItemClick() {
        // console.log('Clicked on an Item')
      },
      // exportTable() {
      //   // naive encoding to csv format
      //   const content = [columns.map((col) => wrapCsvValue(col.label))]
      //     .concat(
      //       rows.map((row) =>
      //         columns
      //           .map((col) =>
      //             wrapCsvValue(
      //               typeof col.field === "function"
      //                 ? col.field(row)
      //                 : row[col.field === void 0 ? col.name : col.field],
      //               col.format,
      //               row
      //             )
      //           )
      //           .join(",")
      //       )
      //     )
      //     .join("\r\n");

      //   const status = exportFile("table-export.csv", content, "text/csv");

      //   if (status !== true) {
      //     $q.notify({
      //       message: "Browser denied file download...",
      //       color: "negative",
      //       icon: "warning",
      //     });
      //   }
      // },
    };
  },
};
</script>