const {
  Client,
  ChatInputCommandInteraction,
} = require("discord.js");
module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);

    if (!command)
      return interaction.reply({
        content: "This Command is OutDated",
        ephemeral: true,
      });
    command.execute(interaction, client);
  },
};
