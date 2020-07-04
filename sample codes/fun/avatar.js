const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "avatar",
        alias: [""]
    },
    run: async (bot, message, args) => {
        const clientUser = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`[${clientUser.username}'s Avatar](${clientUser.displayAvatarURL()})`)
            .setImage(clientUser.avatarURL({ dynamic: true, format: 'png', size: 512 }))
    
        message.channel.send(embed)
    }
}