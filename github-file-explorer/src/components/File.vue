<template>
	<div class="row">
		<div class="col-md-12 col-sm-12">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>当前路径：{{path}}</th>
						<th class="text-right">
							<button class="btn btn-danger btn-xs" v-if='path !== "/"' @click='goBack()'>返&emsp;回</button>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for='val in sortedFiles'>
						<td>
							<div class="dir" v-if='val.type === "dir"'>
								<span class="octicon octicon-file-directory"></span>
								<a href="#" @click='changePath(val.path)'>{{val.name}}</a>
							</div>
							<div class="file" v-if='val.type === "file"'>
								<span class="octicon octicon-file-text"></span>
								<span>{{val.name}}</span>
							</div>
						</td>
						<td class="text-right">
							<a :href="val.download_url" download="val" v-if='val.type === "file"'>
								<span class="octicon octicon-cloud-download"></span>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'File',
		props: {
			user: {
				type: String,
				required: true
			},
			repo: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				path: '/',
				fileList: []
			}
		},
		computed: {
			fullRepoUrl() {
				return this.user + '/' + this.repo;
			},
			sortedFiles() {
				return this.fileList.slice(0).sort(function(a,b){
					if(a.type !== b.type) {
						if(a.type == 'dir') {
							return -1;
						} else { return 1; }
					} else {
						if(a.name < b.name ) {
							return -1 ;
						} else {
							return 1;
						}		
					}
				})
			}
		},
		methods: {
			getFiles() {
				// console.log(1)
				this.$http.get('https://api.github.com/repos/'+ this.fullRepoUrl + '/contents' + this.path).then(function(res){
					this.fileList = res.data;
					console.log(this.fileList)
				}, function(err) {
					console.log(err);
				})
			},
			changePath(path) {
				this.path = "/" + path;
				this.getFiles();
			},
			goBack() {
				var arr = this.path.split('/');
				arr.pop();
				this.path = arr.join('/');
				if(this.path === '') this.path = '/';
				this.getFiles();
			}
		},
		watch: {
			repo: function(newVal, oldVal) {
				this.getFiles();
			}
		}
	}
</script>