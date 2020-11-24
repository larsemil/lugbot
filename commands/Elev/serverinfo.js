const { MessageEmbed } = require("discord.js");
const { stripIndents, stripIndent } = require("common-tags");

module.exports = {
    name: "serverinfo",
    category: "Elev",
    description: "Visa information om servern!",
    usage: "-serverinfo",
    run: async(client, message, args) => {

        ServerInfo(message);

    }
}

function ServerInfo(message) {

    message.delete();

    let serverName = message.guild.name;
    let serverImg = message.guild.icon;
    let serverID = message.guild.id;
    let serverMembers = message.guild.memberCount;
    let serverRegion = message.region;
    let sender = message.author.username;
    let senderID = message.author.id;
    let senderImg = message.author.avatar;


    let embed = new MessageEmbed()
        .addField("Guild info", stripIndents `**> Server namn: ** ${serverName}

            **> Server ID: ** ${serverID}
            `, true)
        .addField("Guild info", stripIndents `**> Server members: **${serverMembers}

            **> Server region: ** ${serverRegion}
            `, true)
        .setColor("BLUE")
        .setFooter(sender, `https://cdn.discordapp.com/avatars/${senderID}/${senderImg}.png`)
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/icons/${serverID}/${serverImg}.png`);

    message.channel.send(embed);
}