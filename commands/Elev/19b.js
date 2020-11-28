const svgToImg = require('svg-to-img');
const { getSchedule, printIfNoInputB, printInputB } = require("../../getSchedule");

module.exports = {
    name: '19b',
    category: 'Elev',
    description: 'Visa TE19B schema',
    usage: '-19b [dag|"vecka"]',
    run: async(client, message, args) => {

        // SVG TO IMG CONVERTER 

        /*
                (async() => {
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Måndag.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Måndag.png"
                    });
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Tisdag.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Tisdag.png"
                    });
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Onsdag.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Onsdag.png"
                    });
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Torsdag.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Torsdag.png"
                    });
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Fredag.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Fredag.png"
                    });
                    await svgToImg.from(fs.readFileSync("C:/Users/03BVI01/Desktop/ALLT/Programming/node.js/TE19B_Vecka.svg")).toPng({
                        width: 1207,
                        height: 549,
                        path: "./TE19B_Vecka.png"
                    });
                })();
        */

        const d = new Date();
        const n = d.getDay();

        const { te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag, te19bVecka } = getSchedule();

        printIfNoInputB(args, n, message, te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag);

        let veckodag = {
            1: "måndag",
            2: "tisdag",
            3: "onsdag",
            4: "torsdag",
            5: "fredag"
        }

        const arguments = args[0].toLowerCase();

        printInputB(arguments, veckodag, message, te19bMåndag, te19bTisdag, te19bOnsdag, te19bTorsdag, te19bFredag, te19bVecka);

    }
}