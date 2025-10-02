#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Define all language directories
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

// Define translations for more keys
const TRANSLATIONS = {
  ar: {
    "navbar-dropdown-highlight_more_badge-text": "تداول الآن",
    "navbar-dropdown-highlight_more_title": "OQtima مصمم للتداول",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 أحد الخيارات الأكثر تفوقاً في السوق لكل مستوى من المتداولين",
    "navbar-dropdown-highlight_more_primary-button": "ابدأ التداول",
    "navbar-dropdown-highlight_more_secondary-button": "تصفح الخدمات",
  },
  br: {
    "navbar-dropdown-highlight_more_badge-text": "Negociar Agora",
    "navbar-dropdown-highlight_more_title": "OQtima é construído para Trading",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 uma das escolhas mais superiores do mercado para cada nível de trader",
    "navbar-dropdown-highlight_more_primary-button": "Começar a Negociar",
    "navbar-dropdown-highlight_more_secondary-button": "Navegar Serviços",
  },
  cn: {
    "navbar-dropdown-highlight_more_badge-text": "立即交易",
    "navbar-dropdown-highlight_more_title": "OQtima专为交易而建",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4是市场上每个级别交易者的最佳选择之一",
    "navbar-dropdown-highlight_more_primary-button": "开始交易",
    "navbar-dropdown-highlight_more_secondary-button": "浏览服务",
  },
  es: {
    "navbar-dropdown-highlight_more_badge-text": "Comerciar Ahora",
    "navbar-dropdown-highlight_more_title":
      "OQtima está construido para Trading",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 una de las opciones más superiores del mercado para cada nivel de trader",
    "navbar-dropdown-highlight_more_primary-button": "Comenzar a Operar",
    "navbar-dropdown-highlight_more_secondary-button": "Explorar Servicios",
  },
  fr: {
    "navbar-dropdown-highlight_more_badge-text": "Trader Maintenant",
    "navbar-dropdown-highlight_more_title": "OQtima est conçu pour le Trading",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 l'un des choix les plus supérieurs du marché pour chaque niveau de trader",
    "navbar-dropdown-highlight_more_primary-button": "Commencer à Trader",
    "navbar-dropdown-highlight_more_secondary-button": "Parcourir les Services",
  },
  id: {
    "navbar-dropdown-highlight_more_badge-text": "Berdagang Sekarang",
    "navbar-dropdown-highlight_more_title": "OQtima dibangun untuk Trading",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 salah satu pilihan paling unggul di pasar untuk setiap level trader",
    "navbar-dropdown-highlight_more_primary-button": "Mulai Berdagang",
    "navbar-dropdown-highlight_more_secondary-button": "Jelajahi Layanan",
  },
  it: {
    "navbar-dropdown-highlight_more_badge-text": "Commercia Ora",
    "navbar-dropdown-highlight_more_title": "OQtima è costruito per il Trading",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 una delle scelte più superiori del mercato per ogni livello di trader",
    "navbar-dropdown-highlight_more_primary-button": "Inizia a Operare",
    "navbar-dropdown-highlight_more_secondary-button": "Sfoglia i Servizi",
  },
  jp: {
    "navbar-dropdown-highlight_more_badge-text": "今すぐ取引",
    "navbar-dropdown-highlight_more_title":
      "OQtimaはトレーディング用に構築されています",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4は市場で最も優れた選択肢の一つで、あらゆるレベルのトレーダーに対応",
    "navbar-dropdown-highlight_more_primary-button": "取引を開始",
    "navbar-dropdown-highlight_more_secondary-button": "サービスを閲覧",
  },
  my: {
    "navbar-dropdown-highlight_more_badge-text": "Dagang Sekarang",
    "navbar-dropdown-highlight_more_title": "OQtima dibina untuk Perdagangan",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 salah satu pilihan paling unggul di pasaran untuk setiap tahap peniaga",
    "navbar-dropdown-highlight_more_primary-button": "Mula Berdagang",
    "navbar-dropdown-highlight_more_secondary-button": "Layari Perkhidmatan",
  },
  th: {
    "navbar-dropdown-highlight_more_badge-text": "เทรดตอนนี้",
    "navbar-dropdown-highlight_more_title": "OQtima สร้างขึ้นเพื่อการเทรด",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 เป็นหนึ่งในตัวเลือกที่ดีที่สุดในตลาดสำหรับเทรดเดอร์ทุกระดับ",
    "navbar-dropdown-highlight_more_primary-button": "เริ่มเทรด",
    "navbar-dropdown-highlight_more_secondary-button": "เรียกดูบริการ",
  },
  vn: {
    "navbar-dropdown-highlight_more_badge-text": "Giao Dịch Ngay",
    "navbar-dropdown-highlight_more_title":
      "OQtima được xây dựng cho Giao dịch",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4 một trong những lựa chọn vượt trội nhất trên thị trường cho mọi cấp độ nhà giao dịch",
    "navbar-dropdown-highlight_more_primary-button": "Bắt đầu Giao dịch",
    "navbar-dropdown-highlight_more_secondary-button": "Duyệt Dịch vụ",
  },
  zh: {
    "navbar-dropdown-highlight_more_badge-text": "立即交易",
    "navbar-dropdown-highlight_more_title": "OQtima专为交易而建",
    "navbar-dropdown-highlight_more_subtitle":
      "OQtima MT4是市场上每个级别交易者的最佳选择之一",
    "navbar-dropdown-highlight_more_primary-button": "开始交易",
    "navbar-dropdown-highlight_more_secondary-button": "浏览服务",
  },
};

// Function to update a single language file
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
    // Read the current file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    // Add the new translations
    Object.keys(TRANSLATIONS[lang]).forEach((key) => {
      data[key] = TRANSLATIONS[lang][key];
    });

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    console.log(
      `✅ Updated ${lang}: Added ${
        Object.keys(TRANSLATIONS[lang]).length
      } more translation keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log("🚀 Updating more translation keys...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
