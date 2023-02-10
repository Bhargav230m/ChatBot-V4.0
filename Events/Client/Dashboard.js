const DBD = require("discord-dashboard");
const config = require("./config.json");
const SoftUI = require("dbd-soft-ui");
const license = process.env.DBD;
module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("Powering Dashboard - DBD-DASHBOARD");
    await DBD.useLicense(license);
    DBD.Dashboard = DBD.UpdatedClass();
    (async () => {
      const Dashboard = new DBD.Dashboard({
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useTheme404: true,
        bot: client,
        useThemeMaintenance: true,
        underMaintenance: {
          title: "Under Maintenance",
          contentTitle: "Bot is under Maintenance",
          texts: [
            "We are bringing something better and crazy",
            "Therefore, we are introducing technical updates so that we can allow you to enjoy the quality of our services.",
            "Come back to us later or join our Discord Support Server",
          ],

          // "Must contain 3 cards. All fields are optional - If card not wanted on maintenance page, infoCards can be deleted",
          infoCards: [
            {
              title: "Chatbot",
              subtitle: "Chatbot V4.0 provided the best Chatting utitlity",
              description: "Our bot provides the best chatbot system world wide but it has some of its limitations and functionality which needs to be updated and improved regularly",
            },
            {
              title: "MonDisTech",
              subtitle: "The Best Public",
              description: "MonDisTech is the best multi purpose bot developed by Technologypower#3174, do invite it has Chatbot system almost like chatbat",
            },
            {
              title: "Support",
              subtitle: "We provide support 12/7",
              description: "We have been providing support 12/7 you just need to in our support server",
            },
          ],
        },
        theme: SoftUI({
          locales: {
            enUS: {
              name: "English",
              index: {
                feeds: [
                  "Current Users",
                  "CPU",
                  "System Platform",
                  "Server Count",
                ],
                card: {
                  category: "ChatBot",
                  title: "ChaBat - The new Era of chatbot",
                  description:
                    "ChatBat is based on chatbot system v4.0 made by Technologypower#3174, Hi there, I am a cool chatbot made by Technologypower#3174, You can start chatting with me by running the command /start-chat to create your own chat and select the type of chatbot:. /help for hel",
                  footer: "Invite our Bot",
                },
                feedsTitle: "Feeds",
                graphTitle: "Graphs",
              },
              manage: {
                settings: {
                  memberCount: "Members",
                  info: {
                    info: "Info",
                    server: "Server Information",
                  },
                },
              },
              privacyPolicy: {
                title: "Privacy Policy",
                description: "Privacy Policy and Terms of Service",
                pp: "Complete Privacy Policy",
              },
              partials: {
                sidebar: {
                  dash: "Dashboard",
                  manage: "Manage Guilds",
                  commands: "Commands",
                  pp: "Privacy Policy",
                  admin: "Admin",
                  account: "Account Pages",
                  login: "Sign In",
                  logout: "Sign Out",
                },
                navbar: {
                  home: "Home",
                  pages: {
                    manage: "Manage Guilds",
                    settings: "Manage Guilds",
                    commands: "Commands",
                    pp: "Privacy Policy",
                    admin: "Admin Panel",
                    error: "Error",
                    credits: "Credits",
                    debug: "Debug",
                    leaderboard: "Leaderboard",
                    profile: "Profile",
                    maintenance: "Under Maintenance",
                  },
                },
                title: {
                  pages: {
                    manage: "Manage Guilds",
                    settings: "Manage Guilds",
                    commands: "Commands",
                    pp: "Privacy Policy",
                    admin: "Admin Panel",
                    error: "Error",
                    credits: "Credits",
                    debug: "Debug",
                    leaderboard: "Leaderboard",
                    profile: "Profile",
                    maintenance: "Under Maintenance",
                  },
                },
                preloader: {
                  text: "Page is loading...",
                },
                premium: {
                  title: "Want more from ChatBat?",
                  description: "Check out premium features below!",
                  buttonText: "Join our Patreon https://www.patreon.com/user?u=86322004",
                },
                settings: {
                  title: "Site Configuration",
                  description: "Configurable Viewing Options",
                  theme: {
                    title: "Site Theme",
                    description: "Make the site more appealing for your eyes!",
                  },
                  language: {
                    title: "Site Language",
                    description: "Select your preffered language!",
                  },
                },
              },
            },
          },

          customThemeOptions: {
            index: async ({ req, res, config }) => {
              return {
                values: [],
                graph: {}, // More info at https://dbd-docs.assistantscenter.com/soft-ui/docs/customThemeOptions/
                cards: [],
              };
            },
          },
          websiteName: "ChatBat",
          colorScheme: "pink",
          supporteMail: "Technologypower24@gmail.com",
          icons: {
            favicon:
              "https://cdn.dribbble.com/users/772985/screenshots/15814528/media/a77792609ec2eb28391077150a08733d.png?compress=1&resize=400x300",
            noGuildIcon:
              "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
            sidebar: {
              darkUrl:
                "https://cdn.dribbble.com/users/772985/screenshots/15814528/media/a77792609ec2eb28391077150a08733d.png?compress=1&resize=400x300",
              lightUrl:
                "https://cdn.dribbble.com/users/772985/screenshots/15814528/media/a77792609ec2eb28391077150a08733d.png?compress=1&resize=400x300",
              hideName: true,
              borderRadius: false,
              alignCenter: true,
            },
          },
          preloader: {
            image: "/img/soft-ui.webp",
            spinner: false,
            text: "Page is loading",
          },
          index: {
            graph: {
              enabled: true,
              lineGraph: false,
              tag: "Memory (MB)",
              max: 100,
            },
            card: {
              category: "Soft UI",
              title: "ChaBat - The new Era of chatbot",
              description:
                "ChatBat is based on chatbot system v4.0 made by Technologypower#3174, Hi there, I am a cool chatbot made by Technologypower#3174, You can start chatting with me by running the command /start-chat to create your own chat and select the type of chatbot:. /help for help<b><i>[Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1110517509238&scope=bot%20applications.commands)L</i></b>",
              image: "/img/soft-ui.webp",
              link: {
                enabled: true,
                url: `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1110517509238&scope=bot%20applications.commands`,
              },
            },
          },
          sweetalert: {
            errors: {},
            success: {
              login: "Successfully logged in.",
            },
          },
          preloader: {
            image: "/img/soft-ui.webp",
            spinner: false,
            text: "Page is loading",
          },
          admin: {
            pterodactyl: {
              enabled: false,
              apiKey: "apiKey",
              panelLink: "https://panel.website.com",
              serverUUIDs: [],
            },
          },
          commands: [],
        }),

        settings: [],
      });
      Dashboard.init();
    })();
  },
};
