var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    //this.render();
  },

  render: function() {
    this.$el.html(this.template());
    //var newVideoEntry = new VideoPlayerView({model: this.collection.models[0]});
    console.log('hi', this.collection.models[0])
    console.log('hello',this.collection.models[0].attributes.id);

    //this.$el.append(newVideoEntry.el);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
