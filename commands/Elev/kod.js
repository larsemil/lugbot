const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember } = require("../../function.js")

module.exports = {
    name: "kod",
    category: "info",
    description: "Dela med kod på ett snyggare sätt!",
    usage: "-kod <språk> <kod>",
    run: async(client, message, args) => {

        let language = args[0];
        let koden = args.join(" ").slice(language.length);
        const member = getMember(message, message.author);

        if (koden.length >= 1023) return message.reply("Det går tyvärr inte att klistra in så lång kod än :/");

        const embedJS = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Detta är ett JS kod", `\`\`\`js\n${koden}\`\`\``);

        const embedHTML = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Detta är ett HTML kod", `\`\`\`html\n${koden}\`\`\``);

        const embedCSS = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Detta är ett CSS kod", `\`\`\`css\n${koden}\`\`\``);

        const embedCS = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Detta är ett C# kod", `\`\`\`cs\n${koden}\`\`\``);

        const embedCPP = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setTimestamp()
            .addField("Detta är ett C++ kod", `\`\`\`cpp\n${koden}\`\`\``);


        if (language.toLowerCase() == "js") message.channel.send(embedJS);
        else if (language.toLowerCase() == "html") message.channel.send(embedHTML);
        else if (language.toLowerCase() == "css") message.channel.send(embedCSS);
        else if (language.toLowerCase() == "cs") message.channel.send(embedCS);
        else if (language.toLowerCase() == "cpp") message.channel.send(embedCPP);
        else message.reply("``Använding: -kod <språk> <kod>``, Boten supportar följande språk => `js` `html` `css` `cs` `cpp`");

    }
}