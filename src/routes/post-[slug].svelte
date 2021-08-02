<script context="module">
	export async function load({ page }) {
		const { slug } = page.params

		console.log('slug', slug)

		return {
			props: {},
		};
	}
</script>

<h1>apost</h1>

<a href="/">Home</a>
