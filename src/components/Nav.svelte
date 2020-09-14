<script>
	export let slug;

	function handleClick(event) {
		const url = event.target.getAttribute('href');
		document.querySelector(`article#${url}`).scrollIntoView();
	}
</script>

<style type="text/scss">
	@import "../styles/var.scss";
	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		position: fixed;
		top: $pad;
		right: $pad;
		opacity: 0;
		transition: opacity 250ms;

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

			&.lang-select {

				li:first-child {
					&:after {
						content: "\00a0/";
					}
				}
			}

			li {
				display: inline-block;

				&.active {

					a, button {
						
						&:after {
							transform: scale(1);
							opacity: 1;
						}
					}
				}

				a, button {
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

		button {
			cursor: pointer;
		}
	}
</style>

<nav class="font-main font-small font-bold {$slug ? ' show' : ''}">
	<ul class="nav-items">
		<li class="{$slug === 'services' ? 'active' : ''}">
			<a on:click|preventDefault={handleClick} aria-current="{$slug === 'services' ? 'page' : undefined}" href="services">Services</a>
		</li>
		<li class="{$slug === 'work' ? 'active' : ''}">
			<a on:click|preventDefault={handleClick} aria-current="{$slug === 'work' ? 'page' : undefined}" href="work">Work</a>
		</li>
		<li class="{$slug === 'profile' ? 'active' : ''}">
			<a on:click|preventDefault={handleClick} aria-current="{$slug === 'profile' ? 'page' : undefined}" href="profile">Profile</a>
		</li>
		<li class="{$slug === 'contact' ? 'active' : ''}">
			<a on:click|preventDefault={handleClick} aria-current="{$slug === 'contact' ? 'page' : undefined}" href="contact">Contact</a>
		</li>
	</ul>
	<ul class="lang-select">
		<li><button>DE</button></li>
		<li><button>EN</button></li>
	</ul>
</nav>