const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "kick",
        alias: [""]
    },
    run: async (bot, message, args) => {
        // Check author and bot's permissions.
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bruh really? You're trying too kick someone without the `Kick Members` permission.");
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Dummy, don't tell me to do something that I can't!");

        // Check users
        if (!args[0]) return message.channel.send("Bruh, you can't kick air! Mention someone!");
        var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!kickMember) return message.channel.send("Kid, that ain't a valid user.");
        if (kickMember.id === message.member.id) return message.channel.send("Haha! Why you trynna get rid of yourself?");
        if (!kickMember.kickable) return message.channel.send("Can't kick that hooligan!");
        if (kickMember.user.bot) return message.channel.send("Can't kick my fellow m8");

        // Reasonings
        var reason = args.slice(1).join(" ");
        try {
            kickMember.send(`Sup kiddo, ${message.author.username} kicked you out from  **${message.guild.name}**\nReason: *${reason || "That pleb didn't specify a reason. Get him back!"}*`).then(() =>
                kickMember.kick()).catch(error => message.channel.send())
            } catch {
                kickMember.kick()
            }
        if (reason) {
            var sembed2 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**${kickMember.user.username}** got booted!.\n*${reason || "The pleb mod didn't give a reason."}*`);
        message.channel.send(sembed2);
        }
        // Channel check!
        const channel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'modlog');
        if(!channel) return;

        // Message sent after the kick
        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
            .setColor("RANDOM")
            .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
            .setDescription("Kick")
            .addField("**Kid**", kickMember.user.username)
            .addField("**Responsible Pleb**", message.author.username)
            .addField("**Reason**", `${reason || "He gave no reason. *Lazy*"}`)
            .addField("**Judgement Date**", message.createdAt.toLocaleString())
            .setTimestamp()
            .setFooter(message.guild.name, message.client.user.displayAvatarURL())
        
        channel.send(embed)

    }
}