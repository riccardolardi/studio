<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
	let index = 4;
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[index].title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="contact" class="observe-intersection fade-in" data-index={index}>
		<Block>
			<h1 class="font-large font-bold">{data.articles[index].title}</h1>
			<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
			<div class="contact-info observe-intersection roll-in">
				<span class="font-bold">Studio Riccardo Lardi</span>
				<span>General Guisan-Strasse 78</span>
				<span>4054 Basel</span>
				<span>Switzerland</span>
				<span class="phone"><a href="tel:0041 79 339 65 38">0041 79 339 65 38</span>
				<span class="email link"><a href="mailto:hello@riccardolardi.com">hello@riccardolardi.com</span>
			</div>
		</Block>
	</article>
</ClientModule>