module.exports = {
    config: {
        name: "date",
        aliases: [""]
    },
    run: async (bot, message) => {
    let date = new Date();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let days = day[date.getDay()]
    
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let months = month[date.getMonth()]
        message.channel.send(`**Date**\n${days}, ${months} ${date.getDate()}, ${date.getFullYear()}`);
    } 
}