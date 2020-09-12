<script>
	import ClientModule from '../components/ClientModule.svelte';
	import Block from '../components/Block.svelte';
	export let indexRequest;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
</style>

<ClientModule indexRequest={indexRequest}>
	<article id="profile" class="observe-intersection" data-index="3">
		<Block centered={true}>
			<h1>Profile</h1>
			<h2>This is us.</h2>
		</Block>
	</article>
</ClientModule>