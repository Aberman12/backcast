var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el = $('.player');
    this.$el.html(this.template(this.model));
    
    console.log('vpv',this.model)
    return this;
  
  },

  template: templateURL('src/templates/videoPlayer.html')

});
