Vue.component('mytodo-wkspc-todotask', {
	props : [ 'value' ],
	template : 
		'<tr>' +
		'	<td><input type="text" class="form-control"' +
		'		placeholder="任务描述" v-model="realTask.desc" style="font-size:8pt;" ></td>' +
		'	<td><select class="form-control" style="padding: 2px;" v-model="realTask.impLevel">' +
		'			<option>很重要</option>' +
		'			<option>重要</option>' +
		'			<option>一般</option>' +
		'			<option>不重要</option>' +
		'			<option>无所谓</option>' +
		'	</select></td>' +
		'	<td><select class="form-control" style="padding: 2px;" v-model="realTask.emgLevel">' +
		'			<option>很紧急</option>' +
		'			<option>紧急</option>' +
		'			<option>一般</option>' +
		'			<option>不紧急</option>' +
		'			<option>无所谓</option>' +
		'	</select></td>' +
		'	<td>' +
		'		<div class="input-group date">' +
		'			<input class="form-control date-picker" size="12" v-model="realTask.createDate" />' +
		'		</div>' +
		'	</td>' +
		'	<td>' +
		'		<div class="btn-group btn-group-sm" role="group"' +
		'			aria-label="...">' +
		'			<button type="button" style="color:green" class="btn btn-default glyphicon glyphicon-ok-sign"></button>' +
		'			<button type="button" style="color:red" class="btn btn-default glyphicon glyphicon-minus-sign" v-on:click="onBtnDeleteClick" ></button>' +
		'		</div>' +
		'	</td>' +
		'</tr>',
	computed : {
		realTask : {
			get : function(){
				return this.value;
			},
			set : function(inTask){
				this.$emit("input", inTask);
			}
		}
	},
	
	methods : {
		onBtnDeleteClick : function(){
			this.$emit("taskDelete", this.realTask.id);
		}
	},
	
	mounted : function(){
		$(this.$el).find(".date-picker").datepicker({
		    rtl: false,
		    orientation: "left",
		    autoclose: true
		});
	}
});


