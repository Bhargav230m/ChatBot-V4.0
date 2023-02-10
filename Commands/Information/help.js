const {
  EmbedBuilder,
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const ms = require("ms");
module.exports = {
  Cooldown: true,
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Sends help menu"),

  async execute(interaction, client) {
    const { user } = interaction;
    const embed = new EmbedBuilder()
      .setTitle(`**__Help Menu for ${client.user.tag}__**`)
      .setDescription(
        `*I am advanced chatbot system you can start chatting with me by running the command \`/startChat\` wana delete your chat and save it as transcript and send you run \`/stopChat\` lost the track of your last chat?, use \`/currentChat\`*\n\n**__How to set me up:question:__:**\n*You can setup me using \`/enable-chatbot\`, later if you change your mind you can use \`/disable-chatbot\` to disable my core features*\n\n**How to use Help menu**\n\`Click on the drop-down menu and select the category you want\`\n**__About the Bot__**:\n**A bot proudly made by Technologypower#3174, This bot is completely based on Chatbot and has alot of features regarding it, You can also [invite](https://discord.com/api/oauth2/authorize?client_id=1068573561108832296&permissions=1497064668224&scope=bot%20applications.commands) this bot**`
      )
      .addFields({
        name: "**Total Commands**",
        value: `${client.commands.size}`,
      })
      .setThumbnail(interaction.guild.iconURL())
      .setFooter({ text: "Chatbot V4.0" })
      .setColor("Random");
    let rowmenu = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("menu2")
        .setPlaceholder("Help Menu")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
          {
            label: "⚒️ Chatting Utility",
            value: "option",
            description: "Commands that help you in chat",
          },
          {
            label: "🇮 Information",
            value: "option1",
            description: "Information commands!",
          },
          {
            label: "⚙️ Config",
            value: "option2",
            description:
              "Configuration commands, Configure chatbot system or update some settings regarding it!",
          },
          {
            label: "🏘️ Home",
            value: "option3",
            description: "Sends you to Home menu",
          },
        ])
    );
    let buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setEmoji("👾")
        .setURL(
          "https://discord.com/api/oauth2/authorize?client_id=1068573561108832296&permissions=1497064668224&scope=bot%20applications.commands"
        )
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder()
        .setEmoji("😊")
        .setURL("https://discord.gg/mjY3hSYn4P")
        .setLabel("Support Server")
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder()
        .setEmoji("⚙️")
        .setURL("https://chatbat.tk")
        .setLabel("Dashboard")
        .setStyle(ButtonStyle.Link)
    );
    const Message = await interaction.reply({
      content: `Use \`/help\` to get your own menu\nYou only have 25 seconds`,
      embeds: [embed],
      components: [rowmenu, buttons],
      fetchReply: true,
    });

    const filter = (button) => button.user.id === interaction.user.id;
    const collector = Message.createMessageComponentCollector({
      time: ms("25s"),
    });

    collector.on("collect", async (b) => {
      if (b.user.id !== user.id) {
        return b.reply({
          content: "This is not your help menu, /help",
          ephemeral: true,
        });
      }
      if (b.values[0] == "option") {
        const embed1 = new EmbedBuilder()

          .setTitle("⚒️ | Chatting Utility")
          .setDescription(
            `\`1.)\` **/current-chat:**\n*Shows your last chat, means if you lost your chat or if you can't find your last chat you can use this command to find it*\n\`2.)\` **/start-chat**\n*Start a new chat with me and select the type, The responses are dependent on the type you select*\n\`3.)\` **/stop-chat**\n*When you are bored chatting with me you can use this command to delete your chat :cry:*\n\`4.)\` **/check-chat**\n*Check a users chat*\n\`5.)\` **/create-chat**\n*This command is only for the user who have the permission \`ManageThreads\`, It creates the chat for the user specified while using the command*\n\`6.)\` **/delete-chat**\n*Same as \`/create-chat\` but instead it deletes the chat for the user specified*`
          )
          .setThumbnail(interaction.guild.iconURL())
          .setFooter({ text: "Chatbot V4.0" })
          .setColor("Random");
        await b.update({
          embeds: [embed1],
          components: [rowmenu, buttons],
        });
      }
      if (b.values[0] == "option1") {
        const embed2 = new EmbedBuilder()

          .setTitle("🇮 | Information")
          .setDescription(
            `\`1.)\` **/help:**\n*Sends the help menu in the channel*\n\`2.)\` **/invite**\n*Sends a embed with the invite button of this bot*`
          )
          .setThumbnail(interaction.guild.iconURL())
          .setFooter({ text: "Chatbot V4.0" })
          .setColor("Random");
        await b.update({
          embeds: [embed2],
          components: [rowmenu, buttons],
        });
      }
      if (b.values[0] == "option2") {
        const embed2 = new EmbedBuilder()

          .setTitle("⚙️ | Config")
          .setDescription(
            `\`1.)\` **/enable-chatbot:**\n*Enable **ChatBot System** in your server*\n\`2.)\` **/disable-chatbot**\n*Disable **Chatbot System** in your server*`
          )
          .setThumbnail(interaction.guild.iconURL())
          .setFooter({ text: "Chatbot V4.0" })
          .setColor("Random");
        await b.update({
          embeds: [embed2],
          components: [rowmenu, buttons],
        });
      }
      if (b.values[0] == "option3") {
        const embed3 = new EmbedBuilder()
          .setTitle(`**__Help Menu for ${client.user.tag}__**`)
          .setDescription(
            `*I am advanced chatbot system you can start chatting with me by running the command \`/startChat\` wana delete your chat and save it as transcript and send you run \`/stopChat\` lost the track of your last chat?, use \`/currentChat\`*\n\n**__How to set me up:question:__:**\n*You can setup me using \`/enable-chatbot\`, later if you change your mind you can use \`/disable-chatbot\` to disable my core features*\n\n**How to use Help menu**\n\`Click on the drop-down menu and select the category you want\`\n**__About the Bot__**:\n**A bot proudly made by Technologypower#3174, This bot is completely based on Chatbot and has alot of features regarding it, You can also [invite](https://discord.com/api/oauth2/authorize?client_id=1068573561108832296&permissions=1497064668224&scope=bot%20applications.commands) this bot**`
          )
          .setThumbnail(interaction.guild.iconURL())
          .setFooter({ text: "Chatbot V4.0" })
          .setColor("Random");

        await b.update({
          embeds: [embed3],
          components: [rowmenu, buttons],
        });
      }
    });
    collector.on("end", async (collected) => {
      let rowmenu1 = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("menu2")
          .setPlaceholder("Help Menu")
          .setMinValues(1)
          .setMaxValues(1)
          .setDisabled(true)
          .addOptions([
            {
              label: "⚒️ Chatting Utility",
              value: "option1",
              description: "Commands that help you while you chat",
            },
          ])
      );
      if (collected.size == 0 || collected.size !== 0) {
        interaction.editReply({
          content: "You ran out of time!",
          components: [rowmenu1, buttons],
        });
      }
    });
  },
};
