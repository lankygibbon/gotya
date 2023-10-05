<script>
	import { createRoom } from '$lib/roomCodes';
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;

	const l_createRoom = () => {
		createRoom().then((response) => {
			console.log(`Code Running ${response}`);
			if (response == 'unsuccessful') {
			} else {
				goto(`/play/${response}`);
			}
		});
	};
</script>

Create
<button on:click={() => l_createRoom()}>Check Code</button>
