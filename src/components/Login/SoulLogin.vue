<template>
	<div>
		<div style="text-align: center;margin-bottom: 30px;padding-top: 10px;">
			<img class="logo" src="@/assets/images/headicon/0.png">
		</div>
		<group title="Login">
			<x-input title="ID:" v-model="user.name"></x-input>
			<x-input title="Password:" type="password" v-model="user.password" @blur.prevent="inputLoseFocus"></x-input>
		</group>
		<box gap="30px 10px">
			<x-button type="primary" @click.native="mounted">Login</x-button>
		</box>
	</div>
</template>

<script>
	import {
		XInput,
		Group,
		XButton,
		Box
	} from 'vux'
	import Vue from 'vue'
	import md5 from 'js-md5'
	export default {
	// 	created () {
  //  this.$api.post('/user', null, r => {
  //    console.log(r)
  //  	})
	// },
    name: 'SoulLogin',
		components: {
			XInput,
			Group,
			XButton,
			Box
		},
		data() {
			return {
				user: {
					name: '',
					password: ''
				}
			}
		},
		methods: {
			mounted(){
							this.$ajax({
			      method: 'post',
			      url: 'http://localhost:8080/api/tutorials/user',
						data:{
							username: "root",
	    				password: this.user.password,
	    				fname: "rootFN",
	    				lname: "rootLN",
	    				gender: "Male"
      			},
						header:{"Content-Type":"application/json"},
			    }).then(response=>{
				    console.log(response);
			    }).catch(function(err){
        console.log(err)
    		});
			},
			login() {
				Vue.$vux.loading.show({
					text: 'loging'
				})
				setTimeout(() => {
					if (this.user.password === 'admin') {
						// Vue.ls.set('token', this.user.name, 60 * 60 * 1000)
						this.$router.push({
							path: this.$route.query.redirect ? this.$route.query.redirect : '/soulStar'
						})
					} else {
						this.$vux.toast.show({
							text: 'wrong id or Password！',
							type: 'text',
							width: '15em'
						})
					}
					Vue.$vux.loading.hide()
				}, 300)
			},
			inputLoseFocus() {
				setTimeout(() => {
					window.scrollTo(0, 0);
				}, 100);
			},
			getHashFromPassword(){
				hashedPassword = this.user.password.toUpperCase();
				hashedPassword = md5(password);
				return hashedPassword;
			}
		},
	}
</script>

<style>
	.logo {
		width: 100px;
		height: 100px
	}
</style>
