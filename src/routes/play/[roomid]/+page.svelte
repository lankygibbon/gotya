<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
	import { Doc, Collection } from 'sveltefire';
	import QrCode from 'svelte-qrcode';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let url = ``;

	onMount(() => (url = window.location.href));
</script>

<h1>{data.roomid}</h1>

<Doc ref="rooms/{data.roomid}" let:data={room}>
	<h2>{room.owner}</h2>
	<h2>{room.roomCode}</h2>
	<h2>{url}</h2>
	<QrCode value={url} />
</Doc>
