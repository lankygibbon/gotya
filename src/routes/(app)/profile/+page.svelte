<script>
	import { SignedIn, Doc } from 'sveltefire';

	import { auth, setUsername } from '$lib/firebase';
	import Profile from '../../../Profile.svelte';

	import { authStore, authHandlers } from '$lib/stores/authStore';

	import { goto } from '$app/navigation';
	import AuthReset from '$lib/components/AuthReset.svelte';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { page } from '$app/stores';

	const signOut = () => {
		authHandlers.logout();
		goto('/');
	};

	$authStore;
</script>

<h2>My Profile</h2>

<h1>{$authStore?.currentUser?.displayName}</h1>
<h4>{$authStore?.currentUser?.email}</h4>
<h4>{$authStore?.currentUser?.uid}</h4>

<button on:click={signOut}>Sign Out</button>

{#if $authStore?.currentUser?.providerData[0].providerId === 'password'}
	<AuthReset />
{/if}

<p>Current URL: {$page.route.id}</p>
