<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";

	#services {

		h2 {
			padding-right: $pad * 8;
		}
	}

	.services-list {
		padding: $pad * 2 0;

		.single-service {
			display: flex;
			align-items: center;
			margin-bottom: $pad * 2;
			padding: 0 $pad * 3 0 0;

			&:last-child {
				margin-bottom: 0;
			}

			&.align-right {
				flex-direction: row-reverse;
				padding: 0 0 0 $pad * 3;

				.service-text {
					text-align: right;
					margin: 0 $pad 0 0;
				}

				ul {
					justify-content: flex-end;
				}
			}

			.service-text {
				margin: 0 0 0 $pad;
			}

			ul.tags {
				display: flex;
				color: $blue;
				margin-top: $pad * 0.2;

				li {
					margin-right: $pad * 0.25;

					&:last-child {
						margin-right: 0;
					}

					&:before {
						content: "#";
					}
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Services - Studio Riccardo Lardi</title>
</svelte:head>

<ClientModule indexRequest={indexRequest}>
	<article id="services" class="observe-intersection fade-in" data-index="1">
		<Block>
			<h1 class="font-large font-bold">Services</h1>
			<h2 class="font-large font-cite">We create, simplify and make things work.</h2>
			<div class="services-list">
				<div class="single-service observe-intersection roll-in trigger-once">
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
				</div>
				<div class="single-service align-right observe-intersection roll-in trigger-once">
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
				</div>
				<div class="single-service observe-intersection roll-in trigger-once">
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
				</div>
			</div>
		</Block>
	</article>
</ClientModule>