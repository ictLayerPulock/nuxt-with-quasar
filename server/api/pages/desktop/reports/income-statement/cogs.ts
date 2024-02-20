
export default defineEventHandler(async () => {
	return {
		rows: [
			{
				name: "Cost Of Goods Sold",
				total: 64598992.71,
				detail: [
					{
						income: "Loss On Inventory Return",
						amount: -800,
						total: 123213213,
						type: "ledger",
						level: 0,
						child_count: 0,
					},
					{
						income: "Conversion Cost",
						amount: -14951787.47,
						type: "coa",
						level: 0,
						child_count: 4,
						children: [
							{
								income: "Applied Factory Overhead",
								amount: -14951787.47,
								type: "ledger",
								level: 1,
							},
							{
								income: "Factory (Manufacturing) Expense",
								amount: 0,
								type: "coa",
								level: 1,
								child_count: 1,
								children: [
									{
										income: "Tours & Traveling Expenses (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Meals & Entertainment (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Transportation & Conveyance (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Printing, Periodicals & Stationary (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Factory Maintenance",
										amount: 1.00,
										type: "coa",
										level: 2,
										child_count: 2,
										children: [
											{
												income: "Fuel & Oil-MO",
												amount: 0,
												type: "coa",
												level: 3,
											},
											{
												income: "Repair & Maintenance-MO",
												amount: 0,
												type: "coa",
												level: 3,
											},
										]
									},
									{
										income: "Consultancy & Training Fee - MO",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Misc & Other Expenses (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Salary & Allowances (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2,
										child_count: 2,
										children: [
											{
												income: "Overtime Manufacturing",
												amount: 0,
												type: "coa",
												level: 3,
											},
											{
												income: "Salary-Manufacturing",
												amount: 0,
												type: "coa",
												level: 3,
											},
										]
									},
									{
										income: "Employee Benefit-Manufacturing",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Utilities & Communication Exp- MO",
										amount: 0,
										type: "coa",
										level: 2
									},
								]
							},
							{
								income: "Depreciation And Impairment -MO",
								amount: 0,
								type: "coa",
								level: 1,
								child_count: 0,
								children: [
									{
										income: "Tours & Traveling Expenses (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Meals & Entertainment (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Transportation & Conveyance (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Printing, Periodicals & Stationary (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Factory Maintenance",
										amount: 1.00,
										type: "coa",
										level: 2,
										child_count: 2,
										children: [
											{
												income: "Fuel & Oil-MO",
												amount: 0,
												type: "coa",
												level: 3,
											},
											{
												income: "Repair & Maintenance-MO",
												amount: 0,
												type: "coa",
												level: 3,
											},
										]
									},
									{
										income: "Consultancy & Training Fee - MO",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Misc & Other Expenses (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Salary & Allowances (Manufacturing)",
										amount: 0,
										type: "coa",
										level: 2,
										child_count: 2,
										children: [
											{
												income: "Overtime Manufacturing",
												amount: 0,
												type: "coa",
												level: 3,
											},
											{
												income: "Salary-Manufacturing",
												amount: 0,
												type: "coa",
												level: 3,
											},
										]
									},
									{
										income: "Employee Benefit-Manufacturing",
										amount: 0,
										type: "coa",
										level: 2
									},
									{
										income: "Utilities & Communication Exp- MO",
										amount: 0,
										type: "coa",
										level: 2
									},
								]
							}
						]
					},
					{
						income: "Cost Of Product & Service",
						amount: 47803890.24,
						type: "coa",
						level: 0,
						child_count: 1,
						children: [
							{
								income: "Cost Of Products",
								amount: 47803890.24,
								type: "ledger",
								level: 0,
							},
						]
					},
				]
			}
		]
	}
})