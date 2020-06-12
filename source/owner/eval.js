const { MessageEmbed } = require("discord.js");
const beautify = require("beautify"); // Install package [npm i beautify]
const ownerid = ["owner ID here"];

module.exports = {
    config: {
        name: "eval",
        aliases: [""]
    },
    run: async (bot, message, args) => {
        if (!message.author.id === ownerid) return;

        if (!args[0]) return message.channel.send("Bruh can't evaluate air.")
        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return message.channel.send("Why you trynna evaluate something that includes your token 🤦‍♂️")
            }

            const toEval = args.join(" ");
            const evaluated = eval(toEval);

            let embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Eval")
                .addField("Input", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
                .addField("Output", `\`\`\`js\n${evaluated}\n\`\`\``)
                .addField("Type of:", typeof(evaluated))
                .setTimestamp()
                .setFooter(bot.user.username);

            message.channel.send(embed);
        } catch (e) {
            message.channel.send(`Error\n${e}`)
        }
    } 
}