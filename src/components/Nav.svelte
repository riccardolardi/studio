<script>
	export let activeIndex;
	export let mobileHideNav;

	function handleClick(event) {
		const url = event.target.getAttribute('href').replace('/', '');
		// document.querySelector(`article#${url}`).scrollIntoView();
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
		transform: translateY(0);
		transition: opacity 250ms, transform 250ms;

		@include breakpoint($breakMobile) {
			top: $pad * 2;
			right: $pad * 2;

			&.mobile-hide {
				transform: translateY(-$pad);
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
					}
				}
			}
		}
	}
</style>

<nav class="font-main font-small font-bold{$activeIndex !== 0 ? ' show' : ''}{$mobileHideNav ? ' mobile-hide' : ''}">
	<ul class="nav-items">
		<li class="{$activeIndex === 1 ? 'active' : ''}">
			<a on:click={handleClick} aria-current="{$activeIndex === 1 ? 'page' : undefined}" href="/services">Services</a>
		</li>
		<li class="{$activeIndex === 2 ? 'active' : ''}">
			<a on:click={handleClick} aria-current="{$activeIndex === 2 ? 'page' : undefined}" href="/work">Work</a>
		</li>
		<li class="{$activeIndex === 3 ? 'active' : ''}">
			<a on:click={handleClick} aria-current="{$activeIndex === 3 ? 'page' : undefined}" href="/profile">Profile</a>
		</li>
		<li class="{$activeIndex === 4 ? 'active' : ''}">
			<a on:click={handleClick} aria-current="{$activeIndex === 4 ? 'page' : undefined}" href="/contact">Contact</a>
		</li>
	</ul>
</nav>