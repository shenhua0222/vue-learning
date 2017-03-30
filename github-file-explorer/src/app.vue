<template>
	<div class="container">
		<legend><h2>
			<span class="mega-octicon octicon-mark-github"></span>
			GitHub 文件浏览器
		</h2></legend>
		<form class="form" @submit.prevent='changeRepo()'>
			<div class="form-group">
				<label for="repo">Full Repo Name</label>
				<input type="text" id="repo" v-model='fullRepoName' class="form-control" >
				<button class="btn btn-primary" type="submit">获&emsp;取</button>
			</div>
		</form>
		<hr>
		<File :user='user' :repo='repo'></File>
	</div>
</template>

<script>
	import File from './components/File.vue'
	export default{
		name: 'app',
		data: function() {
			return {
				fullRepoName: '',
				user:'',
				repo:''
			}
		},
		methods: {
			changeRepo (){
				this.user = this.fullRepoName.split('\/').shift();
				this.repo = this.fullRepoName.split('\/').pop();
				console.group('vue-date');
				console.log('fullRepoName:' ,this.fullRepoName);
				console.log('user:' ,this.user);
				console.log('repo:' ,this.repo);
				console.groupEnd('vue-date');
			}
		},
		components: {
			File
		}
	}
</script>

<style>
	#repo {
		width:300px;
		display:inline;
	}
</style>