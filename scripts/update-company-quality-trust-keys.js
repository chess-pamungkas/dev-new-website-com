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
    "company-section-quality-badge": "كل التفاصيل مهمة",
    "company-section-quality-title": "الجودة",
    "company-section-quality-description":
      "في OQtima، نعطي الأولوية للتميز في كل نقطة اتصال — من أداء المنصة إلى دعم العملاء — مما يضمن تجربة تداول عالمية المستوى.",
    "company-section-quality-bullet1":
      "تجربة مستخدم سلسة ومتاحة عبر جميع الأجهزة.",
    "company-section-quality-bullet2": "تنفيذ تداول سريع ومستقر ودقيق.",
    "company-section-quality-bullet3": "دعم عملاء متجاوب يركز على احتياجاتك.",
    "company-section-quality-bullet4":
      "فحوصات الجودة عبر الأدوات والأنظمة والخدمات.",
    "company-section-trust-badge": "مبني من قبل الخبراء",
    "company-section-trust-title": "الثقة",
    "company-section-trust-description":
      "مبني من قبل خبراء الصناعة، OQtima متجذر في العدالة والشفافية والحوكمة المسؤولة — مما يكسب ثقتك في كل خطوة.",
    "company-section-trust-bullet1": "تأسست من قبل محترفين متمرسين في الصناعة.",
    "company-section-trust-bullet2": "ملتزمون بالعدالة والشفافية.",
    "company-section-trust-bullet3": "حوكمة مسؤولة على كل مستوى.",
    "company-section-trust-bullet4": "منصة مبنية للراحة النفسية.",
  },
  br: {
    "company-section-quality-badge": "Cada Detalhe Importa",
    "company-section-quality-title": "Qualidade",
    "company-section-quality-description":
      "Na OQtima, priorizamos a excelência em todos os pontos de contato — do desempenho da plataforma ao suporte ao cliente — garantindo uma experiência de trading de classe mundial.",
    "company-section-quality-bullet1":
      "Experiência de usuário perfeita e acessível em todos os dispositivos.",
    "company-section-quality-bullet2":
      "Execução de trades rápida, estável e precisa.",
    "company-section-quality-bullet3":
      "Suporte ao cliente responsivo focado em suas necessidades.",
    "company-section-quality-bullet4":
      "Verificações de qualidade em ferramentas, sistemas e serviços.",
    "company-section-trust-badge": "Construído por Especialistas",
    "company-section-trust-title": "Confiança",
    "company-section-trust-description":
      "Construído por especialistas da indústria, a OQtima é fundamentada em justiça, transparência e governança responsável — conquistando sua confiança a cada passo.",
    "company-section-trust-bullet1":
      "Fundada por profissionais experientes da indústria.",
    "company-section-trust-bullet2":
      "Comprometidos com justiça e transparência.",
    "company-section-trust-bullet3":
      "Governança responsável em todos os níveis.",
    "company-section-trust-bullet4":
      "Uma plataforma construída para tranquilidade.",
  },
  cn: {
    "company-section-quality-badge": "每个细节都很重要",
    "company-section-quality-title": "质量",
    "company-section-quality-description":
      "在OQtima，我们优先考虑每个接触点的卓越表现——从平台性能到客户支持——确保世界级的交易体验。",
    "company-section-quality-bullet1": "在所有设备上提供无缝且易用的用户体验。",
    "company-section-quality-bullet2": "快速、稳定、准确的交易执行。",
    "company-section-quality-bullet3": "专注于您需求的响应式客户支持。",
    "company-section-quality-bullet4": "对工具、系统和服务进行质量检查。",
    "company-section-trust-badge": "专家打造",
    "company-section-trust-title": "信任",
    "company-section-trust-description":
      "由行业专家打造，OQtima建立在公平、透明和负责任的治理基础上——在每一步都赢得您的信任。",
    "company-section-trust-bullet1": "由经验丰富的行业专业人士创立。",
    "company-section-trust-bullet2": "致力于公平和透明。",
    "company-section-trust-bullet3": "在各个层面进行负责任的管理。",
    "company-section-trust-bullet4": "为安心而打造的平台。",
  },
  es: {
    "company-section-quality-badge": "Cada Detalle Importa",
    "company-section-quality-title": "Calidad",
    "company-section-quality-description":
      "En OQtima, priorizamos la excelencia en cada punto de contacto — desde el rendimiento de la plataforma hasta el soporte al cliente — asegurando una experiencia de trading de clase mundial.",
    "company-section-quality-bullet1":
      "Experiencia de usuario perfecta y accesible en todos los dispositivos.",
    "company-section-quality-bullet2":
      "Ejecución de trades rápida, estable y precisa.",
    "company-section-quality-bullet3":
      "Soporte al cliente receptivo enfocado en tus necesidades.",
    "company-section-quality-bullet4":
      "Verificaciones de calidad en herramientas, sistemas y servicios.",
    "company-section-trust-badge": "Construido por Expertos",
    "company-section-trust-title": "Confianza",
    "company-section-trust-description":
      "Construido por expertos de la industria, OQtima se basa en equidad, transparencia y gobernanza responsable — ganando tu confianza en cada paso.",
    "company-section-trust-bullet1":
      "Fundado por profesionales experimentados de la industria.",
    "company-section-trust-bullet2":
      "Comprometidos con la equidad y transparencia.",
    "company-section-trust-bullet3":
      "Gobernanza responsable en todos los niveles.",
    "company-section-trust-bullet4":
      "Una plataforma construida para la tranquilidad.",
  },
  fr: {
    "company-section-quality-badge": "Chaque Détail Compte",
    "company-section-quality-title": "Qualité",
    "company-section-quality-description":
      "Chez OQtima, nous priorisons l'excellence à chaque point de contact — des performances de la plateforme au support client — assurant une expérience de trading de classe mondiale.",
    "company-section-quality-bullet1":
      "Expérience utilisateur fluide et accessible sur tous les appareils.",
    "company-section-quality-bullet2":
      "Exécution de trades rapide, stable et précise.",
    "company-section-quality-bullet3":
      "Support client réactif axé sur vos besoins.",
    "company-section-quality-bullet4":
      "Contrôles de qualité sur les outils, systèmes et services.",
    "company-section-trust-badge": "Construit par des Experts",
    "company-section-trust-title": "Confiance",
    "company-section-trust-description":
      "Construit par des experts de l'industrie, OQtima est ancré dans l'équité, la transparence et la gouvernance responsable — gagnant votre confiance à chaque étape.",
    "company-section-trust-bullet1":
      "Fondé par des professionnels expérimentés de l'industrie.",
    "company-section-trust-bullet2":
      "Engagés dans l'équité et la transparence.",
    "company-section-trust-bullet3":
      "Gouvernance responsable à tous les niveaux.",
    "company-section-trust-bullet4":
      "Une plateforme construite pour la tranquillité d'esprit.",
  },
  id: {
    "company-section-quality-badge": "Setiap Detail Penting",
    "company-section-quality-title": "Kualitas",
    "company-section-quality-description":
      "Di OQtima, kami mengutamakan keunggulan di setiap titik kontak — dari kinerja platform hingga dukungan pelanggan — memastikan pengalaman trading kelas dunia.",
    "company-section-quality-bullet1":
      "Pengalaman pengguna yang mulus dan mudah diakses di semua perangkat.",
    "company-section-quality-bullet2":
      "Eksekusi trading yang cepat, stabil, dan akurat.",
    "company-section-quality-bullet3":
      "Dukungan pelanggan yang responsif fokus pada kebutuhan Anda.",
    "company-section-quality-bullet4":
      "Pemeriksaan kualitas di seluruh alat, sistem, dan layanan.",
    "company-section-trust-badge": "Dibangun oleh Ahli",
    "company-section-trust-title": "Kepercayaan",
    "company-section-trust-description":
      "Dibangun oleh ahli industri, OQtima didasarkan pada keadilan, transparansi, dan tata kelola yang bertanggung jawab — mendapatkan kepercayaan Anda di setiap langkah.",
    "company-section-trust-bullet1":
      "Didirikan oleh profesional industri berpengalaman.",
    "company-section-trust-bullet2":
      "Berkomitmen pada keadilan dan transparansi.",
    "company-section-trust-bullet3":
      "Tata kelola yang bertanggung jawab di setiap tingkat.",
    "company-section-trust-bullet4":
      "Platform yang dibangun untuk ketenangan pikiran.",
  },
  it: {
    "company-section-quality-badge": "Ogni Dettaglio Conta",
    "company-section-quality-title": "Qualità",
    "company-section-quality-description":
      "In OQtima, diamo priorità all'eccellenza in ogni punto di contatto — dalle prestazioni della piattaforma al supporto clienti — assicurando un'esperienza di trading di livello mondiale.",
    "company-section-quality-bullet1":
      "Esperienza utente fluida e accessibile su tutti i dispositivi.",
    "company-section-quality-bullet2":
      "Esecuzione di trading veloce, stabile e precisa.",
    "company-section-quality-bullet3":
      "Supporto clienti reattivo focalizzato sulle tue esigenze.",
    "company-section-quality-bullet4":
      "Controlli di qualità su strumenti, sistemi e servizi.",
    "company-section-trust-badge": "Costruito da Esperti",
    "company-section-trust-title": "Fiducia",
    "company-section-trust-description":
      "Costruito da esperti del settore, OQtima è radicato nella giustizia, trasparenza e governance responsabile — guadagnando la tua fiducia ad ogni passo.",
    "company-section-trust-bullet1":
      "Fondato da professionisti esperti del settore.",
    "company-section-trust-bullet2": "Impegnati nella giustizia e trasparenza.",
    "company-section-trust-bullet3": "Governance responsabile ad ogni livello.",
    "company-section-trust-bullet4":
      "Una piattaforma costruita per la tranquillità.",
  },
  jp: {
    "company-section-quality-badge": "すべての詳細が重要",
    "company-section-quality-title": "品質",
    "company-section-quality-description":
      "OQtimaでは、プラットフォームのパフォーマンスからカスタマーサポートまで、すべてのタッチポイントで卓越性を優先し、世界クラスの取引体験を保証しています。",
    "company-section-quality-bullet1":
      "すべてのデバイスでシームレスでアクセスしやすいユーザー体験。",
    "company-section-quality-bullet2": "高速、安定、正確な取引実行。",
    "company-section-quality-bullet3":
      "お客様のニーズに焦点を当てたレスポンシブなカスタマーサポート。",
    "company-section-quality-bullet4":
      "ツール、システム、サービス全体の品質チェック。",
    "company-section-trust-badge": "専門家によって構築",
    "company-section-trust-title": "信頼",
    "company-section-trust-description":
      "業界の専門家によって構築されたOQtimaは、公平性、透明性、責任あるガバナンスに基づいており、あらゆる段階でお客様の信頼を獲得しています。",
    "company-section-trust-bullet1": "経験豊富な業界専門家によって設立。",
    "company-section-trust-bullet2": "公平性と透明性にコミット。",
    "company-section-trust-bullet3": "あらゆるレベルでの責任あるガバナンス。",
    "company-section-trust-bullet4": "安心のためのプラットフォーム。",
  },
  my: {
    "company-section-quality-badge": "Setiap Butiran Penting",
    "company-section-quality-title": "Kualiti",
    "company-section-quality-description":
      "Di OQtima, kami mengutamakan kecemerlangan di setiap titik sentuhan — dari prestasi platform hingga sokongan pelanggan — memastikan pengalaman perdagangan bertaraf dunia.",
    "company-section-quality-bullet1":
      "Pengalaman pengguna yang lancar dan mudah diakses di semua peranti.",
    "company-section-quality-bullet2":
      "Pelaksanaan perdagangan yang pantas, stabil, dan tepat.",
    "company-section-quality-bullet3":
      "Sokongan pelanggan yang responsif fokus pada keperluan anda.",
    "company-section-quality-bullet4":
      "Pemeriksaan kualiti di seluruh alat, sistem, dan perkhidmatan.",
    "company-section-trust-badge": "Dibina oleh Pakar",
    "company-section-trust-title": "Kepercayaan",
    "company-section-trust-description":
      "Dibina oleh pakar industri, OQtima berasaskan keadilan, ketelusan, dan tadbir urus yang bertanggungjawab — mendapat kepercayaan anda di setiap langkah.",
    "company-section-trust-bullet1":
      "Ditubuhkan oleh profesional industri berpengalaman.",
    "company-section-trust-bullet2": "Berkomitmen pada keadilan dan ketelusan.",
    "company-section-trust-bullet3":
      "Tadbir urus yang bertanggungjawab di setiap peringkat.",
    "company-section-trust-bullet4":
      "Platform yang dibina untuk ketenangan fikiran.",
  },
  th: {
    "company-section-quality-badge": "ทุกรายละเอียดมีความสำคัญ",
    "company-section-quality-title": "คุณภาพ",
    "company-section-quality-description":
      "ที่ OQtima เราให้ความสำคัญกับความเป็นเลิศในทุกจุดสัมผัส — จากประสิทธิภาพของแพลตฟอร์มไปจนถึงการสนับสนุนลูกค้า — เพื่อให้มั่นใจในประสบการณ์การเทรดระดับโลก",
    "company-section-quality-bullet1":
      "ประสบการณ์ผู้ใช้ที่ราบรื่นและเข้าถึงได้ในทุกอุปกรณ์",
    "company-section-quality-bullet2":
      "การดำเนินการเทรดที่รวดเร็ว มีเสถียรภาพ และแม่นยำ",
    "company-section-quality-bullet3":
      "การสนับสนุนลูกค้าที่ตอบสนองมุ่งเน้นความต้องการของคุณ",
    "company-section-quality-bullet4":
      "การตรวจสอบคุณภาพในเครื่องมือ ระบบ และบริการ",
    "company-section-trust-badge": "สร้างโดยผู้เชี่ยวชาญ",
    "company-section-trust-title": "ความเชื่อถือ",
    "company-section-trust-description":
      "สร้างโดยผู้เชี่ยวชาญในอุตสาหกรรม OQtima มีรากฐานในความยุติธรรม ความโปร่งใส และการกำกับดูแลอย่างมีความรับผิดชอบ — สร้างความเชื่อถือของคุณในทุกขั้นตอน",
    "company-section-trust-bullet1":
      "ก่อตั้งโดยผู้เชี่ยวชาญในอุตสาหกรรมที่มีประสบการณ์",
    "company-section-trust-bullet2": "มุ่งมั่นในความยุติธรรมและความโปร่งใส",
    "company-section-trust-bullet3":
      "การกำกับดูแลอย่างมีความรับผิดชอบในทุกระดับ",
    "company-section-trust-bullet4": "แพลตฟอร์มที่สร้างขึ้นเพื่อความสบายใจ",
  },
  vn: {
    "company-section-quality-badge": "Mọi Chi Tiết Đều Quan Trọng",
    "company-section-quality-title": "Chất Lượng",
    "company-section-quality-description":
      "Tại OQtima, chúng tôi ưu tiên sự xuất sắc trong mọi điểm tiếp xúc — từ hiệu suất nền tảng đến hỗ trợ khách hàng — đảm bảo trải nghiệm giao dịch đẳng cấp thế giới.",
    "company-section-quality-bullet1":
      "Trải nghiệm người dùng liền mạch và dễ tiếp cận trên tất cả thiết bị.",
    "company-section-quality-bullet2":
      "Thực hiện giao dịch nhanh chóng, ổn định và chính xác.",
    "company-section-quality-bullet3":
      "Hỗ trợ khách hàng phản hồi nhanh tập trung vào nhu cầu của bạn.",
    "company-section-quality-bullet4":
      "Kiểm tra chất lượng trên các công cụ, hệ thống và dịch vụ.",
    "company-section-trust-badge": "Được Xây Dựng Bởi Chuyên Gia",
    "company-section-trust-title": "Niềm Tin",
    "company-section-trust-description":
      "Được xây dựng bởi các chuyên gia trong ngành, OQtima được xây dựng trên nền tảng công bằng, minh bạch và quản trị có trách nhiệm — giành được niềm tin của bạn ở mọi bước.",
    "company-section-trust-bullet1":
      "Được thành lập bởi các chuyên gia có kinh nghiệm trong ngành.",
    "company-section-trust-bullet2": "Cam kết về công bằng và minh bạch.",
    "company-section-trust-bullet3": "Quản trị có trách nhiệm ở mọi cấp độ.",
    "company-section-trust-bullet4": "Một nền tảng được xây dựng để yên tâm.",
  },
  zh: {
    "company-section-quality-badge": "每个细节都很重要",
    "company-section-quality-title": "质量",
    "company-section-quality-description":
      "在OQtima，我们优先考虑每个接触点的卓越表现——从平台性能到客户支持——确保世界级的交易体验。",
    "company-section-quality-bullet1": "在所有设备上提供无缝且易用的用户体验。",
    "company-section-quality-bullet2": "快速、稳定、准确的交易执行。",
    "company-section-quality-bullet3": "专注于您需求的响应式客户支持。",
    "company-section-quality-bullet4": "对工具、系统和服务进行质量检查。",
    "company-section-trust-badge": "专家打造",
    "company-section-trust-title": "信任",
    "company-section-trust-description":
      "由行业专家打造，OQtima建立在公平、透明和负责任的治理基础上——在每一步都赢得您的信任。",
    "company-section-trust-bullet1": "由经验丰富的行业专业人士创立。",
    "company-section-trust-bullet2": "致力于公平和透明。",
    "company-section-trust-bullet3": "在各个层面进行负责任的管理。",
    "company-section-trust-bullet4": "为安心而打造的平台。",
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

    // Update the company quality and trust translations
    Object.keys(TRANSLATIONS[lang]).forEach((key) => {
      data[key] = TRANSLATIONS[lang][key];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(
      `✅ Updated ${lang}: Added ${
        Object.keys(TRANSLATIONS[lang]).length
      } company quality & trust keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

console.log("🚀 Updating company quality & trust translations...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Company quality & trust translation update completed!");
