<script>
	export let activeIndex;
	export let mobileHideNav;

	function navigate(index) {
    const activeEl = document.querySelector(`article[data-index="${index}"]`);
    window.scrollTo(0, activeEl.offsetTop);
    setTimeout(() => mobileHideNav.set(true), 125);
	}
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
			top: $pad * 2;
			right: $pad * 2;
			color: white;

			&.mobile-hide {
				opacity: 0 !important;
			}
		}

		&.show {
			opacity: 1;
		}

		ul {

			&.nav-items {
				margin-bottom: $pad * 0.2;

				li {
					margin-right: $pad / 2;

					&:last-child {
						margin-right: 0;
					}
				}
			}

			li {
				display: inline-block;

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
						}
					}
				}
			}
		}
	}
</style>

<nav class="font-main font-small font-bold{$activeIndex !== 0 ? ' show' : ''}{$mobileHideNav ? ' mobile-hide' : ''}">
	<ul class="nav-items">
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