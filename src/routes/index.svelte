<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	import Services from '../routes/Services.svelte';
	import Work from '../routes/Work.svelte';
	import Profile from '../routes/Profile.svelte';
	import Contact from '../routes/Contact.svelte';
	import { onMount } from 'svelte';

	let intersectingArticles = [];
	let segment = getContext('segment');
	let activeIndex = getContext('activeIndex');
	let mobileHideNav = getContext('mobileHideNav');
	let data = getContext('data');
	let scrollY = 0;
	let lastScrollY = 0;
	$: intersectingArticles, intersectingArticlesChanged();
	$: checkScroll(scrollY);

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
    const activeEl = document.querySelector(`#${!$segment ? 'home' : $segment}`);
    setTimeout(() => window.scrollTo(0, activeEl.offsetTop), $segment ? 0 : 1); // why threshold
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
		if (!intersectingArticles.length) return;
		const latestEl = intersectingArticles.reduce((a, b) => {
			return parseInt(a.getAttribute('data-index')) > parseInt(b.getAttribute('data-index')) ? 
				a : b;
		});
		const url = latestEl.id
		const index = parseInt(latestEl.getAttribute('data-index'));
		changeRoute(index, url, latestEl);
	}

	function changeRoute(index, url, el) {
		if (!el.classList.contains('active')) {
			const lastActiveEl = document.querySelector('article.active');
			if (lastActiveEl) lastActiveEl.classList.remove('active');
			const titlePrefix = data.slugs[index].title ? `${data.slugs[index].title} - ` : '';
			document.title = titlePrefix + data.title;
			el.classList.add('active');
			activeIndex.set(index);
		}
	}

	function checkScroll(newScrollY) {
	  const dy = lastScrollY - newScrollY;
	  lastScrollY = newScrollY;
	  mobileHideNav.set(dy < 0);
	}
</script>

<svelte:window bind:scrollY={scrollY} />

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