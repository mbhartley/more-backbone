$(document).ready(function(){

//start the app
window.contacts = new ContactsCollection()


contacts.fetch({
  success: function(){
contacts.each(function(contact){
  new ListView({model: contact});
})

},

  error: function(){
  	console.log('Problem, problem, problem!')
  }

 })

});

$('.add-preacher').click(function(){

var newPreacher = {								//capturing input values and storing in a var
	name: $('.preacher-name').val(),
	quote: $('.preacher-quote').val(),
	bio: $('.preacher-bio').val(),
	photo: $('.preacher-photo').val(),
}

$('.preacher-form').toggle('reveal-preacher-form');
  $('.preacher-name').val("");
  $('.preacher-quote').val("");
  $('.preacher-bio').val("");

var freshModel = contacts.add(newPreacher);  //adding newPreacher to contacts(collection)

new ListView({model: freshModel});

freshModel.save()

})

$('.welcome-preacher').click(function(){
  $('.preacher-form').toggle('reveal-preacher-form');
})

$('.welcome-searcher').click(function(){
	$('.searcher-instructions').toggle('reveal-searcher-instructions');
})


//$('.add-preacher').click(function(){
//  $('.reveal-preacher-form').addClass('preacher-form');
//})
//contacts = a collection instance
//i loop over each model in that collection
//first parameter in the callback is the thing you are currently looking at as iterating (contact) could have been anything
//giving them a view instance, each one has its own model instance that it is given
//this worked!

