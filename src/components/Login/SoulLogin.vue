<template>
	<div>
		<div style="text-align: center;margin-bottom: 30px;padding-top: 10px;">
			<img class="logo" src="@/assets/images/headicon/0.png">
		</div>
		<group>
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
	import md5 from 'js-md5'
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
            login() {
                this.$ajax({
                method: 'get',
                url: 'http://18.220.218.48:8080/api/tutorials/users/'.concat(this.user.name),
                header:{"Content-Type":"application/json"},
                }).then(response=>{
                    let userdata = response
                    if(response.data.password==this.user.password){
						console.log("login")
						console.log(userdata.data)
						this.GLOBAL.setUserToken(userdata)
                        this.$router.push({
							path: '/soulStar',
                        })
                    }
                    else{
                        console.log("wrong password")
                    }
                }).catch(function(err){
                    console.log(err)
				});
				
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
