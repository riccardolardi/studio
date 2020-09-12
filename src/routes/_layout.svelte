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
				document.querySelector(`article#${segment}`).scrollIntoView();
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
	 	}
	}

	main {
		position: relative;
	}

	.blend {
		mix-blend-mode: overlay;
	}

	#home {
		color: $white;
	}

	.roll-in {
		transform: translateX(-$pad);
		opacity: 0;
		transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);

		:global(&.triggered) {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>

<BG {slug} />
<main class="font-main{$slug ? '' : ' blend'}">
	<slot></slot>
</main>
<Nav {slug} />