export async function load({ fetch, params }) {
	// console.log('should use fetch on params', params.id)

	const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
	const result = await response.json();

	return result;
}
