<script>
	import { page } from '$app/stores';
	console.log($page.params);

	export let data;

	console.log(data);
</script>

<h1>{data.title}</h1>
<h3>{data.description}</h3>

<div data-sveltekit-preload-data="off">
    <img src={data.image} width=100 height=100 alt={data.title}>
</div>


<!-- <div>
    <div>
        {item.title}
    </div>
    <img src={item.image} width="100" height="100" />
</div> -->
