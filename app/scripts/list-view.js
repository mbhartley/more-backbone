var ListView = Backbone.View.extend({
	
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
	  'click .choosePreacher': 'moveToJumbotron',
	  'click .deletePreacher': 'removePreacherProfile',
	},
 
	initialize: function(){
	  $('.js-contact-list').append(this.el);   //i only need to get this.el into the DOM one time; a placeholder//
	  this.render();
	},

	render: function(){
	  var renderedTemplate = this.createTemplate(this.model.attributes)  //this.model is the data coming from the model attributes
	  this.$el.html(renderedTemplate);
	},

	moveToJumbotron: function(){
	  $('.searcher-instructions').toggle('reveal-searcher-instructions');
	  new MainView({model: this.model});
      document.body.scrollTop = document.documentElement.scrollTop = 100;
      
	},

	removePreacherProfile: function(){
	  this.el.remove();
	  this.model.destroy();
	},
});


var MainView = Backbone.View.extend({

	className: 'jumbo-item',

	jumbotronTemplate: _.template($('#jumbotron-template').text()),

	initialize: function(){
	  $('.jumboItemHere').prepend(this.el);
	  this.render();
	},

	render: function(){
	  var newJumboTemplate = this.jumbotronTemplate(this.model.attributes);  //this.model is the data coming from the model attributes
	  console.log('newJumboTemplate', newJumboTemplate);
	  this.$el.html(newJumboTemplate);
	}
});



