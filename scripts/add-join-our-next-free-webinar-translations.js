/*
  Adds/updates "Join Our Next Free Webinar" translations for Client Portal Assistance page in all languages.

  Usage:
    node scripts/add-join-our-next-free-webinar-translations.js [--overwrite]

  Notes:
  - By default, it only adds missing keys and leaves existing ones untouched.
  - Pass --overwrite to force-update values in all locales.
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

// Figma-based English copy (used as default for all locales)
const TRANSLATIONS = {
  en: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Live Learning",
    "client-portal-assistance_our_next_free_webinar_title":
      "Join Our Next Free Webinar",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Get expert insights and live Q&A with professional traders. Don't miss this week's topic: Mastering Market Psychology.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Save My Spot",
  },
  ar: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "التعلم المباشر",
    "client-portal-assistance_our_next_free_webinar_title":
      "انضم إلى ندوتنا المجانية القادمة",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "احصل على رؤى الخبراء وجلسة أسئلة وأجوبة مباشرة مع المتداولين المحترفين. لا تفوت موضوع هذا الأسبوع: إتقان سيكولوجية السوق.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "احفظ مقعدي",
  },
  br: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Aprendizado ao Vivo",
    "client-portal-assistance_our_next_free_webinar_title":
      "Participe do Nosso Próximo Webinar Gratuito",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Obtenha insights de especialistas e perguntas e respostas ao vivo com traders profissionais. Não perca o tópico desta semana: Dominando a Psicologia de Mercado.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Reservar Meu Lugar",
  },
  cn: {
    "client-portal-assistance_our_next_free_webinar_badge_message": "实时学习",
    "client-portal-assistance_our_next_free_webinar_title":
      "参加我们的下一个免费网络研讨会",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "获得专家见解和专业交易员的现场问答。不要错过本周的主题：掌握市场心理学。",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "保存我的位置",
  },
  es: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Aprendizaje en Vivo",
    "client-portal-assistance_our_next_free_webinar_title":
      "Únete a Nuestro Próximo Webinar Gratuito",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Obtén perspectivas de expertos y preguntas y respuestas en vivo con traders profesionales. No te pierdas el tema de esta semana: Dominando la Psicología del Mercado.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Reservar Mi Lugar",
  },
  fr: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Apprentissage en Direct",
    "client-portal-assistance_our_next_free_webinar_title":
      "Rejoignez Notre Prochain Webinaire Gratuit",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Obtenez des insights d'experts et des questions-réponses en direct avec des traders professionnels. Ne manquez pas le sujet de cette semaine : Maîtriser la Psychologie du Marché.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Réserver Ma Place",
  },
  id: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Pembelajaran Langsung",
    "client-portal-assistance_our_next_free_webinar_title":
      "Bergabunglah dengan Webinar Gratis Kami Berikutnya",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Dapatkan wawasan ahli dan tanya jawab langsung dengan trader profesional. Jangan lewatkan topik minggu ini: Menguasai Psikologi Pasar.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Simpan Tempat Saya",
  },
  it: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Apprendimento Live",
    "client-portal-assistance_our_next_free_webinar_title":
      "Unisciti al Nostro Prossimo Webinar Gratuito",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Ottieni approfondimenti di esperti e domande e risposte in diretta con trader professionisti. Non perdere l'argomento di questa settimana: Padroneggiare la Psicologia del Mercato.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Prenota il Mio Posto",
  },
  jp: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "ライブ学習",
    "client-portal-assistance_our_next_free_webinar_title":
      "次の無料ウェビナーに参加",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "専門家の洞察とプロトレーダーとのライブQ&Aを入手。今週のトピック「市場心理学の習得」をお見逃しなく。",
    "client-portal-assistance_our_next_free_webinar_primary_button": "予約する",
  },
  my: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Pembelajaran Langsung",
    "client-portal-assistance_our_next_free_webinar_title":
      "Sertai Webinar Percuma Kami Seterusnya",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Dapatkan pandangan pakar dan soal jawab langsung dengan pedagang profesional. Jangan terlepas topik minggu ini: Menguasai Psikologi Pasaran.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Simpan Tempat Saya",
  },
  th: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "การเรียนรู้สด",
    "client-portal-assistance_our_next_free_webinar_title":
      "เข้าร่วมเว็บinar ฟรีครั้งต่อไปของเรา",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "รับข้อมูลเชิงลึกจากผู้เชี่ยวชาญและการถาม-ตอบสดกับเทรดเดอร์มืออาชีพ อย่าพลาดหัวข้อประจำสัปดาห์นี้: การเชี่ยวชาญจิตวิทยาตลาด",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "จองที่นั่งของฉัน",
  },
  vn: {
    "client-portal-assistance_our_next_free_webinar_badge_message":
      "Học Tập Trực Tiếp",
    "client-portal-assistance_our_next_free_webinar_title":
      "Tham Gia Webinar Miễn Phí Tiếp Theo Của Chúng Tôi",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "Nhận thông tin chi tiết từ các chuyên gia và hỏi đáp trực tiếp với các nhà giao dịch chuyên nghiệp. Đừng bỏ lỡ chủ đề tuần này: Làm Chủ Tâm Lý Thị Trường.",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "Đặt Chỗ Của Tôi",
  },
  zh: {
    "client-portal-assistance_our_next_free_webinar_badge_message": "实时学习",
    "client-portal-assistance_our_next_free_webinar_title":
      "参加我们的下一个免费网络研讨会",
    "client-portal-assistance_our_next_free_webinar_subtitle":
      "获得专家见解和专业交易员的现场问答。不要错过本周的主题：掌握市场心理学。",
    "client-portal-assistance_our_next_free_webinar_primary_button":
      "保存我的位置",
  },
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  if (!fs.existsSync(full)) return false;
  const stat = fs.statSync(full);
  if (!stat.isDirectory()) return false;

  return !["language.config.js", "processLanguages.js"].includes(entryName);
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
  return { lang, added, updated };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Locales directory not found: ${ROOT}`);
    process.exit(1);
  }

  const languages = fs.readdirSync(ROOT).filter(isLanguageDir).sort();

  if (languages.length === 0) {
    console.error("No language directories found");
    process.exit(1);
  }

  console.log(
    `Updating ${languages.length} language file(s)${
      OVERWRITE ? " (overwrite mode)" : ""
    }...`
  );

  const results = languages.map(updateLocale);
  const summary = results.reduce(
    (acc, r) => {
      if (r.error) {
        acc.errors += 1;
      } else {
        acc.added += r.added;
        acc.updated += r.updated;
      }
      return acc;
    },
    { added: 0, updated: 0, errors: 0 }
  );

  results.forEach((r) => {
    if (r.error) {
      console.error(`❌ ${r.lang}: Error`);
    } else if (r.added > 0 || r.updated > 0) {
      console.log(`✓ ${r.lang}: ${r.added} added, ${r.updated} updated`);
    } else {
      console.log(`○ ${r.lang}: No changes`);
    }
  });

  console.log(
    `\nSummary: ${summary.added} added, ${summary.updated} updated${
      summary.errors > 0 ? `, ${summary.errors} errors` : ""
    }`
  );
}

main();
