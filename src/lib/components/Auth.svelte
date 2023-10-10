<script>
	import { authHandlers, authStore } from '$lib/stores/authStore';
	import { goto } from '$app/navigation';
	let register = false;
	/**
	 * @type {string}
	 */
	let email;
	/**
	 * @type {string}
	 */
	let password;
	/**
	 * @type {string}
	 */
	let confirmPassword;

	const handlesubmit = async () => {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}
		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			goto('/profile');
		}
	};
</script>

<div>
	<h1>{register ? 'Sign Up' : 'Log In'}</h1>
	<form>
		<label>
			<input bind:value={email} type="text" placeholder="Email" />
		</label>
		<label>
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
		{#if register}
			<label>
				<input bind:value={confirmPassword} type="password" placeholder="Confirm Password" />
			</label>
		{/if}
		<button on:click={handlesubmit}>Submit</button>
		{#if !register}
			<button on:click={() => authHandlers.signInWithGoogle()}>Sign In with Google</button>
		{/if}
	</form>

	{#if register}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:click={() => {
				register = false;
			}}
		>
			Already have an account
			<p>Log in</p>
		</div>{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:click={() => {
				register = true;
			}}
		>
			Don't have an account
			<p>Sign Up</p>
		</div>
	{/if}
</div>
