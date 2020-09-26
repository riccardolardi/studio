<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
	let index = 1;
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[index].title} - {data.title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="services" class="observe-intersection fade-in" data-index={index}>
		<Block>
			<h1 class="font-large font-bold">{data.articles[index].title}</h1>
			<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
			<div class="services-list">
				{#each data.articles[index].services as service, i}
				<section class="single-service observe-intersection roll-in{i % 2 === 1 ? ' align-right' : ''}">
					<span role="img" aria-label=service.title class="icon font-symbol">{service.icon}</span>
					<div class="service-text">
						<h3 class="font-bold">{service.title}</h3>
						<p>{service.text}</p>
						<ul class="tags font-bold font-small font-tight">
							{#each service.tags as tag}
							<li>{tag}</li>
							{/each}
						</ul>
					</div>
				</section>
				{/each}
			</div>
		</Block>
	</article>
</ClientModule>