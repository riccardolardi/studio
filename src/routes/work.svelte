<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	import LazyImage from '../components/LazyImage.svelte';
	export let indexRequest = false;
	let data = getContext('data');
	let isMobile = getContext('isMobile');
	let isTablet = getContext('isTablet');
	let index = 2;
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[index].title} - {data.title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="work" class="observe-intersection fade-in" data-index={index}>
		<Block>
			<h1 class="font-large font-bold">{data.articles[index].title}</h1>
			<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
			<div class="work-list">
				{#each data.articles[index].projects as project, i}
				<section class="single-work observe-intersection roll-in{i % 2 === 1 ? ' align-right' : ''}">
					<LazyImage src={project.image.src} width={project.image.width} height={project.image.height} alt={project.image.alt} label={project.image.label} />
					<div class="work-text">
						<span class="font-small work-year">{project.year}</span>
						<h3 class="font-bold">{project.title}</h3>
						<span class="font-small work-link"><a href={project.link.url} rel="noopener noreferrer" 
            target="_blank" aria-label={project.link.title} class="link">{project.link.title}</a></span>
						{#each project.text as paragraph}
							<p class="{!$isMobile && !isTablet ? 'font-small' : ''}">{paragraph}</p>
						{/each}
						<ul class="tags font-small">
							{#if project.employer}
								<li><span class="font-bold">Employer: </span>{@html project.employer}</li>
							{/if}
							{#if project.client}
								<li><span class="font-bold">Client: </span>{@html project.client}</li>
							{/if}
							{#if project.services}
								<li><span class="font-bold">Services: </span>{project.services}</li>
							{/if}
							{#if project.partner}
								<li><span class="font-bold">Partner: </span>{@html project.partner}</li>
							{/if}
						</ul>
					</div>
				</section>
				{/each}
			</div>
		</Block>
	</article>
</ClientModule>