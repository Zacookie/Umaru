const { MessageEmbed } = require("discord.js");
const weather = require("weather-js"); // Install package [npm i weather.js]

module.exports = {
    config: {
        name: "weather",
        aliases: [""]
    },
    run: async (bot, message, args) => {
            if(!args.length) return message.channel.send("Gimme a location.")
            
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        try {
        
            let embed = new MessageEmbed()
                .setDescription(`Weather - ${result[0].location.name}`)
                .setColor("RANDOM")
                .addField("**Temperature**:", `${result[0].current.temperature} Celcius`, true)
                .addField("**Sky Condition**:", result[0].current.skytext, true)
                .addField("**Humidity**:", result[0].current.humidity, true)
                .addField("**Wind Speed**:", result[0].current.windspeed, true)//What about image
                .addField("**Observation Time**:", result[0].current.observationtime, true)
                .addField("**Wind Display**:", result[0].current.winddisplay, true)
                .setThumbnail(result[0].current.imageUrl);

            message.channel.send(embed);
        } catch(err) {
            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Can't get any information on that location. Why? Ask yourself.");

        return message.channel.send(embed);
            }
        })
    } 
}