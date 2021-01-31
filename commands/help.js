module.exports.run = (client, message, args, queue, searcher) => {
    const { Client, MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()    
        .setTitle("ꜰʀɪᴇɴᴅꜱ ᴍᴜꜱɪᴄ ʜᴇʟᴩ")
        .addField("List Of All Commands", "~")
        .addField("'?'play (p) : Playing Audio From YouTube", "---------------")
        .addField("'?'stop : Stops The Music", "---------------")
        .addField("'?'pause : Pause The Currently Playing Music", "---------------")
        .addField("'?'resume (r) : Resume Currently Playing Music", "---------------")
        .addField("'?'queue (q) : Show The Music Queue And Now Playing", "---------------")
        .addField("'?'skip (s) : Skip The Currently Playing Song", "---------------")
        .addField("'?'fskip (fs) : Skip To The Selected Queue Number", "---------------")
        .addField("'?'lyrics (ly) : Get Lyrics For The Currently Playing Song", "---------------")
        .addField("'?'loop (l) : Toggle Music Loop", "---------------")
        .setColor("#00f6ef")
    message.channel.send(embed);
}

module.exports.config = {
    name: "Help",
    aliases: ["help"]
}