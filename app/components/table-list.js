import Ember from 'ember';

export default Ember.Component.extend({
	//model: null,
	columns: null,
	controllerContent: Ember.Controller.create({ 
		items: null,
		sortProperties: ['titulo'],
		sortAscending: true,
	}),

	actions: {
		test: function(item){
			this.get('controllerContent').set('sortProperties', item);
			this.get('controllerContent').toggleProperty('sortAscending');
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
		var items = [];
		var filtered = [];

		if(this.get('controllerContent') && this.get('controllerContent.items')){
			items = this.get('controllerContent.items');
		}

		if(this.get('filterText') && this.get('filterText').length > 0){
			var regex = new RegExp(this.get('filterText').toLowerCase());

			filtered = items.filter(function(item){
				return regex.test(item.get('label').toLowerCase());
			});
		}else{
			filtered = items;
		}

		return filtered;

	}.property('filterText', 'controllerContent.items.[]', 'controllerContent.sortAscending', 'controllerContent.sortProperties'),

	findContent: function(){
		var promise 			= this.store.findAll(this.modelName);			
		var controllerContent 	= this.get('controllerContent');

		promise.then(function(response){
			controllerContent.set('items', response);
			//controllerContent.set('content', response);
		});
	},

	sortProperties: function() {
		console.log("sortAscending: "+ this.get('controllerContent.sortAscending'));
		console.log("sortProperties: "+ this.get('controllerContent.sortProperties'));

		console.log(this.get('controllerContent'));
	}.observes('controllerContent', 'controllerContent.sortAscending', 'controllerContent.sortProperties')
});
