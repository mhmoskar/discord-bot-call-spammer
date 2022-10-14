const {Client} = require("discord.js");
const client = new Client({ intents: 32767});


client.on("ready", () => {
	client.user.setStatus('STATUS') // Can be set to 'online','idle' or 'invisible'
});

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('messageCreate', message => {
    if(message.content === '!join') {	//Can set the message content to be whatever you want for it to join 
        joinVoiceChannel({
            channelId: 'CHANNEL_ID',	//The voice channel you want the bot to join
            guildId: 'SERVER_ID',	//The server in which the voice channel is in
	    selfDeaf: false,
	    selfMute: false,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
    if(message.content === '!here') {
        message.reply("here")
    }
})


client.login("BOT_TOKEN");	//Enter your Dicord token for another bot
