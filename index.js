var SlackBot = require('slackbots');
var axios= require('axios');
var bot = new SlackBot({
    token: 'xoxb-375437843940-375567226547-chAmGv3MZJN7PZtiQm4HfnCQ', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'RajniBot'
});
bot.on('start', ()=> {
   
var params = {
        icon_emoji: ':rajni1:'
    };
    bot.postMessageToChannel('general', 'Type "Yenna rascala" To Laugh your Ass Off with @RajniBot', params);
});

bot.on('error',(err)=>console.log(err));

bot.on('message',(data)=>{
if(data.type!=='message')
{
    return;
}
Messagehandler(data.text);
});
function Messagehandler(message)
{
 if(message.includes(' Yenna rascala')||message.includes(' yenna rascala'))
 {
   rajnijoke();
 }
}
function rajnijoke()
{
    var joke;
    axios.get('http://api.icndb.com/jokes/random?firstName=Rajinikanth&lastName=')
    .then(res => {
    joke=res.data.value.joke;
    
    var params = {
        icon_emoji: ':rajni1:'
    };
    bot.postMessageToChannel('general',`${joke}`,'params');
});
}

