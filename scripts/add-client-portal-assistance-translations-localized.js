/*
  Adds localized Client Portal Assistance hero translations to all locales (except English).

  Usage:
    node scripts/add-client-portal-assistance-translations-localized.js [--overwrite]

  Behavior:
  - Writes language-specific translations where available.
  - Falls back to English strings if a language is missing from the map.
  - By default, adds only missing keys; pass --overwrite to force-update.
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

const EN = {
  "client-portal-assistance_badge-text": "Start trading smarter",
  "client-portal-assistance_client-portal-assistance-title":
    "Client Portal assistance",
  "client-portal-assistance_client-portal-assistance-text":
    "From registration to your first trade—this step-by-step guide helps you set up, verify, and fund your account with confidence.",
  "client-portal-assistance_button-get-started": "Get started",
  "client-portal-assistance_button-watch-quick-overview":
    "Watch Quick Overview",
};

const MAP = {
  ar: {
    "client-portal-assistance_badge-text": "ابدأ التداول بذكاء",
    "client-portal-assistance_client-portal-assistance-title":
      "مساعدة بوابة العميل",
    "client-portal-assistance_client-portal-assistance-text":
      "من التسجيل إلى أول صفقة لك — يوضح لك هذا الدليل خطوة بخطوة كيفية الإعداد والتحقق وتمويل حسابك بثقة.",
    "client-portal-assistance_button-get-started": "ابدأ الآن",
    "client-portal-assistance_button-watch-quick-overview": "شاهد نظرة سريعة",
  },
  br: {
    "client-portal-assistance_badge-text":
      "Comece a negociar com mais inteligência",
    "client-portal-assistance_client-portal-assistance-title":
      "Assistência do Portal do Cliente",
    "client-portal-assistance_client-portal-assistance-text":
      "Do cadastro à sua primeira negociação — este guia passo a passo ajuda você a configurar, verificar e financiar sua conta com confiança.",
    "client-portal-assistance_button-get-started": "Começar",
    "client-portal-assistance_button-watch-quick-overview":
      "Assistir visão geral rápida",
  },
  cn: {
    "client-portal-assistance_badge-text": "更聪明地开始交易",
    "client-portal-assistance_client-portal-assistance-title": "客户门户协助",
    "client-portal-assistance_client-portal-assistance-text":
      "从注册到完成第一笔交易——本分步指南将帮助您自信地完成账户设置、验证与入金。",
    "client-portal-assistance_button-get-started": "开始使用",
    "client-portal-assistance_button-watch-quick-overview": "观看快速概览",
  },
  zh: {
    "client-portal-assistance_badge-text": "更聰明地開始交易",
    "client-portal-assistance_client-portal-assistance-title": "客戶入口協助",
    "client-portal-assistance_client-portal-assistance-text":
      "從註冊到完成第一筆交易——本逐步指南協助您自信地完成帳戶設定、驗證與入金。",
    "client-portal-assistance_button-get-started": "立即開始",
    "client-portal-assistance_button-watch-quick-overview": "觀看快速總覽",
  },
  es: {
    "client-portal-assistance_badge-text":
      "Empieza a operar con más inteligencia",
    "client-portal-assistance_client-portal-assistance-title":
      "Asistencia del Portal del Cliente",
    "client-portal-assistance_client-portal-assistance-text":
      "Desde el registro hasta tu primera operación, esta guía paso a paso te ayuda a configurar, verificar y fondear tu cuenta con confianza.",
    "client-portal-assistance_button-get-started": "Empezar",
    "client-portal-assistance_button-watch-quick-overview":
      "Ver resumen rápido",
  },
  fr: {
    "client-portal-assistance_badge-text":
      "Commencez à trader plus intelligemment",
    "client-portal-assistance_client-portal-assistance-title":
      "Assistance du Portail Client",
    "client-portal-assistance_client-portal-assistance-text":
      "De l'inscription à votre première transaction — ce guide étape par étape vous aide à configurer, vérifier et approvisionner votre compte en toute confiance.",
    "client-portal-assistance_button-get-started": "Commencer",
    "client-portal-assistance_button-watch-quick-overview":
      "Regarder l’aperçu rapide",
  },
  id: {
    "client-portal-assistance_badge-text": "Mulai trading lebih cerdas",
    "client-portal-assistance_client-portal-assistance-title":
      "Bantuan Portal Klien",
    "client-portal-assistance_client-portal-assistance-text":
      "Dari pendaftaran hingga transaksi pertama—panduan langkah demi langkah ini membantu Anda menyiapkan, memverifikasi, dan mendanai akun dengan percaya diri.",
    "client-portal-assistance_button-get-started": "Mulai",
    "client-portal-assistance_button-watch-quick-overview":
      "Tonton Ringkasan Cepat",
  },
  it: {
    "client-portal-assistance_badge-text":
      "Inizia a fare trading in modo più intelligente",
    "client-portal-assistance_client-portal-assistance-title":
      "Assistenza Portale Clienti",
    "client-portal-assistance_client-portal-assistance-text":
      "Dalla registrazione al tuo primo trade: questa guida passo passo ti aiuta a configurare, verificare e finanziare il tuo account con sicurezza.",
    "client-portal-assistance_button-get-started": "Inizia",
    "client-portal-assistance_button-watch-quick-overview":
      "Guarda la panoramica rapida",
  },
  jp: {
    "client-portal-assistance_badge-text":
      "よりスマートにトレードを始めましょう",
    "client-portal-assistance_client-portal-assistance-title":
      "クライアントポータルサポート",
    "client-portal-assistance_client-portal-assistance-text":
      "登録から初めての取引まで—このステップバイステップガイドは、アカウントの設定、認証、入金を自信を持って進められるようにサポートします。",
    "client-portal-assistance_button-get-started": "はじめる",
    "client-portal-assistance_button-watch-quick-overview":
      "クイック概要を見る",
  },
  my: {
    "client-portal-assistance_badge-text":
      "Mulakan dagangan dengan lebih bijak",
    "client-portal-assistance_client-portal-assistance-title":
      "Bantuan Portal Pelanggan",
    "client-portal-assistance_client-portal-assistance-text":
      "Daripada pendaftaran hingga dagangan pertama anda — panduan langkah demi langkah ini membantu anda menyediakan, mengesahkan dan membiayai akaun anda dengan yakin.",
    "client-portal-assistance_button-get-started": "Mula",
    "client-portal-assistance_button-watch-quick-overview":
      "Tonton Gambaran Pantas",
  },
  th: {
    "client-portal-assistance_badge-text": "เริ่มเทรดอย่างชาญฉลาดยิ่งขึ้น",
    "client-portal-assistance_client-portal-assistance-title":
      "ความช่วยเหลือพอร์ทัลลูกค้า",
    "client-portal-assistance_client-portal-assistance-text":
      "ตั้งแต่การสมัครจนถึงการเทรดครั้งแรก — คู่มือทีละขั้นตอนนี้ช่วยให้คุณตั้งค่า ยืนยัน และเติมเงินบัญชีได้อย่างมั่นใจ",
    "client-portal-assistance_button-get-started": "เริ่มต้น",
    "client-portal-assistance_button-watch-quick-overview":
      "ดูภาพรวมอย่างรวดเร็ว",
  },
  vn: {
    "client-portal-assistance_badge-text": "Bắt đầu giao dịch thông minh hơn",
    "client-portal-assistance_client-portal-assistance-title":
      "Hỗ trợ Cổng Khách Hàng",
    "client-portal-assistance_client-portal-assistance-text":
      "Từ đăng ký đến lệnh giao dịch đầu tiên — hướng dẫn từng bước này giúp bạn thiết lập, xác minh và nạp tiền vào tài khoản một cách tự tin.",
    "client-portal-assistance_button-get-started": "Bắt đầu",
    "client-portal-assistance_button-watch-quick-overview":
      "Xem Tổng Quan Nhanh",
  },
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  if (!fs.existsSync(full)) return false;
  const stat = fs.statSync(full);
  if (!stat.isDirectory()) return false;
  return !["en", "language.config.js", "processLanguages.js"].includes(
    entryName
  );
}

function updateLocale(langDir) {
  const file = path.join(ROOT, langDir, "index.json");
  if (!fs.existsSync(file)) {
    console.warn(`Skip ${langDir}: index.json not found`);
    return { lang: langDir, added: 0, updated: 0 };
  }

  let json;
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e.message);
    return { lang: langDir, added: 0, updated: 0, error: true };
  }

  const src = MAP[langDir] || EN;
  let added = 0;
  let updated = 0;

  Object.entries(src).forEach(([key, value]) => {
    if (OVERWRITE) {
      if (json[key] !== value) {
        json[key] = value;
        updated += 1;
      }
    } else {
      if (json[key] === undefined) {
        json[key] = value;
        added += 1;
      }
    }
  });

  fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  return { lang: langDir, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found at ${ROOT}`);
    process.exit(1);
  }

  const langs = fs.readdirSync(ROOT).filter(isLanguageDir);
  const results = langs.map(updateLocale);

  console.log(
    `Localized Client Portal Assistance translations updated (${
      OVERWRITE ? "overwrite" : "add-only"
    })`
  );
  results.forEach(({ lang, added, updated }) =>
    console.log(`${lang}: +${added}, ~${updated}`)
  );
}

main();
