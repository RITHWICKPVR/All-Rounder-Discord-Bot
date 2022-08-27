const client = require("../index");
const Discord = require('discord.js')

const { Pool } = require('pg');

const { stripIndents } = require("common-tags");

const sqlDB = new Pool({
    user: "admin",
    host: "3.15.185.160",
    database: "tecbot",
    password: "Aravi@$1234",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
sqlDB.connect().then(() => console.log("DB 4 connected!")).catch(err => console.log('DB 4: ', err.message))

const gameRolesID = [
    'valo-user-role-btn',
    'csgo-user-role-btn',
    'pubg-user-role-btn',
    'siege-user-role-btn',
    'codm-user-role-btn',
    'ff-user-role-btn',
    'bgmi-user-role-btn'
]

// let q1 = 'select * from globdata where amount=1;'
// sqlDB.query(q1,(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         global.eventRolesID=res.rows[0].btnids
//     }
// })

const eventRolesID = [
    'rog-academy-s6-role-btn',
    'zotac-sea-role-btn',
    'zotac-sa-role-btn',
    'epwa-poke-role-btn',
    'epwa-ff-role-btn',
    'epwa-valo-role-btn',
    'rog-academy-s5-role-btn',
    'comm-fifa-role-btn',
    'comm-fifa-role-btn-q2',
    'chall-series-btn',
    'chall-series-btn-2',
    'comm-r6-cup-btn',
    'pro-spring-r6-q1-role',
    'pro-spring-r6-q2-role',
    'skyweaver-indigg-week4',
    'comm-valo-cup-btn',
    'tec-valo-tourney',
    'tec-valo-tourney-2',
    'amzn-prime-day'
]

client.on("interactionCreate", async (interaction) => {

    if (interaction.isButton()) {
        let logChannel = client.channels.cache.get('606141551722102807')

        let embed = new Discord.MessageEmbed().setColor('BLURPLE').setDescription(`**\`${interaction.user.tag}\` | \`${interaction.customId}\` | [Message](${interaction.message.url})**`)
            .setFooter({ text: `ID: ${interaction.user.id}` })

        logChannel.send({ embeds: [embed] })

        if (gameRolesID.includes(interaction.customId)) {

            var role;

            if (interaction.customId === 'valo-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.name === 'Valorant')
            if (interaction.customId === 'csgo-user-role-btn')role = await interaction.guild.roles.cache.find(r => r.name === 'CS:GO')
            if (interaction.customId === 'pubg-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.name === 'PUBG')
            if (interaction.customId === 'siege-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.name === 'Rainbow Six Siege')
            if (interaction.customId === 'codm-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.name === 'CoDM')
            if (interaction.customId === 'ff-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '702803176222621706')
            if (interaction.customId === 'bgmi-user-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '923534202668974100')

            let embed = new Discord.MessageEmbed()
                .setDescription(`✅ | Welcome to the **\`TEC ${role.name}\`** Community!`)
                .setColor('GREEN')

            let embed2 = new Discord.MessageEmbed().setColor('RED')
                .setDescription(`😿 | You have now left the **\`${role.name}\`** Community. We hope to see you return!`)

            if (interaction.member._roles.includes(role.id)) {
                interaction.member.roles.remove(role).then(() => {
                    interaction.reply({ embeds: [embed2], ephemeral: true })
                })

            } else {
                interaction.member.roles.add(role).then(() => {
                    interaction.reply({ embeds: [embed], ephemeral: true })
                })
            }

        } else if (eventRolesID.includes(interaction.customId)) {

            var role;

            if (interaction.customId === 'rog-academy-s6-role-btn') role = await interaction.guild.roles.cache.get('992655074788655155')
            if (interaction.customId === 'amzn-prime-day') role = await interaction.guild.roles.cache.find(r => r.id === '1000008068282720286')
            if (interaction.customId === 'zotac-sa-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '923554804356223017')
            if (interaction.customId === 'epwa-poke-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '925301679828635668')
            if (interaction.customId === 'epwa-ff-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '925302111661613066')
            if (interaction.customId === 'epwa-valo-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '925360342459113502')
            if (interaction.customId === 'comm-fifa-role-btn') role = await interaction.guild.roles.cache.find(r => r.id === '959775945089232926')
            if (interaction.customId === 'comm-fifa-role-btn-q2') role = await interaction.guild.roles.cache.find(r => r.id === '962369350533267536')

            if (interaction.customId === 'chall-series-btn') role = await interaction.guild.roles.cache.find(r => r.id === '957959278340218910')
            if (interaction.customId === 'chall-series-btn-2') role = await interaction.guild.roles.cache.find(r => r.id === '961610761396969513')

            if (interaction.customId === 'comm-r6-cup-btn') role = await interaction.guild.roles.cache.find(r => r.id === '963108729602048040')
            if (interaction.customId === 'comm-valo-cup-btn') role = await interaction.guild.roles.cache.find(r => r.id === '982591037983838248')
            if (interaction.customId === 'pro-spring-r6-q1-role') role = await interaction.guild.roles.cache.find(r => r.id === '970937046552174624')
            if (interaction.customId === 'pro-spring-r6-q2-role') role = await interaction.guild.roles.cache.find(r => r.id === '973520061975367730')

            if (interaction.customId === 'skyweaver-indigg-week4') role = await interaction.guild.roles.cache.find(r => r.id === '998954173250932796')

            if (interaction.customId === 'tec-valo-tourney') role = await interaction.guild.roles.cache.find(r => r.id === '994258667010531518')
            if (interaction.customId === 'tec-valo-tourney-2') role = await interaction.guild.roles.cache.find(r => r.id === '995663204485185556')

            
            console.log(role.name)

            if (interaction.member._roles.includes(role.id)) {

                interaction.member.roles.remove(role.id).then(() => {
                    let emb = new Discord.MessageEmbed()
                        .setColor('RED')
                        .setDescription(`❌ | You have been removed from the ${role.name} role.`)

                    interaction.reply({ embeds: [emb], ephemeral: true })
                })

            } else {
                let embed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setDescription(`✅ | You have been given the ${role.name} role.`)

                interaction.member.roles.add(role).then(() => {
                    interaction.reply({ embeds: [embed], ephemeral: true })
                })

            }
        }
    }
});
