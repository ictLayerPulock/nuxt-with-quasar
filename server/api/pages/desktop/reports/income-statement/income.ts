
export default defineEventHandler(async () => {
	return {
		rows: [
			{
				name: "Income",
				total: 123213,
				detail: [
					{
						income: "Sales Revenue",
						amount: 68836138.70,
						total: 123213213,
						type: "coa",
						level: 0,
						children: [
							{
								income: "Sales Account",
								amount: 68836138.70,
								type: "ledger",
								level: 1,
							}
						]
					},
					{
						income: "Service Revenue",
						amount: 5000.00,
						type: "coa",
						level: 0,
						children: [
							{
								income: "Shipping Charge",
								amount: 5000.00,
								type: "ledger",
								level: 1,
							}
						]
					},
					{
						income: "Other Income",
						amount: 9744774.00,
						type: "coa",
						level: 0,
						children: [
							{
								income: "Inventory Gain",
								amount: 9744774.00,
								type: "ledger",
								level: 1,
							},
							{
								income: "Interest Income",
								amount: 0.00,
								type: "coa",
								level: 1,
							},
							{
								income: "Rent Income",
								amount: 0.00,
								type: "coa",
								level: 1,
							},
							{
								income: "Scrap Sales",
								amount: 0.00,
								type: "coa",
								level: 1,
							},
							{
								income: "Defective Item Sales",
								amount: 0.00,
								type: "coa",
								level: 1,
							}
						]
					},
					{
						income: "Income From Investment",
						amount: 0.00,
						type: "coa",
						level: 0,
						children: [
							{
								income: "Investment Income from Stock Market",
								amount: 0.00,
								type: "coa",
								level: 1
							},
							{
								income: "Investment Income from Govt. Mutual Fund",
								amount: 0.00,
								type: "coa",
								level: 1
							},
							{
								income: "Investment Income from Subsidiary",
								amount: 0.00,
								type: "coa",
								level: 1
							},
						]
					},
				]
			}
		]
	}
})