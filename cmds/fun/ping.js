// The innevitable ping command!
module.exports = {
    config: {
        name: "ping",
        alias: [""]
    },
    run: async (bot, message, args) => {
        const msg = await message.channel.send("Pinging...")
        msg.edit(`:ping_pong: Pong!\n> Latency: \`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\`ms\n> API: \`${bot.ws.ping}\`ms`)
    }
}