const { MessageEmbed } = require("discord.js");
const { stripIndents, stripIndent } = require("common-tags");
const { getMember } = require("../../function.js")

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

    if (message.deletable) message.delete().catch();

    const member = getMember(message, message.author);
    const created = message.guild.createdAt;
    let serverName = message.guild.name;
    let region = message.guild.region;
    let memberCount = message.guild.memberCount;
    let sicon = message.guild.iconURL();
    let antalRoller = message.guild.roles.cache;
    const roles = message.guild.roles.cache
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "none";
    const sowner = message.guild.owner;
    let sid = message.guild.id;

    const embed = new MessageEmbed()
        .setFooter(member.displayName, member.user.displayAvatarURL())
        .setThumbnail(sicon)
        .setTimestamp()
        .setTitle('🔰| Server Information')
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

    .addField('1.', stripIndents `**> Server namn:** ${serverName}
    **> Antal members: ** ${memberCount}
    **> Skapad: ** ${created}`, true)

    .addField('2.', stripIndents `**> Ägare: ** ${sowner}
    **> ID:** ${sid}
    **> Region:** ${region}`, true)
        .addField("Roller", roles)

    message.channel.send(embed);
}