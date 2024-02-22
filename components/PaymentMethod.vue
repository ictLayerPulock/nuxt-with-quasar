<template>
  <q-select
    label="Payment Method"
    v-model="payment_method"
    @filter="filterFn"
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    :options="paymentMethodList"
    @update:model-value="$emit('paymentMethod', payment_method)"
    dense
    outlined
    :rules="[(val) => val || 'Please select a payment method']"
  >
  
  </q-select>
</template>

<script setup>
defineEmits(["paymentMethod"]);

// const getList = ref([]);
const payment_method = ref(null);
const paymentMethodList = ref([]);


const { data: response } = await useFetch("/api/components/payment-method");

 paymentMethodList.value = response.value;


// Fetch Cost Center List from API
// const getpaymentMethodList = async () => {
//   const { data: response } = await useFetch("/api/components/payment-method");

//   let data = response.value.paymentMethodList;
//   console.log(data)

//   data.forEach((element) => {
//     getList.value.push({ label: element.label, chain: element.chain });
//   });
// };

async function filterFn(val, update) {
  if (val === "") {
    update(() => {
      paymentMethodList.value = paymentMethodList.value;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    paymentMethodList.value = paymentMethodList.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>