const fs = require("fs");
const path = require("path");

const LANGUAGES = [
  "ar",
  "br",
  "cn",
  "es",
  "fr",
  "id",
  "it",
  "jp",
  "my",
  "th",
  "vn",
  "zh",
];

const TRANSLATIONS = {
  ar: {
    "trading-tools_badge-text": "حلل. خطط. تداول.",
    "trading-tools_trading-tools-title": "أدوات التداول",
    "trading-tools_trading-tools-text":
      "OQtima هو مركز التداول الشامل الخاص بك—نقدم أدوات قوية لتبسيط التحليل ودعم استراتيجية التداول الخاصة بك.",
  },
  br: {
    "trading-tools_badge-text": "Analise. Planeje. Negocie.",
    "trading-tools_trading-tools-title": "Ferramentas de Negociação",
    "trading-tools_trading-tools-text":
      "OQtima é o seu centro de negociação completo—oferecendo ferramentas poderosas para simplificar a análise e apoiar sua estratégia de negociação.",
  },
  cn: {
    "trading-tools_badge-text": "分析。规划。交易。",
    "trading-tools_trading-tools-title": "交易工具",
    "trading-tools_trading-tools-text":
      "OQtima是您的一站式交易中心—提供强大的工具来简化分析并支持您的交易策略。",
  },
  es: {
    "trading-tools_badge-text": "Analiza. Planifica. Opera.",
    "trading-tools_trading-tools-title": "Herramientas de Trading",
    "trading-tools_trading-tools-text":
      "OQtima es tu centro de trading integral—ofreciendo herramientas poderosas para simplificar el análisis y apoyar tu estrategia de trading.",
  },
  fr: {
    "trading-tools_badge-text": "Analysez. Planifiez. Tradez.",
    "trading-tools_trading-tools-title": "Outils de Trading",
    "trading-tools_trading-tools-text":
      "OQtima est votre centre de trading tout-en-un—offrant des outils puissants pour simplifier l'analyse et soutenir votre stratégie de trading.",
  },
  id: {
    "trading-tools_badge-text": "Analisis. Rencanakan. Trading.",
    "trading-tools_trading-tools-title": "Alat Trading",
    "trading-tools_trading-tools-text":
      "OQtima adalah hub trading one-stop Anda—menawarkan alat yang kuat untuk menyederhanakan analisis dan mendukung strategi trading Anda.",
  },
  it: {
    "trading-tools_badge-text": "Analizza. Pianifica. Opera.",
    "trading-tools_trading-tools-title": "Strumenti di Trading",
    "trading-tools_trading-tools-text":
      "OQtima è il vostro hub di trading tutto-in-uno—offrendo strumenti potenti per semplificare l'analisi e supportare la vostra strategia di trading.",
  },
  jp: {
    "trading-tools_badge-text": "分析。計画。取引。",
    "trading-tools_trading-tools-title": "取引ツール",
    "trading-tools_trading-tools-text":
      "OQtimaは、ワンストップ取引ハブです—分析を簡素化し、取引戦略をサポートする強力なツールを提供します。",
  },
  my: {
    "trading-tools_badge-text": "Analisis. Rancang. Dagang.",
    "trading-tools_trading-tools-title": "Alat Perdagangan",
    "trading-tools_trading-tools-text":
      "OQtima adalah hub perdagangan one-stop anda—menawarkan alat yang kuat untuk memudahkan analisis dan menyokong strategi perdagangan anda.",
  },
  th: {
    "trading-tools_badge-text": "วิเคราะห์. วางแผน. เทรด.",
    "trading-tools_trading-tools-title": "เครื่องมือเทรดดิ้ง",
    "trading-tools_trading-tools-text":
      "OQtima เป็นศูนย์เทรดดิ้งแบบครบวงจรของคุณ—เสนอเครื่องมือที่ทรงพลังเพื่อทำให้การวิเคราะห์ง่ายขึ้นและสนับสนุนกลยุทธ์การเทรดของคุณ",
  },
  vn: {
    "trading-tools_badge-text": "Phân tích. Lập kế hoạch. Giao dịch.",
    "trading-tools_trading-tools-title": "Công cụ Giao dịch",
    "trading-tools_trading-tools-text":
      "OQtima là trung tâm giao dịch toàn diện của bạn—cung cấp các công cụ mạnh mẽ để đơn giản hóa phân tích và hỗ trợ chiến lược giao dịch của bạn.",
  },
  zh: {
    "trading-tools_badge-text": "分析。规划。交易。",
    "trading-tools_trading-tools-title": "交易工具",
    "trading-tools_trading-tools-text":
      "OQtima是您的一站式交易中心—提供强大的工具来简化分析并支持您的交易策略。",
  },
};

function updateLanguageFile(lang) {
  const filePath = path.join(
    __dirname,
    "..",
    "src",
    "locales",
    lang,
    "index.json"
  );

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    // Update the trading-tools translations
    Object.keys(TRANSLATIONS[lang]).forEach((key) => {
      data[key] = TRANSLATIONS[lang][key];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(
      `✅ Updated ${lang}: Added ${
        Object.keys(TRANSLATIONS[lang]).length
      } trading-tools keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

console.log("🚀 Updating trading-tools translations...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Trading-tools translation update completed!");
