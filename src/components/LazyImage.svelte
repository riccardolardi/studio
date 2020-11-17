<script>
	import { onMount } from 'svelte';
	export let width, height, src, alt;
	export let label = undefined;
	export let align = undefined;
	let isIntersecting = false;
	let figure;

	onMount(() => {
		const intersectionObserver = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) isIntersecting = true;
		});
		intersectionObserver.observe(figure);
	});
</script>

<style type="text/scss">
	@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
	@import "../styles/var.scss";

	figure {
		width: 33.333vw;
		flex-shrink: 0;

		&.align-left {
			transform: skew(0, -5deg);

			@include breakpoint($breakMobile) {
				transform: skew(0, 5deg);
			}
		}

		&.align-right {
			transform: skew(0, 5deg);
		}

		@include breakpoint($breakMobile) {
			width: 100%;
			transform: skew(0, 5deg);
		}

		img {
			display: block;
		}

		figcaption {
			display: table-cell;
			transform: translateX(-$pad * 0.25) translateY(-50%);
			background-color: $blue;
			color: $white;
			padding: 0 $pad * 0.25;

			@include breakpoint($breakMobile) {
				text-align: right;
				margin-bottom: $pad * 0.5;
			}
		}
	}
</style>

<figure bind:this={figure} class={`align-${align}`}>
	<img src={src} loading="lazy" alt={alt} width={width} height={height} />
	{#if label}<figcaption class="font-tiny">{label}</figcaption>{/if}
</figure>