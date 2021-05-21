<script>
	import { onMount } from 'svelte';
	export let width, height, src, alt;
	export let label = undefined;
	export let kind = undefined;
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
		width: 60%;
		margin: 0 0 0 -15%;
		flex-shrink: 0;

		&.align-left {
			transform: skew(0, -5deg);

			@include breakpoint($breakMobile) {
				transform: skew(0, 5deg);
			}
		}

		&.align-right {
			transform: skew(0, 5deg);
			margin: 0 -15% 0 0;
		}

		@include breakpoint($breakMobile) {
			width: 100%;
			margin: 0;
			transform: skew(0, 5deg);
		}

		img, video {
			display: block;
			width: 100%;
			height: auto;
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
	{#if kind==="image"}
		<img src={src} loading="lazy" alt={alt} width={width} height={height} />
	{/if}
	{#if kind==="video"}
		<video autoplay muted playsinline loop alt={alt} width={width} height={height}>
			<source src={`${src}#t=0.01`} type="video/mp4" />
		</video>
	{/if}
	{#if label}<figcaption class="font-tiny">{label}</figcaption>{/if}
</figure>