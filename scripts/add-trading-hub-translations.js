const fs = require("fs");
const path = require("path");

// Translation keys untuk Trading Hub
const tradingHubTranslations = {
  // Group Titles
  "header-nav-tab-trading-hub-learn-title": {
    en: "Learn",
    id: "Belajar",
    ar: "تعلم",
    br: "Aprender",
    cn: "学习",
    es: "Aprender",
    fr: "Apprendre",
    it: "Impara",
    jp: "学習",
    my: "Belajar",
    th: "เรียนรู้",
    vn: "Học hỏi",
    zh: "学习",
  },
  "header-nav-tab-trading-hub-help-center-title": {
    en: "Help Center",
    id: "Pusat Bantuan",
    ar: "مركز المساعدة",
    br: "Central de Ajuda",
    cn: "帮助中心",
    es: "Centro de Ayuda",
    fr: "Centre d'Aide",
    it: "Centro Assistenza",
    jp: "ヘルプセンター",
    my: "Pusat Bantuan",
    th: "ศูนย์ช่วยเหลือ",
    vn: "Trung tâm Trợ giúp",
    zh: "帮助中心",
  },
  "header-nav-tab-trading-hub-contact-support-title": {
    en: "Contact Support",
    id: "Hubungi Dukungan",
    ar: "اتصل بالدعم",
    br: "Contatar Suporte",
    cn: "联系支持",
    es: "Contactar Soporte",
    fr: "Contacter le Support",
    it: "Contatta Supporto",
    jp: "サポートに連絡",
    my: "Hubungi Sokongan",
    th: "ติดต่อฝ่ายสนับสนุน",
    vn: "Liên hệ Hỗ trợ",
    zh: "联系支持",
  },

  // Learn Column
  "header-nav-tab-trading-hub-trading-academy-title": {
    en: "Trading Academy",
    id: "Akademi Trading",
    ar: "أكاديمية التداول",
    br: "Academia de Trading",
    cn: "交易学院",
    es: "Academia de Trading",
    fr: "Académie de Trading",
    it: "Accademia di Trading",
    jp: "トレーディングアカデミー",
    my: "Akademi Trading",
    th: "สถาบันการเทรด",
    vn: "Học viện Giao dịch",
    zh: "交易学院",
  },
  "header-nav-tab-trading-hub-trading-academy-desc": {
    en: "Master the fundamentals of trading",
    id: "Kuasai dasar-dasar trading",
    ar: "أتقن أساسيات التداول",
    br: "Domine os fundamentos do trading",
    cn: "掌握交易基础知识",
    es: "Domina los fundamentos del trading",
    fr: "Maîtrisez les fondamentaux du trading",
    it: "Padroneggia i fondamentali del trading",
    jp: "トレーディングの基礎をマスター",
    my: "Kuasa asas-asas trading",
    th: "เชี่ยวชาญพื้นฐานการเทรด",
    vn: "Nắm vững kiến thức cơ bản về giao dịch",
    zh: "掌握交易基础知识",
  },
  "header-nav-tab-trading-hub-beginners-guide-title": {
    en: "Beginner's Guide",
    id: "Panduan Pemula",
    ar: "دليل المبتدئين",
    br: "Guia para Iniciantes",
    cn: "初学者指南",
    es: "Guía para Principiantes",
    fr: "Guide du Débutant",
    it: "Guida per Principianti",
    jp: "初心者ガイド",
    my: "Panduan Pemula",
    th: "คู่มือสำหรับผู้เริ่มต้น",
    vn: "Hướng dẫn cho người mới bắt đầu",
    zh: "初学者指南",
  },
  "header-nav-tab-trading-hub-beginners-guide-desc": {
    en: "Start your trading journey",
    id: "Mulai perjalanan trading Anda",
    ar: "ابدأ رحلتك في التداول",
    br: "Inicie sua jornada no trading",
    cn: "开始您的交易之旅",
    es: "Comienza tu viaje en el trading",
    fr: "Commencez votre parcours de trading",
    it: "Inizia il tuo viaggio nel trading",
    jp: "トレーディングの旅を始めよう",
    my: "Mulakan perjalanan trading anda",
    th: "เริ่มต้นการเดินทางเทรดของคุณ",
    vn: "Bắt đầu hành trình giao dịch của bạn",
    zh: "开始您的交易之旅",
  },
  "header-nav-tab-trading-hub-intermediate-lessons-title": {
    en: "Intermediate Lessons",
    id: "Pelajaran Menengah",
    ar: "دروس متوسطة",
    br: "Lições Intermediárias",
    cn: "中级课程",
    es: "Lecciones Intermedias",
    fr: "Leçons Intermédiaires",
    it: "Lezioni Intermedie",
    jp: "中級レッスン",
    my: "Pelajaran Pertengahan",
    th: "บทเรียนระดับกลาง",
    vn: "Bài học trung cấp",
    zh: "中级课程",
  },
  "header-nav-tab-trading-hub-intermediate-lessons-desc": {
    en: "Advance your trading skills",
    id: "Tingkatkan keterampilan trading Anda",
    ar: "طور مهاراتك في التداول",
    br: "Avance suas habilidades de trading",
    cn: "提升您的交易技能",
    es: "Avanza tus habilidades de trading",
    fr: "Développez vos compétences de trading",
    it: "Migliora le tue abilità di trading",
    jp: "トレーディングスキルを向上させよう",
    my: "Tingkatkan kemahiran trading anda",
    th: "พัฒนาทักษะการเทรดของคุณ",
    vn: "Nâng cao kỹ năng giao dịch của bạn",
    zh: "提升您的交易技能",
  },
  "header-nav-tab-trading-hub-advanced-playbook-title": {
    en: "Advanced Playbook",
    id: "Playbook Lanjutan",
    ar: "كتاب اللعب المتقدم",
    br: "Manual Avançado",
    cn: "高级策略手册",
    es: "Manual Avanzado",
    fr: "Manuel Avancé",
    it: "Manuale Avanzato",
    jp: "上級プレイブック",
    my: "Playbook Lanjutan",
    th: "คู่มือขั้นสูง",
    vn: "Sách hướng dẫn nâng cao",
    zh: "高级策略手册",
  },
  "header-nav-tab-trading-hub-advanced-playbook-desc": {
    en: "Expert strategies and techniques",
    id: "Strategi dan teknik ahli",
    ar: "استراتيجيات وتقنيات الخبراء",
    br: "Estratégias e técnicas especializadas",
    cn: "专家策略和技巧",
    es: "Estrategias y técnicas expertas",
    fr: "Stratégies et techniques d'expert",
    it: "Strategie e tecniche esperte",
    jp: "エキスパートの戦略とテクニック",
    my: "Strategi dan teknik pakar",
    th: "กลยุทธ์และเทคนิคของผู้เชี่ยวชาญ",
    vn: "Chiến lược và kỹ thuật chuyên gia",
    zh: "专家策略和技巧",
  },
  "header-nav-tab-trading-hub-webinars-tutorials-title": {
    en: "Webinars & Tutorials",
    id: "Webinar & Tutorial",
    ar: "الندوات والدروس",
    br: "Webinars e Tutoriais",
    cn: "网络研讨会和教程",
    es: "Webinars y Tutoriales",
    fr: "Webinaires et Tutoriels",
    it: "Webinar e Tutorial",
    jp: "ウェビナーとチュートリアル",
    my: "Webinar & Tutorial",
    th: "เว็บินาร์และบทช่วยสอน",
    vn: "Hội thảo trực tuyến và Hướng dẫn",
    zh: "网络研讨会和教程",
  },
  "header-nav-tab-trading-hub-webinars-tutorials-desc": {
    en: "Live learning sessions",
    id: "Sesi pembelajaran langsung",
    ar: "جلسات تعليمية مباشرة",
    br: "Sessões de aprendizado ao vivo",
    cn: "实时学习课程",
    es: "Sesiones de aprendizaje en vivo",
    fr: "Sessions d'apprentissage en direct",
    it: "Sessioni di apprendimento dal vivo",
    jp: "ライブ学習セッション",
    my: "Sesi pembelajaran langsung",
    th: "เซสชันการเรียนรู้สด",
    vn: "Buổi học trực tuyến",
    zh: "实时学习课程",
  },

  // Help Center Column
  "header-nav-tab-trading-hub-client-portal-assistance-title": {
    en: "Client Portal Assistance",
    id: "Bantuan Portal Klien",
    ar: "مساعدة بوابة العميل",
    br: "Assistência do Portal do Cliente",
    cn: "客户门户协助",
    es: "Asistencia del Portal del Cliente",
    fr: "Assistance Portail Client",
    it: "Assistenza Portale Cliente",
    jp: "クライアントポータルサポート",
    my: "Bantuan Portal Pelanggan",
    th: "ความช่วยเหลือพอร์ทัลลูกค้า",
    vn: "Hỗ trợ Cổng thông tin Khách hàng",
    zh: "客户门户协助",
  },
  "header-nav-tab-trading-hub-client-portal-assistance-desc": {
    en: "Get help with your account",
    id: "Dapatkan bantuan dengan akun Anda",
    ar: "احصل على المساعدة مع حسابك",
    br: "Obtenha ajuda com sua conta",
    cn: "获取账户帮助",
    es: "Obtén ayuda con tu cuenta",
    fr: "Obtenez de l'aide avec votre compte",
    it: "Ottieni aiuto con il tuo account",
    jp: "アカウントのヘルプを取得",
    my: "Dapatkan bantuan dengan akaun anda",
    th: "รับความช่วยเหลือกับบัญชีของคุณ",
    vn: "Nhận trợ giúp với tài khoản của bạn",
    zh: "获取账户帮助",
  },
  "header-nav-tab-trading-hub-platform-setup-guides-title": {
    en: "Platform Setup Guides",
    id: "Panduan Setup Platform",
    ar: "أدلة إعداد المنصة",
    br: "Guias de Configuração da Plataforma",
    cn: "平台设置指南",
    es: "Guías de Configuración de Plataforma",
    fr: "Guides de Configuration de Plateforme",
    it: "Guide di Configurazione Piattaforma",
    jp: "プラットフォームセットアップガイド",
    my: "Panduan Setup Platform",
    th: "คู่มือการตั้งค่าแพลตฟอร์ม",
    vn: "Hướng dẫn Thiết lập Nền tảng",
    zh: "平台设置指南",
  },
  "header-nav-tab-trading-hub-platform-setup-guides-desc": {
    en: "Step-by-step platform configuration",
    id: "Konfigurasi platform langkah demi langkah",
    ar: "تكوين المنصة خطوة بخطوة",
    br: "Configuração da plataforma passo a passo",
    cn: "分步平台配置",
    es: "Configuración de plataforma paso a paso",
    fr: "Configuration de plateforme étape par étape",
    it: "Configurazione piattaforma passo dopo passo",
    jp: "ステップバイステップのプラットフォーム設定",
    my: "Konfigurasi platform langkah demi langkah",
    th: "การกำหนดค่าแพลตฟอร์มทีละขั้นตอน",
    vn: "Cấu hình nền tảng từng bước",
    zh: "分步平台配置",
  },
  "header-nav-tab-trading-hub-newsroom-title": {
    en: "Newsroom",
    id: "Ruang Berita",
    ar: "غرفة الأخبار",
    br: "Sala de Imprensa",
    cn: "新闻室",
    es: "Sala de Prensa",
    fr: "Salle de Presse",
    it: "Sala Stampa",
    jp: "ニュースルーム",
    my: "Bilik Berita",
    th: "ห้องข่าว",
    vn: "Phòng Tin tức",
    zh: "新闻室",
  },
  "header-nav-tab-trading-hub-newsroom-desc": {
    en: "Latest market news and updates",
    id: "Berita dan pembaruan pasar terbaru",
    ar: "أحدث أخبار وتحديثات السوق",
    br: "Últimas notícias e atualizações do mercado",
    cn: "最新市场新闻和更新",
    es: "Últimas noticias y actualizaciones del mercado",
    fr: "Dernières nouvelles et mises à jour du marché",
    it: "Ultime notizie e aggiornamenti del mercato",
    jp: "最新のマーケットニュースとアップデート",
    my: "Berita dan kemas kini pasaran terkini",
    th: "ข่าวและอัปเดตล่าสุดของตลาด",
    vn: "Tin tức và cập nhật thị trường mới nhất",
    zh: "最新市场新闻和更新",
  },

  // Contact Support Column
  "header-nav-tab-trading-hub-live-chat-title": {
    en: "Live Chat",
    id: "Chat Langsung",
    ar: "الدردشة المباشرة",
    br: "Chat ao Vivo",
    cn: "在线聊天",
    es: "Chat en Vivo",
    fr: "Chat en Direct",
    it: "Chat dal Vivo",
    jp: "ライブチャット",
    my: "Chat Langsung",
    th: "แชทสด",
    vn: "Trò chuyện Trực tiếp",
    zh: "在线聊天",
  },
  "header-nav-tab-trading-hub-live-chat-desc": {
    en: "Chat with our support team",
    id: "Chat dengan tim dukungan kami",
    ar: "تحدث مع فريق الدعم لدينا",
    br: "Converse com nossa equipe de suporte",
    cn: "与我们的支持团队聊天",
    es: "Chatea con nuestro equipo de soporte",
    fr: "Discutez avec notre équipe de support",
    it: "Chatta con il nostro team di supporto",
    jp: "サポートチームとチャット",
    my: "Chat dengan pasukan sokongan kami",
    th: "แชทกับทีมสนับสนุนของเรา",
    vn: "Trò chuyện với đội ngũ hỗ trợ của chúng tôi",
    zh: "与我们的支持团队聊天",
  },
  "header-nav-tab-trading-hub-request-call-title": {
    en: "Request a call",
    id: "Minta panggilan",
    ar: "اطلب مكالمة",
    br: "Solicitar uma ligação",
    cn: "请求通话",
    es: "Solicitar una llamada",
    fr: "Demander un appel",
    it: "Richiedi una chiamata",
    jp: "コールをリクエスト",
    my: "Minta panggilan",
    th: "ขอสายโทรศัพท์",
    vn: "Yêu cầu cuộc gọi",
    zh: "请求通话",
  },
  "header-nav-tab-trading-hub-request-call-desc": {
    en: "Schedule a callback",
    id: "Jadwalkan panggilan balik",
    ar: "جدولة مكالمة عودة",
    br: "Agende um retorno",
    cn: "安排回电",
    es: "Programar una devolución de llamada",
    fr: "Planifier un rappel",
    it: "Programma un richiamo",
    jp: "コールバックをスケジュール",
    my: "Jadwalkan panggilan balik",
    th: "กำหนดเวลาการโทรกลับ",
    vn: "Lên lịch cuộc gọi lại",
    zh: "安排回电",
  },
  "header-nav-tab-trading-hub-send-message-title": {
    en: "Send a Message",
    id: "Kirim Pesan",
    ar: "إرسال رسالة",
    br: "Enviar uma Mensagem",
    cn: "发送消息",
    es: "Enviar un Mensaje",
    fr: "Envoyer un Message",
    it: "Invia un Messaggio",
    jp: "メッセージを送信",
    my: "Hantar Mesej",
    th: "ส่งข้อความ",
    vn: "Gửi Tin nhắn",
    zh: "发送消息",
  },
  "header-nav-tab-trading-hub-send-message-desc": {
    en: "Send us your inquiry",
    id: "Kirimkan pertanyaan Anda kepada kami",
    ar: "أرسل لنا استفسارك",
    br: "Envie-nos sua consulta",
    cn: "向我们发送您的询问",
    es: "Envíanos tu consulta",
    fr: "Envoyez-nous votre demande",
    it: "Inviaci la tua richiesta",
    jp: "お問い合わせを送信",
    my: "Hantar pertanyaan anda kepada kami",
    th: "ส่งคำถามของคุณมาหาเรา",
    vn: "Gửi câu hỏi của bạn cho chúng tôi",
    zh: "向我们发送您的询问",
  },
  "header-nav-tab-trading-hub-support-hours-title": {
    en: "Support Hours",
    id: "Jam Dukungan",
    ar: "ساعات الدعم",
    br: "Horários de Suporte",
    cn: "支持时间",
    es: "Horarios de Soporte",
    fr: "Heures de Support",
    it: "Orari di Supporto",
    jp: "サポート時間",
    my: "Waktu Sokongan",
    th: "ชั่วโมงสนับสนุน",
    vn: "Giờ Hỗ trợ",
    zh: "支持时间",
  },
  "header-nav-tab-trading-hub-support-hours-desc": {
    en: "When we're available to help",
    id: "Kapan kami tersedia untuk membantu",
    ar: "متى نكون متاحين للمساعدة",
    br: "Quando estamos disponíveis para ajudar",
    cn: "我们何时可以提供帮助",
    es: "Cuándo estamos disponibles para ayudar",
    fr: "Quand nous sommes disponibles pour aider",
    it: "Quando siamo disponibili per aiutare",
    jp: "いつサポート可能か",
    my: "Bila kami tersedia untuk membantu",
    th: "เมื่อไหร่ที่เราพร้อมให้ความช่วยเหลือ",
    vn: "Khi nào chúng tôi có thể hỗ trợ",
    zh: "我们何时可以提供帮助",
  },
};

