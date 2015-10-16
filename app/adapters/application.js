import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:1337',
	coalesceFindRequests: true,   // these blueprints support coalescing (reduces the amount of requests)
});


