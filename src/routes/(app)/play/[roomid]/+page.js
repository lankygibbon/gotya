import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	if (params.roomid !== '') {
		return {
			roomid: params.roomid
		};
	}

	error(404, 'Not found');
}
