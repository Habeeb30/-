module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ɴᴇᴇᴅ ᴛᴏ ᴊᴏɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀᴛ ꜰɪʀꜱᴛ");
    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏᴛʜɪɴɢ ᴛᴏ ꜱᴋɪᴩ!");

    let roleN = message.guild.roles.cache.find(role => role.name === "DJ")

    if(!message.member.roles.cache.get(roleN.id))
        return message.channel.send("Yᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜᴇ ᴅᴊ ʀᴏʟᴇ");

    serverQueue.connection.dispatcher.end();
    serverQueue.skipVotes = [];
}

module.exports.config = {
    name: "fskip",
    aliases: ["fs", "fsk"]
}