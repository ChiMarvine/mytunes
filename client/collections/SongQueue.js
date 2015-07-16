// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
   //when a song is added and on the queue by iteself, play it
   this.on('add', function(){
      if(this.length === 1){
         this.playFirst()
      }
   });
   //when a song ends, remove the song and play next song
   this.on('ended', function(){
      this.at(0).dequeue()
   });
   //on removal play the next song
   this.on('dequeue', function(song){
      this.remove(this.at(0));
      //if there are still songs on the list play the next one
      if(this.length > 0){
         this.playFirst()
      }
   });

  },

  playFirst: function(){
   this.at(0).play();
  }
});