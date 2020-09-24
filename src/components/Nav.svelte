<script>
	export let activeIndex;
	export let mobileHideNav;
	export let isMobile;

	let mobileNavOpen = false;

	function navigate(index) {
    const activeEl = document.querySelector(`article[data-index="${index}"]`);
    window.scrollTo(0, activeEl.offsetTop);
    setTimeout(() => {
    	mobileNavOpen = false;
    	mobileHideNav.set(true);
    }, 125);
	}

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}

	$: if ($activeIndex === 0) mobileNavOpen = false;
</script>

<style type="text/scss">
	@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
	@import "../styles/var.scss";

	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		position: fixed;
		top: $pad;
		right: $pad;
		opacity: 0;
		transition: opacity 250ms, transform 250ms;
		z-index: 2;

		@include breakpoint($breakMobile) {
			top: $pad * 1.5;
			right: $pad * 1.5;

			header {
				opacity: 0;
			}
		}

		&.show {
			opacity: 1;
		}

		&.mobile-nav-open {

			header {
				opacity: 1;
			}

			button.button-nav-mobile {

				&:after {
					content: "✕";
					color: $white;
					transform: rotateZ(90deg);
				}
			}

			ul {
				visibility: visible;
				opacity: 1;
				backdrop-filter: blur(4px);
				transition: opacity 250ms, visibility 0ms 0ms;
			}
		}

		button.button-nav-mobile {
			position: relative;
			color: $blue;
			padding: 0 $pad * 0.5;
			transform: translateY(0);
			visibility: visible;
			opacity: 1;
			transition: opacity 250ms, transform 250ms, visibility 0ms 0ms;
			z-index: 2;

			&:after {
				display: block;
				content: "☰";
				transform: rotateZ(0);
				transition: transform 250ms;
			}

			&.hide {
				transform: translateY(-2vh);
				visibility: hidden;
				opacity: 0;
				transition: opacity 250ms, transform 250ms, visibility 0ms 250ms;
			}
		}

		ul {
			margin-bottom: $pad * 0.2;

			@include breakpoint($breakMobile) {
				display: flex;
				justify-content: center;
				flex-direction: column;
				position: fixed;
				top: 0px;
				left: 0px;
				right: 0px;
				bottom: 0px;
				padding-left: $pad * 2;
				backdrop-filter: blur(0);
				background-color: rgba(0, 0, 255, 0.85);
				color: $white;
				opacity: 0;
				visibility: hidden;
				z-index: 1;
				transition: opacity 250ms, visibility 0ms 250ms;
			}

			li {
				display: inline-block;
				margin-right: $pad / 2;

				@include breakpoint($breakMobile) {
					display: block;
				}

				&:last-child {
					margin-right: 0;
				}

				&.active {

					a {
						
						&:after {
							transform: scale(1);
							opacity: 1;
						}
					}
				}

				a {
					position: relative;
					text-decoration: none;
					color: inherit;

					&:after {
						content: "";
						position: absolute;
						left: 0px;
						bottom: -$pad * 0.2;
						width: 100%;
						height: $pad * 0.1;
						background-color: $black;
						transform: scale(0.75);
						opacity: 0;
						transition: all 125ms;
						pointer-events: none;

						@include breakpoint($breakMobile) {
							background-color: $white;
							height: $pad * 0.25;
						}
					}
				}
			}
		}
	}
</style>

<nav class="font-main font-small font-tight{$isMobile ? '' : ' font-bold'}{$activeIndex !== 0 ? ' show' : ''}{mobileNavOpen ? ' mobile-nav-open' : ''}">
	{#if $isMobile}<button class="button-nav-mobile font-huge{$mobileHideNav && !mobileNavOpen ? ' hide' : ''}{mobileNavOpen ? ' font-bold' : ''}" on:click={toggleMobileNav}/>{/if}
	<header class="font-small font-tight font-bold">
		<a href="/" on:click={() => window.scrollTo(0, 0)}>Studio <br/>Riccardo <br/>Lardi</a>
	</header>
	<ul class="nav-items {$isMobile ? 'font-huge' : ''}">
		<li on:click|preventDefault={() => navigate(1)} class="{$activeIndex === 1 ? 'active' : ''}">
			<a aria-current="{$activeIndex === 1 ? 'page' : undefined}" href="/services">Services</a>
		</li>
		<li on:click|preventDefault={() => navigate(2)}  class="{$activeIndex === 2 ? 'active' : ''}">
			<a aria-current="{$activeIndex === 2 ? 'page' : undefined}" href="/work">Work</a>
		</li>
		<li on:click|preventDefault={() => navigate(3)}  class="{$activeIndex === 3 ? 'active' : ''}">
			<a aria-current="{$activeIndex === 3 ? 'page' : undefined}" href="/profile">Profile</a>
		</li>
		<li on:click|preventDefault={() => navigate(4)}  class="{$activeIndex === 4 ? 'active' : ''}">
			<a aria-current="{$activeIndex === 4 ? 'page' : undefined}" href="/contact">Contact</a>
		</li>
	</ul>
</nav>