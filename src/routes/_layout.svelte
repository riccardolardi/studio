<script context="module">
  export async function preload(page, session) {
    const r = await this.fetch('data.json');
    const data = await r.json();
    return {data: data};
  }
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import BG from '../components/BG.svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;
	export let data;
	let activeIndex = writable(0);
	let mobileHideNav = writable(false);
	let isMobile = writable(undefined);
	let isTablet = writable(undefined);
	let isInAppBrowser = writable(undefined);
	let segment$ = writable(undefined);
	$: $segment$ = segment;
	setContext('segment', segment$);
	setContext('data', data);
	setContext('activeIndex', activeIndex);
	setContext('mobileHideNav', mobileHideNav);
	setContext('isMobile', isMobile);
	setContext('isTablet', isTablet);
	setContext('isInAppBrowser', isInAppBrowser);
	if (typeof navigator !== 'undefined') 
		isInAppBrowser.set(navigator.userAgent.includes('Instagram') || 
			navigator.userAgent.includes('FBAN') || 
				navigator.userAgent.includes('FBAV'));
</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css">
	{#if $activeIndex !== 0}
	  <style>
	  	body {
	  		background-color: #fff !important;
	  	}
			header {
				opacity: 1;
			}
			main {
				color: #0c0c0c !important;
			}
	  </style>
	{/if}
	{#if $isInAppBrowser}
		<style>
			.block-fill {
				min-height: 624px !important;
			}
		</style>
	{/if}
</svelte:head>	

<style type="text/scss" global>
	@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
	@import "../styles/var.scss";
	@import "../styles/type.scss";

	body {
	 	background-color: $blue;
	 	isolation: isolate;
	 	transition: background-color 250ms;
	}

	main {
		position: relative;
		color: transparent;
		transition: color 250ms;
	}

	header {
		position: fixed;
		top: $pad;
		left: $pad;
		opacity: 0;
		transition: opacity 250ms;
		z-index: 10;

		@include breakpoint($breakMobile) {
			top: $pad * 2;
			left: $pad * 2;
			color: $white;
		}
	}

	.blend {
		mix-blend-mode: overlay;
	}

	.hyphens {
		hyphens: auto;
	}

	.roll-in {
		transform: translateX(-$pad * 0.5);
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);

		&.align-right {
			transform: translateX($pad * 0.5);

			@include breakpoint($breakMobile) {
				transform: translateX(-$pad * 0.5);
			}
		}
	}

	.fade-in {
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1);
	}

	:global(.observe-intersection.intersected) {
		transform: translateX(0);
		opacity: 1;
	}

	article {

		&:not(#home) {

			h2 {
				padding-right: $pad * 10;

				@include breakpoint($breakMobile) {
					padding-right: 0;
				}
			}

			.block {
				padding-top: $pad * 4;

				@include breakpoint($breakMobile) {
					padding-top: $pad * 8;
				}
			}
		}
	}

	figure {

		img {
			display: block;
			max-width: 100%;
			height: auto;
		}
	}
</style>

<BG {activeIndex} />
<main class="font-main{$activeIndex === 0 ? ' blend' : ''}">
	<slot></slot>
</main>
<Nav {activeIndex} {mobileHideNav} {isMobile} />