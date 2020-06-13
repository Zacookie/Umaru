const { MessageEmbed } = require("discord.js");
const ms = require("ms"); // Install package [npm i ms]

module.exports = {
    config: {
        name: "remind",
        aliases: [""]
    },
    run: async (bot, message, args) => {
      if (!ms(args[0])) return message.channel.send("Bruh providing a time will surely help me and you...")
      if (!args[1]) return message.channel.send("Ok! I'm reming you with an air message... **PROVIDE A MESSAGE**")
      
    setTimeout(async () => {
        const embed = new MessageEmbed()
            .setColor(colored[~~(Math.random() * colored.length)])
            .setTitle("Reminder!")
            .setDescription(args.slice(1).join(' '));

        message.author.send(embed);
      }, ms(args[0]));
      
        message.channel.send(`K, I'll remind you in, \`${ms(ms(args[0]), {long: true})}\` make sure your DM's open or I'll give you errors`)
    }
}



