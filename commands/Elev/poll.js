const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "poll",
    category: "Kul",
    description: "Ställ en ja/nej fråga!",
    usage: "-poll <fråga>",
    run: async(client, message, args) => {

        if (message.deletable) message.delete();

        // let suggestionChannelName = config.suggestionChannelName;
        // let suggestionChannel = message.guild.channels.cache.find(ch => ch.name === suggestionChannelName);

        // if (!suggestionChannel) return message.reply("The suggestion channel does not exist, if you are a moderator please create a 'suggestions' channel otherwise contact a staff member").then(m => m.delete({ timeout: 10000 }));

        if (!args[0]) return message.reply("Pollen kan inte vara tom!").then(m => m.delete({ timeout: 5000 }));

        const suggestEmbed = new MessageEmbed()
            .setTimestamp()
            .setColor("GREEN")
            .setTitle("**Ny Fråga 👀**")
            .setFooter(message.member.user.username, message.member.user.displayAvatarURL({ format: "png" }))
            .setDescription("```\n" + args.join(" ") + "\n```");


        message.channel.send(suggestEmbed).then(async msg => {
            let validReaction = ['✅', '❌']
            for (const reaction of validReaction) await msg.react(reaction);
        });




    }
};