<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[3].title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="profile" class="observe-intersection" data-index="3">
		<Block centered={true}>
			<h1>Profile</h1>
			<h2>This is us.</h2>
		</Block>
	</article>
</ClientModule>