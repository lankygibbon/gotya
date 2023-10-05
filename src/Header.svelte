<script>
	import { SignedIn, SignedOut } from 'sveltefire';
</script>

<nav>
	<nav>
		<ul>
			<li><strong>Gotya Game</strong></li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/play">Play</a></li>
			<SignedOut><li><a href="/login">Login</a></li></SignedOut>
			<SignedIn><li><a href="/profile">Profile</a></li></SignedIn>
		</ul>
	</nav>
</nav>
