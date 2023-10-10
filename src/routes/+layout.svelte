<script>
	import '@picocss/pico/css/pico.css';
	import { onMount } from 'svelte';
	import Header from '../Header.svelte';
	import { FirebaseApp } from 'sveltefire';

	import { authStore } from '$lib/stores/authStore';

	import { app, db, auth, storage } from '$lib/firebase';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (user === null) {
				if ($page.route.id !== '/' && $page.route.id !== '/login') {
					goto('/');
				}
			}
		});
	});
</script>

<FirebaseApp {auth} firestore={db} {storage}>
	<main class="container">
		<Header />
		<slot />
	</main>
</FirebaseApp>
