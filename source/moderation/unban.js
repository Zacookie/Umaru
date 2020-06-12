const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "unban",
        alias: [""]
    },
    run: async (bot, message, args) => {
        // Permission Check
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't unhammer a hammered pleb!");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Check my perms, kid");

        // User Check
        if (!args[0]) return message.channel.send("Oi, gimme ID or name of a kid you want unbanned. FAST!")
        let bannedMemberInfo = await message.guild.fetchBans()
        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]);
        if (!bannedMember) return message.channel.send("Give me a valid thing of a user... Yea **thing**")

        // Reasoning
        let reason = args.slice(1).join(" ")
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Unhammered kiddo => ${bannedMember.user.tag}.\n*${reason || "No lame reason given"}*`)
                message.channel.send(sembed)
            }

        // Channel Check
        const channel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'modlog');
        if (!channel) return;

        // Message Sent in #modlog
        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
            .setColor("RANDOM")
            .setThumbnail(bannedMember.user.displayAvatarURL({ dynamic: true }))
            .setDescription("Unban")
            .addField("**Kid**", bannedMember.user.username)
            .addField("**Responsible Pleb**", message.author.username)
            .addField("**Reason**", `${reason || "Person gave no reason. *Lazy*"}`)
            .addField("**Hammering Date**", message.createdAt.toLocaleString())
            .setTimestamp()
            .setFooter(message.guild.name, message.client.user.displayAvatarURL());
        
        channel.send(embed);
    }
}