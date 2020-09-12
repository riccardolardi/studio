<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";

	.services-list {
		padding: $pad * 2 $pad * 6 0 $pad * 4;

		.single-service {
			display: flex;
			margin-bottom: $pad;

			&:last-child {
				margin-bottom: 0;
			}

			&.align-right {
				flex-direction: row-reverse;

				.service-text {
					text-align: right;
					margin: 0 $pad 0 0;
				}
			}

			.service-text {
				margin: 0 0 0 $pad;
			}
		}
	}
</style>

<svelte:head>
	<title>Services - Studio Riccardo Lardi</title>
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="services" class="observe-intersection roll-in" data-index="1">
		<Block>
			<h1 class="font-large font-bold">Services</h1>
			<h2 class="font-large font-cite">We create, simplify and make things work.</h2>
			<div class="services-list">
				<div class="single-service observe-intersection roll-in">
					<span role="img" aria-label="Concept & Design" class="icon font-symbol">Z</span>
					<div class="service-text">
						<h3 class="font-bold">Concept & Design</h3>
						<p>We think Design is not just how something looks but much more how something works. By applying good Design we create products, digital and physical experiences that can be loved.</p>
					</div>
				</div>
				<div class="single-service align-right observe-intersection roll-in">
					<span role="img" aria-label="Code & Development" class="icon font-symbol">%</span>
					<div class="service-text">
						<h3 class="font-bold">Code & Development</h3>
						<p>Code is a tool and tools are cool! We build mobile apps, websites, web-apps, desktop applications but also products that are being used in physical space such as interactive media tables or terminals.</p>
					</div>
				</div>
			</div>
		</Block>
	</article>
</ClientModule>