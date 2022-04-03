<template>
	<div class="avatar">
		<img :src="resolve_img_url(urlProxy)" alt="">
  <p>{{textProxy}}</p>
	</div>
</template>


<script>


export default {
	name:'UserAvatarComponent',
	props:{
		UserAvatarText:{
			default:'',
			type: String,
		},
		UserAvatarUrl:{
			default:'',
			type: String,
		}
	},
	data() {
		return{
			textProxy: this.UserAvatarText,
			urlProxy: this.UserAvatarUrl,
		};
  },
  methods:{
	resolve_img_url: function (path) {
		let images = require.context('../assets/img/', false, /\.png$|\.jpg$/)
		return images("./"+path)
	},
  },
	watch:{
		UserAvatarText(newtext){
			this.textProxy= newtext;
		},
		UserAvatarUrl(newurl){
			this.urlProxy= newurl;
		}
	}
	
}

</script>




<style scoped>
.avatar p{
	margin: 0;
}
.avatar img{
	width: 3rem;
	height: 3rem;
	border-radius: 3rem;
	margin-right: 0.5rem;
	
}
.avatar{
	display: flex;
	align-items: center;
	justify-content: center;
}


.profile{
	flex-direction: column;
}
.profile img{
	width: 20rem;
	height: 20rem;
	border-radius: 10rem;
}
.profile p{
	margin: 0;
	font-size: 4rem;
	height: 4rem;
}

.user{
	flex-direction: column;
}
.user img{
	width: 100%;
	height: inherit;
	border-radius: 10rem;
}
.user p{

	margin: 0;
	margin-top: 0.5rem;
	font-size: 2rem;
}
</style>>