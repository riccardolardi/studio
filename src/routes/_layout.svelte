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
				window.scrollTo(0, el.offsetTop - window.innerHeight * 0.1);
			}, 1000); // super hacky 🤷‍♂️
		}
	});
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";
	@import "../styles/type.scss";

	body {
		color: $black;
	 	background-color: $blue;
	 	isolation: isolate;
	 	transition: all 250ms;

	 	&.past-intro {
		 	background-color: $white;

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

	#home {
		color: $white;
	}

	.roll-in {
		transform: translateX(-$pad);
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);

		&.align-right {
			transform: translateX($pad);
		}

		:global(&.triggered) {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.fade-in {
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1);

		:global(&.triggered) {
			opacity: 1;
		}
	}
</style>

<BG {slug} />
<main class="font-main{$slug ? '' : ' blend'}">
	<header class="font-small font-bold"><a href="/">Studio <br/>Riccardo <br/>Lardi</a></header>
	<slot></slot>
</main>
<Nav {slug} />