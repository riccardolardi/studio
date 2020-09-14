<script>
	import { getContext } from 'svelte';
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
	let data = getContext('data');
</script>

<svelte:head>
	{#if !indexRequest}
	<title>{data.slugs[1].title}</title>
	{/if}
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="services" class="observe-intersection fade-in" data-index="1">
		<Block>
			<h1 class="font-large font-bold">Services</h1>
			<h2 class="font-large font-cite">We create, simplify and make things work.</h2>
			<div class="services-list">
				<section class="single-service observe-intersection roll-in">
					<span role="img" aria-label="Concept & Design" class="icon font-symbol">Z</span>
					<div class="service-text">
						<h3 class="font-bold">Concept & Design</h3>
						<p>We think Design is not just about the looks of something but much more how something is built to fulfil a purpose. We use Design to create things that do not only function but also can be loved.</p>
						<ul class="tags font-bold font-small">
							<li>ux/ui</li>
							<li>interactiondesign</li>
							<li>web</li>
							<li>apps</li>
							<li>interfaces</li>
						</ul>
					</div>
				</section>
				<section class="single-service align-right observe-intersection roll-in">
					<span role="img" aria-label="Code & Development" class="icon font-symbol">%</span>
					<div class="service-text">
						<h3 class="font-bold">Code & Development</h3>
						<p>Code is a tool and tools are cool! We build mobile apps, websites, web-apps, desktop applications but also products that are being used in physical space such as interactive media tables or terminals.</p>
						<ul class="tags font-bold font-small">
							<li>react</li>
							<li>vue</li>
							<li>craftcms</li>
							<li>wordpress</li>
							<li>native</li>
						</ul>
					</div>
				</section>
				<section class="single-service observe-intersection roll-in">
					<span role="img" aria-label="Consulting & Education" class="icon font-symbol">ù</span>
					<div class="service-text">
						<h3 class="font-bold">Consulting & Education</h3>
						<p>Offering consultation, teaching or helping you brainstorm your new business idea, we like to share our expertise and help bringing products to life or to the next level.</p>
						<ul class="tags font-bold font-small">
							<li>designthinking</li>
							<li>agile</li>
							<li>methodology</li>
							<li>spiking</li>
							<li>prototyping</li>
						</ul>
					</div>
				</section>
			</div>
		</Block>
	</article>
</ClientModule>