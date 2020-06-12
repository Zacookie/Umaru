const { MessageEmbed } = require("discord.js");
const math = require("mathjs"); // Install package [npm i mathjs]

module.exports = {
    config: {
        name: "math",
        aliases: [""]
    },
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("Charles' Law: P1 ÷ T1 = P2 ÷ T2, where T is in Kelvin. Can't calculate air")

        let resp;
        try {
            resp = math.evaluate(args.join(' '));
        } catch (e) {
            message.channel.send("Put something in, lazy f.....")
        }

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .addField("Input", `\`\`\`js\n${args.join(' ')}\`\`\``)
            .addField("Output", `\`\`\`js\n${resp}\`\`\``)
        
        return message.channel.send(embed)
    } 
}