<script>
  import { getContext } from 'svelte';
  let isInsta = getContext('isInsta');
	export let centered = false;
	export let fill = false;
	export let fill75 = false;
	export let fill50 = false;
  let blockRef, fillClass, fill75class, fill50class;
  if (fill) fillClass = $isInsta ? ' block-fill-insta' : ' block-fill';
  if (fill75) fillClass = $isInsta ? ' block-fill-75-insta' : ' block-fill-75';
  if (fill50) fillClass = $isInsta ? ' block-fill-50-insta' : ' block-fill-50';
  if ($isInsta && fill) blockRef.style.height = `${window.innerHeight}px`;
  if ($isInsta && fill75) blockRef.style.height = `${window.innerHeight * 0.75}px`;
  if ($isInsta && fill50) blockRef.style.height = `${window.innerHeight * 0.5}px`;
</script>

<style type="text/scss">
	@import "../styles/var.scss";
	@import "../styles/block.scss";
</style>

<div class="block{centered ? ' block-centered' : ''}{fill ? fillClass : ''}{fill75 ? fill75class : ''}{fill50 ? fill50class : ''} "bind:this={blockRef}>
	<slot></slot>
</div>