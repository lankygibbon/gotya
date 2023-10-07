<script>
	import '@picocss/pico/css/pico.css';
	import { onMount } from 'svelte';
	import Header from '../Header.svelte';
	import { FirebaseApp } from 'sveltefire';

	import { authStore } from '$lib/stores/authStore';

	import { app, db, auth, storage } from '$lib/firebase';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});
		});
	});
</script>

<FirebaseApp {auth} firestore={db} {storage}>
	<main class="container">
		<Header />
		<slot />
	</main>
</FirebaseApp>
