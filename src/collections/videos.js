var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    $.ajax({
      data: {
        key: 'AIzaSyAkrkCkw2J0MGMvesLfq5vInAGbqQWYma4',
        q: query,
        part: 'snippet', 
        maxResults:5 },
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      videoEmbeddable: true,
      success: function(data) {
        console.log(data.items)

        data.items.forEach(function(vid) {
          vid.attributes = vid;
          vid.attributes.id = vid.attributes.id.videoId;
        });
        // var newApp = new AppView({vid: new Videos(data.items)})
        // newApp.render();
        new SearchView({
          collection: data.items,
          el: $('.search')
        }).render();
    
        new VideoPlayerView({
          model: data.items[0]
        }).render();
    
        new VideoListView({
          collection: data.items,
          el: $('.list')
        }).render();
      }
    })
  }
});