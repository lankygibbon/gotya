<script>
	import { SignedIn, SignedOut } from 'sveltefire';
</script>

<div>
	<nav>
		<ul>
			<li><strong>Gotya Game</strong></li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<SignedIn><li><a href="/play">Play</a></li></SignedIn>
			<SignedOut><li><a href="/login">Login</a></li></SignedOut>
			<SignedIn><li><a href="/profile">Profile</a></li></SignedIn>
		</ul>
	</nav>
</div>
