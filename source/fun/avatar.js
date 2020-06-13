const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "avtr",
        alias: [""]
    },
    run: async (bot, message, args) => {
        const clientUser = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`[Avatar Link](${clientUser.displayAvatarURL()})`)
            .setImage(clientUser.avatarURL({ dynamic: true, format: 'png', size: 512 }))
    
        message.channel.send(embed)
    }
}
![image](https://cdn.discordapp.com/attachments/720137467579334716/721244058143424542/Screen_Shot_2020-06-13_at_12.00.53_AM.png)