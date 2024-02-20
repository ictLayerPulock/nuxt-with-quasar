
export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const body = await readBody(event)

	const users = await $fetch(config.api_url + "pages/desktop/login", {
		method: "POST",
		body: body
	})

	return users
})