<template>
	<div class="box">
		<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false">
					        <span class="sr-only">Toggle navigation</span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					      </button>
					      <a class="navbar-brand" href="#">Shopping Cart</a>
				</div>

				<div class="collapse navbar-collapse" id="navbar1">
					<ul class="nav navbar-nav">
						<li class="active">
							<router-link to='/home'>iPhone 6S</router-link>
						</li>
						<li>
							<router-link to='/cart'>
								购物车
								<span class="badge bg-danger" v-if='count !== 0'>{{count}}</span>
							</router-link>
							
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- 路由 -->
		<router-view></router-view>
	</div>
</template>

<script>
	import store from './vuex/store'
	export default {
		name: 'App',
		store,
		computed: {
			count() {
				return store.state.count;
			}
		}
		
	}
</script>

<style>
	.bg-danger {
		background:#d9534f;
	}
</style>

