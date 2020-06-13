const Discord = require("discord.js");

module.exports = {
    config: {
        name: "poll",
        aliases: ["vote"]
    },
    run: async (client, message, args) => {
      if (message.content.startsWith('n! ')) return;
      if (message.channel.type == "dm") return;
      if(!message.guild.me.hasPermission("SEND_MESSAGES")) return;
        let pollChannel = message.guild.channels.cache.find(channel => channel.name === "poll");
        if (!pollChannel) return message.channel.send("Create a channel called, `polls`. **FAST!**")
      
      if (!args.join(' ')) if (!args.join(' ')) return message.channel.send("Hey kid, there's nothing to ask. Try asking something.")
      message.channel.send("I created a poll for ya. Hope you're happy about that.")
      
      let pollEmbed = new Discord.MessageEmbed()
        .setTitle("Question")
        .setDescription(args.join(' '))
        .setFooter(`Poll created by: ${message.author.tag}`)
        .setColor("RANDOM");

      let msg = await pollChannel.send(pollEmbed);
      
      await msg.react("✅");
      await msg.react(":x:");
    } 
}