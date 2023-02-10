require("dotenv").config();
// Prepare to Connect
const {
  Client,
  GatewayIntentBits,
  Collection,
  EmbedBuilder,
} = require("discord.js");
const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.commands = new Collection();
client.events = new Collection();
client.on("ready", () => {
  console.log(`Logined as ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: `With ${client.guilds.cache.size} guild(s)` }],
    status: "ONLINE",
  });
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DataBaseURL, {}).then(() => {
    console.log("Connected to the Database");
  });
});

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled promise rejection:", reason, p);
  const Embed = new EmbedBuilder()
    .setColor("Random")
    .setTimestamp()
    .setFooter({ text: "⚠️Anti Crash system by ChatBat" })
    .setTitle("Error Encountered");
  const Channel = client.channels.cache.get("1070390998955466874");
  if (!Channel) return;
  Channel.send({
    embeds: [
      Embed.setDescription(
        "**Unhandled Rejection/Catch:\n\n** ```" + reason + "```"
      ),
    ],
  });
});

client.login(process.env.token).then(() => {
  loadEvents(client);
  loadCommands(client);
});
