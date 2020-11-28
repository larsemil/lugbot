const svgToImg = require('svg-to-img');

const fs = require("fs");
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: '19a',
    category: 'Elev',
    description: 'Visa 19a schema',
    usage: '-19a [dag|"vecka"]',
    run: async(client, message, args) => {

        // SVG TO IMG CONVERTER 

        /*
        (async() => {
            await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19A_Måndag.svg")).toPng({
                width: 1207,
                height: 549,
                path: "./TE19A_Måndag.png"
            });
            await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19A_Tisdag.svg")).toPng({
                width: 1207,
                height: 549,
                path: "./TE19A_Tisdag.png"
            });
            await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19A_Onsdag.svg")).toPng({
                width: 1207,
                height: 549,
                path: "./TE19A_Onsdag.png"
            });
            await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19A_Torsdag.svg")).toPng({
                width: 1207,
                height: 549,
                path: "./TE19A_Torsdag.png"
            });
            await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19A_Fredag.svg")).toPng({
                width: 1207,
                height: 549,
                path: "./TE19A_Fredag.png"
            });
        })();
        */

        const d = new Date();
        const n = d.getDay();

        const { te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka } = getSchedule();

        printIfNoInput(args, n, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag);

        let veckodag = {
            1: "måndag",
            2: "tisdag",
            3: "onsdag",
            4: "torsdag",
            5: "fredag"
        }

        const arguments = args[0].toLowerCase();

        pringInput(arguments, veckodag, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka);

    }
}

function getSchedule() {
    const te19aVecka = new MessageAttachment('./schema/te19a/TE19A_Vecka.png');
    const te19aMåndag = new MessageAttachment('./schema/te19a/TE19A_Måndag.png');
    const te19aTisdag = new MessageAttachment('./schema/te19a/TE19A_Tisdag.png');
    const te19aOnsdag = new MessageAttachment('./schema/te19a/TE19A_Onsdag.png');
    const te19aTorsdag = new MessageAttachment('./schema/te19a/TE19A_Torsdag.png');
    const te19aFredag = new MessageAttachment('./schema/te19a/TE19A_Fredag.png');
    return { te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka };
}

function printIfNoInput(args, n, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag) {
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

function pringInput(arguments, veckodag, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka) {
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