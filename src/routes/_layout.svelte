<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import BG from '../components/BG.svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;
	let slug = writable(undefined);
	setContext('slug', slug);
	
	onMount(() => {
		if (segment) {
			setTimeout(() => {
				const el = document.querySelector(`article#${segment}`);
				window.scrollTo(0, el.offsetTop - window.innerHeight * 0.15);
			}, 1000); // super hacky 🤷‍♂️
		}
	});
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";
	@import "../styles/type.scss";

	body {
		color: transparent;
	 	background-color: $blue;
	 	isolation: isolate;
	 	transition: all 250ms;

	 	&.past-intro {
		 	background-color: $white;
		 	color: $black;

		 	header {
		 		opacity: 1;
		 	}
	 	}
	}

	main {
		position: relative;
	}

	header {
		position: fixed;
		top: $pad;
		left: $pad;
		opacity: 0;
		transition: opacity 250ms;
		z-index: 10;
	}

	.blend {
		mix-blend-mode: overlay;
	}

	.hyphens {
		hyphens: auto;
	}

	.roll-in {
		transform: translateX(-$pad);
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);

		&.align-right {
			transform: translateX($pad);
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
			padding-bottom: $pad * 4;

			h2 {
				padding-right: $pad * 8;
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
	}

	#work {

		.work-list {
			padding: $pad * 2 0;

			.single-work {
				display: flex;
				align-items: center;
				margin-bottom: $pad * 4;

				&:last-child {
					margin-bottom: 0;
				}

				&.align-right {
					flex-direction: row-reverse;

					.work-text {
						padding: 0 $pad * 2 0 0;
					}

					figure {
						transform: skew(0, 10deg);
					}
				}

				.work-year, .work-link {

				}

				.work-text {
					padding: 0 0 0 $pad * 2;

					p {
						padding: $pad * 0.5 0;
					}
				}

				ul.tags {
					
				}
			}
		}

		figure {
			width: 33.333vw;
			transform: skew(0, -10deg);
			flex-shrink: 0;
		}
	}
</style>

<BG {slug} />
<main class="font-main{$slug ? '' : ' blend'}">
	<header class="font-small font-bold"><a href="/">Studio <br/>Riccardo <br/>Lardi</a></header>
	<slot></slot>
</main>
<Nav {slug} />