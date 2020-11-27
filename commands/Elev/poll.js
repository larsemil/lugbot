const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "poll",
    category: "Elev",
    description: "Ställ ett ja/nej fråga!",
    usage: "-poll <fråga>",
    run: async(client, message, args) => {

        if (message.deletable) message.delete();

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