const Plugin = require('./Plugin.js')

class Xmas extends Plugin{
    name = "Xmas";

    commands = {
        'xmas' :function(message, params){
		var xMas = new Date("12/24/" + new Date().getFullYear());

		var today = Date.now();

		var Difference_In_Time = xMas - today;

		var numberOfDays = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

            message.reply("Det är " + numberOfDays + " dagar kvar till jul. :santa: :christmas_tree: ");
        }
    }

}
module.exports = Xmas;
