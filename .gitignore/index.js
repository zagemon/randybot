const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!")
var dispatcher;

function sendError(message, description){
    message.channel.send({embed: {
        color: 15158332,
        description: ':x:' + description
    }});
}

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'donner son argent a fortnite', type: 0}});
    console.log('Bot Ready!');
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("voici les commandes fdp(sauf bruno psk c'est un bg) :\n !fromage 1 (permet de rire a vos blagues le plus drôles si vous n'avez pas d'amis) \n !pd (fait fuire randy comme l'homophobe qu'il est) \n !flanc (pour avoir le meilleur flanc de votre région) \n /pigeon pour les amateurs de cosmétique ")
        console.log("Commande Help demandée !");
    
    }
    if(message.content[0] === prefix) {
        let splitMessage = message.content.split(" ")
        if(splitMessage[0] === "!fromage"){
            if (splitMessage.length === 2)
            {
               if(message.member.voiceChannel)
               {
                message.member.voiceChannel.join().then(connection => {
                    dispatcher = connection.playFile('./oui.mp3');
                     
                    dispatcher.on('error', e => {
                     console.log(e);
                    });
                    dispatcher.on('end', e => {
                     
                     console.log('fin du son')
                    });
             }).catch(console.log);
            

            }
            else
             sendError(message, "Rejoint un vocal MON ROMMMEOO");  
         
        };
    
    };
    }; 
    if (message.content === prefix + "pd")    
     message.member.voiceChannel.leave();
    
    if (message.content === prefix + "flanc")
     message.channel.send ("Au 06 19 19 19 19", {files: ['./qsfqsdf.JPG']});
    
    if (message.content === prefix + "pigeon")
     message.channel.send  ("~rouuu rouuu~", {files: ['./randy pigeon.png']});

   
    if (message.content === prefix + "pigeon")
    message.member.voiceChannel.join().then(connection => {
        dispatcher = connection.playFile('./rourou.mp3')
    });
    

});

