<template>
	<div id="cart" class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
		<div class="panel panel-danger">
			<div class="panel-heading">
				<span class="glyphicon glyphicon-shopping-cart"></span>
				<span>购物车</span>
				<span class="pull-right">总计：{{totalPrice}}</span>
			</div>
			<div class="panel-body">
				<ul class="cart-info">
					<li v-for='(val, index) in goods'>
						<span class="glyphicon glyphicon-remove-circle text-danger" @click='delData(index,val.price)'></span>
						<span> Apple/苹果 iPhone6s</span>
						<span class="label label-success">{{val.color}}， {{val.style}}</span>
						<span class="badge bg-danger">1</span>
						<span class="pull-right">{{val.price}}</span>
					</li>
				</ul>
				<span v-if='goods.length == 0' class="text-warning">亲，您还没有添加商品到购物车哦！</span>
			</div>
			<div class="panel-footer">
				<button class="btn btn-danger btn-block">结算<span class="glyphicon glyphicon-circle-arrow-right"></span></button>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store'
	export default {
		name: 'Cart',
		store,
		computed: {
			goods() {
				return store.state.goods;
			},
			totalPrice() {
				return store.state.totalPrice;
			}
		},
		methods: {
			delData(n,price) {
				store.state.goods.splice(n,1);
				store.state.totalPrice -= price;
				store.state.count--;
			}
		}
	}
</script>

<style>
	.cart-info {
		list-style:none;
	} 
</style>