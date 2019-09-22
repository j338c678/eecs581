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
			<x-button type="primary" @click.native="login">Login</x-button>
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
		},
	}
</script>

<style>
	.logo {
		width: 100px;
		height: 100px
	}
</style>
