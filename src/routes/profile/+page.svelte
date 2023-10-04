<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { SignedIn, Doc } from 'sveltefire';
</script>

<h2>My Profile</h2>
<SignedIn let:user let:signOut>
	<p>Howdy, {user.uid}</p>
	<Doc ref="/users/{user.uid}" let:data>
		<p>{data.display_name}</p>
	</Doc>
	<button on:click={signOut}>Sign Out</button>
</SignedIn>
