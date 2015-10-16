import Ember from 'ember';

export default Ember.Component.extend({
	content: null,
	columns: [],
	tagName: 'tr',

	items: function(){
		if(this.get('content') && this.get('columns')){

			var columns = this.get('columns').split(" ");
			var content = this.get('content');

			return columns.map(function(item){
				var columns 	= item.split(":");
				var columnType 	= columns[1];

				return content.get(columnType);
			});
		}
	}.property('content', 'columns'),
});
