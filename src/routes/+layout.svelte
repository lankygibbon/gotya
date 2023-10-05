<script>
	import '@picocss/pico/css/pico.css';
	import Header from '../Header.svelte';
	import { FirebaseApp } from 'sveltefire';

	import { app, firestore, auth, storage } from '$lib/firebase';
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<Header />
	<slot />
</FirebaseApp>
