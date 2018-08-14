var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  render: function() {
    console.log('from video list entry',this.model.attributes.snippet.description);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
