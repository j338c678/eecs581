<template>
	<div>
		<!-- <div style="text-align: center;margin-bottom: 30px;padding-top: 10px;">
			<img class="logo" src="@/assets/images/headicon/0.png">
		</div> -->
		<group title="Login">
			<x-input title="ID:" v-model="user.name"></x-input>
			<x-input title="Password:" type="password" v-model="user.password" @blur.prevent="inputLoseFocus"></x-input>
		</group>
		<box gap="30px 10px">
			<x-button type="primary" @click.native="login">Login</x-button>
		</box>
		<box gap="30px 10px">
			<x-button type="primary" @click.native="SignIn">Signin</x-button>
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
	export default {
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
<<<<<<< HEAD:App/src/components/Login/SoulLogin.vue
			mounted(){
							this.$ajax({
			      method: 'post',
			      url: 'http://18.220.218.48:8080/api/tutorials/user',
						data:{
							username: "root",
	    				password: this.user.password,
	    				fname: "rootFN",
	    				lname: "rootLN",
	    				gender: "Male"
      			},
						header:{"Content-Type":"application/json"},
=======
			login() {
				this.$ajax({
			    method: 'get',
			    url: 'http://localhost:8080/api/tutorials/user/'+this.user.name,
				header:{"Content-Type":"application/json"},
>>>>>>> frontend:src/components/Login/SoulLogin.vue
			    }).then(response=>{
					let userdata = response
				    console.log(userdata)
			    }).catch(function(err){
        			console.log(err)
				});
				console.log(userdata)
			},
			SignIn() {
				Vue.$vux.loading.show({
					text: 'loging'
				})
				setTimeout(() => {
						this.$router.push({
							path: '/soulcreateuser'
						})
					Vue.$vux.loading.hide()
				}, 300)
			},
			inputLoseFocus() {
				setTimeout(() => {
					window.scrollTo(0, 0);
				}, 100);
			},
		},
	}
</script>

<style>
	.logo {
		width: 100px;
		height: 100px
	}
</style>
