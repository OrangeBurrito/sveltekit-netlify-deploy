import { posts } from "$lib/data"

export async function get({ params }) {
	console.log('params', params)
	let { slug } = params
	let post = posts.find(p => p.slug === slug)

	if (post) {
		return {
			body: post
		}
	}

	return {
		status: 404,
		body: "there are no posts called " + slug
	}
}