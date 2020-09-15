<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
	let index = 3;
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[index].title} - {data.title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="profile" class="observe-intersection fade-in" data-index={index}>
		<Block>
			<h1 class="font-large font-bold">{data.articles[index].title}</h1>
			<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
			<div class="profile-paragraphs">
				{#each data.articles[index].paragraphs as paragraph, i}
				<section class="single-paragraph observe-intersection roll-in{paragraph.icon ? ' with-icon' : ''}">
					{#if paragraph.title}<h3 class="font-bold">{paragraph.title}</h3>{/if}
					{#if paragraph.text}<h3>{@html paragraph.text}</h3>{/if}
					{#if paragraph.icon}<span role="img" aria-label=service.title class="icon font-symbol">{paragraph.icon}</span>{/if}
				</section>
				{/each}
			</div>
		</Block>
	</article>
</ClientModule>