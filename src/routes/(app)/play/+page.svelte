<script>
	/** @type {import('./$types').PageData} */
	import { Collection } from 'sveltefire';
	import { collection, query, where } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/authStore';

	const q = query(
		collection(db, 'rooms'),
		where('members', 'array-contains', $authStore.currentUser?.uid)
	);
</script>

<aside>
	<nav>
		<ul>
			<li><a href="/play/create">Create</a></li>
			<li><a href="/play/join">Join</a></li>
		</ul>
	</nav>
</aside>

<Collection ref={q} let:data let:count>
	<p>Found {count} active room{count === 1 ? '' : 's'}</p>

	{#each data as room}
		<button
			on:click={() => {
				goto(`/play/${room.id}`);
			}}>Go To Room {room.roomCode}</button
		>
	{/each}

	<p slot="loading">Loading...</p>
</Collection>
