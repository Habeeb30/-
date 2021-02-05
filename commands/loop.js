module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ᴍᴜꜱɪᴄ ᴄᴜʀʀᴇɴᴛʟy ᴩʟᴀyɪɴɢ!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ɪɴ ᴛʜᴇ ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟ!")

    switch(args[0].toLowerCase()){
        case 'all':
            serverQueue.loopall = !serverQueue.loopall;
            serverQueue.loopone = false;

            if(serverQueue.loopall === true)
                message.channel.send("ʟᴏᴏᴩ ᴀʟʟ ʜᴀꜱ ʙᴇᴇɴ ᴛᴜʀɴᴇᴅ ᴏɴ!");
            else
                message.channel.send("ʟᴏᴏᴩ ᴀʟʟ ʜᴀꜱ ʙᴇᴇɴ ᴛᴜʀɴᴇᴅ ᴏꜰꜰ!");

        break;
    case 'one':
        serverQueue.loopone = !serverQueue.loopone;
        serverQueue.loopall = false;

        if(serverQueue.loopone === true)
            message.channel.send("ʟᴏᴏᴩ ᴏɴᴇ ʜᴀꜱ ʙᴇᴇɴ ᴛᴜʀɴᴇᴅ ᴏɴ!");
        else
            message.channel.send("ʟᴏᴏᴩ ᴏɴᴇ ʜᴀꜱ ʙᴇᴇɴ ᴛᴜʀɴᴇᴅ ᴏꜰꜰ!");
        break;
    case 'off':
            serverQueue.loopall = false;
            serverQueue.loopone = false;

            message.channel.send("Loop has been turned off!");
        break;
    default:
        message.channel.send("ᴩʟᴇᴀꜱᴇ ꜱᴩᴇᴄɪꜰy ᴡʜᴀᴛ ʟᴏᴏᴩ yᴏᴜ ᴡᴀɴᴛ. ?ʟᴏᴏᴩ <ᴏɴᴇ/ᴀʟʟ/ᴏꜰꜰ>"); 
    }
}

module.exports.config = {
    name: "loop",
    aliases: ["l", "lp"]
}