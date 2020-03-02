<template>
	<div>
    	<x-header>Welcomec</x-header>
   		<br>
		<group title="Account">
			<x-input v-model="user.name"></x-input>
		</group>
		<group title="Password">
			<x-input v-model="user.password"></x-input>
		</group>
		<!-- <group title="Password Confirm">
			<x-input type="password" v-model="user.password" @blur.prevent="inputLoseFocus"></x-input>
		</group> -->
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
		HEAD,
		Box,
		Datetime,
		Selector,
		ButtonTab,
		ButtonTabItem,
		XHeader
	} from 'vux'
	import Vue from 'vue'
	export default {
    name: 'SoulCreateUser',
		components: {
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
				list:Array(100).fill().map((e,i)=>i+1).filter(function(x) {return (x>=18&&x<=60)})
			}
		},
		methods: {
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
			    url: 'http://localhost:8080/api/tutorials/user',
				data:{
					username: this.user.name,
 	    			password: this.user.password,
	    			fname: this.user.fname,
	    			lname: this.user.lname,
	    			gender:this.user.gender},
				header:{"Content-Type":"application/json"},
			    }).then(response=>{
				    console.log(response)
			    }).catch(function(err){
        			console.log(err)
				});
				this.$router.push({path:'/'})
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
