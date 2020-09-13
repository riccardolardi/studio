<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	import Services from '../routes/Services.svelte';
	import Work from '../routes/Work.svelte';
	import Profile from '../routes/Profile.svelte';
	import Contact from '../routes/Contact.svelte';
	import { onMount } from 'svelte';

	let intersectingArticles = [];
	let slug = getContext('slug');
	$: intersectingArticles, intersectingArticlesChanged();

	onMount(() => {
		const observeIntersectionEls = Array.from(document.querySelectorAll('.observe-intersection'));
    const intersectionObserver = new IntersectionObserver(entries => {
    	entries.forEach(entry => {
    		intersectingArticles = recalcIntersectingArticles(entry);
    		if (entry.isIntersecting && entry.intersectionRatio > 0.25) 
    			entry.target.classList.add('intersected');
    	});
    }, {
      threshold: Array.from({length: 1000}, (x, i) => i * 0.001)
    });
    observeIntersectionEls.forEach(el => intersectionObserver.observe(el));
	});

	function recalcIntersectingArticles(entry) {
		if (entry.target.nodeName !== 'ARTICLE') return intersectingArticles;
    if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
      if (intersectingArticles.includes(entry.target)) return intersectingArticles;
      return [...intersectingArticles, entry.target];
    }
    return intersectingArticles.filter(el => el !== entry.target);
	}

	function intersectingArticlesChanged() {
		if (!intersectingArticles.length || !slug) return;
		const latestEl = intersectingArticles.reduce((a, b) => {
			return parseInt(a.getAttribute('data-index')) > parseInt(b.getAttribute('data-index')) ? 
				a : b;
		});
		if ($slug === latestEl.id || $slug === undefined && latestEl.id === 'home') return;
		history.pushState({url: latestEl.id}, `${latestEl.id.toUpperCase()} - Studio Riccardo Lardi`, latestEl.id === 'home' ? '/' : latestEl.id);
		if (latestEl.id !== 'home') {
			document.querySelector('body').classList.add('past-intro');
			slug.set(latestEl.id);
		} else {
			document.querySelector('body').classList.remove('past-intro');
			slug.set(undefined);
		}
	}
</script>

<svelte:head>
	<title>Design & Code - Studio Riccardo Lardi</title>
</svelte:head>

<article id="home" class="observe-intersection" data-index="0">
	<Block centered={true}>
		<h1 class="font-bold font-large font-tight">Studio <br/>Riccardo <br/>Lardi</h1>
	</Block>
	<Block centered={true}>
		<h2 class="font-large font-cite observe-intersection roll-in trigger-once hyphens">This is a Basel based Design Studio specializing in planning, conception, design and development of projects in between digital and physical space.</h2>
	</Block>
</article>

<Services indexRequest={true} />
<Work indexRequest={true} />
<Profile indexRequest={true} />
<Contact indexRequest={true} />