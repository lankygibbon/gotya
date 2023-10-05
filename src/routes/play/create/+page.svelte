<script>
	import { checkCode } from '$lib/roomCodes';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

Create
<button on:click={() => checkCode()}>Check Code</button>
