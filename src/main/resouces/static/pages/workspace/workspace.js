var cmpTaskList;

function onPageLoad(){
	cmpTaskList = new Vue({
		el : '#divMyTodoList',
		data : {
			taskList : [{
				id : '1',
				desc : 'Hello kity',
				impLevel : '1',
				emgLevel : '1',
				createDate : '06/06/2018'
			},{
				id : '2',
				desc : 'Hello kity aaa',
				impLevel : '1',
				emgLevel : '1',
				createDate : '24/06/2018'
			}]
		},
		methods : {
			addTask : function(){
				this.taskList.push({
					id : "3",
					desc : '',
					impLevel : '',
					emgLevel : '',
					createDate : ''
				})
			}
		}
	});
	
	/*var msgBoxData = {
		title : '提示消息',
		msg : '确认要删除任务吗？---',
		isshow : true
	};
	
	var msgBox = new Vue({
		el : "#divModalMsgBoxList", 
		data : msgBoxData,
		methods : {
			show : function(){
				msgBoxData.isshow = true;
			}
		}
	});*/
	
}

function onBtnAddTaskClick(){
	cmpTaskList.addTask();
}

function onClearNavItemActive(){
	$("#navBar").find("li").attr("class", "");
}

function onBtnCurrentTaskClick(){
	onClearNavItemActive();
	$("#navItemCurrentTask").attr("class", "active");
	$("#divHistoryTaskList").css({
		display : 'none'
	});
	$("#divCurrentTaskList").css({
		display : 'block'
	});
}

function onBtnHistoryTaskClick(){
	onClearNavItemActive();
	$("#navItemHistoryTask").attr("class", "active");
	$("#divCurrentTaskList").css({
		display : 'none'
	});
	$("#divHistoryTaskList").css({
		display : 'block'
	});
}
