<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest = false;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
</style>

<ClientModule indexRequest={indexRequest}>
	<article id="services" class="observe-intersection" data-index="1">
		<Block centered={true}>
			<h1>Services</h1>
			<h2>This is what we do.</h2>
		</Block>
	</article>
</ClientModule>