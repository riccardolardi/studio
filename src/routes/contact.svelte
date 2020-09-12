<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
</style>

<ClientModule indexRequest={indexRequest}>
	<article id="contact" class="observe-intersection" data-index="4">
		<Block centered={true}>
			<h1>Contact</h1>
			<h2>Contact us!</h2>
		</Block>
	</article>
</ClientModule>