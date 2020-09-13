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
    		entry.isIntersecting ? entry.target.classList.add('intersecting') : 
    			entry.target.classList.remove('intersecting');
    		intersectingArticles = 
        	entries.filter(el => el.isIntersecting && el.target.nodeName === 'ARTICLE' && 
        		el.intersectionRect.top <= el.rootBounds.height * 0.75)
        			.map(el => el.target);
				(entry.isIntersecting && 
					entry.target.classList.contains('fade-in') && 
					entry.intersectionRatio > 0.25) || 
				(entry.isIntersecting && 
					entry.target.classList.contains('roll-in') && 
					entry.intersectionRatio > 0.5) ? 
				entry.target.classList.add('triggered') : 
				entry.target.classList.remove('triggered');
				if (entry.target.classList.contains('triggered') && 
					entry.target.classList.contains('trigger-once')) 
					intersectionObserver.unobserve(entry.target);
    	});
    }, {
      threshold: Array.from({length: 1000}, (x, i) => i * 0.001)
    });
    observeIntersectionEls.forEach(el => intersectionObserver.observe(el));
	});

	function intersectingArticlesChanged() {
		if (!intersectingArticles.length || !slug) return;
		const latestEl = intersectingArticles[intersectingArticles.length - 1];
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