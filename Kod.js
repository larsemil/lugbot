const Plugin = require("./Plugin.js");
const { MessageEmbed } = require("discord.js");
const { getMember } = require("./functions.js");
var app = null;

class Kod extends Plugin {
    name = "Kod";

    commands = {
        'kod': function(message, args) {

            const member = getMember(message, message.author);

            if (message.deletable) {
                message.delete();
            }

            let language = args[1];
            if (!language) return message.reply("``Använding: -kod <språk> <kod>``, Botten supportar följande språk => `js` `html` `css` `cs` `cpp`");


            let koden = args.join(" ").slice(language.length + 6);

            if (koden.length >= 1023) return message.reply("Det går tyvärr inte att klistra in så lång kod än :/");

            const embedJS = new MessageEmbed()
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTitle(`${member.displayName}, delade en JavaScript kod!!`)
                .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
                .setTimestamp()
                .addField("> JavaScript", `\`\`\`js\n${koden}\`\`\``);

            const embedHTML = new MessageEmbed()
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTitle(`${member.displayName}, delade en HTML kod!!`)
                .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
                .setTimestamp()
                .addField("> HTML", `\`\`\`html\n${koden}\`\`\``);

            const embedCSS = new MessageEmbed()
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTitle(`${member.displayName}, delade en CSS kod!!`)
                .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
                .setTimestamp()
                .addField("> CSS", `\`\`\`css\n${koden}\`\`\``);

            const embedCS = new MessageEmbed()
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTitle(`${member.displayName}, delade en C# kod!!`)
                .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
                .setTimestamp()
                .addField("> C#", `\`\`\`cs\n${koden}\`\`\``);

            const embedCPP = new MessageEmbed()
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTitle(`${member.displayName}, delade en C++ kod!!`)
                .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
                .setTimestamp()
                .addField("> C++", `\`\`\`cpp\n${koden}\`\`\``);


            if (language.toLowerCase() === "js") message.channel.send(embedJS);
            else if (language.toLowerCase() === "html") message.channel.send(embedHTML);
            else if (language.toLowerCase() === "css") message.channel.send(embedCSS);
            else if (language.toLowerCase() === "cs") message.channel.send(embedCS);
            else if (language.toLowerCase() === "cpp") message.channel.send(embedCPP);
            else message.reply("``Använding: -kod <språk> <kod>``, Botten supportar följande språk => `js` `html` `css` `cs` `cpp`");
        }
    }



    init() {
        super.init()
        app = this;
    }

}
module.exports = Kod;