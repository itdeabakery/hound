const TelegramBot = require("node-telegram-bot-api");

// ganti dengan token dari @BotFather
const TOKEN = "7527993218:AAExsTciBgtr0NysUgtbRxhIb4uqRwL4v8o";  

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Buka Mini App:", {
    reply_markup: {
      inline_keyboard: [[{
        text: "🚀 Buka Mini App",
        web_app: { url: "https://itdeabakery.github.io/hound/" }
      }]]
    }
  });
});

// kalau Mini App kirim data balik
bot.on("web_app_data", (msg) => {
  const chatId = msg.chat.id;
  const data = msg.web_app_data.data; // JSON string
  bot.sendMessage(chatId, `📦 Data dari Mini App:\n${data}`);
});

console.log("✅ Bot jalan... /start di Telegram untuk coba");
