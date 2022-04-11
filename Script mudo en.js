//discord https://discord.gg/aX25MCec27
// create by Ranger#6017
// version en 1.0

var room = HBInit({
    roomName: "Script mute",
    maxPlayers: 5,
    public: true,
    token: "none",
    noPlayer: true
  });
  
  let colors = {
      red: 0xFA5646,
      orange: 0xFFC12F,
      green: 0x7DFA89,
  }
  
  var message;
  
  const bannedwords = ["words", "words1", "words2", "words3", "words4"] // write words banneds here
  var mutedbybannedwords = [] // muteds here
  var timeofmute = 600000; // change time of mute here 180000 = 3 minutes of mute
  
  function unnbanplayer(player){
      setTimeout(() => {
      var remove = mutedbybannedwords.indexOf(message);
      mutedbybannedwords.splice(remove)
      room.sendAnnouncement("You've been unnmuted, don't talk any more offenses!", player.id, colors.green, "bold", 2);
      }, timeofmute);
  }
  
  room.onPlayerChat = function (player, message) {
      message = message;
      if (bannedwords.includes(message.toLowerCase())) {
        mutedbybannedwords.push(player.name)
          room.sendAnnouncement("you are muted for teen minutes reason: toxic player", player.id, colors.red, "bold")
          unnbanplayer(player)
          return false;
      }
      if (mutedbybannedwords.includes(player.name) == true) {
      room.sendAnnouncement("wait teen minutes to write again.", player.id, colors.orange, "bold")
      return false;
      }
  }