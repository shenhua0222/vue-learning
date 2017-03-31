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
						<a class="btn btn-default btn-sm" v-for='(val, index) in colors' @click='changeUrl(index)'>
							{{val}}
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4 info-title">
					<span>存储容量：</span>
				</div>
				<div class="col-sm-8" @click='changeModel($event)'>
					<a href="#" class="btn btn-default btn-sm" data-index='0'>16GB</a>
					<a href="#" class="btn btn-default btn-sm" data-index='1'>64GB</a>
					<a href="#" class="btn btn-default btn-sm" data-index='2'>128GB</a>
				</div>
			</div>
			<hr>
			<button class="btn btn-danger" @click='send'>
				<span class="glyphicon glyphicon-shopping-cart"></span>
				加入购物车
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				counter: 0,
				imgUrl: 'src/img/iphone6s-gold.png',
				index: '',
				price: '5288 - 6888',
				numbers: [5288,6088,6888],
				colors: ['rosegold','gray','gold','silver']
			}
		},
		methods: {
			changeUrl(n) {
				this.imgUrl = 'src/img/iphone6s-' + this.colors[n] + '.png';
			},
			changeModel(ev) {
				if(ev.target.nodeName.toUpperCase() === 'A'){
					this.index = ev.target.getAttribute('data-index');
					this.price = this.numbers[this.index];
				}
			},
			send() {
				if(this.index !== ''){
					this.counter++;
					ev.$emit('send-count',this.counter);
				}
			}
		},
		// computed: {
		// 	imgUrl() {
		// 		return 1
		// 	}
		// }
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
</style>