import Ember from 'ember';

export default Ember.Component.extend({
	columns: null,
	controllerContent: null, 
	highlight: true,
	sorting: null,
	content: Ember.computed.sort('controllerContent', 'sorting'),

	actions: {		
		sortAsc: function(item){
			this.sortContent(item.data, 'asc');
		},

		sortDesc: function(item){
			this.sortContent(item.data, 'desc');
		}
	},

	findContent: function(){
		this.set('controllerContent', this.get('store').findAll(this.get('modelName')));
	}.on("init"),
	
	sortContent: function(columName, columnOrder){
		this.set('sorting', [columName + ':' + columnOrder]);
	},

	listColumns: function(){
		if(this.get('columns')){		
			var columns = this.get('columns').split(" ");

			return columns.map(function(item){
				var column 	= item.split(":");

				return {'title': column[0], 'data': column[1]};
			});
		}
	}.property('columns'),

	columnsCount: function(){
		if(this.get('columns')){
			var columns = this.get('columns').split(" ");

			return columns.length;
		}
	}.property('columns', 'filterText'),

	contentFilter: function(){
		var content = [];
		var filtered = [];

		if(this.get('content')){
			content = this.get('content');
		}

		if(this.get('filterText') && this.get('filterText').length > 0){
			var regex = new RegExp(this.get('filterText').toLowerCase());

			filtered = content.filter(function(item){
				return regex.test(item.get('label').toLowerCase());
			});
		}else{
			filtered = content;
		}

		return filtered;

	}.property('filterText', 'content.[]'),

	highlightText: function(){
		if(this.get('highlight') == true){		
			$('table').unhighlight();

			if(this.get('filterText') && this.get('filterText').length > 0){
				$('td').highlight(this.get('filterText'));
			}
		}
	}.observes('filterText'),
});
