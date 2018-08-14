var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var x = this;
    this.collection.forEach(function(video) {
      //var newVideo = new Video(video);
      var newVideoEntry = new VideoListEntryView({model: video});
      console.log('newVideoEntry',newVideoEntry.el);

      x.$el.append(newVideoEntry.el);
      //return videoView;
    });    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
