import Ember from 'ember';

export default Ember.Component.extend({
	model: null,
	columns: null,
	results: null,

	actions:{
		changeOrder: function(){
		}
	},

	didInsertElement: function(){
		this.findContent();
	},

	listColumnsTitle: function(){
		if(this.get('columns')){		
			var columns = this.get('columns').split(" ");

			return columns.map(function(item){
				var columns 	= item.split(":");
				var columnTitle = columns[0];

				return columnTitle;
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
		var results;
		var filtered = [];

		if(this.get('results')){
			results = this.get('results')
		}

		if(this.get('filterText') && this.get('filterText').length > 0){
			var regex = new RegExp(this.get('filterText').toLowerCase());

			filtered = results.filter(function(item){
				return regex.test(item.get('label').toLowerCase());
			});
		}else{
			filtered = results;
		}

		return filtered;

	}.property('filterText', 'results'),

	findContent: function(){
		var _self 		= this;
		var promise 	= this.store.findAll(this.model);			

		promise.then(function(response){																								
			_self.set('results', response)
		});
	},
});
