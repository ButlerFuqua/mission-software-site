<script context="module">
	import { browser, dev } from "$app/env";

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
	<h1>About Mission Software</h1>

	<p>
		Mission software provides free to low-cost web and mobile services to
		nonprofits and qualifying businesses.
	</p>
	<p>
		This includes custom websites, mobile apps, or in-house software
		solutions.
	</p>

	<h2>How?</h2>
	<p>Mission Software recieves financial support from donors.</p>
	<p>
		Mission Software may also monetize some applications when it makes sense
		to do so.
	</p>

	<h2>Nonprofits</h2>
	<p>
		There are two categories of nonprofit organizaitons that Mission
		Software aims to support: Christian ministries and humanitarian
		organizaitons.
	</p>

	<h3>Christian ministries</h3>
	<p>
		The primary goal of supporting Christian ministries to help spread the
		true gospel of Jesus Christ.
	</p>
	<p>
		This may include a local church, a foreign missionary, or any piece of
		software that helps builds disciples of Jesus according to the Holy
		Bible.
	</p>
	<h3>Humanitarian organizaitons</h3>
	<p>
		This refers to organizations that provide a better quality of life such
		as prividing clean water or medical aid to a developing people group.
	</p>
	<h2>Qualifying businesses</h2>
	<p>
		A qualifying business could be a business in a low income area that
		provides a service to the local community and lacks the funds to develop
		quality software.
	</p>
	<p>
		This could be mobile ordering for a local coffee shop in a rural town,
		or business website for a plumber.
	</p>
	<h2>In House solutions</h2>
	<p>
		An in house solution would be a piece of software that Mission Software
		creates without being commissioned by a client.
	</p>
	<h2>And more...</h2>
	<p>Mission Software is not limited to the above categories.</p>
	<p>
		The overal goal is to provide free or low-cost software wherever the
		world needs it.
	</p>
</div>
