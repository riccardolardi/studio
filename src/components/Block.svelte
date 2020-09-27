<script>
  import { onMount } from 'svelte';
	export let centered = false;
	export let fill = false;
	export let fill75 = false;
	export let fill50 = false;
  let blockRef, vh;

  onMount(() => {
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (fill) blockRef.style.minHeight = `${vh}px`;
    if (fill75) blockRef.style.minHeight = `${vh * 0.75}px`;
    if (fill50) blockRef.style.minHeight = `${vh * 0.5}px`;
  });
</script>

<style type="text/scss">
	@import "../styles/var.scss";
	@import "../styles/block.scss";
</style>

<div class="block{centered ? ' block-centered' : ''}{fill ? ' block-fill' : ''}{fill75 ? ' block-fill-75' : ''}{fill50 ? ' block-fill-50' : ''}" bind:this={blockRef}>
  {vh}
	<slot></slot>
</div>