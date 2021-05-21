<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	let data = getContext('data');
	let index = 1;
</script>

<style type="text/scss">
	@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
	@import "../styles/var.scss";

	#services {

		.services-list {
			padding: $pad * 2 $pad * 2 0 0;

			@include breakpoint($breakMobile) {
				padding: $pad * 2 0 0;
			}

			.single-service {
				display: flex;
				place-items: center;
				margin-bottom: $pad * 3;
				padding: 0 $pad * 4 0 0;

				@include breakpoint($breakMobile) {
					flex-direction: column;
					align-items: flex-start;
					padding: 0 !important;

					&.align-right {
						flex-direction: column !important;

						.service-text {
							text-align: unset !important;
						}

						.icon {
							// margin: 0 0 $pad 0 !important;
						}

						ul {
							justify-content: unset !important;
						}
					}

					.icon {
						margin: 0 0 $pad * 2 0 !important;
					}
				}

				&:last-child {

					@include breakpoint($breakMobile) {
						margin-top: $pad * 4;
					}
				}

				&.align-right {
					flex-direction: row-reverse;
					padding: 0 0 0 $pad * 4;

					.service-text {
						text-align: right;
					}

					.icon {
						margin: 0 0 0 $pad;
					}

					ul {
						justify-content: flex-end;

						li {
							margin: 0 0 0 $pad * 0.25 !important;

							@include breakpoint($breakMobile) {
								margin: 0 $pad * 0.25 0 0 !important;
							}
						}
					}
				}

				&:nth-of-type(1) {
					
					.icon {
						
					}
				}

				&:nth-of-type(2) {
					
					.icon {
						
					}
				}

				&:nth-of-type(3) {
					
					.icon {
						@include breakpoint($breakDesktop) {
							margin-top: $pad * 1.25;
						}
					}
				}

				.icon {
					margin: 0 $pad 0 0;
				}

				ul.tags {
					display: flex;
					flex-wrap: wrap;
					color: $blue;
					margin-top: $pad * 0.35;

					@include breakpoint($breakMobile) {
						margin-top: $pad * 0.75;
						padding-right: $pad * 3;
					}

					li {
						margin: 0 $pad * 0.25 0 0;

						&:before {
							content: "#";
						}
					}
				}
			}
		}
	}
</style>

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