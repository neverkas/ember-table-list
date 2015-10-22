import Ember from 'ember';

export default Ember.Component.extend({
	columns: null,
	controllerContent: null, 
	highlight: true,
	sorting: null,
	content: Ember.computed.sort('controllerContent', 'sorting'),

	actions: {		
		sortAsc: function(item){
			if(item.data){
				this.sortContent(item.data, 'asc');
			}
		},

		sortDesc: function(item){
			if(item.data){
				this.sortContent(item.data, 'desc');
			}
		}
	},

	findContent: function(){
		if(this.get('modelName') && this.get('store')){
			this.set('controllerContent', this.get('store').findAll(this.get('modelName')));
		}
	}.on("init"),

	sortContent: function(columName, columnOrder){
		if(columName && columnOrder){
			this.set('sorting', [columName + ':' + columnOrder]);
		}
	},

	listColumns: function(){
		if(this.get('columns') && typeof this.get('columns') == 'string'){		
			var columns = this.get('columns').split(" ");
			var data 	= {};

			return columns.map(function(item){
				var column = [];

				if(item && typeof item == 'string'){
					column 	= item.split(":");
				}

				if(typeof column == 'object' && column.length == 2){
					data = {
						title: column[0], 
						data: column[1]
					};
				}

				return data;
			});
		}
	}.property('columns'),

	columnsCount: function(){
		var columns;

		if(this.get('columns') && typeof this.get('columns') == 'string'){
			columns = this.get('columns').split(" ");

			return columns.length;
		}
	}.property('columns', 'filterText'),

	contentFilter: function(){
		var content 	= [];
		var filtered 	= [];

		if(this.get('content')){
			content = this.get('content');
		}

		if(this.get('filterText') && this.get('filterText').length > 0){
			var regex = new RegExp(this.get('filterText').toString().toLowerCase());

			filtered = content.filter(function(item){
				if(item && item.get('label')){
					return regex.test(item.get('label').toString().toLowerCase());
				}
			});
		}else{
			filtered = content;
		}

		return filtered;

	}.property('filterText', 'content.[]'),

	highlightText: function(){
		if(this.get('highlight') && this.get('highlight') == true){		
			if(this.$().unhighlight){ 
				this.$('table').unhighlight();
			}

			if(this.get('filterText') && this.get('filterText').length > 0){
				if(this.$().highlight){ 
					this.$('td').highlight(this.get('filterText'));
				}
			}
		}
	}.observes('filterText'),
});
