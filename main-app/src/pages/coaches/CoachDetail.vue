<template>
	<section>
		<b>Coach Detail</b>
		<br />
		<router-link to="/coaches/9c89/contact">Contact</router-link>

		<router-view></router-view>
	</section>
</template>

<script>
// import ProductItem from '../components/products/ProductItem.vue';

export default {
	components: {},
	computed: {
		products() {
			return [];
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 40rem;
}
</style>
