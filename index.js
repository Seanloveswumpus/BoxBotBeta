const express = require("express");
const app = express();
const port = 3000;
const talkedRecently = new Set();

app.get("/", (req, res) => res.send("Hello You must be The owner of this bot?"));

app.listen(port, () => console.log(`http://localhost:${port}`));

const Discord = require("discord.js");
const Embed = new Discord.MessageEmbed();
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const TicTacToe = require("discord-tictactoe");
const ms = require("ms");
const twitch = require("twitch-api-v5");
const emotes = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "0️⃣"];
const fruits = ["⛔", "😀"];
twitch.clientID = "v4p7octo4gsw6cygjiyv3jbihvmsbe";
const DOG_API_URL = "https://api.thedogapi.com/";
const DOG_API_KEY = "106ba47e-d909-4b63-b2ce-10da069036d8";

const prefix = "mr";

client.once(
  "ready",
  () => {
    console.log("working");
    client.user.setActivity(
      "Having Fun :"
    );
  }

  //client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  //console.log(`Joined new server: ${guild.id}`);
  //var channel = client.channels.cache.get('761348067810213908')
  //channel.send(`I joined a new server 🥳:\n **IP:** ${guild.id} \n **NAME:** ${guild.name}`);
);

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args = message.content.substring(prefix.length).split(/ +/);

  switch (args[0]) {












    //TODO: Add the dog api and the cat API
    case "help":
      const help = new Discord.MessageEmbed()
        .setTitle(
          `Hey, ${message.author.username} We are here to help. #Roadto100servers`
        )
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(
          "Hi, Thanks for being interested in Mr.Wiggles. **ALL** commands start with: mr\n\n\n✅  Useful\n`avatar`\n\n⚙️ Server admins\n `ban` `kick`\n\n🚿 Form The creators\n `contribute`.\n\n😀 Others\n `servercount`\n\n⚙️Random Responses\n`topic`\n\n📹Twitch\n`streams` `chstreams`\n\n **Quick links**:\n[Support server](https://discord.gg/hwMPeU2) `|` [Invite Me](https://discord.com/oauth2/authorize?client_id=758424457781313540&permissions=2080898263&redirect_uri=https%3A%2F%2Fmrwiggles.cf%2Flanding%2F&response_type=code&scope=identify%20bot) `|` [Support Docs](https://docs.mrwiggles.cf/) `|` [repl.it (Bot hosting provider)](https://repl.it/) `|` [Github](https://github.com/Wumpus-Sudios/mrwiggles) "
        )
        .setFooter(
          `Requested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setTimestamp();
      if (!args[1]) {
        message.channel.send(help).then((sentMessage) => {
          message.channel.send(
            "#Roadto100servers add me at https://l.wumpusit.tk/Wumpusbot"
          )

          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command Help!`);
        });
        break;
      }

    case "avatar":
      const av = new Discord.MessageEmbed()
        .setTitle("Your avatar:")
        .setImage(message.author.displayAvatarURL())
        .setFooter(
          `Requested by: ${message.author.username} • If you can\'t see it, It does not want to load or we can\'t feach it now!'`,
          message.author.displayAvatarURL()
        )
        .setTimestamp()
        .setColor("7982DA");
      if (!args[1]) {
        message.channel.send(av).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command avatar!`);
        });
        break;
      }

       let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var member_xp, member_level;


s4d.client.login('Your bot token').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if (!((s4dmessage.member).user.bot)) {
    member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.author.id))));
    member_level = s4d.database.get(String(('level-' + String(s4dmessage.author.id))));
    if (!member_xp) {
      member_xp = 0;
    } else if (!member_level) {
      member_level = 0;
    }
    s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), (member_xp + 1));
    member_xp = member_xp + 1;
    if (member_xp > 100) {
      s4d.database.set(String(('level-' + String(s4dmessage.author.id))), (member_level + 1));
      member_level = member_level + 1;
      s4dmessage.channel.send(String((['Congratulations, ',s4dmessage.member,'you jumped to level ',member_level,'!!'].join(''))));
    }
    if ((s4dmessage.content) == '!level') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you are currently level: ',member_level].join(''))));
    } else if ((s4dmessage.content) == '!xp') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you need ',100 - member_xp,' to jump to level ',member_level + 1].join(''))));
    }
  }

});

                s4d;
            

    

    case "info":
      const info = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setFooter(
          `Reqested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(
          "Mr.Wiggles Made by:\n\nIdeas:\n`appmonster` `Pyczowskyy` `Trent`\nDevs:\n`Seenloveswumpus` `RandomKittens`"
        );
      if (!args[1]) {
        message.channel.send(info).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command info!`);
        });
        break;
      }

    case "servercount":
      const servers = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setFooter(
          `Requested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(`I am in ${client.guilds.cache.size} Servers 🎉\n\n\n\n\nI\'m Running a campain (#Roadto100servers) add me at https://l.wumpusit.tk/Wumpusbot\n\n\n`);
      if (!args[1]) {
        message.channel.send(servers);
        break;
      }


    case "topic":
      const Responses = [
        "Have you ever noticed something out of the ordinary what was it?",
        "What is your skill?",
        "After you find a rude person will you stay away from him or try to be his/her friend?",
        "Are you a spender or a saver?",
        "What inspires you as a person?",
        "Do you believe in astrology?",
        "Do you believe in love at first sight?",
        ,
        "Are you a planner or a spontaneous person?",
        "Do you believe in life after death?",
        "Tell us about a signature dish you cook?",
        "What is the craziest thing you have done?",
        "Are exams a good way to judge us?",
        "Is Facebook good or bad?",
        "Do you watch horror movies?",
        "Are you a dreamer or a doer?",
        "How do you make new friends?",
        "Is luck a big part of life?",
        "Hey, This is the end run the command again or add a topic at https://go.wumpusstudios.gq/wumpusbot/addtopic",
      ];

      const Response = Math.floor(Math.random() * Responses.length);

      message.channel
        .send(Responses[Response])

        .then((updated) => console.log(`Channel's new topic is`));
      message.channel.setTopic(Responses[Response]).catch(console.error);


    

       case "say":
            const say = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744511779614490664/tenor.gif')
            .setTitle('Looks like you need some help! We are here to help')
            .setDescription('This is our poll you need to do q!poll (poll) to get the poll up\n**Need more help join our support server here: https://discord.gg/qWpstWx** \n ')
            .setFooter('Sent By our dev team @ SeanLovesBlobs Develpomet')
            


            if(!args[1]){
                message.channel.send(say);
                break;
            }
            
            let msgArgs = args.slice(1).join(" ")

            message.channel.send(msgArgs).then(sentMessage => {
                message.react("✅");
                
            });


        break;
        


    case "report":
      if (talkedRecently.has(message.author.id)) {
        const Embed = new Discord.MessageEmbed()
          .setColor("fcba03")
          .setTitle("<:No:765731243945099274> Error.")
          .setDescription(
            `You have to wait before you can report again <@` +
            message.author +
            ">"
          );
        message.channel.send(Embed);
      } else {
        if (!args[1]) {
          const Embed = new Discord.MessageEmbed()
            .setColor("fcba03")
            .setTitle("<:No:765731243945099274> Error.")
            .setDescription("You need to type: ```mrreport [BUG REPORT]```");
          message.channel.send(Embed);
        } else {
          let messageArgs = args.slice(1).join(" ");

          message.channel
            .send(
              "**Ok I have sent the reprt to the staff team**\n  YOU HAVE SUBMITTED A BUG REPORT!\nRemember that you can only send one Bug report in 24 hours."
            )
            .then((sentMessage) => {
              const channel = client.channels.cache.get("767485680213295114");
              channel.send(
                `🚨🚨**ALERT**🚨🚨\n**BUG REPORT:** ${messageArgs}\nThis bug report was submitted by <@${message.author.id}>\n<@&762644839014596608>`
              );
            });
          // the user can type the command ... your command code goes here :)
          talkedRecently.add(message.author.id);
          // Adds the user to the set so that they can't talk for a minute
        }
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 43200000);
      }
      break;
    case "streams":
      const query = message.content.substring(9);
      if (query.length == 0)
        return message.channel.send("You must type search keywords");
      twitch.search.streams({ query: query, limit: 10 }, async function(
        err,
        x
      ) {
        const results = x.streams;
        if (results.length == 0) return message.channel.send("No results");
        let I = [];
        for (let x = 0; x < 10; x++) {
          if (results[x] != undefined) I.push(results[x]);
        }
        let display = [];
        for (let x = 0; x < I.length; x++) {
          display.push(`${emotes[x]} ${I[x].channel.display_name}`);
        }
        const msg = await message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(display)
            .setTitle("I found these channels streaming")
        );

        for (let x = 0; x < I.length; x++) msg.react(emotes[x]);

        const filter = (reaction, user) => {
          return emotes.includes(reaction.emoji.name) && user.bot != true;
        };

        const collector = msg.createReactionCollector(filter, { time: 360000 });

        collector.on("collect", (reaction, user) => {
          const choice = I[emotes.indexOf(reaction.emoji.name)];
          if (choice == undefined) return;
          const S = new Discord.MessageEmbed()
            .setTitle(choice.channel.display_name)
            .addFields(
              { name: "Average fps", value: choice.average_fps },
              {
                name: "Broadcast language",
                value: choice.channel.broadcaster_language,
              },
              { name: "Link", value: choice.channel.url }
            )
            .setImage(choice.preview.large);

          message.channel.send(S);
        });
      });
      break;

    case "streams":
      const Query = message.content.substring(12);
      if (Query.length == 0)
        return message.channel.send("you must put channel name");
      twitch.search.channels({ query: Query, limit: 10 }, async function(
        err,
        A
      ) {
        if (err) throw err;
        if (A.channels.length == 0) return message.channel.send("no results");
        let i = [];
        for (let x = 0; x < 10; x++) {
          if (A.channels[x] != undefined) i.push(A.channels[x]);
        }
        const display = i.map(function(x) {
          return `${emotes[i.indexOf(x)]} ${x.display_name}`;
        });
        const Msg = await message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(display)
            .setTitle("I found these channels")
        );
        for (let x = 0; x < i.length; x++) Msg.react(emotes[x]);

        const filter = (reaction, user) => {
          return emotes.includes(reaction.emoji.name) && user.bot != true;
        };

        const collector = Msg.createReactionCollector(filter, { time: 360000 });

        collector.on("collect", (reaction, user) => {
          const choice = i[emotes.indexOf(reaction.emoji.name)];
          if (choice == undefined) return;
          twitch.streams.channel({ channelID: choice._id }, async function(
            err,
            X
          ) {
            if (X.stream == null) {
              const M = await message.channel.send(
                new Discord.MessageEmbed().setDescription(
                  "I didn't find any streams for this channel react to get videos instead"
                )
              );
              M.react("▶️");

              const filter = (reaction, user) => {
                return reaction.emoji.name === "▶️" && user.bot != true;
              };

              const collector = M.createReactionCollector(filter, { max: 1 });

              collector.on("collect", async (reaction, user) => {
                twitch.channels.videos(
                  { channelID: choice._id },
                  async function(err, V) {
                    const videos = V.videos;
                    if (videos == undefined || videos.length == 0)
                      return message.channel.send(
                        "No videos found for this channel"
                      );
                    let I = [];
                    for (let index = 0; index < 10; index++) {
                      if (videos[index] != undefined) I.push(videos[index]);
                    }
                    const Display = I.map(function(vid) {
                      return `${emotes[I.indexOf(vid)]} ${vid.title}`;
                    });
                    const MSG = await message.channel.send(
                      new Discord.MessageEmbed().setDescription(Display)
                    );
                    for (let index = 0; index < I.length; index++) {
                      MSG.react(emotes[index]);
                    }

                    const filter = (reaction, user) => {
                      return (
                        emotes.includes(reaction.emoji.name) && user.bot != true
                      );
                    };

                    const collector = MSG.createReactionCollector(filter, {
                      time: 360000,
                    });

                    collector.on("collect", (reaction, user) => {
                      const choice = I[emotes.indexOf(reaction.emoji.name)];
                      if (choice == undefined) return;
                      const Note = new Discord.MessageEmbed()
                        .setTitle(choice.title)
                        .addFields(
                          { name: "Game", value: choice.game },
                          { name: "Language", value: choice.language },
                          { name: "Publish date", value: choice.published_at },
                          { name: "Link", value: choice.url }
                        )
                        .setImage(choice.preview.large);

                      message.channel.send(Note);
                    });
                  }
                );
              });
            } else {
              const note = new Discord.MessageEmbed()
                .setTitle(`${X.stream.channel.display_name}`)
                .addFields(
                  { name: "Average fps", value: X.stream.average_fps },
                  {
                    name: "Broadcast language",
                    value: X.stream.channel.broadcaster_language,
                  },
                  { name: "Stream link", value: X.stream.channel.url }
                )
                .setImage(choice.video_banner);

              message.channel.send(note);
            }
          });
        });
      });
  }
 



  //Emebds
  const eerrnopermmanmsg = new Discord.MessageEmbed();
});

client.login(process.env.DISCORD_TOKEN);
