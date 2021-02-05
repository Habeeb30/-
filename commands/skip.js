module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴄᴜʀʀᴇɴᴛʟy ᴩʟᴀyɪɴɢ!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟ!");

    let usersC = message.member.voice.channel.members.size;
    let required = Math.ceil(usersC/2);

    if(serverQueue.skipVotes.includes(message.member.id))
        return message.channel.send("Yᴏᴜ ᴀʟʀᴇᴀᴅy ᴠᴏᴛᴇᴅ ᴛᴏ ꜱᴋɪᴩ!")

    serverQueue.skipVotes.push(message.member.id)
    message.channel.send(`Yᴏᴜ ᴠᴏᴛᴇᴅ ᴛᴏ ꜱᴋɪᴩ ᴛʜᴇ ꜱᴏɴɢ ${serverQueue.skipVotes.length}/${required} ᴠᴏᴛᴇꜱ`)

    if(serverQueue.skipVotes.length >= required){
        serverQueue.connection.dispatcher.end();
        serverQueue.skipVotes = [];
        message.channel.send("ꜱᴏɴɢ ʜᴀꜱ ʙᴇᴇɴ ꜱᴋɪᴩᴩᴇᴅ")
    }
}

module.exports.config = {
    name: "skip",
    aliases: ["sk"]
}