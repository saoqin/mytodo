Vue.component("mytodo-cmp-textbox", {
	props : [ 'placeholder' , 'type' , 'value' ],
	template : 
		'<div class="form-group input-group input-group-lg" style="width: 100%;">' +
			'<input v-bind:type="type"  v-model="realValue" class="form-control" v-bind:placeholder="placeholder" >' +
        '</div>', 
	computed : {
		realValue : {
			get : function(){
				return this.value;
			},
			set : function(inValue) {
				this.$emit("input", inValue);
			}
		}
		
	}
});
