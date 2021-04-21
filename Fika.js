const Plugin = require('./Plugin.js');
const Discord = require('discord.js');
app = null

class Fika extends Plugin{
  name = "Keep tabs on fika";
  dataStore = null


  commands = {
    'fika' :function(message, params){
      let currentPeopleOwingFika = app.dataStore.get('fikaOwers');

      if(!Array.isArray(currentPeopleOwingFika)){
        currentPeopleOwingFika = [];
      }
      message.mentions.users.forEach((user) => {
        currentPeopleOwingFika.push(user.username)
      })

      app.dataStore.set('fikaOwers', currentPeopleOwingFika)
      message.reply('Jag håller koll på det! Tack!');
    },

    'tackfika' : function(message,params){
      let currentPeopleOwingFika = app.dataStore.get('fikaOwers');


      if(currentPeopleOwingFika.length < 1 || !Array.isArray(currentPeopleOwingFika)){
        message.reply('Ingen är skyldig fika, så chilla!');
        return;
      }
      message.mentions.users.forEach((user) => {
        currentPeopleOwingFika.forEach((username, index) => {
          if(user.username == username){
            currentPeopleOwingFika.splice(index,1)
          }
        })
      })

      app.dataStore.set('fikaOwers', currentPeopleOwingFika)

      message.reply("Ohh. Tack för fikat!");
    },

    'vemkoperfika' : function(message,params){
      let currentPeopleOwingFika = app.dataStore.get('fikaOwers');

      if(currentPeopleOwingFika.length < 1 || !Array.isArray(currentPeopleOwingFika)){
        message.reply("Ingen är skyldig fika!")
        return
      }
      let msg = "Dessa personer ska bjuda på fika: ";
      currentPeopleOwingFika.forEach((user) => {
        msg+=user+" "
      })

      message.reply(msg);

    }
  }

  constructor (dataStore = null) {
    super();

    this.dataStore = dataStore
    app = this
  }


}
module.exports = Fika;
