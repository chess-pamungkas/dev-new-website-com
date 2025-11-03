/*
  Adds/updates localized translations for the Simplify Your Setup section to all locales.

  Usage:
    node scripts/add-simplify-your-setup-translations.js [--overwrite]
  - Default: only adds if missing
  - --overwrite : will always set the value
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

const TRANSLATIONS = {
  en: {
    simplify_your_setup_badge: "Simplify your setup",
    simplify_your_setup_title: "Navigate Your OQtima Portal with Ease",
    simplify_your_setup_description:
      "Whether you’re new to OQtima or returning for a quick refresher, this quick-start guide will walk you through every step — from registration and verification to funding and trading. Watch the overview video to get started, then follow our step-by-step tutorials to complete your setup and trade with confidence.",
  },
  ar: {
    simplify_your_setup_badge: "بسط إعدادك",
    simplify_your_setup_title: "تنقّل في بوابة OQtima بسهولة",
    simplify_your_setup_description:
      "سواء كنت جديدًا في OQtima أو ترغب في مراجعة سريعة، سيرشدك هذا الدليل السريع خلال كل خطوة — من التسجيل والتحقق إلى التمويل والتداول. شاهد فيديو النظرة العامة للبدء، ثم اتبع دروسنا خطوة بخطوة لإكمال الإعداد والتداول بثقة.",
  },
  br: {
    simplify_your_setup_badge: "Simplifique sua configuração",
    simplify_your_setup_title: "Navegue pelo seu Portal OQtima com Facilidade",
    simplify_your_setup_description:
      "Se você é novo na OQtima ou está voltando para uma rápida atualização, este guia rápido irá conduzi-lo por todas as etapas — desde o registro e verificação até o financiamento e negociação. Assista ao vídeo de visão geral para começar e siga nossos tutoriais passo a passo para finalizar seu cadastro e operar com confiança.",
  },
  cn: {
    simplify_your_setup_badge: "简化您的设置",
    simplify_your_setup_title: "轻松畅行 OQtima 门户",
    simplify_your_setup_description:
      "无论您是初次使用 OQtima 还是需要快速复习，本快速入门指南将带您逐步完成注册、验证、入金和交易。观看总览视频即可上手，随后按照我们的分步教程自信完成设置和交易。",
  },
  zh: {
    simplify_your_setup_badge: "簡化您的設置",
    simplify_your_setup_title: "輕鬆操作您的 OQtima 入口",
    simplify_your_setup_description:
      "無論您是 OQtima 新手還是回來快速復習，用戶入門指導會帶您完成每一步——從註冊、驗證到存入及交易。觀看總覽視頻即可開始，然後按照我們的逐步教學完善設置、自信交易。",
  },
  es: {
    simplify_your_setup_badge: "Simplifica tu configuración",
    simplify_your_setup_title: "Navega por tu Portal OQtima con Facilidad",
    simplify_your_setup_description:
      "Ya seas nuevo en OQtima o regreses para un repaso rápido, esta guía rápida te llevará paso a paso — desde el registro y la verificación hasta depositar fondos y operar. Mira el video general para comenzar, y luego sigue nuestros tutoriales para completar la configuración y operar con confianza.",
  },
  fr: {
    simplify_your_setup_badge: "Simplifiez votre configuration",
    simplify_your_setup_title:
      "Naviguez sur votre Portail OQtima avec facilité",
    simplify_your_setup_description:
      "Que vous soyez nouveau chez OQtima ou reveniez pour une mise à niveau rapide, ce guide express vous accompagnera à chaque étape — de l'inscription et la vérification au dépôt et au trading. Regardez d'abord la vidéo de présentation, puis suivez nos tutoriels pas à pas pour compléter votre configuration et trader en toute confiance.",
  },
  id: {
    simplify_your_setup_badge: "Permudah pengaturan Anda",
    simplify_your_setup_title: "Navigasi Portal OQtima Anda dengan Mudah",
    simplify_your_setup_description:
      "Baik Anda baru di OQtima atau ingin penyegaran cepat, panduan kilat ini akan memandu Anda melalui setiap tahap — dari pendaftaran dan verifikasi, hingga pendanaan dan trading. Tonton video gambaran untuk memulai, lalu ikuti tutorial langkah demi langkah untuk menyelesaikan pengaturan dan trading dengan percaya diri.",
  },
  it: {
    simplify_your_setup_badge: "Semplifica la tua configurazione",
    simplify_your_setup_title: "Naviga il tuo Portale OQtima con facilità",
    simplify_your_setup_description:
      "Che tu sia nuovo su OQtima o stia tornando per una rapida revisione, questa guida rapida ti accompagnerà in ogni passaggio — dalla registrazione e verifica al deposito e trading. Guarda il video introduttivo per iniziare, poi segui i nostri tutorial passo-passo per completare la configurazione e fare trading con fiducia.",
  },
  jp: {
    simplify_your_setup_badge: "設定を簡単に",
    simplify_your_setup_title: "OQtimaポータルを簡単ナビゲート",
    simplify_your_setup_description:
      "OQtimaを初めてご利用の方や、クイックリフレッシュが必要な方のために、このクイックスタートガイドで登録、認証、入金、お取引まで一つずつご案内します。概要ビデオをご覧になり、ステップごとのチュートリアルで自信を持ってセットアップを完了してください。",
  },
  my: {
    simplify_your_setup_badge: "Permudahkan penyediaan anda",
    simplify_your_setup_title: "Navigasi Portal OQtima Anda dengan Mudah",
    simplify_your_setup_description:
      "Sama ada anda baharu di OQtima atau ingin ulang kaji pantas, panduan permulaan cepat ini akan memandu anda melalui setiap langkah — dari pendaftaran dan pengesahan hingga pembiayaan dan dagangan. Tonton video gambaran untuk bermula, kemudian ikuti tutorial langkah demi langkah kami untuk melengkapkan penyediaan dan berdagang dengan yakin.",
  },
  th: {
    simplify_your_setup_badge: "ลดขั้นตอนการตั้งค่า",
    simplify_your_setup_title: "นำทางสู่พอร์ทัล OQtima ของคุณได้อย่างง่ายดาย",
    simplify_your_setup_description:
      "ไม่ว่าคุณจะเป็นมือใหม่กับ OQtima หรือกลับมาทบทวนอย่างรวดเร็ว คู่มือเริ่มต้นนี้จะพาคุณทีละขั้นตั้งแต่สมัคร ยืนยัน ฝากเงิน จนถึงเทรด รับชมวิดีโอแนะนำเพื่อเริ่มต้น จากนั้นทำตามบทเรียนของเราเพื่อจบขั้นตอนการตั้งค่าและเทรดอย่างมั่นใจ",
  },
  vn: {
    simplify_your_setup_badge: "Đơn giản hóa việc thiết lập",
    simplify_your_setup_title: "Dẫn Dắt Bạn Qua Cổng OQtima Một Cách Dễ Dàng",
    simplify_your_setup_description:
      "Dù bạn mới đến với OQtima hay quay lại để làm mới nhanh, hướng dẫn nhanh này sẽ dẫn bạn qua từng bước — từ đăng ký, xác minh đến nạp tiền và giao dịch. Xem video tổng quan để bắt đầu, sau đó làm theo các hướng dẫn từng bước của chúng tôi để hoàn thiện cài đặt và giao dịch tự tin.",
  },
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  return fs.existsSync(full) && fs.statSync(full).isDirectory();
}

function updateLocale(lang) {
  const file = path.join(ROOT, lang, "index.json");
  if (!fs.existsSync(file)) {
    console.warn(`Skip ${lang}: index.json not found`);
    return { lang, added: 0, updated: 0 };
  }

  let json;
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e.message);
    return { lang, added: 0, updated: 0, error: true };
  }

  const src = TRANSLATIONS[lang] || TRANSLATIONS.en;
  let added = 0;
  let updated = 0;

  Object.entries(src).forEach(([key, value]) => {
    if (json[key] === undefined) {
      json[key] = value;
      added += 1;
    } else if (OVERWRITE && json[key] !== value) {
      json[key] = value;
      updated += 1;
    }
  });

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  return { lang, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found at ${ROOT}`);
    process.exit(1);
  }

  const langs = fs.readdirSync(ROOT).filter(isLanguageDir);
  const results = langs.map(updateLocale);

  console.log(
    `Added Simplify Your Setup translations (${
      OVERWRITE ? "overwrite" : "add-only"
    }):`
  );
  results.forEach(({ lang, added, updated }) =>
    console.log(`${lang}: +${added}, ~${updated}`)
  );
}

main();
