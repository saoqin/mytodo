Vue.component("mytodo-login-loginform", {
	template : 
		'<form>' +
			'<mytodo-cmp-textbox placeholder="请输入用户名" type="text" v-model="user.userName" ></mytodo-cmp-textbox>' +	
			'<mytodo-cmp-textbox placeholder="请输入密码"   type="password" v-model="user.userPassword" ></mytodo-cmp-textbox>' +
			'<input type="button" class="btn btn-success btn-lg"' +
				'v-on:click="btnSubmitClick"' +
				'style="padding-left:25px;padding-right:25px;margin-right:8px;" value="登录" />' +
			'<input type="button" class="btn btn-default btn-lg"  ' +
				'v-on:click="btnRegistClick" value="注册" />' +
		'</form>',
	data : function (){
		return {
			user : {
				userName : "",
				userPassword : ''
			}
		}
	},
	methods : {
		btnRegistClick : function(){
			window.location.href = "/pages/register/register.html";
		},
		btnSubmitClick : function(){
			alert(this.user.userName);
			window.location.href = "/pages/workspace/workspace.html";
		}
	}
});

function onPageLoad(){
	new Vue({
		el : "#divLoginForm",
		data : {
			
		}
	});
}