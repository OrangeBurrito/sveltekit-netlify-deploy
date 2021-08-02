<script context="module">
	export async function load({fetch,  page }) {
		const { slug } = page.params

		const res = await fetch(`/post-${slug}.json`)

		if (res.ok) {
			const post = await res.json()
			return {
				props: {
					post
				}
			}
		}

		console.log('slug', slug)

		return {
			props: {
				post: null
			},
		};
	}
</script>

<script>
	export let post = {}
</script>


<a href="/">Home</a>

{#if post}
<h1>{post.title}</h1>
{JSON.stringify(post,null,2)}
{:else}
<h1>Post not found!</h1>
{/if}