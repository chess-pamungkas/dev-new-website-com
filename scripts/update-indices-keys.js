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

// Define translations for indices keys
const TRANSLATIONS = {
  ar: {
    "indices-text": "المؤشرات",
    "indices_badge-text": "مؤشرات الرافعة المالية",
    "indices_indices-title": "تداول المؤشرات",
    "indices_indices-text": "تداول أكثر المؤشرات والأسهم إثارة في العالم مع واحدة من أوسع الاختيارات العالمية في متناول يدك.",
  },
  br: {
    "indices-text": "Índices",
    "indices_badge-text": "Índices com Alavancagem",
    "indices_indices-title": "Trading de Índices",
    "indices_indices-text": "Negocie os índices e ações mais emocionantes do mundo com uma das mais amplas seleções globais ao seu alcance.",
  },
  cn: {
    "indices-text": "指数",
    "indices_badge-text": "杠杆指数",
    "indices_indices-title": "指数交易",
    "indices_indices-text": "交易世界上最令人兴奋的指数和股票，拥有最广泛的全球选择之一。",
  },
  es: {
    "indices-text": "Índices",
    "indices_badge-text": "Índices con Apalancamiento",
    "indices_indices-title": "Trading de Índices",
    "indices_indices-text": "Opera los índices y acciones más emocionantes del mundo con una de las selecciones globales más amplias a tu alcance.",
  },
  fr: {
    "indices-text": "Indices",
    "indices_badge-text": "Indices avec Effet de Levier",
    "indices_indices-title": "Trading d'Indices",
    "indices_indices-text": "Tradez les indices et actions les plus passionnants au monde avec l'une des sélections mondiales les plus larges à portée de main.",
  },
  id: {
    "indices-text": "Indeks",
    "indices_badge-text": "Indeks dengan Leverage",
    "indices_indices-title": "Trading Indeks",
    "indices_indices-text": "Trading indeks dan saham paling menarik di dunia dengan salah satu pilihan global terluas di ujung jari Anda.",
  },
  it: {
    "indices-text": "Indici",
    "indices_badge-text": "Indici con Leva",
    "indices_indices-title": "Trading di Indici",
    "indices_indices-text": "Trading degli indici e azioni più emozionanti del mondo con una delle selezioni globali più ampie a portata di mano.",
  },
  jp: {
    "indices-text": "指数",
    "indices_badge-text": "レバレッジ指数",
    "indices_indices-title": "指数取引",
    "indices_indices-text": "世界で最もエキサイティングな指数と株式を、最も幅広いグローバル選択肢の一つで取引してください。",
  },
  my: {
    "indices-text": "Indeks",
    "indices_badge-text": "Indeks dengan Leverage",
    "indices_indices-title": "Perdagangan Indeks",
    "indices_indices-text": "Berdagang indeks dan saham paling menarik di dunia dengan salah satu pilihan global terluas di hujung jari anda.",
  },
  th: {
    "indices-text": "ดัชนี",
    "indices_badge-text": "ดัชนีที่มีเลเวอเรจ",
    "indices_indices-title": "การเทรดดัชนี",
    "indices_indices-text": "เทรดดัชนีและหุ้นที่น่าตื่นเต้นที่สุดในโลกด้วยหนึ่งในการเลือกสรรระดับโลกที่กว้างที่สุดที่ปลายนิ้วของคุณ",
  },
  vn: {
    "indices-text": "Chỉ số",
    "indices_badge-text": "Chỉ số với Đòn bẩy",
    "indices_indices-title": "Giao dịch Chỉ số",
    "indices_indices-text": "Giao dịch các chỉ số và cổ phiếu thú vị nhất thế giới với một trong những lựa chọn toàn cầu rộng nhất trong tầm tay.",
  },
  zh: {
    "indices-text": "指數",
    "indices_badge-text": "槓桿指數",
    "indices_indices-title": "指數交易",
    "indices_indices-text": "交易世界上最令人興奮的指數和股票，擁有最廣泛的全球選擇之一。",
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
      } indices translation keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

// Update all language files
console.log("🚀 Updating indices translation keys...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Translation update completed!");
