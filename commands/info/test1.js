const { Message, Client, DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const {MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js')

module.exports = {
    name: "test1",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.author.id === '540911685582454804') {


            // let vcs = await client.channels.cache.filter(i=>i.type==='GUILD_VOICE')

            // vcs.forEach(async i=>{
            //     i.setRTCRegion('india')
            //     message.channel.send(`${i} region changed to India!`)
            // })

            

            let embed = new Discord.MessageEmbed()
            .setTitle(`R6 Pro Series Fall`)
            .setImage('https://media.discordapp.net/attachments/947185453289840641/1015273316405235852/1000x1000.png?width=468&height=468')
            .setFooter({text:'Click below to get access!'})
            .setColor('BLUE')

            const row = new MessageActionRow().addComponents(
                new MessageButton()
                .setCustomId('fall-r6')
                .setLabel('Get Role')
                .setStyle('PRIMARY')
            )

            message.channel.send({embeds:[embed],components:[row]})

            // for(let i=1;i<=args[2];i++){
            //     let newChannel1 = await message.guild.channels.create(`︱Vc ${i}`, {
            //         type: "GUILD_VOICE",
            //         parent: args[0],
            //         userLimit: args[1],
            //         permissionOverwrites: [
            //             {
            //                 id: message.guild.roles.everyone,
            //                 deny: ['VIEW_CHANNEL']
            //             }
            //         ]
            //     }).then(async channel =>  {
            //         await channel.setParent(args[0])
            //         message.channel.send(`${channel} created.`)})
            // }

            

        } else message.react('❌')
    },
};