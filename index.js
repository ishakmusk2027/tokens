const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

// تعريف الرموز المميزة للحسابات
const token1 = (process.env.token1);
const token2 = (process.env.token2);

// إنشاء مثيلات لكل بوت
const bot1 = new Eris(token1);
const bot2 = new Eris(token2);

// الوظيفة التي تقوم بتسجيل الدخول لكل بوت وتشغيلهما بشكل متزامن
async function startBots() {
  try {
    // تسجيل الدخول للبوت الأول
    await bot1.connect();
    console.log("Bot 1 is online.");

    // تسجيل الدخول للبوت الثاني
    await bot2.connect();
    console.log("Bot 2 is online.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// تشغيل البوتات
startBots();
