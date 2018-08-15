var AppView = Backbone.View.extend({

  el: '#app',
  
  initialize: function() {
    //this is the collection of videos created by the Videos class constructor
    this.videos = new Videos(window.exampleVideoData);
    console.log('from app', this.videos)
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoPlayerView({
      model: this.videos.models[0]
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
