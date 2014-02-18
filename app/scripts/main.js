$(document).ready(function(){

//start the app
window.contacts = new ContactsCollection(data)



contacts.each(function(contact){
  new ListView({model: contact});
})

});


//contacts = a collection instance
//i loop over each model in that collection
//first parameter in the callback is the thing you are currently looking at as iterating (contact) could have been anything
//giving them a view instance, each one has its own model instance that it is given
//this worked!