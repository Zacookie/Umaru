const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch"); // Install package [npm i node-fetch]

module.exports = {
    config: {
        name: "meme",
        aliases: [""]
    },
    run: async (bot, message) => {
        const msg = await message.channel.send("Searching memes for ya dank memer.")

        fetch('https://apis.duncte123.me/meme')
        .then(res => res.json()).then(body => {
            if(!body || !body.data.image) return message.channel.send("Damn, I went down... Try again")

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("Memes")
            .setImage(body.data.image);

        if(body.data.title) {
            embed.setTitle(body.data.title).setURL(body.data.url)
        }
        message.channel.send(embed);
            msg.delete();
        });
    } 
}