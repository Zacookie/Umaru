// The undying ping command.

const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "tist",
        noalias: ""
    },
    run: async (bot, message) => {
        const msg = await message.channel.send(':ping_pong: Pinging...')
        const Embed = new MessageEmbed()
            .setColor(3066993)
            .setTitle('🏓 Pong!')
            .setDescription(`Latency Ping: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Ping: ${bot.ws.ping}ms`)
        msg.edit(Embed);
    }
}