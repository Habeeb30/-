module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴄᴜʀʀᴇɴᴛʟy ᴩʟᴀyɪɴɢ!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟ!")
    if(serverQueue.connection.dispatcher.paused)
        return message.channel.send("ᴛʜᴇ ꜱᴏɴɢ ɪꜱ ᴀʟʀᴇᴀᴅy ᴩᴀᴜꜱᴇᴅ");
    serverQueue.connection.dispatcher.pause();
    message.channel.send("ᴛʜᴇ ꜱᴏɴɢ ʜᴀꜱ ʙᴇᴇɴ ᴩᴀᴜꜱᴇᴅ!");
}

module.exports.config = {
    name: "pause",
    aliases: ["p", "ps"]
}