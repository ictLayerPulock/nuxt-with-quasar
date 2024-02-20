
export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const body = await readBody(event)

	const menu = await $fetch(config.api_url + "/components/layouts/right-menu", {
		method: "POST",
		body: body
	})

	return menu
})