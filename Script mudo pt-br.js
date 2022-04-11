//discord https://discord.gg/aX25MCec27
// criador por Ranger#6017
// version pt-br 1.0

var room = HBInit({
    roomName: "Script mudo",
    maxPlayers: 5,
    public: true,
    token: "none",
    noPlayer: true
  });
  
  let cores = {
      vermelho: 0xFA5646,
      laranja: 0xFFC12F,
      verde: 0x7DFA89,
  }
  
  var message;
  
  const palavras_banidas = ["palavrão1", "palavrão2", "palavrão3", "palavrão4", "palavrão5"] // escreva palavras banidas aqui.
  var mutadosporpalavrão = [] // mutados por falar palavrão serão armazenados aqui.
  var tempodemute = 600000; // tempo de punição para mutados, 180000 equivale a 3 minutos.
  
  function tempo_para_desbanir(player){
      setTimeout(() => {
      var remove = mutadosporpalavrão.indexOf(message);
      mutadosporpalavrão.splice(remove)
      room.sendAnnouncement("Você foi desmutado, não fale mais ofensas!", player.id, cores.verde, "bold", 2);
      }, tempodemute);
  }
  
  room.onPlayerChat = function (player, message) {
      message = message;
      if (palavras_banidas.includes(message.toLowerCase())) {
          mutadosporpalavrão.push(player.name)
          room.sendAnnouncement("você foi mutado: motivo: sendo tôxico", player.id, cores.vermelho, "bold")
          tempo_para_desbanir(player)
          return false;
      }
      if (mutadosporpalavrão.includes(player.name) == true) {
      room.sendAnnouncement("Aguarde 10 minutos para ser desmutado.'", player.id, cores.laranja, "bold")
      return false;
      }
  }