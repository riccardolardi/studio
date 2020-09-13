<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	import LazyImage from '../components/LazyImage.svelte';
	export let indexRequest = false;
</script>

<svelte:head>
	<title>Websites, Apps, Media Architecture - Studio Riccardo Lardi</title>
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="work" class="observe-intersection fade-in" data-index="2">
		<Block>
			<h1 class="font-large font-bold">Work</h1>
			<h2 class="font-large font-cite">Websites, Apps, Media Architecture</h2>
			<div class="work-list">
				<section class="single-work observe-intersection roll-in">
					<LazyImage src="img/gmz1.jpg" width="1024" height="544" alt="This is a label" />
					<div class="work-text">
						<h3 class="font-bold">Migros Sommernachts-Ball</h3>
						<span class="font-small work-year">2020</span>, 
						<span class="font-small work-link"><a href="http://www.sommernachts-ball.ch" class="link">www.sommernachts-ball.ch</a></span>
						<p>Complete redesign and technical overhaul for front and backend of Migros Sommernachts-Ball web presence.</p>
						<ul class="tags font-small">
							<li><span class="font-bold">Client: </span>Genossenschaftsbund Migros Zürich</li>
							<li><span class="font-bold">Partner: </span><a href="http://www.komun.ch" class="link">Komun</a></li>
							<li><span class="font-bold">Services: </span>Code, Consulting, Interaction Design</li>
						</ul>
					</div>
				</section>
				<section class="single-work observe-intersection roll-in align-right">
					<LazyImage src="img/gmz1.jpg" width="1024" height="544" alt="This is a label" />
					<div class="work-text">
						<h3 class="font-bold">Migros Sommernachts-Ball</h3>
						<span class="font-small work-year">2020</span>, 
						<span class="font-small work-link"><a href="http://www.sommernachts-ball.ch" class="link">www.sommernachts-ball.ch</a></span>
						<p>Complete redesign and technical overhaul for front and backend of Migros Sommernachts-Ball web presence.</p>
						<ul class="tags font-small">
							<li><span class="font-bold">Client: </span>Genossenschaftsbund Migros Zürich</li>
							<li><span class="font-bold">Partner: </span><a href="http://www.komun.ch" class="link">Komun</a></li>
							<li><span class="font-bold">Services: </span>Code, Consulting, Interaction Design</li>
						</ul>
					</div>
				</section>
			</div>
		</Block>
	</article>
</ClientModule>