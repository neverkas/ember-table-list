import Ember from 'ember';

export default Ember.Service.extend({
	items: [
		{
		  "title": "Breads",
		  "type": "Salad",
		  "description": "The best recipe",
		  "createdAt": "2015-10-15T18:12:20.011Z",
		  "updatedAt": "2015-10-15T18:12:20.011Z",
		  "id": 21
		},
		{
		  "title": "Cookies",
		  "type": "Sweet",
		  "description": "The best recipe",
		  "createdAt": "2015-10-15T18:12:31.571Z",
		  "updatedAt": "2015-10-15T18:12:31.571Z",
		  "id": 22
		}
	],

	add(item){
		console.log(this.items);

		this.items.push(item);
		
		console.log(this.items);
	},

	remove(item){

	}
});
