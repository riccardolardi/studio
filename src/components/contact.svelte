<script>
	import { getContext } from 'svelte';
	import Block from '../components/Block.svelte';
	let data = getContext('data');
	let index = 4;
</script>

<style type="text/scss">
  @import 'breakpoint-sass/stylesheets/_breakpoint.scss';
  @import "../styles/var.scss";

  #contact {

    .contact-info {
      padding: $pad * 2 $pad * 2 0 0;

      span {
        display: block;

        &.link {
          display: inline-block;
        }

        &.phone {

          a {
            display: block;

            @include breakpoint($breakMobile) {
              padding: $pad * 0.3 0 $pad * 0.2;
            }
          }
        }
      }

      ul.social-links {
        margin-top: $pad * 0.7;
        display: flex;

        @include breakpoint($breakMobile) {
          margin-top: $pad;
        }

        li {
          margin-right: $pad * 0.5;

          @include breakpoint($breakMobile) {
            margin-right: $pad;
          }

          &:last-child {
            margin-right: 0;
          }

          a {
            display: block;
          }

          img {
            display: block;
            width: $pad * 0.75;
            height: auto;

            @include breakpoint($breakMobile) {
              width: $pad * 1.75;
            }
          }
        }
      }
    }
  }
</style>

<article id="contact" class="observe-intersection fade-in" data-index={index}>
	<Block fill={true}>
		<h1 class="font-large font-bold">{data.articles[index].title}</h1>
		<h2 class="font-large font-cite">{data.articles[index].subtitle}</h2>
		<div class="contact-info observe-intersection roll-in">
			<span class="font-bold">Studio Riccardo Lardi</span>
			<span>General Guisan-Strasse 78</span>
			<span>4054 Basel</span>
			<span>Switzerland</span>
			<span class="phone"><a href="tel:0041 79 339 65 38">0041 79 339 65 38</span>
			<span class="email"><a href="mailto:hello@riccardolardi.com" class="link">hello@riccardolardi.com</span>
			<ul class="social-links">
        <li><a href="https://www.linkedin.com/in/riccardolardi" rel="noopener noreferrer" 
          target="_blank" aria-label="LinkedIn" className="social-icon" alt="LinkedIn">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a></li>
        <li><a href="https://twitter.com/riccardolardi" rel="noopener noreferrer" 
          target="_blank" aria-label="Twitter" className="social-icon" alt="Twitter">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a></li>
        <li><a href="https://www.instagram.com/studioriccardolardi" rel="noopener noreferrer" 
          target="_blank" aria-label="Instagram" className="social-icon" alt="Instagram">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a></li>
        <li><a href="https://github.com/riccardolardi" rel="noopener noreferrer" 
          target="_blank" aria-label="GitHub" className="social-icon" alt="GitHub">
          <img src="/icons/github.svg" alt="GitHub" />
        </a></li>
        <li><a href="https://stackoverflow.com/users/1515187/riccardolardi" rel="noopener noreferrer" target="_blank" aria-label="StackOverflow" className="social-icon" alt="StackOverflow">
          <img src="/icons/stackoverflow.svg" alt="StackOverflow" />
        </a></li>
			</ul>
		</div>
	</Block>
</article>