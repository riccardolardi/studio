<script>
	import { onMount } from 'svelte';
	export let indexRequest;
	let Index;

	onMount(async () => {
		const module = await import('../routes/index.svelte');
		Index = module.default;
	});
</script>

{#if indexRequest || !process.browser}
	<slot></slot>
{:else}
	<svelte:component this={Index} />
{/if}