const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login(process.env.token);

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

client.on("messageCreate", (message) => {

    if(message.content == ("/sera")){
        message.channel.send("gay")
    }

    if(message.content == ("/PLaylist")){
        var Canale = message.member.voice,channel;

        if(!Canale){
            message.channel.send("Devi entrare in un canale vocale");
        }
        else{
            Canale.join()
             .then(connection =>{
                 connection.play("https://open.spotify.com/playlist/3PsfXP702sPlkZvoWsYEcd?si=9d5b6841660d41b5");
                })
        }
    }
})
