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
    "company_badge-text": "الوصول إلى الأسواق العالمية",
    "company_company-title": "نحن نعيش في عالم مالي معقد.",
    "company_company-text": "نريدك أن تكون قادراً على الاستفادة منه.",
  },
  br: {
    "company_badge-text": "Acesse Mercados Globais",
    "company_company-title": "Vivemos em um mundo financeiro complexo.",
    "company_company-text": "Queremos que você possa aproveitar isso.",
  },
  cn: {
    "company_badge-text": "进入全球市场",
    "company_company-title": "我们生活在一个复杂的金融世界中。",
    "company_company-text": "我们希望您能够利用它。",
  },
  es: {
    "company_badge-text": "Accede a Mercados Globales",
    "company_company-title": "Vivimos en un mundo financiero complejo.",
    "company_company-text": "Queremos que puedas aprovecharlo.",
  },
  fr: {
    "company_badge-text": "Accédez aux Marchés Mondiaux",
    "company_company-title": "Nous vivons dans un monde financier complexe.",
    "company_company-text": "Nous voulons que vous puissiez en profiter.",
  },
  id: {
    "company_badge-text": "Akses Pasar Global",
    "company_company-title": "Kita hidup di dunia keuangan yang kompleks.",
    "company_company-text": "Kami ingin Anda dapat memanfaatkannya.",
  },
  it: {
    "company_badge-text": "Accedi ai Mercati Globali",
    "company_company-title": "Viviamo in un mondo finanziario complesso.",
    "company_company-text": "Vogliamo che tu possa trarne vantaggio.",
  },
  jp: {
    "company_badge-text": "グローバル市場へのアクセス",
    "company_company-title": "私たちは複雑な金融世界に生きています。",
    "company_company-text":
      "私たちはあなたがそれを活用できることを望んでいます。",
  },
  my: {
    "company_badge-text": "Akses Pasaran Global",
    "company_company-title": "Kita hidup dalam dunia kewangan yang kompleks.",
    "company_company-text": "Kami mahu anda dapat memanfaatkannya.",
  },
  th: {
    "company_badge-text": "เข้าถึงตลาดโลก",
    "company_company-title": "เราอาศัยอยู่ในโลกทางการเงินที่ซับซ้อน",
    "company_company-text": "เราต้องการให้คุณสามารถใช้ประโยชน์จากมันได้",
  },
  vn: {
    "company_badge-text": "Tiếp Cận Thị Trường Toàn Cầu",
    "company_company-title":
      "Chúng ta đang sống trong một thế giới tài chính phức tạp.",
    "company_company-text": "Chúng tôi muốn bạn có thể tận dụng nó.",
  },
  zh: {
    "company_badge-text": "进入全球市场",
    "company_company-title": "我们生活在一个复杂的金融世界中。",
    "company_company-text": "我们希望您能够利用它。",
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

    // Update the company translations
    Object.keys(TRANSLATIONS[lang]).forEach((key) => {
      data[key] = TRANSLATIONS[lang][key];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(
      `✅ Updated ${lang}: Added ${
        Object.keys(TRANSLATIONS[lang]).length
      } company keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

console.log("🚀 Updating company translations...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Company translation update completed!");