// Daftar semua bahasa yang tersedia
const languages = [
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

// Path ke direktori locales
const localesPath = path.join(__dirname, "..", "src", "locales");

// Fungsi untuk menambahkan translation ke file JSON
function addTranslationsToFile(language) {
  const filePath = path.join(localesPath, language, "index.json");

  try {
    // Baca file JSON yang ada
    const fileContent = fs.readFileSync(filePath, "utf8");
    const translations = JSON.parse(fileContent);

    // Tambahkan translation keys baru
    let addedCount = 0;
    Object.keys(tradingHubTranslations).forEach((key) => {
      if (tradingHubTranslations[key][language]) {
        translations[key] = tradingHubTranslations[key][language];
        addedCount++;
      }
    });

    // Tulis kembali ke file dengan formatting yang rapi
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2) + "\n");

    console.log(
      `✅ Added ${addedCount} translations to ${language}/index.json`
    );
  } catch (error) {
    console.error(`❌ Error updating ${language}/index.json:`, error.message);
  }
}

// Fungsi utama
function main() {
  console.log("🚀 Adding Trading Hub translations to all language files...\n");

  // Tambahkan ke semua bahasa
  languages.forEach((language) => {
    addTranslationsToFile(language);
  });

  console.log("\n✨ Translation update completed!");
  console.log("\n📝 Summary:");
  console.log(
    `- Added ${Object.keys(tradingHubTranslations).length} translation keys`
  );
  console.log(`- Updated ${languages.length} language files`);
  console.log("\n🔍 Files updated:");
  languages.forEach((lang) => {
    console.log(`  - src/locales/${lang}/index.json`);
  });
}

// Jalankan script
if (require.main === module) {
  main();
}

module.exports = { tradingHubTranslations, addTranslationsToFile };
