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
			<x-button type="primary" @click.native="SignIn">SignUp</x-button>
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
	import { CometChat } from "@cometchat-pro/chat";
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
<<<<<<< HEAD
                url: 'http://18.220.218.48:8080/api/tutorials/users/'.concat(this.user.name),
                header:{"Content-Type":"application/json"},
                }).then(response=>{
                    let userdata = response
                    if(response.data.password==this.user.password){
						console.log("login")
						console.log(userdata.data)
=======
                url: 'http://localhost:8080/api/tutorials/users/'.concat(this.user.name),
                header:{"Content-Type":"application/json"},
                }).then(response=>{
                    let userdata = response
                    if(response.data.password==md5(this.user.password)){
						console.log("login")
						console.log(userdata.data)


>>>>>>> master
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
<<<<<<< HEAD

=======
				var appID = "167877e1af82bd3";
	      var appRegion = "us";
		CometChat.init(appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(appRegion).build());
		const apiKey = "7fe14529324150ffd4a99c28ea754edf36f63d37";
		this.showSpinner = true;
		CometChat.login(this.user.name, apiKey).then(
			() => {
				this.showSpinner = false;
				this.$router.push({
	            name: "SoulStar"
	          });
			},
			error => {
				this.showSpinner = false;
				console.log("Login failed with error:", error.code);
			}
		);
			//
			// var apiKey = "7fe14529324150ffd4a99c28ea754edf36f63d37";
      // this.showSpinner = true;
      // CometChat.login(this.username, apiKey).then(
      //   () => {
      //     this.showSpinner = false;
      //     this.$router.push({
      //       name: "chat"
      //     });
      //   },
      //   error => {
      //     this.showSpinner = false;
      //     alert(
      //       "Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information"
      //     );
      //     console.log("Login failed with error:", error.code);
      //   }
      // );

			//
			// var GUID = "supergroup";
      // var password = "";
      // var groupType = CometChat.GROUP_TYPE.PUBLIC;
			//
      // CometChat.joinGroup(GUID, groupType, password).then(
      //   group => {
      //     console.log("Group joined successfully:", group);
      //   },
      //   error => {
      //     console.log("Group joining failed with exception:", error);
      //   }
      // );


>>>>>>> master
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
<<<<<<< HEAD
			},
			getHashFromPassword(){
				hashedPassword = this.user.password.toUpperCase();
				hashedPassword = md5(password);
				return hashedPassword;
=======
>>>>>>> master
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
