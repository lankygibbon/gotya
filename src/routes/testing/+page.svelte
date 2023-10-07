<script>
	import { db } from '$lib/firebase';
	import { docStore } from 'sveltefire';

	const post = docStore(db, 'users/UmIA1sGj0FaXqbzhgfdjEUfyDWA2');
</script>

{$post?.display_name}
{$post?.title}
