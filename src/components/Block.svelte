<script>
	export let centered = false;
	export let fill = false;
	export let fill75 = false;
	export let fill50 = false;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
	@import "../styles/block.scss";
</style>

<div class="block{centered ? ' block-centered' : ''}{fill ? ' block-fill' : ''}{fill75 ? ' block-fill-75' : ''}{fill50 ? ' block-fill-50' : ''}">
	<slot></slot>
</div>