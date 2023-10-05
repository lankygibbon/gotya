<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Doc, Collection } from 'sveltefire';
</script>

<h1>{data.roomid}</h1>

<Doc ref="rooms/{data.roomid}" let:data>
	<h2>{data.name}</h2>
	<h2>{data.roomCode}</h2>
</Doc>
