<script>
	import { SignedIn, Doc } from 'sveltefire';

	import { auth, setUsername } from '$lib/firebase';
	import Profile from '../../Profile.svelte';

	import { authStore, authHandlers } from '$lib/stores/authStore';

	import { goto } from '$app/navigation';

	const signOut = () => {
		authHandlers.logout();
		goto('/');
	};
</script>

<h2>My Profile</h2>

<h1>{$authStore?.currentUser?.displayName}</h1>
<h4>{$authStore?.currentUser?.email}</h4>
<h4>{$authStore?.currentUser?.uid}</h4>

<button on:click={signOut}>Sign Out</button>
