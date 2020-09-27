<script>
	export let centered = false;
  export let webkitFix = false;
	export let fill = false;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
	@import "../styles/block.scss";
</style>

<div class="block{centered ? ' block-centered' : ''}{webkitFix ? ' webkit-fix' : ''}{fill ? ' block-fill' : ''}">
	<slot></slot>
</div>