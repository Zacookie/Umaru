const { MessageEmbed } = require("discord.js");
const ownerid = "owner_id_here";

module.exports = {
    config: {
        name: "shutdown",
        aliases: ""
    },
    run: async (bot, message, args) => {
    if (message.author.id != ownerid) return;
    const newMessage = await message.channel.send("You want to get rid of me? *Sucks to be me*");
    
        newMessage.react("✅").then(() => newMessage.react("❌"));
    
        const filter = (reaction, user) => {
            return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    
        newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(async collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === "✅") {
            await message.channel.send("K fine I'm going off.");
                process.exit();
            } else {
            message.channel.send("Phew, thought you're gon kill me.");
            }
        })
        .catch(collected => {
            message.channel.send("Bruh react fast with check or x. It ain't that hard!");
        });
    } 
}