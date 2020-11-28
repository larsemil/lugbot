const svgToImg = require('svg-to-img');

const fs = require("fs");
const { getSchedule, printIfNoInputA, printInputA } = require("../../getSchedule");

module.exports = {
    name: '19a',
    category: 'Elev',
    description: 'Visa TE19A schema',
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

        printIfNoInputA(args, n, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag);

        let veckodag = {
            1: "måndag",
            2: "tisdag",
            3: "onsdag",
            4: "torsdag",
            5: "fredag"
        }

        const arguments = args[0].toLowerCase();

        printInputA(arguments, veckodag, message, te19aMåndag, te19aTisdag, te19aOnsdag, te19aTorsdag, te19aFredag, te19aVecka);

    }
}