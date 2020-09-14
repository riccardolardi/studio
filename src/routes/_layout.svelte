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
	import { onMount } from 'svelte';
	import BG from '../components/BG.svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;
	export let data;
	let slug = writable(undefined);
	setContext('slug', slug);
	setContext('data', data);
	
	onMount(() => {
		if (segment) {
			setTimeout(() => {
				document.querySelector(`article#${segment}`).scrollIntoView();
			}, 1000); // super hacky 🤷‍♂️
		}
		// window.onpopstate = function(event) {
		// 	setTimeout(() => {
		// 		const { index, url } = event.state;
		// 		history.pushState({index, url}, data.slugs[index].title, data.slugs[index].url);
		// 		document.querySelector(`article#${url}`).scrollIntoView();
		// 	}, 0);
		// };
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

			h2 {
				padding-right: $pad * 8;
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

			.single-service {
				display: flex;
				place-items: center;
				gap: 2em;
				margin-bottom: $pad * 2;

				&:last-child {
					margin-bottom: 0;
				}

				&.align-right {
					flex-direction: row-reverse;

					.service-text {
						text-align: right;
					}

					ul {
						justify-content: flex-end;
					}
				}

				.icon {
					width: 7.2vw;
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
				place-items: center;
				margin-bottom: $pad * 3;

				&:last-child {
					margin-bottom: 0;
				}

				&.align-right {
					flex-direction: row-reverse;

					.work-text {
						padding: 0 $pad * 2 0 0;
					}

					figure {
						transform: skew(0, 5deg);
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
			transform: skew(0, -5deg);
			flex-shrink: 0;

			figcaption {
				display: inline-flex;
				font-size: 0.5em;
			}
		}
	}

	#profile {

		.profile-paragraphs {
			padding: $pad * 2 $pad * 2 0 0;

			.single-paragraph {
				margin-bottom: $pad;

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
		}
	}
</style>

<BG {slug} />
<main class="font-main{$slug ? '' : ' blend'}">
	<header class="font-small font-bold"><a href="/">Studio <br/>Riccardo <br/>Lardi</a></header>
	<slot></slot>
</main>
<Nav {slug} />