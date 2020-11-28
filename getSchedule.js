const { MessageAttachment } = require("discord.js");

function getSchedule() {
    const te19aVecka = new MessageAttachment('./schema/te19a/TE19A_Vecka.png');
    const te19aMåndag = new MessageAttachment('./schema/te19a/TE19A_Måndag.png');
    const te19aTisdag = new MessageAttachment('./schema/te19a/TE19A_Tisdag.png');
    const te19aOnsdag = new MessageAttachment('./schema/te19a/TE19A_Onsdag.png');
    const te19aTorsdag = new MessageAttachment('./schema/te19a/TE19A_Torsdag.png');
    const te19aFredag = new MessageAttachment('./schema/te19a/TE19A_Fredag.png');

    const te19bVecka = new MessageAttachment('./schema/te19b/TE19B_Vecka.png');
    const te19bMåndag = new MessageAttachment('./schema/te19b/TE19B_Måndag.png');
    const te19bTisdag = new MessageAttachment('./schema/te19b/TE19B_Tisdag.png');
    const te19bOnsdag = new MessageAttachment('./schema/te19b/TE19B_Onsdag.png');
    const te19bTorsdag = new MessageAttachment('./schema/te19b/TE19B_Torsdag.png');
    const te19bFredag = new MessageAttachment('./schema/te19b/TE19B_Fredag.png');
    return { te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka, te19bVecka, te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag };
}
exports.getSchedule = getSchedule;

function printIfNoInputA(args, n, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag) {
    if (!args[0]) {
        if (n == 1) {
            message.reply("Här kommer måndagens schema 🚀" + te19aMåndag);
        }
        if (n == 2) {
            message.channel.send(te19aTisdag);
        }
        if (n == 3) {
            message.channel.send(te19aOnsdag);
        }
        if (n == 4) {
            message.channel.send(te19aTorsdag);
        }
        if (n == 5) {
            message.channel.send(te19aFredag);
        } else {
            args[0] = "vecka";
        }
    }
}
exports.printIfNoInputA = printIfNoInputA;

function printIfNoInputB(args, n, message, te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag) {
    if (!args[0]) {
        if (n == 1) {
            message.reply("Här kommer måndagens schema 🚀" + te19bMåndag);
        }
        if (n == 2) {
            message.channel.send(te19bTisdag);
        }
        if (n == 3) {
            message.channel.send(te19bOnsdag);
        }
        if (n == 4) {
            message.channel.send(te19bTorsdag);
        }
        if (n == 5) {
            message.channel.send(te19bFredag);
        } else {
            args[0] = "vecka";
        }
    }
}
exports.printIfNoInputB = printIfNoInputB;

function printInputA(arguments, veckodag, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka) {
    if (arguments == veckodag['1']) {
        message.reply("Här kommer måndagens schema för TE19A 🚀"), message.channel.send(te19aMåndag);
    } else if (arguments == veckodag['2']) {
        message.reply("Här kommer tisdagens schema för TE19A 🚀"), message.channel.send(te19aTisdag);
    } else if (arguments == veckodag['3']) {
        message.reply("Här kommer onsdagens schema för TE19A 🚀"), message.channel.send(te19aOnsdag);
    } else if (arguments == veckodag['4']) {
        message.reply("Här kommer torsdagens schema för TE19A 🚀"), message.channel.send(te19aTorsdag);
    } else if (arguments == veckodag['5']) {
        message.reply("Här kommer fredagens schema för TE19A 🚀"), message.channel.send(te19aFredag);
    } else if (arguments == "vecka") { message.reply("Här kommer veckans schema för TE19A 🚀"), message.channel.send(te19aVecka); } else {
        message.reply("Fel format: ``-19a [dag|\"vecka\"]``");
    }
}
exports.printInputA = printInputA;

function printInputB(arguments, veckodag, message, te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag, te19bVecka) {
    if (arguments == veckodag['1']) {
        message.reply("Här kommer måndagens schema för TE19B 🚀"), message.channel.send(te19bMåndag);
    } else if (arguments == veckodag['2']) {
        message.reply("Här kommer tisdagens schema för TE19B 🚀"), message.channel.send(te19bTisdag);
    } else if (arguments == veckodag['3']) {
        message.reply("Här kommer onsdagens schema för TE19B 🚀"), message.channel.send(te19bOnsdag);
    } else if (arguments == veckodag['4']) {
        message.reply("Här kommer torsdagens schema för TE19B 🚀"), message.channel.send(te19bTorsdag);
    } else if (arguments == veckodag['5']) {
        message.reply("Här kommer fredagens schema för TE19B 🚀"), message.channel.send(te19bFredag);
    } else if (arguments == "vecka") { message.reply("Här kommer veckans schema för TE19B 🚀"), message.channel.send(te19bVecka); } else {
        message.reply("Fel format: ``-19b [dag|\"vecka\"]``");
    }
}
exports.printInputB = printInputB;