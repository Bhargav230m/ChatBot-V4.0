const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("version")
    .setDescription("Shows the version of the bot or chatbot")
    .addStringOption((options) =>
      options
        .setName("plugin")
        .setDescription("Select a option")
        .addChoices(
          {
            name: "Bot",
            value: "Bot",
          },
          {
            name: "Chatbot",
            value: "Chatbot",
          }
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    const { guild, options } = interaction;
    const plugin = options.getString("plugin");
    switch (plugin) {
      case "Bot":
        const Bot = new EmbedBuilder()
          .setTitle("Bot")
          .setDescription("**Current bot version:**\n`V1.0`")
          .setColor("Random");
        interaction.reply({ embeds: [Bot], ephemeral: true });
        break;
      case "Chatbot":
        const Chatbot = new EmbedBuilder()
          .setTitle("ChatBot")
          .setDescription(
            "**Current chatbot version:**\n`V4.0` *- SourceCode(Not Available)*"
          )
          .addFields(
            {
              name: "ChatBot V1.0",
              value: "[SourceCode](https://github.com/Bhargav230m/Chatbot.git)",
            },
            {
              name: "ChatBot V2.0",
              value:
                "[SourceCode](https://github.com/Bhargav230m/Chatbot-V2.0-GITHUB.git)",
            },
            {
              name: "ChatBot V3.0",
              value:
                "[SourceCode](https://github.com/Bhargav230m/ChatBot-V3.0)",
            }
          )
          .setColor("Random");
          interaction.reply({ embeds: [Chatbot], ephemeral: true });
        break;
    }
  },
};
