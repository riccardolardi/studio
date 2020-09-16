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
	let segment$ = writable(undefined);
	$: $segment$ = segment;
	setContext('segment', segment$);
	setContext('data', data);
	setContext('activeIndex', activeIndex);
	setContext('mobileHideNav', mobileHideNav);
</script>

<svelte:head>
	{#if $activeIndex !== 0}
	  <style>
			header {
				opacity: 1;
			}
			main {
				background-color: #fff;
				color: #0c0c0c;
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
	}

	main {
		position: relative;
		color: transparent;
		transition: background-color 250ms, color 250ms;
	}

	header {
		position: fixed;
		top: $pad;
		left: $pad;
		transform: translateY(0);
		opacity: 0;
		transition: opacity 250ms, transform 250ms;
		z-index: 10;

		@include breakpoint($breakMobile) {
			top: $pad * 2;
			left: $pad * 2;

			&.mobile-hide {
				transform: translateY(-$pad);
				opacity: 0;
			}
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
				padding-right: $pad * 8;

				@include breakpoint($breakMobile) {
					padding-right: 0;
				}
			}

			.block {
				padding-top: $pad * 4;
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

	#home {
		color: $white;
	}

	#services {

		.services-list {
			padding: $pad * 2 $pad * 2 0 0;

			@include breakpoint($breakMobile) {
				padding: $pad * 2 0 0;
			}

			.single-service {
				display: flex;
				place-items: center;
				margin-bottom: $pad * 2;

				@include breakpoint($breakMobile) {
					flex-direction: column;
					align-items: flex-start;

					&.align-right {
						flex-direction: column !important;

						.service-text {
							text-align: unset !important;
						}

						.icon {
							margin: 0 0 $pad 0 !important;
						}

						ul {
							justify-content: unset !important;
						}
					}

					.icon {
						margin: 0 0 $pad 0 !important;
					}
				}

				&:last-child {
					margin-bottom: 0;
				}

				&.align-right {
					flex-direction: row-reverse;

					.service-text {
						text-align: right;
					}

					.icon {
						margin: 0 0 0 $pad;
					}

					ul {
						justify-content: flex-end;
					}
				}

				&:nth-of-type(1) {
					
					.icon {
						margin-top: -0.2em;
					}
				}

				&:nth-of-type(2) {
					
					.icon {
						margin-top: -0.1em;
					}
				}

				&:nth-of-type(3) {
					
					.icon {
						margin-top: 0.3em;
					}
				}

				.icon {
					margin: 0 $pad 0 0;
				}

				ul.tags {
					display: flex;
					flex-wrap: wrap;
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
	}

	#work {

		.work-list {
			padding: $pad * 2 0 0;

			@include breakpoint($breakMobile) {
				padding: $pad * 4 0 0;
			}

			.single-work {
				display: flex;
				place-items: center;
				margin-bottom: $pad * 3;

				@include breakpoint($breakMobile) {
					flex-direction: column;
					align-items: flex-start;
					margin-bottom: $pad * 5;
				}

				&:last-child {
					margin-bottom: 0;
				}

				&.align-right {
					flex-direction: row-reverse;

					@include breakpoint($breakMobile) {
						flex-direction: column;
					}

					.work-text {
						padding: 0 $pad * 2 0 0;

						@include breakpoint($breakMobile) {
							padding: 0;
						}
					}

					figure {
						transform: skew(0, 5deg);

						@include breakpoint($breakMobile) {
							transform: skew(0, 10deg);
						}
					}
				}

				.work-year, .work-link {
					display: block;
				}

				.work-text {
					padding: 0 0 0 $pad * 2;

					@include breakpoint($breakMobile) {
						padding: 0;
					}

					p {
						padding-top: $pad * 0.5;

						&:last-of-type {
							padding-bottom: $pad * 0.5;
						}
					}
				}

				ul.tags {
					
				}
			}
		}

		figure {
			width: 33.333vw;
			transform: skew(0, -5deg);
			flex-shrink: 0;

			@include breakpoint($breakMobile) {
				width: 100%;
				transform: skew(0, 10deg);
			}

			figcaption {
				display: inline-flex;
				font-size: 0.5em;

				@include breakpoint($breakMobile) {
					text-align: right;
				}
			}
		}
	}

	#profile {

		.profile-paragraphs {
			padding: $pad * 2 $pad * 2 0 0;

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

	#contact {

		.contact-info {
			padding: $pad * 2 $pad * 2 0 0;

			span {
				display: block;

				&.link {
					display: inline-block;
				}

				&.phone {
					margin: $pad * 0.2 0;
				}
			}

			ul.social-links {
				margin-top: $pad * 0.7;
				display: flex;

				@include breakpoint($breakMobile) {
					margin-top: $pad;
				}

				li {
					margin-right: $pad * 0.5;

					&:last-child {
						margin-right: 0;
					}

					img {
						display: block;
						width: $pad * 0.75;
						height: auto;

						@include breakpoint($breakMobile) {
							width: $pad * 1.25;
						}
					}
				}
			}
		}
	}
</style>

<BG {activeIndex} />
<main class="font-main{$activeIndex === 0 ? ' blend' : ''}">
	<header class="font-small font-tight font-bold{$mobileHideNav ? ' mobile-hide' : ''}">
		<a href="/" on:click={() => window.scrollTo(0, 0)}>Studio <br/>Riccardo <br/>Lardi</a>
	</header>
	<slot></slot>
</main>
<Nav {activeIndex} {mobileHideNav} />