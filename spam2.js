const {Client} = require("discord.js");
const client = new Client({ intents: 32767});


client.on("ready", () => {
	client.user.setStatus('invisible')
});

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('messageCreate', message => {
    if(message.content === '!join') {
        joinVoiceChannel({
            channelId: '818468119151771658',
            guildId: '818465058510077962',
	    selfDeaf: false,
	    selfMute: false,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
    if(message.content === '!here') {
        message.reply("here")
    }
})

client.login("OTI5ODIxMDAwNDAzNjc3MjE1.Yds5SQ.Z1Ey49bLjzp8pi8LmP4D1DRwMaw");
