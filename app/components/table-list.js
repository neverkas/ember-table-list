import Ember from 'ember';

export default Ember.Component.extend({
	query: null,
	model: null,
	columns: null,
	fields: [],

	didInsertElement: function(){
		this.findContent();
	},

	listColumnsTitle: function(){
		var columns = this.get('columns').split(" ");
		return columns.map(function(item){
			var columns 	= item.split(":");
			var columnTitle = columns[0];

			return columnTitle;
		});

	}.property('columns'),

	columnsCount: function(){
		if(this.get('columns')){
			return this.get('columns').length;
		}
	}.property('columns', 'filterText'),

	contentFilter: function(){
		var content;
		var filtered = [];
		var getData;

		if(this._controller && this._controller.data){
			content = this._controller.data;
		}

		if(this.get('filterText') && this.get('filterText').length > 0){
			var regex = new RegExp(this.get('filterText').toLowerCase());

			filtered = content.filter(function(item){
				return regex.test(item.get('label').toLowerCase());
			});
		}else{
			filtered = content;
		}
		
		//console.log(filtered);

		return filtered;

	}.property('controller', '_controller.data', 'filterText', 'listColumns'),

	findContent: function(){
		var controller = this._controller;
		var promise = this.store.findAll(this.model);																				

		promise.then(function(response){																								
			controller.set('data', response);
		});
	},
});
