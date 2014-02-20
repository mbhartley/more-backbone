var Contact = Backbone.Model.extend({
	idAttribute: "_id",

	defaults: {
		name: '',
		avatar: 'data:image/jpeg;base64,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',
		quote: ''
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact, 
	url: 'http://0.0.0.0:3000/collections/contacts'

})	