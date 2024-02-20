<template>
	<q-select label="Cost Income Center" v-model="cost_center" @filter="filterFn" use-input hide-selected fill-input input-debounce="0" :options="costCenterList" @update:model-value="$emit('costCenterSelect', cost_center)" dense outlined :rules="[val => val || 'Please select a cost income center']">
		<template v-slot:option="scope">
			<q-item v-bind="scope.itemProps">
				<q-item-section>
					<q-item-label>{{ scope.opt.label }}</q-item-label>
					<q-item-label caption>1232</q-item-label>
				</q-item-section>
			</q-item>
		</template>
	</q-select>
</template>

<script setup>
defineEmits(["costCenterSelect"])

onMounted(async () => {
	getCostCenterList()
})

/* Cost Center List */

const getList = ref([])
const cost_center = ref(null)
const costCenterList = ref([])
// Fetch Cost Center List from API
const getCostCenterList = async () => {
	const { data: response } = await useFetch("/api/components/cost-center")

	let data = response.value.costCenterList

	data.forEach(element => {
		getList.value.push({ label: element.label, chain: element.chain })
	})

}

async function filterFn(val, update) {
	if (val === "") {
		update(() => {
			costCenterList.value = getList.value
		})
		return
	}
	update(() => {
		const needle = val.toLowerCase()
		costCenterList.value = getList.value.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
	})
}
</script>