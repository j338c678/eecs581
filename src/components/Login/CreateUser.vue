<template>
	<div>
    	<x-header :left-options="{backText:'Back'}">Welcome</x-header>
   		<br>
		<group title="Account">
			<x-input v-model="user.name"></x-input>
		</group>
		<group title="Password">
			<x-input v-model="user.password"></x-input>
		</group>
		<group title="Password Confirm">
			<x-input type="password" v-model="user.password" @blur.prevent="inputLoseFocus"></x-input>
		</group>
		<group title="First Name">
			<x-input v-model="user.fname"></x-input>
		</group>
		<group title="Last Name">
			<x-input v-model="user.lname"></x-input>
		</group>
		<group title="Gender">
			<br>
			<button-tab>
				<button-tab-item @on-item-click="setGender('male')">{{'Male'}}</button-tab-item>
				<button-tab-item @on-item-click="setGender('female')">{{'Female'}}</button-tab-item>
			</button-tab>
			<br>
		</group>
		<group title="Gender Prefrence">
			<br>
			<button-tab>
			<button-tab-item @on-item-click="setGenderPre('male')">{{'Male'}}</button-tab-item>
			<button-tab-item @on-item-click="setGenderPre('female')">{{ 'Female'}}</button-tab-item>
			</button-tab>
			<br>
		</group>
		<group title="Birthday">
			<datetime
			v-model="date"
			cancel-text='Cancel'
			confirm-text="OK"
			@on-confirm="setBirthday(date)">
			</datetime>
    	</group>
		<group title="Age Preference">
			<selector v-model="MinAge" ref="defaultValueRef" @on-change="setAgePref('min',MinAge)" title="Min" direction="rtl" :options="list" ></selector>
			<selector v-model="MaxAge" ref="defaultValueRef" @on-change="setAgePref('max',MaxAge)" title="Max" direction="rtl" :options="list"></selector>
		</group>
		<group title="Your Tags">
			<divider>Games</divider>
			<checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
			<checker-item value="1">World of Warcraft</checker-item>
			<checker-item value="2">League of Legend</checker-item>
			<checker-item value="3">Dota</checker-item>
			<checker-item value="4">CSGO</checker-item>
			</checker>
			<divider>Music</divider>
			<checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
			<checker-item value="2">R&B</checker-item>
			<checker-item value="3">Blues</checker-item>
			<checker-item value="4">Classic</checker-item>
			<checker-item value="5">Electronic</checker-item>
			</checker>
			<divider>Sports</divider>
			<checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
			<checker-item value="2">Jogging</checker-item>
			<checker-item value="3">Basketball</checker-item>
			<checker-item value="4">Football</checker-item>
			<checker-item value="5">Swim</checker-item>
			</checker>
		</group>
		<box gap="30px 10px">
			<x-button type="primary" @click.native="submit">Submit</x-button>
		</box>
	</div>
</template>

<script>
	import {
		XInput,
		Group,
		XButton,
		Box,
		Datetime,
		Selector,
		ButtonTab,
		ButtonTabItem,
		XHeader,
		Divider,
		Checker,
		CheckerItem
	} from 'vux'
	import Vue from 'vue'
	import { CometChat } from "@cometchat-pro/chat";
	import md5 from 'js-md5'
	export default {
    name: 'CreateUser',
		components: {
			XInput,
			Group,
			XButton,
			Box,
			Datetime,
			Selector,
			ButtonTab,
			ButtonTabItem,
			XHeader,
			Divider,
			Checker,
			CheckerItem
		},
		data() {
			return {
				user: {
					name:'',
					password:'',
					fname:'',
					lname:'',
					gender:'',
					birthday:'',
					gprefer:'',
					minage:'',
					maxage:''
				},
				MinAge:'',
				MaxAge:'',
				date:"2020-01-01",
				demo1Checkbox: [2, 1],
				list:Array(100).fill().map((e,i)=>i+1).filter(function(x) {return (x>=18&&x<=60)})
			}
		},
		methods: {
			createUser()
			{

			},
			createArray(target){
				for( var i=18;i <61;i++){
					target.push(i)
				}
				return target
			},
			setBirthday(day){
				this.user.birthday=day
				console.log(this.user.birthday)
			},
			setAgePref(op,age){
				if(op=='min'){
					this.user.minage=age
				}
				else{
					this.user.maxage=age
				}
				console.log(this.user.maxage)
				console.log(this.user.minage)
			},
			setGender(gen){
				this.user.gender=gen
				console.log(this.user.gprefer)
			},
			setGenderPre(genP){
				this.user.gprefer=genP
				console.log(this.user.gprefer)
			},
			submit(){
				this.$ajax({
			    method: 'post',
			    url: 'http://localhost:8080/api/tutorials/users',
				data:{
					username: this.user.name,
 	    			password: md5(this.user.password),
	    			fname: this.user.fname,
	    			lname: this.user.lname,
	    			gender:this.user.gender},
				header:{"Content-Type":"application/json"},
			    }).then(response=>{
				    console.log(response)
			    }).catch(function(err){
        			console.log(err)
				});
				let apiKey = "7fe14529324150ffd4a99c28ea754edf36f63d37";
				console.log(apiKey);
          var uid = this.user.name;
          var name = this.user.name;

          var user = new CometChat.User(uid);
					console.log(user);

          user.setName(name);

          CometChat.createUser(user, apiKey).then(
              user => {
                  console.log("user created", user);
              },error => {
                  console.log("error", error);
              }
          )
					this.$router.push({path:'/'})
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
	.demo1-item {
	border: 1px solid #ececec;
	padding: 5px 15px;
	}
	.demo1-item-selected {
	border: 1px solid green;
	}
</style>
