<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[4].title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="contact" class="observe-intersection" data-index="4">
		<Block centered={true}>
			<h1>Contact</h1>
			<h2>Contact us!</h2>
		</Block>
	</article>
</ClientModule>