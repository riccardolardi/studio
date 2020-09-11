<script>
	import BG from '../components/BG.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style type="text/scss" global>
	@import "../styles/var.scss";
	@import "../styles/type.scss";

	body {
	 	
	}

	#app {
	 	color: $white;
	 	background-color: $blue;
	 	isolation: isolate;
	}

	main {

	}

	.blend {
		mix-blend-mode: overlay;
	}
</style>

<div id="app">

	<BG />

	<Nav {segment} />

	<main class="font-main">
		<slot></slot>
	</main>

</div>