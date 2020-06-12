const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "ban",
        alias: [""]
    },
    run: async (bot, message, args) => {
        // Check author and bot's permissions.
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Don't try to ban someone without permission. *What if I ban you?*");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Stop telling me to do something that I can't");
        
        // Check Users.
        if (!args[0]) return message.channel.send("Who am I going to ban? Air?");
        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!banMember) return message.channel.send("Oi, that ain't a valid user!");
        if (banMember === message.member) return message.channel.send("Hammering yourself? Not in a million years.");

        // Message Sent to the person who got banned.
        if (!banMember.bannable) return message.channel.send("Can't ban that pleb.");
        try {
        banMember.send(`Oi the kid named **${message.author.username}** banned you from ${message.guild.name}\nReason: *${reason || "That pleb didn't specify a reason. Get him back!"}*`).then(() =>
            banMember.ban()).catch(error => message.channel.send()); // <-- If the user can't be DMed it'll catch the error
        } catch {
            banMember.ban()
        }

        // Reasoning
        var reason = args.slice(1).join(" ");
        if (reason) {
        var sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(message.guild.name, "https://cdn.discordapp.com/attachments/717949819330625581/720058799376826378/tenor.gif")
            .setDescription(`Y'all banned this nerd => ${banMember.user.username}\n*${reason || "The person who banned this kid is too lazy to give a reason."}*`)
        message.channel.send(sembed)
        }

        // Channel Check
        const channel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'modlog');
        if (!channel) return;

        // Embed sent to #modlog
        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
            .setColor("RANDOM")
            .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
            .setDescription("Banned")
            .addField("**Kid**", banMember.user.username)
            .addField("**Responsible Pleb**", message.author.username)
            .addField("**Reason**", `${reason || "Person gave no reason. *Lazy*"}`)
            .addField("**Hammering Date**", message.createdAt.toLocaleString())
            .setTimestamp()
            .setFooter(message.guild.name, message.client.user.displayAvatarURL());
        
        channel.send(embed);
    }
}
