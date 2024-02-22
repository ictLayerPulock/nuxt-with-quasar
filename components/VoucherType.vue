<template>
  <q-select
    label="Voucher Type"
    v-model="voucher_type"
    @filter="filterFn"
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    :options="voucherTypeList"
    @update:model-value="$emit('voucherType', voucher_type)"
    dense
    outlined
    :rules="[(val) => val || 'Please select a voucher type']"
  >
  </q-select>
</template>
  
  <script setup>
  defineEmits(["voucherType"]);

/* Cost Center List */

// const getList = ref([]);
const voucher_type = ref(null);
const voucherTypeList = ref([]);

const { data: response } = await useFetch("/api/components/voucher-type");

voucherTypeList.value = response.value;

// Fetch Cost Center List from API
// const getvoucherTypeList = async () => {
//   const { data: response } = await useFetch("/api/components/cost-center");

//   let data = response.value.voucherTypeList;

//   data.forEach((element) => {
//     getList.value.push({ label: element.label, chain: element.chain });
//   });
// };

async function filterFn(val, update) {
  if (val === "") {
    update(() => {
      voucherTypeList.value = voucherTypeList.value;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    voucherTypeList.value = voucherTypeList.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>