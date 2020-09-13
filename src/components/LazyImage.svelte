<script>
	import { onMount } from 'svelte';
	export let width, height, src, alt;
	export let label = false;
	let isIntersecting = false;
	let figure;

	onMount(() => {
		const intersectionObserver = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) isIntersecting = true;
		});
		intersectionObserver.observe(figure);
	});
</script>

<figure bind:this={figure}>
	{#if isIntersecting}
		<img src={src} alt={alt} width={width} height={height} />
		{#if label}<figcaption>{alt}</figcaption>{/if}
	{:else}
		<img className="placeholder" 
			src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' 
		  	height='${height}' %3E%3C/svg%3E`} alt="placeholder" />
	{/if}
</figure>