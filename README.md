# DEPRECATED
# Ember Table List v1.0

#### Create Adapter

```javascript
export default DS.RESTAdapter.extend({
	host: 'http://localhost:1337', // backend in sails.js
});
```

#### Create model
```javascript
import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	type: DS.attr('string'),
	description: DS.attr('string'),

  label: function(){
  	return this.get('title') + this.get('type') + this.get('description');
  }.property('title')
});
```

**label**: fields used the search filter.

#### Add in the Template
```javascript
{{table-list modelName='recipe' store=store columns='Title:title Type:type Description:description'}}
```

**modelName**: model name

**columns**: title name of the HTML table and field name received by json and separated by colons


## Addons / Plugins
* [Materialize] (http://materializecss.com/grid.html) for to design
* [jQuery Highlight] (https://github.com/knownasilya/jquery-highlight) to highlight the text of the table
* [Font Awesome] (http://fortawesome.github.io/Font-Awesome/icons/) 


