const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    category: "info",
    description: "Hjälp sida till boten!",
    usage: "!help <command>",
    run: async(client, message, args) => {
        if (args[0]) {
            // message.delete().catch();
            return getCMD(client, message, args[0]);

        } else {
            // message.delete().catch();
            return getAll(client, message);
        }

    }
}

function getAll(client, message) {
    let sicon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setFooter('Mineserver - bot', sicon)
        .setTitle('📃 | **Help**')

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\` - \`${cmd.description}\``)
            .join("\n");
    }

    const info = client.categories
        .map(ctg => stripIndents `**${ctg[0].toUpperCase() + ctg.slice(1)}** \n${commands(ctg)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    let info = `No information found for command **${input.toLowerCase()}**`

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info)).then(message.delete())
    }

    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.permission) info += `\n**Permission**: ${cmd.permission}`
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}