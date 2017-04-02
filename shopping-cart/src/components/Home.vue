<template>
	<div class="item">
		<div class="item-img">
			<img :src="imgUrl">
		</div>
		<div class="item-info">
			<h3>Apple/苹果 iPhone 6S</h3>
			<hr>
			<div class="row">
				<div class="col-sm-3 info-title">
					<span>描述：</span>
				</div>
				<div class="col-sm-9">
					<p>3D Touch、1200万像素照片、4k视频，强大功能于一身。</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3 info-title">
					<span>价格：</span>
				</div>
				<div class="col-sm-9">
					<span class="text-danger">￥{{price}}</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3 info-title">
					<span>外观：</span>
				</div>
				<div class="col-sm-9">
					<div class="color-choose">
						<a class="btn btn-default btn-sm" v-for='val in colors' :class='{active: val.url == imgUrl}' @click='changeUrl(val.color,val.url)'>
							{{val.color}}
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4 info-title">
					<span>存储容量：</span>
				</div>
				<div class="col-sm-8">
					<a href="#" class="btn btn-default btn-sm" v-for='val in styles' :class='{active: val.price == price}' @click='changeModel(val.style,val.price)'>{{val.style}}</a>
				</div>
			</div>
			<hr>
			<button class="btn btn-danger btn-block" @click='increment' :disabled='!isSelected'>
				<span class="glyphicon glyphicon-shopping-cart"></span>
				加入购物车
			</button>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store'
	export default {
		name: 'Home',
		store,
		data() {
			return {
				imgUrl: 'src/img/iphone6s-gold.png',
				isSelected: false
			}
		},
		methods: {
			changeUrl(color, url) {
				store.state.selectColor = color;
				this.imgUrl = url;
			},
			changeModel(model,price) {
				this.isSelected = true;
				store.state.price = price;
				store.state.selectModel = model;
			},
			increment() {
				store.commit('increment');
				var obj = { color: store.state.selectColor, style: store.state.selectModel, price: store.state.price };
				store.state.goods.push(obj);
				store.state.totalPrice += store.state.price;
			}
		},
		computed: {
			colors() {
				return store.state.colors;
			},
			styles() {
				return store.state.models;
			},
			price() {
				return store.state.price;
			}
		}
	}
</script>


<style>
	.item {
		width:600px;
		margin:20px auto;
	}

	.item-img {
		width:300px;
		float:left;
	}

	.item-info {
		width:300px;
		float:left;
	}

	.item-info .selected {
		border-color:#d43f3a;
	}

	.item-img img {
		width:100%;
	}

	.info-title {
		text-align:right;
	}

	.item-info a{
		border:2px solid #ccc;
		margin:3px;
		font-size:14px;
	}
	.item-info a:hover {
		border:2px solid #c0392b;
		background:transparent;
	}

	.item-info .active {
		border:2px solid #c0392b;
		background:transparent;
	}
</style>