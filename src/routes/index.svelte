<script>
	import Block from '../components/Block.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const observeIntersectionEls = Array.from(document.querySelectorAll('.observe-intersection'));
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRect.top <= entry.rootBounds.height * 0.75) {
          entry.target.classList.add('intersecting');
        } else {
        	entry.target.classList.remove('intersecting');
        }
      });
    }, {
      threshold: Array.from({length: 100}, (x, i) => i * 0.01)
    });
    observeIntersectionEls.forEach(el => intersectionObserver.observe(el));
	});
</script>

<style type="text/scss">
	@import "../styles/var.scss";

	.roll-in {
		transform: translateX(-$pad);
		opacity: 0;
		transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);

		:global(&.intersecting) {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>

<svelte:head>
	<title>Design & Code - Studio Riccardo Lardi</title>
</svelte:head>

<article id="home">
	<Block centered={true}>
		<h1 class="font-bold font-large font-tight blend">Studio <br/>Riccardo <br/>Lardi</h1>
	</Block>
	<Block centered={true}>
		<h2 class="font-large font-cite observe-intersection roll-in blend">A Basel based Design Studio specializing in planning, conception, design and development of projects in between digital and physical space.</h2>
	</Block>
</article>

<article id="services">

</article>