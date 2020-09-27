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
	let segment$ = writable(undefined);
	$: $segment$ = segment;
	setContext('segment', segment$);
	setContext('data', data);
	setContext('activeIndex', activeIndex);
	setContext('mobileHideNav', mobileHideNav);
	setContext('isMobile', isMobile);
	setContext('isTablet', isTablet);
</script>

<svelte:head>
	{#if $activeIndex !== 0}
	  <style>
	  	body {
	  		background-color: #fff;
	  	}
			header {
				opacity: 1;
			}
			main {
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

							&:last-child {
								margin: 0 !important;
							}
						}
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

					@include breakpoint($breakMobile) {
						padding-right: $pad * 3;
					}

					li {
						margin: 0 $pad * 0.25 0 0;

						&:last-child {
							position: absolute;
							bottom: -$pad * 1.35;
							margin: 0;
						  font-size: $pad * 0.75;
						  line-height: 150%;

						  @include breakpoint($breakMobile) {
						  	position: static;
						  	bottom: auto;
						    font-size: $pad * 1.75;
						    line-height: unset;
							}
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
					margin-bottom: $pad * 6;
				}

				&:last-child {
					margin-bottom: $pad;
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
							transform: skew(0, 5deg);
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

						@include breakpoint($breakMobile) {

							&:first-of-type {
								margin-top: $pad;
							}

							&:last-of-type {
								margin-bottom: $pad;
							}
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
				transform: skew(0, 5deg);
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
	}

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

	#contact {

		.contact-info {
			padding: $pad * 2 $pad * 2 0 0;

			span {
				display: block;

				&.link {
					display: inline-block;
				}

				&.phone {

					a {
						display: block;

						@include breakpoint($breakMobile) {
							padding: $pad * 0.3 0 $pad * 0.2;
						}
					}
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

					@include breakpoint($breakMobile) {
						margin-right: $pad;
					}

					&:last-child {
						margin-right: 0;
					}

					a {
						display: block;
					}

					img {
						display: block;
						width: $pad * 0.75;
						height: auto;

						@include breakpoint($breakMobile) {
							width: $pad * 1.75;
						}
					}
				}
			}
		}
	}
</style>

<BG {activeIndex} />
<main class="font-main{$activeIndex === 0 ? ' blend' : ''}">
	<slot></slot>
</main>
<Nav {activeIndex} {mobileHideNav} {isMobile} />