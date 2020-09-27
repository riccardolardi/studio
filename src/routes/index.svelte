<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	import Services from '../routes/services.svelte';
	import Work from '../routes/work.svelte';
	import Profile from '../routes/profile.svelte';
	import Contact from '../routes/contact.svelte';
	import debounce from 'lodash.debounce';
	import { onMount } from 'svelte';

	let intersectingArticles = [];
	let segment = getContext('segment');
	let activeIndex = getContext('activeIndex');
	let mobileHideNav = getContext('mobileHideNav');
	let isMobile = getContext('isMobile');
  let isTablet = getContext('isTablet');
	let data = getContext('data');
	let scrollY = 0;
	let lastScrollY = 0;
	let debouncedSetIndexActive = debounce(index => activeIndex.set(index), 50);
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
    setTimeout(() => window.scrollTo(0, activeEl.offsetTop), $segment ? 0 : 1); // why tho
    windowResized(); // trigger initially to set isMobile
	});

	function isIntersecting(entry) {
		return entry.isIntersecting && 
			(entry.intersectionRatio >= 0.4 || 
				entry.intersectionRect.top <= entry.rootBounds.height * 0.6);
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
			el.classList.add('active');
			debouncedSetIndexActive(index);
		}
	}

	function checkScroll(newScrollY) {
	  const dy = lastScrollY - newScrollY;
	  lastScrollY = newScrollY;
	  mobileHideNav.set(dy < 0);
	}

	function windowResized(event) {
		isMobile.set(window.innerWidth <= 768);
    isTablet.set(window.innerWidth <= 1024);
	}
</script>

<svelte:window bind:scrollY={scrollY} on:resize={windowResized} />

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article id="home" class="observe-intersection" data-index="0">
	<Block centered={true} fill={true}>
		<h1 class="font-bold font-large font-tight">
			{@html data.header}
		</h1>
	</Block>
	<Block centered={true} fill={true}>
		<h2 class="font-large font-cite observe-intersection roll-in">
			{data.slogan}
		</h2>
	</Block>
</article>

<Services indexRequest={true} />
<Work indexRequest={true} />
<Profile indexRequest={true} />
<Contact indexRequest={true} />