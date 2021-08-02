<script>
	import {posts} from '$lib/data'
</script>

<div class="posts-wrap">
	{#each posts as post}
		<div class="post">
			<a href="{`/post-${post.slug}`}">{post.title}</a>
		</div>
	{/each}
</div>

<style>
	.posts-wrap {
		background: cornflowerblue;
		color: white;
	}

	.post {
		border: 2px solid white;
		padding: 1rem;
	}

	.post a {
		color: inherit;
		text-decoration: none;
	}
</style>