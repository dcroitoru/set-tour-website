import { readable } from 'svelte/store';
import data from '$lib/data/deals.json';

export interface Post {
	title: string;
	slug: string;
	isPublished: boolean;
	datePublished: Date;
}


export const deals = readable<Post[]>([
	{
		title: 'My First Post',
		slug: 'my-first-post',
		isPublished: true,
		datePublished: new Date('2023-01-01')
	}
]);
