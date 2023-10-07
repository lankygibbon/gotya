<script>
	import { SignedIn, SignedOut, Doc, Collection } from 'sveltefire';
	import { signInAnonymously } from 'firebase/auth';
	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import Auth from '$lib/components/Auth.svelte';
	const gProvider = new GoogleAuthProvider();
	const auth = getAuth();

	export async function googleSignIn() {
		signInWithPopup(auth, gProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// @ts-ignore
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}
</script>

<SignedIn let:user let:signOut>
	<p>Hello {user.uid}</p>
	<p>Hello {user.displayName}</p>
	<a href="/"><button on:click={signOut}>Sign Out</button></a>
</SignedIn>

<SignedOut let:auth>
	<button on:click={() => signInAnonymously(auth)}>Sign In Anonymously</button>
	<button on:click={() => googleSignIn()}>Sign In with Google</button>
</SignedOut>

<Auth />
