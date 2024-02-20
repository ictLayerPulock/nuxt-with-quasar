
export default defineEventHandler(async () => {
	return {
		menu: [
			{
				label: "dashboard",
				icon: "category",
				children: [
					{
						label: "management",
						url: "/desktop/dashboard/management",
						icon: "horizontal_rule",
					},
					{
						label: "marketing",
						url: "/desktop/dashboard/marketing",
						icon: "horizontal_rule",
					},
					{
						label: "sales",
						url: "sales",
						icon: "horizontal_rule",
					},
					{
						label: "production",
						url: "production",
						icon: "horizontal_rule",
					},
					{
						label: "distribution",
						url: "distribution",
						icon: "horizontal_rule",
					},
					{
						label: "accounts",
						url: "accounts",
						icon: "horizontal_rule",
					},
					{
						label: "Store",
						// url: "/",
						icon: "horizontal_rule",
					},
				]
			},
			{
				label: "Sales & Services",
				icon: "category",
				children: [
					{
						label: "Invoice",
						icon: "horizontal_rule",
						grandchild: [
							{
								label: "Quotation",
								icon: "horizontal_rule",
								greatgrandchild: [
									{
										label: "Quotation",
										icon: "horizontal_rule",
									},
									{
										label: "POS",
										icon: "horizontal_rule",
									},
								]
							},
							{
								label: "POS",
								icon: "horizontal_rule",
							},
							{
								label: "Order",
								icon: "horizontal_rule",
							},
							{
								label: "Dealer",
								icon: "horizontal_rule",
							},
							{
								label: "Wholesale",
								icon: "horizontal_rule",
							},
							{
								label: "Distributor",
								icon: "horizontal_rule",
							},
							{
								label: "Service Order",
								icon: "horizontal_rule",
							},
						]
					},
					{
						label: "Invoice List",
						icon: "horizontal_rule",
						grandchild: [
							{
								label: "Almirah 1",
								icon: "horizontal_rule",
							},
							{
								label: "Almirah 2",
								icon: "horizontal_rule",
							}
						]
					},
					{
						label: "Invoice Due",
						icon: "horizontal_rule",
						grandchild: [
							{
								label: "Almirah 1",
								icon: "horizontal_rule",
							},
							{
								label: "Almirah 2",
								icon: "horizontal_rule",
							}
						]
					}
				]
			},
			{
				label: "Logistic & Distribution",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Restaurant",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Store",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Purchase",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Hotel",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "R&D",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Planning & Analysis",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "WIP",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Accounts",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Payroll",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "category",
					}
				]
			},
			{
				label: "Marketing",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Customer Care",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "E-Commerce",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Software Setting",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
			{
				label: "Developer",
				icon: "category",
				children: [
					{
						label: "Management",
						icon: "horizontal_rule",
					}
				]
			},
		]
	}
})