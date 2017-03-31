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
							<router-link to='/shopping'>购物车</router-link>
							<span class="badge" @send-counter='get()'>{{count}}</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				count: ''
			}
		},
		mounted() {
			ev.$on('send-count', function(data) {
				this.count = data;
			}.bind(this))
		}
	}
</script>

