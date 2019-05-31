Vue.component('mytodo-cmp-msgbox', {
	props : [ 'title', 'msg', 'type', 'isshow' ],
	template : 
		'<div class="modal fade" tabindex="-1" role="dialog">'+
		'  <div class="modal-dialog" role="document">'+
		'    <div class="modal-content">'+
		'      <div class="modal-header">'+
		'        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
		'        <h6 class="modal-title">{{ title }}</h6>'+
		'      </div>'+
		'      <div class="modal-body">'+
		'        <p> {{ msg }} </p>'+
		'      </div>'+
		'      <div class="modal-footer">'+
		'        <button type="button" class="btn btn-primary">是</button>'+
		'        <button type="button" class="btn btn-default" data-dismiss="modal">否</button>'+
		'      </div>'+
		'    </div><!-- /.modal-content -->'+
		'  </div><!-- /.modal-dialog -->'+
		'</div>',
	
	watch : {
		isshow : function(newVal, oldVal){
			if(newVal){
				this.show();
			}else {
				this.hide();
			}
		}
	},
	
	methods : {
		show : function(){
			/*console.info($(this.$el).find(".modal-dialog"));
			$(this.$el).modal('show');*/
			$(this.$el).css({
				display : 'block'
			}).attr("class","modal fade in");;
		},
		hide : function(){
			$(this.$el).modal('hide');
		}
	},
	
	mounted : function(){
		if(true == this.isshow) {
			this.show();
		}
	}
});
