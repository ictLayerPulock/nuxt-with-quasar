
export default defineEventHandler(async () => {
	return {
		costCenterList: [
			{
				label: "Accounts Department",
				chain: "Administration Division -> Accounts Department"
			},
			{
				label: "Accounts Department",
				chain: "Administration Division -> Accounts Department"
			},
			{
				label: "Accounts Department",
				chain: "Administration Division -> Accounts Department"
			},
			{
				label: "Accounts Department",
				chain: "Administration Division -> Accounts Department"
			},
			{
				label: "Accounts Department",
				chain: "Administration Division -> Accounts Department"
			},
			{
				label: "BD",
				chain: "Administration Division -> Accounts Department"
			}
		]
	}
})