<script>
	export let segment;
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

<nav class="font-main {segment ? 'show' : undefined}">
	<ul class="nav-items">
		<li><a aria-current="{segment === 'services' ? 'page' : undefined}" href="services">Services</a></li>
		<li><a aria-current="{segment === 'work' ? 'page' : undefined}" href="work">Work</a></li>
		<li><a aria-current="{segment === 'profile' ? 'page' : undefined}" href="profile">Profile</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
	</ul>
	<ul class="lang-select">
		<li><button>DE</button></li>
		<li><button>EN</button></li>
	</ul>
</nav>