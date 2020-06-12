const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "avatar",
        noalias: ["icon"]
    },
    run: async (bot, message) => {
        const clientUser = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(clientUser.avatarURL({ dynamic: true, format: 'png', size: 512 }))
            .setTimestamp()
            .setFooter(`Responding to ${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 512 }));

        message.channel.send(embed);
    } 
}