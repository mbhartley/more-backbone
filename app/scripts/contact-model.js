var Contact = Backbone.Model.extend({
	defaults: {
		name: 'Bill',
		phone: '222-2222',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AnKHBEtHoQNtAGXCh0TYHKkSq8efJwMZ1tdJroJfcKG6vub4PA',
		bio: 'dummy'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact 
})	