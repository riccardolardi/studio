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
	let data = getContext('data');
	$: intersectingArticles, intersectingArticlesChanged();

	onMount(() => {
		const observeIntersectionEls = Array.from(document.querySelectorAll('.observe-intersection'));
    const intersectionObserver = new IntersectionObserver(entries => {
    	entries.forEach(entry => {
    		intersectingArticles = recalcIntersectingArticles(entry);
    		if (isIntersecting(entry)) {
    			entry.target.classList.add('intersected');
    		} else if (!entry.isIntersecting && 
    			entry.target.classList.contains('intersected') && entry.rootBounds && 
    			entry.boundingClientRect.top > entry.rootBounds.height) {
    			entry.target.classList.remove('intersected');
    		}
    	});
    }, {
      threshold: Array.from({length: 1000}, (x, i) => i * 0.001)
    });
    observeIntersectionEls.forEach(el => intersectionObserver.observe(el));
	});

	function isIntersecting(entry) {
		return entry.isIntersecting && 
			(entry.intersectionRatio >= 0.25 || 
				entry.intersectionRect.top <= entry.rootBounds.height * 0.75);
	}

	function recalcIntersectingArticles(entry) {
		if (entry.target.nodeName !== 'ARTICLE') return intersectingArticles;
    if (isIntersecting(entry)) {
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
		const url = latestEl.id
		const index = latestEl.getAttribute('data-index');
		changeRoute(index, url);
	}

	function changeRoute(index, url) {
		history.pushState({index, url}, data.slugs[index].title, data.slugs[index].url);
		document.title = data.slugs[index].title;
		if (url !== 'home') {
			document.querySelector('body').classList.add('past-intro');
			slug.set(url);
		} else {
			document.querySelector('body').classList.remove('past-intro');
			slug.set(undefined);
		}
	}
</script>

<svelte:head>
	<title>{data.slugs[0].title}</title>
</svelte:head>

<article id="home" class="observe-intersection" data-index="0">
	<Block centered={true}>
		<h1 class="font-bold font-large font-tight">
			{@html data.header}
		</h1>
	</Block>
	<Block centered={true}>
		<h2 class="font-large font-cite observe-intersection roll-in">
			{data.slogan}
		</h2>
	</Block>
</article>

<Services indexRequest={true} />
<Work indexRequest={true} />
<Profile indexRequest={true} />
<Contact indexRequest={true} />