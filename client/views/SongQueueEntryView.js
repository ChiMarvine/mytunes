// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="queue"><%= artist %> - <%= title %> </td>'),

  events: {
    'click': function() {
      //removes song on queue when clicked
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

//listens to clicks and acts accordingly