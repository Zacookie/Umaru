const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "chan-create",
        aliases: ["new-chan"]
    },
    run: async (bot, message, args) => {
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Where's my fckin perms?")
        let chanName = message.content.split(" ").slice(1).join("-");
        if(chanName.length >= 100) return message.channel.send("Bruh that channel name is too fucking long.")
            message.guild.channels.create(`${chanName}`).then(sss => sss.send(`This channel has been created by: ${message.author}`))
        await message.channel.send("k, channel created...")
    } 
}