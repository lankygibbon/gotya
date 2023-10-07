<script>
	/**
	 * @type {string}
	 */
	export let displayName;
	/**
	 * @type {string}
	 */
	export let photoURL;
	/**
	 * @type {string}
	 */
	export let uid;
</script>

<h3>Hi {displayName}!</h3>

<img src={photoURL} width="100" alt="user avatar" />
<p>Your userID is {uid}</p>
