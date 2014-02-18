var ListView = Backbone.View.extend({
	
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),
 
	initialize: function(){
	  $('.js-contact-list').append(this.el);   //i only need to get this.el into the DOM one time; a placeholder//
	  this.render();
	},

	render: function(){
		console.log('waht')
	  var renderedTemplate = this.createTemplate(this.model.attributes)  //this.model is the data coming from the model attributes
	  this.$el.html(renderedTemplate);
	}

});


