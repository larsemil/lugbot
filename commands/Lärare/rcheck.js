const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "rcheck",
    category: "Lärare",
    description: "Kolla vilka som har rollen!",
    usage: "-rcheck <role>",
    run: async(client, message, args) => {

        // No author permissions
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("❌ Du är ingen lärare så du kan inte köra detta kommando.")
                .then(m => m.delete({ timeout: 5000 }));

        let argss = args.join(" ");
        let rolec = message.guild.roles.cache.find(role => role.name === argss)

        if (!rolec && message.mentions.roles)
            rolec = message.mentions.roles.first();

        if (!rolec) return message.reply('Det finns ingen men den rollen!');


        const log = message.guild.members.cache
            .filter(m => m.roles.cache.has(rolec.id))
            .map(m => m);

        const finalLog = log
            .filter(r => r.id)
            .map(r => r)
            .join(", ") || "none"


        let embed = new MessageEmbed()
            .addField("Här är vilka som hade rollen =>", `${finalLog}`)
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed)

    }
}