<template>
	<the-header></the-header>

	<button @click="showProds">Show prods</button>

	<div>
		<i
			v-for="item in allProducts"
			:key="item.id"
			>{{ item.id }}</i
		>
	</div>

	<router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
	data() {
		return {
			isLoggedIn: false,
			products: [],
			cart: { items: [], total: 0, qty: 0 },
		};
	},
	provide() {
		return {
			isLoggedIn: this.isLoggedIn,
			products: this.allProducts,
			cart: this.cart,
			addProductToCart: this.addProductToCart,
			removeProductFromCart: this.removeProductFromCart,
			login: this.login,
			logout: this.logout,
		};
	},
	computed: {
		allProducts() {
			return this.$store.state['cartMod/products'];
		},
		isAuth() {
			return this.$store.getters.userIsAuth;
		},
	},
	methods: {
		addProductToCart(productData) {
			const productInCartIndex = this.cart.items.findIndex(ci => ci.productId === productData.id);

			if (productInCartIndex >= 0) {
				this.cart.items[productInCartIndex].qty++;
			} else {
				const newItem = {
					productId: productData.id,
					title: productData.title,
					image: productData.image,
					price: productData.price,
					qty: 1,
				};
				this.cart.items.push(newItem);
			}
			this.cart.qty++;
			this.cart.total += productData.price;
		},
		removeProductFromCart(prodId) {
			const productInCartIndex = this.cart.items.findIndex(cartItem => cartItem.productId === prodId);
			const prodData = this.cart.items[productInCartIndex];
			this.cart.items.splice(productInCartIndex, 1);
			this.cart.qty -= prodData.qty;
			this.cart.total -= prodData.price * prodData.qty;
		},
		login() {
			this.isLoggedIn = true;
		},
		logout() {
			this.isLoggedIn = false;
		},
		showProds() {
			console.log(this.products);
			console.log(this.allProducts);
			// console.log(this.$store.state['cartMod/products']);
			console.log(this.$store.getters['cartMod/getProds']);

			console.log(this.$store.state.allItens);
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
