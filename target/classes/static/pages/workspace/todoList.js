Vue.component('mytodo-wkspc-todolist', {
	props : [ 'value' ],
	template : 
		'<div>' +
		'<table class="table table-condensed table-responsive">'+
		'	<thead>'+
		'		<tr>'+
		'			<th width="">任务描述</th>'+
		'			<th width="90px">重要程度</th>'+
		'			<th width="90px">紧急程度</th>'+
		'			<th width="130px">创建时间</th>'+
		'			<th width="100px">操作</th>'+
		'		</tr>'+
		'	</thead>'+
		'	<tbody>'+
		'		<mytodo-wkspc-todotask' + 
		'          v-for="task in realTaskList" v-model="task" '+
		'		   v-on:taskDelete="onTaskDelete">'+
		'       </mytodo-wkspc-todotask>'+
		'	</tbody>'+
		'</table>' +
		'<mytodo-cmp-msgbox v-bind:title="confirmMsgBox.title" v-bind:msg="confirmMsgBox.msg" v-bind:isshow="confirmMsgBox.isshow" ></mytodo-cmp-msgbox>' +
		'</div>',
		
	computed : {
		realTaskList : {
			get : function(){
				return this.value;
			},
			set : function(inTaskList) {
				this.value = inTaskList;
				this.$emit("input", inTaskList);
			}
		}
	},
	
	data : function(){
		return {
			confirmMsgBox : {
				title : '提示消息',
				msg : '确认要删除任务吗？'
			}
		}
	},
	
	methods : {
		onTaskDelete : function(taskId){
			//this.confirmMsgBox.isshow = true;
			for(var indexI = 0; indexI < this.realTaskList.length; indexI++){
				var task = this.realTaskList[indexI];
				if(task.id == taskId){
					this.realTaskList.splice(indexI, 1);
					break;
				}
			}
		}
	}
});
