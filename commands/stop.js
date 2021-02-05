module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
            return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴩʟᴀyɪɴɢ!")
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ɴᴇᴇᴅ ᴛᴏ ᴊᴏɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀᴛ ꜰɪʀꜱᴛ!")
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

module.exports.config = {
    name: "stop",
    aliases: ["dc", "st"]
}