var SearchView = Backbone.View.extend({



  initialize: function() {    
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click .btn': function() {
      var inputValue = $(".form-control").val();
      this.collection.search(inputValue);
    }
  },

  template: templateURL('src/templates/search.html')

});
