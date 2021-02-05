module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴄᴜʀʀᴇɴᴛʟy ᴩʟᴀyɪɴɢ!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟ!")
    if(serverQueue.connection.dispatcher.resumed)
        return message.channel.send("ᴛʜᴇ ꜱᴏɴɢ ɪꜱ ᴀʟʀᴇᴀᴅy ᴩʟᴀyɪɴɢ!");
    serverQueue.connection.dispatcher.resume();
    message.channel.send("ᴛʜᴇ ꜱᴏɴɢ ʜᴀꜱ ʙᴇᴇɴ ʀᴇꜱᴜᴍᴇᴅ!");
}

module.exports.config = {
    name: "resume",
    aliases: ["r", "rs"]
}