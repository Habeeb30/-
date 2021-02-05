module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id);

    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴄᴜʀʀᴇɴᴛʟy ᴩʟᴀyɪɴɢ!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("ᴩʟᴇᴀꜱᴇ ᴊᴏɪɴ ᴛʜᴇ ꜱᴀᴍᴇ ᴠᴏɪᴄᴇ ᴄʜᴀᴛ ᴀꜱ ᴍᴇ");
    let roleN = message.guild.roles.cache.find(role => role.name === "DJ")

    if(!message.member.roles.cache.get(roleN.id))
        return message.channel.send("Yᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜᴇ ᴅᴊ ʀᴏʟᴇ");

    shuffleQueue(serverQueue.songs, message);
}

function shuffleQueue (squeue, message){
    for (let i = squeue.length - 1; i > 0; i--){
        let j = Math.round(Math.random() * (i + 1));
        while(j == 0) 
            j = Math.round(Math.random() * (i + 1));
        const temp = squeue[i];
        squeue[i] = squeue[j];
        squeue[j] = temp;
    }
    message.channel.send("ᴛʜᴇ qᴜᴇᴜᴇ ʜᴀꜱ ʙᴇᴇɴ ꜱʜᴜꜰꜰʟᴇᴅ");
    return squeue;
}

module.exports.config = {
    name: "shuffle",
    aliases: ["sh"]
}