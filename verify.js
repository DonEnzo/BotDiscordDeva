const Discord = require('discord.js');

module.exports = {
    


    execute(client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle(" Verificacion")
        .setDescription("Presiona Click al boton de abajo para verificarte.")
        .setColor("GREEN")

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.messageButton()
            .setStyle("SUCCESS")
        )
       }
    }

