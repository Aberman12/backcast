var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var x = this;
    this.collection.forEach(function(video) {
      var newVideoEntry = new VideoListEntryView({model: video});

      x.$el.append(newVideoEntry.el);
    });
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
