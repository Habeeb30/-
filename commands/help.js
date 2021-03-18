module.exports.run = (client, message, args, queue, searcher) => {
    const { Client, MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()    
        .setTitle("ꜰʀɪᴇɴᴅꜱ ᴍᴜꜱɪᴄ ʜᴇʟᴩ")
        .addField("List Of All Commands", "~")
        .addField("'?'play (p) : Playing Audio From YouTube", "---------------")
        .addField("'?'stop (dc) : Stops The Music", "---------------")
        .addField("'?'pause : Pause The Currently Playing Music", "---------------")
        .addField("'?'resume (r) : Resume Currently Playing Music", "---------------")
        .addField("'?'queue (q) : Show The Music Queue And Now Playing", "---------------")
        .addField("'?'skip (s) : Skip The Currently Playing Song", "---------------")
        .addField("'?'fskip (fs) : Skip To The Selected Queue Number {And To Fskip You Must Need To Create DJ Role In Your Server}", "---------------")
        .addField("'?'lyrics (ly) : Get Lyrics For Your Fav Songs", "---------------")
        .addField("'?'loop (l) : Toggle Music Loop Ues Use Like ?loop all,one,off ", "---------------")
        .addField("'?'shuffle (sh) : For Shuffle Songs", "---------------")
        .setColor("#00f6ef")
    message.channel.send(embed);
}

module.exports.config = {
    name: "Help",
    aliases: ["help"]
}