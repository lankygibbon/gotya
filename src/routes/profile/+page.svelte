<script>
	import { SignedIn, Doc } from 'sveltefire';

	import { auth, setUsername } from '$lib/firebase';
	import Profile from '../../Profile.svelte';

	import { authStore, authHandlers } from '$lib/stores/authStore';

	let display_name = $authStore.currentUser.displayName;
	let email = $authStore.currentUser.email;
	let uid = $authStore.currentUser.uid;

	const signOut = () => {
		authHandlers.logout();
	};
</script>

<h2>My Profile</h2>

{#if $authStore.currentUser}
	<h1>{display_name}</h1>
	<h4>{email}</h4>
	<h4>{uid}</h4>
{/if}

<button on:click={signOut}>Sign Out</button>
