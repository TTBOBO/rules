<template>
	<div class="container">
		<div class="main">
			<div  style="width:350px; margin:auto;" >
				<Form :model="userInfo" :label-width="80" :rules="validate" ref="formList">
					<FormItem label="姓名" prop="name">
						<Input v-model="userInfo.name" placeholder="请输入您的真实姓名" style="width:200px"></Input>
					</FormItem>
					<FormItem label="身份证号" prop="name">
						<Input v-model="userInfo.cardid" placeholder="请输入您上传的真实身份证号码" style="width:200px"></Input>
					</FormItem>
					<FormItem label="手机号" prop="photo">
						<Input v-model="userInfo.photo" placeholder="请输入验证手机号" style="width:200px"></Input>
					</FormItem>
					<FormItem label="">
						
					</FormItem>
					<FormItem label="">
						
					</FormItem>
					<div style=" text-align: center;">
						<Button  type="primary" @click="add_edit('formList')">提交</Button>
					</div>
					
				</Form>
			</div>
		</div>
		<div class="bg" >
			
		</div>
	</div>
</template>

<script>
	import hm from "../../assets/js/hm";
	export default {
		data() {
			return {
				userInfo: {
					name: "",
					cardid: "",
					photo: "",
				},
				validate:{}
			}
		},
		computed:{
		},
		methods: {
			initValidate(){
				let valiDate = [
				{ field:"name",validate:"required",type:"text"},
				{ field:"cardid",validate:"idCard",type:"text" },
				{field:"photo",validate:"tel",type:"text" ,msg:"操蛋的mmp"}
				];
				this.validate = hm.initValidate({
					valideDate:valiDate
				});
			},
			add_edit(formList) {
				this.$refs[formList].validate(valid => {
					console.log(valid)
					//...toDoList
				})
			},
		},
		mounted() {
		},
		created () {
			this.initValidate();
		}
	}
</script>

<style>
	.title {
		width: 100%;
		height: 35px;
		text-align: center;
		line-height: 35px;
		font-size: 18px;
		margin-bottom: 25px;
	}
	.container {
		position: absolute;
	    width: 100%;
	    height: 100%;
	    top: 0px;
	    bottom: 0px;
		overflow: hidden;
	}
	.main {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		/*background: #fafafa;*/
		color: #000;
		position: fixed;
		align-content: center;
		justify-content: center;
		z-index: 2;
	}
	.bg {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		/*background: url(../../assets/img/bg.jpg) no-repeat;*/
		background-size: cover;
		/* filter: blur(2px); */
		z-index: 1;
	}
	.content {
		width: 420px;
		padding: 40px;
		background: #fff;
		border: 1px solid #e4e1e1;
		border-radius: 5px;
		margin: 250px auto;
		box-shadow: 0px 2px 2px #e4e1e1;
		z-index: 2;
	}
</style>