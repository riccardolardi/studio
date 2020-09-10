<script>
	import BG from '../components/BG.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";
	@import "../styles/type.scss";
	@import "../styles/block.scss";

	body {
	 	color: $white;
	 	background-color: $blue;
	 	min-height: 100vh;
	 	isolation: isolate;
	}

	main {
		position: relative;
	}
</style>

<BG />

<Nav {segment} />

<main class="font-main">
	<slot></slot>
</main>