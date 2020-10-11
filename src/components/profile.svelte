<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	let data = getContext('data');
	let index = 3;
</script>

<style type="text/scss">
	@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
	@import "../styles/var.scss";

	#profile {

		.profile-paragraphs {
			padding: $pad * 2 $pad * 4 0 0;

			@include breakpoint($breakMobile) {
				padding: $pad * 2 0 0;
			}

			.single-paragraph {
				margin-bottom: $pad;

				&.with-icon {
					display: flex;
					place-items: center;
					gap: 2em;

					.icon {
						margin-top: 0.2em;
					}
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>

<article id="profile" class="observe-intersection fade-in" data-index={index}>
	<Block>
		<h1 class="font-large font-bold">{data.articles[index].title}</h1>
		<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
		<div class="profile-paragraphs">
			{#each data.articles[index].paragraphs as paragraph, i}
			<section class="single-paragraph observe-intersection roll-in">
				{#if paragraph.title}<h3 class="font-bold">{paragraph.title}</h3>{/if}
				{#if paragraph.text}<h3>{@html paragraph.text}</h3>{/if}
			</section>
			{/each}
		</div>
	</Block>
</article>