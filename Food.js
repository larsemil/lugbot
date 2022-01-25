const Plugin = require('./Plugin.js');
const random = require('random')
const rp = require('request-promise');
const $ = require('cheerio');
var app = null;

class Food extends Plugin{
    name = "Food";
    datastore = {
        day: {}
    }

    commands = {
        'food': function (msg) {
            var datetime = new Date();
            let today = datetime.toISOString().slice(0, 10);
    	    let dayIndex = datetime.getDay() -1 ;
            if(app.datastore.day[today]){
                console.log('Already checked today. Returning cached value');
                msg.reply(app.datastore.day[today]);
                return;
            }
    
            let options = {
		    url: 'https://webmenu.foodit.se/?r=20&m=2080&p=1283&c=10693&w=0&v=Week&l=undefined&kioskmode=true',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
                }
            }
            rp(options).then((html) => {
                console.log('Parsing html');

                let elements = $('#weekList_' + dayIndex + ' .day-menus-container > div', html);
                console.log('Found ' + elements.length + ' meals for today');
    
                if (!elements || elements.length === 0) {
                    msg.reply("Hittade ingen matsedel för idag");
                    return;
                }
    
                let food = 'Idag kan man äta:  ';
    
                for (let i = 0; i < elements.length; i++) {
    
                    food += "`" + $(elements[i]).text().replace(/(\r\n|\n|\r)/gm, "").replace("Normal.:","").replace("Normal:","").trim() + "`";
    
                    if (i != elements.length - 1) {
                        food += " eller ";
                    }
                }
    
                console.log('Saving food in cache');
                app.datastore.day[today] = food;
    
                console.log('Replying');
                msg.reply(food);
    
            }).catch((err) => {
                console.log(err.message);
            });
        },
        
    }


    init(){
        super.init()
        app = this;
    }
}
module.exports = Food;
