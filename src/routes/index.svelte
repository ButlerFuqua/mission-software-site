<script context="module">
	export const prerender = true;
</script>

<!-- <script>
	let particlesJS;
	let value = "Hello, **world**!";

	const initializeRemarkable = () => {
		particlesJS = new window.particlesJS.Remarkable();
		particlesJS.load("particles-js", "./particles.json", function () {
			console.log("callback - particles.js config loaded");
		});
	};
</script> -->
<script>
	function heyThere() {
		console.log("ran");
		// console.log("here ", window.particlesJS?.load); //
		if (window.particlesJS) {
			window.particlesJS?.load(
				"particles-js",
				"./particles.json",
				function () {
					console.log("callback - particles.js config loaded");
				}
			);
		} else {
			heyThere();
		}
	}
</script>

<!-- <script>
	// import Counter from "$lib/Counter.svelte";
</script> -->

<!-- <script>
	let md;
	let value = "Hello, **world**!";

	const initializeRemarkable = () => {
		md = new window.remarkable.Remarkable();
		console.log("md", md);
	};
</script> -->

<!-- <script>
	const particles = require('https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js');
</script> -->

<svelte:head>
	<!-- <script
		src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js"></script> -->
	<script
		src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
		on:load={heyThere}></script>
	<!-- <script>
		// particlesJS.load("particles-js", "./particles.json", function () {
		// 	console.log("callback - particles.js config loaded");
		// });
	</script> -->
	<title>Mission Software</title>
</svelte:head>

<section>
	<h1>Mission Software</h1>
	<p>Custom web and mobile apps for nonprofits and qualifying businesses.</p>
	<hr />
</section>

<section>
	<p>Apply to be a client</p>
	<button>Show form</button>
	<p>Pledge to provide financial support</p>
	<button>Show form</button>
</section>
<div id="particles-js" />

<!-- Reference -->

<!-- <picture>
	<source srcset="svelte-welcome.webp" type="image/webp" />
	<img src="svelte-welcome.png" alt="Welcome" />
</picture> -->
<style>
	section {
		text-align: center;
	}
	#particles-js {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		pointer-events: none;
	}
</style>
