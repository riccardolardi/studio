<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
</style>

<ClientModule indexRequest={indexRequest}>
	<article id="work" class="observe-intersection" data-index="2">
		<Block centered={true}>
			<h1>Work</h1>
			<h2>This is some of our work.</h2>
		</Block>
	</article>
</ClientModule>