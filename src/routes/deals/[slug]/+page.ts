import type { PageLoad } from './$types';
import { marked } from 'marked';
import deals from '$lib/data/deals.json';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const slug = params['slug'];
		const res = await fetch(`/deals/${slug}.md`);
		if (res.status !== 200) {
			throw new Error();
		}

		const post = await res.text();
		const deal = deals.find((d) => d.name === slug);

		return {
			slug,
			post: marked.parse(post),
			title: deal?.title,
			image: deal?.image
		};
	} catch (e) {
		throw e;
	}
};
