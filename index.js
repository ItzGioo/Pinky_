
const Discord = require("discord.js");
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)
const fs = require('fs');
const { description } = require("./commands/ben venuto");

client.commands = new Discord.collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(comando.data.name, comando);
}

client.on('interactionCreate', (interaction) => {
    console.log(interaction)
})

client.on("ready", () => {
    console.log("Il bot è online")
})

client.on("guildMemberAdd", (member) => {

    var embed = new Discord.MessageEmbed()
        .setTitle("☕Vanilla Caffè☕")
        .setColor("00FF33")
        .setDescription("👋Ciao io sono Pinky, e ti do il benvenuto nel nostro server.")
        .setThumbnail("https://i.pinimg.com/236x/41/1e/b3/411eb3230e58918a53e9d85daa0a4dc1--creeper-minecraft.jpg")
        .addField("📝Accettazione", "Corri a compilare il modulo d'accettazione e inizia subito a divertirti.", false)
        .setAuthor("Pinky", "https://it.moyens.net/wp-content/uploads/2021/11/1636532666_Minecraft-Axolotl-cosa-mangiano-gli-Axolotl-in-Minecraft.jpg", "")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIt8NcPwcthD10IBl8dsBd4dzRFVSdXMHEfQ&usqp=CAU")
        .setFooter("Sei il " + member.guild.memberCount + "° membro.")
        .setTimestamp()

    member.send({ embeds: [embed] });
    })

client.on('messageCreate', async (message) => {

    if(!client.application?.owner) {
        await client.application?.fetch();
    }

    if (message.content.toLowerCase() === '!registra' && message.author.id === client.application?.owner.id) {
        const data = {
            name: 'sera'
        }
        const comando = await client.guilds.ccache.gety(935811526806347776)?.commands.create(data);
        console.log(comando);
    }
})

client.login(process.env.token)