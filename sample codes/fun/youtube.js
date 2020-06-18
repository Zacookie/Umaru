const { MessageEmbed } = require("discord.js");
const search = require("youtube-search"); // Install pakcage [npm i youtube-search]

module.exports = {
    config: {
        name: "yt",
        alias: [""]
    },
    run: async (bot, message, args) => {
        if(!args[0]) return message.channel.send("Bruh can't search for air")

        search(args.join(" "), { maxResults: 3, key: "YouTube Key Here" }, (err, results) => {
            if(!results) return message.channel.send(`${args.join(" ")} can't find that b on yT.`)
            if(err) return message.channel.send("meeeW! Error occured.")

        let embed = new MessageEmbed()
            .setAuthor(results[0].channelTitle, results[0].thumbnails.high.url)
            .setColor("RANDOM")
            .setThumbnail(results[0].thumbnails.high.url)
            .setDescription(`**${results[0].channelTitle}** Channel Information
            **Lewnk**: [Clewk](${results[0].link})
            **Jewnd**: \`${new Date(results[0].publishedAt).toLocaleString('en-GB', { dateStyle: 'full'})}\`
            **Chewnel ID**: \`${results[0].channelId}\`
            **Chewnel Dex**: \`\`\`ini\n[ ${results[0].description || 'Got no shit to say'} ]\`\`\``)
            .setFooter(`yT Sewrch`, results[0].thumbnails.high.url)

        return message.channel.send(embed);
        })
    } 
}