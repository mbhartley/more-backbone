var Contact = Backbone.Model.extend({
	defaults: {
		name: '',
		avatar: '',
		quote: ''
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact 
})	