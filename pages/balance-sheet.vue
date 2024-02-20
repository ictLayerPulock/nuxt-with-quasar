<template>
	<div class="q-gutter-lg q-pa-md">
		<!-- Filters -->
		<q-card v-if="!filter_show">
			<q-card-section class="q-py-none">
				<div class="row q-gutter-md items-center">
					<div class="col-6">
						<CostCenterSelect @cost-center-select="costCenterSelect" />
					</div>
					<div class="col-4">
						<q-input label="Date Range" v-model="date_range" mask="date" color="primary" dense outlined :rules="[val => val && val.length > 0 || 'Select Date Range']">
							<q-popup-proxy transition-show="scale" transition-hide="scale">
								<q-date v-model="date_range" range mask="YYYY-MM-DD" color="primary" v-close-popup />
							</q-popup-proxy>
							<template v-slot:append>
								<q-icon name="event" class="cursor-pointer" color="primary" />
							</template>
						</q-input>
					</div>
					<div class="col row items-center justify-center q-my-none">
						<q-btn color="primary" style="width: 200px" type="button" @click="handleRead" :disable="loading" label="Read" no-caps />
					</div>
				</div>
			</q-card-section>
		</q-card>
		<!-- Balance Sheet -->
		<q-card>
			<q-card-section class="row items-center justify-between">
				<div class="text-subtitle2">Balance Sheet</div>
				<div class="col row items-center justify-end q-my-none">
					<q-btn color="primary" style="width: 120px" type="button" @click="filter_show = !filter_show" :disable="loading" icon="filter_alt" label="Filters" no-caps />
				</div>
			</q-card-section>
			<q-separator />
			<q-card-section v-if="!details">
				<div class="row q-gutter-lg">
					<div class="col">
						<q-markup-table dense separator="cell" flat bordered>
							<thead>
								<tr>
									<th colspan="12">
										<div class="row no-wrap items-center">
											<div class="text-h6 text-white">Liabilities & Equity</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-left" colspan="6">Current Liabilities</td>
									<td class="text-right" colspan="6">153,117,613.20</td>
								</tr>
								<tr>
									<td class="text-left" colspan="6">Non-Current Liabilities</td>
									<td class="text-right" colspan="6">0.00</td>
								</tr>
								<tr>
									<td class="text-left" colspan="6">Equity</td>
									<td class="text-right" colspan="6">221,253,062.46</td>
								</tr>
								<tr>
									<td class="text-right" colspan="6">Total</td>
									<td class="text-right text-negative" style="text-decoration: underline" colspan="6">374,370,675.66</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
					<div class="col">
						<q-markup-table dense separator="cell" flat bordered>
							<thead>
								<tr>
									<th colspan="12">
										<div class="row no-wrap items-center">
											<div class="text-h6 text-white">Assets</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-left" colspan="6">Current Liabilities</td>
									<td class="text-right" colspan="6">153,117,613.20</td>
								</tr>
								<tr>
									<td class="text-left" colspan="6">Non-Current Liabilities</td>
									<td class="text-right" colspan="6">0.00</td>
								</tr>
								<tr>
									<td class="text-right" colspan="6">Total</td>
									<td class="text-right text-negative" style="text-decoration: underline" colspan="6">374,370,675.66</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
				</div>
			</q-card-section>
			<q-card-section v-else>
				<div class="row q-gutter-lg">
					<div class="col">
						<q-markup-table dense separator="cell" flat bordered>
							<thead>
								<tr>
									<th colspan="11">
										<div class="row no-wrap items-center">
											<div class="text-h6 text-white">Liabilities & Equity</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-left text-h4" colspan="6">
										<div class="text-subtitle1 text-bold text-white">Current Liabilities</div>
									</td>
									<td class="text-right" colspan="6" rowspan="6">153,117,613.20</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Payables</td>
									<td class="text-right" colspan="3">132,123,505.17</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Short Term Financial Liabilities</td>
									<td class="text-right" colspan="3">-264,417.30</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Provisions & Contingencies</td>
									<td class="text-right" colspan="3">-2,107,643.50</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Duties & Taxes</td>
									<td class="text-right" colspan="3">6,104.00</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Other Liabilities</td>
									<td class="text-right" colspan="3">23,360,064.83</td>
								</tr>
								<tr>
									<td class="text-left text-h4" colspan="6">
										<div class="text-subtitle1 text-bold text-white">Non-Current Liabilities</div>
									</td>
									<td class="text-right" colspan="6" rowspan="1">0.00</td>
								</tr>
								<tr>
									<td class="text-left text-h4" colspan="6">
										<div class="text-subtitle1 text-bold text-white">Equity</div>
									</td>
									<td class="text-right" colspan="6" rowspan="6">221,253,062.46</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Retained Earnings</td>
									<td class="text-right" colspan="3">234,026,689.28</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Opening Balance (Retained Earnings)</td>
									<td class="text-right" colspan="3">-12,773,626.82</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Provisions & Contingencies</td>
									<td class="text-right" colspan="3">-2,107,643.50</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Duties & Taxes</td>
									<td class="text-right" colspan="3">6,104.00</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Other Liabilities</td>
									<td class="text-right" colspan="3">23,360,064.83</td>
								</tr>
								<tr>
									<td class="text-left" colspan="6">Total</td>
									<td class="text-right text-negative" style="text-decoration: underline" colspan="6">374,370,675.66</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
					<div class="col">
						<q-markup-table dense separator="cell" flat bordered>
							<thead>
								<tr>
									<th colspan="11">
										<div class="row no-wrap items-center">
											<div class="text-h6 text-white">Assets</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-left text-h4" colspan="6">
										<div class="text-subtitle1 text-bold text-white">Current Assets</div>
									</td>
									<td class="text-right" colspan="6" rowspan="4">374,370,675.66</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Cash And Financial Assets</td>
									<td class="text-right" colspan="3">185,379,964.77</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Receivables And Contracts</td>
									<td class="text-right" colspan="3">56,010,565.19</td>
								</tr>
								<tr>
									<td class="text-left text-primary" colspan="3">Inventory</td>
									<td class="text-right" colspan="3">132,980,145.70</td>
								</tr>
								<tr>
									<td class="text-left text-h4" colspan="6">
										<div class="text-subtitle1 text-bold text-white">Non-Current Assets</div>
									</td>
									<td class="text-right" colspan="6" rowspan="1">0.00</td>
								</tr>
								<tr>
									<td class="text-left" colspan="6">Total</td>
									<td class="text-right text-negative" style="text-decoration: underline" colspan="6">374,370,675.66</td>
								</tr>
							</tbody>
						</q-markup-table>
					</div>
				</div>
			</q-card-section>
			<q-card-section class="q-mt-xs">
				<div class="row items-center q-gutter-sm">
					<q-space />
					<q-btn color="grey-9" type="submit" :disable="loading" label="Print" no-caps />
					<q-btn color="primary" type="button" @click="handleDetail" :disable="loading" :label="details == true ? 'Back' : 'Details'" no-caps />
				</div>
			</q-card-section>
		</q-card>
	</div>
</template>

<script setup>
// const start_date = ref(null)
// const end_date = ref(null)
const date_range = ref({ from: "2024/02/08", to: "2024/02/10" })
const details = ref(false)
const filter_show = ref(false)

/* Handle Detail */

function handleDetail() {
	details.value = !details.value
}

/* Handle Read */

function handleRead() {
	// console.log("Handle Read")
}

</script>