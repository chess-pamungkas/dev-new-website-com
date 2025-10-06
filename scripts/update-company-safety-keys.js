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
    "company-section-safety-badge": "أمانك مهم",
    "company-section-safety-title": "الأمان",
    "company-section-safety-description":
      "في OQtima، أمانك يأتي أولاً. نحن نعمل تحت معايير تنظيمية صارمة، ونحمي أموال العملاء في حسابات منفصلة، ونتأكد من أن بياناتك تبقى خاصة وآمنة.",
    "company-section-safety-bullet1":
      "مُنظم بالكامل وخاضع لعمليات تدقيق منتظمة للامتثال.",
    "company-section-safety-bullet2":
      "أموال العملاء محفوظة بأمان في حسابات ائتمان منفصلة.",
    "company-section-safety-bullet3":
      "بيانات العملاء السرية محمية بضوابط صارمة.",
    "company-section-safety-bullet4": "رأس مال قوي محفوظ لتلبية اللوائح.",
  },
  br: {
    "company-section-safety-badge": "Sua Segurança Importa",
    "company-section-safety-title": "Segurança",
    "company-section-safety-description":
      "Na OQtima, sua segurança vem primeiro. Operamos sob padrões regulatórios rigorosos, protegemos fundos de clientes em contas segregadas e garantimos que seus dados permaneçam privados e seguros.",
    "company-section-safety-bullet1":
      "Totalmente regulamentado e auditado regularmente para conformidade.",
    "company-section-safety-bullet2":
      "Fundos de clientes mantidos com segurança em contas fiduciárias segregadas.",
    "company-section-safety-bullet3":
      "Dados confidenciais de clientes protegidos com controles rigorosos.",
    "company-section-safety-bullet4":
      "Capital forte mantido para atender às regulamentações.",
  },
  cn: {
    "company-section-safety-badge": "您的安全至关重要",
    "company-section-safety-title": "安全",
    "company-section-safety-description":
      "在OQtima，您的安全是第一位的。我们在严格的监管标准下运营，在隔离账户中保护客户资金，并确保您的数据保持私密和安全。",
    "company-section-safety-bullet1": "完全受监管并定期进行合规审计。",
    "company-section-safety-bullet2": "客户资金安全存放在隔离信托账户中。",
    "company-section-safety-bullet3": "客户机密数据受到严格控制保护。",
    "company-section-safety-bullet4": "维持强劲资本以满足监管要求。",
  },
  es: {
    "company-section-safety-badge": "Tu Seguridad Importa",
    "company-section-safety-title": "Seguridad",
    "company-section-safety-description":
      "En OQtima, tu seguridad es lo primero. Operamos bajo estándares regulatorios estrictos, protegemos los fondos de clientes en cuentas segregadas y aseguramos que tus datos permanezcan privados y seguros.",
    "company-section-safety-bullet1":
      "Totalmente regulado y auditado regularmente para cumplimiento.",
    "company-section-safety-bullet2":
      "Fondos de clientes mantenidos de forma segura en cuentas fiduciarias segregadas.",
    "company-section-safety-bullet3":
      "Datos confidenciales de clientes protegidos con controles estrictos.",
    "company-section-safety-bullet4":
      "Capital fuerte mantenido para cumplir con las regulaciones.",
  },
  fr: {
    "company-section-safety-badge": "Votre Sécurité Compte",
    "company-section-safety-title": "Sécurité",
    "company-section-safety-description":
      "Chez OQtima, votre sécurité passe en premier. Nous opérons sous des normes réglementaires strictes, protégeons les fonds des clients dans des comptes séparés et nous assurons que vos données restent privées et sécurisées.",
    "company-section-safety-bullet1":
      "Entièrement réglementé et audité régulièrement pour la conformité.",
    "company-section-safety-bullet2":
      "Fonds des clients détenus en sécurité dans des comptes fiduciaires séparés.",
    "company-section-safety-bullet3":
      "Données confidentielles des clients protégées avec des contrôles stricts.",
    "company-section-safety-bullet4":
      "Capital fort maintenu pour respecter les réglementations.",
  },
  id: {
    "company-section-safety-badge": "Keamanan Anda Penting",
    "company-section-safety-title": "Keamanan",
    "company-section-safety-description":
      "Di OQtima, keamanan Anda adalah prioritas utama. Kami beroperasi di bawah standar regulasi yang ketat, melindungi dana klien di akun terpisah, dan memastikan data Anda tetap pribadi dan aman.",
    "company-section-safety-bullet1":
      "Sepenuhnya diatur dan diaudit secara teratur untuk kepatuhan.",
    "company-section-safety-bullet2":
      "Dana klien disimpan dengan aman di akun kepercayaan terpisah.",
    "company-section-safety-bullet3":
      "Data klien rahasia dilindungi dengan kontrol ketat.",
    "company-section-safety-bullet4":
      "Modal yang kuat dipertahankan untuk memenuhi regulasi.",
  },
  it: {
    "company-section-safety-badge": "La Tua Sicurezza Conta",
    "company-section-safety-title": "Sicurezza",
    "company-section-safety-description":
      "In OQtima, la tua sicurezza viene prima di tutto. Operiamo sotto standard normativi rigorosi, proteggiamo i fondi dei clienti in conti segregati e ci assicuriamo che i tuoi dati rimangano privati e sicuri.",
    "company-section-safety-bullet1":
      "Completamente regolamentato e controllato regolarmente per la conformità.",
    "company-section-safety-bullet2":
      "Fondi dei clienti tenuti in sicurezza in conti fiduciari segregati.",
    "company-section-safety-bullet3":
      "Dati confidenziali dei clienti protetti con controlli rigorosi.",
    "company-section-safety-bullet4":
      "Capitale forte mantenuto per soddisfare le normative.",
  },
  jp: {
    "company-section-safety-badge": "あなたのセキュリティが重要です",
    "company-section-safety-title": "セキュリティ",
    "company-section-safety-description":
      "OQtimaでは、お客様のセキュリティが最優先です。厳格な規制基準の下で運営し、分離されたアカウントで顧客資金を保護し、お客様のデータがプライベートで安全であることを保証します。",
    "company-section-safety-bullet1":
      "完全に規制され、コンプライアンスのための定期的な監査を受けています。",
    "company-section-safety-bullet2":
      "顧客資金は分離された信託口座に安全に保管されています。",
    "company-section-safety-bullet3":
      "機密顧客データは厳格なコントロールで保護されています。",
    "company-section-safety-bullet4":
      "規制を満たすために強固な資本が維持されています。",
  },
  my: {
    "company-section-safety-badge": "Keselamatan Anda Penting",
    "company-section-safety-title": "Keselamatan",
    "company-section-safety-description":
      "Di OQtima, keselamatan anda adalah keutamaan. Kami beroperasi di bawah piawaian pengawalseliaan yang ketat, melindungi dana pelanggan dalam akaun berasingan, dan memastikan data anda kekal peribadi dan selamat.",
    "company-section-safety-bullet1":
      "Sepenuhnya dikawal selia dan diaudit secara berkala untuk pematuhan.",
    "company-section-safety-bullet2":
      "Dana pelanggan disimpan dengan selamat dalam akaun amanah berasingan.",
    "company-section-safety-bullet3":
      "Data pelanggan sulit dilindungi dengan kawalan ketat.",
    "company-section-safety-bullet4":
      "Modal yang kukuh dikekalkan untuk memenuhi peraturan.",
  },
  th: {
    "company-section-safety-badge": "ความปลอดภัยของคุณสำคัญ",
    "company-section-safety-title": "ความปลอดภัย",
    "company-section-safety-description":
      "ที่ OQtima ความปลอดภัยของคุณมาก่อน เราดำเนินงานภายใต้มาตรฐานการกำกับดูแลที่เข้มงวด ปกป้องเงินทุนของลูกค้าในบัญชีแยก และรับรองว่าข้อมูลของคุณจะยังคงเป็นส่วนตัวและปลอดภัย",
    "company-section-safety-bullet1":
      "ได้รับการควบคุมดูแลอย่างเต็มรูปแบบและตรวจสอบอย่างสม่ำเสมอเพื่อความสอดคล้อง",
    "company-section-safety-bullet2":
      "เงินทุนของลูกค้าถูกเก็บรักษาอย่างปลอดภัยในบัญชีทรัสต์แยก",
    "company-section-safety-bullet3":
      "ข้อมูลลับของลูกค้าได้รับการปกป้องด้วยการควบคุมที่เข้มงวด",
    "company-section-safety-bullet4":
      "รักษาเงินทุนที่แข็งแกร่งเพื่อให้สอดคล้องกับกฎระเบียบ",
  },
  vn: {
    "company-section-safety-badge": "Bảo Mật Của Bạn Quan Trọng",
    "company-section-safety-title": "Bảo Mật",
    "company-section-safety-description":
      "Tại OQtima, bảo mật của bạn là ưu tiên hàng đầu. Chúng tôi hoạt động dưới các tiêu chuẩn quy định nghiêm ngặt, bảo vệ tiền của khách hàng trong các tài khoản riêng biệt và đảm bảo dữ liệu của bạn luôn được bảo mật và an toàn.",
    "company-section-safety-bullet1":
      "Được quy định đầy đủ và kiểm toán thường xuyên để tuân thủ.",
    "company-section-safety-bullet2":
      "Tiền của khách hàng được giữ an toàn trong các tài khoản ủy thác riêng biệt.",
    "company-section-safety-bullet3":
      "Dữ liệu bí mật của khách hàng được bảo vệ bằng các biện pháp kiểm soát nghiêm ngặt.",
    "company-section-safety-bullet4":
      "Duy trì vốn mạnh để đáp ứng các quy định.",
  },
  zh: {
    "company-section-safety-badge": "您的安全至关重要",
    "company-section-safety-title": "安全",
    "company-section-safety-description":
      "在OQtima，您的安全是第一位的。我们在严格的监管标准下运营，在隔离账户中保护客户资金，并确保您的数据保持私密和安全。",
    "company-section-safety-bullet1": "完全受监管并定期进行合规审计。",
    "company-section-safety-bullet2": "客户资金安全存放在隔离信托账户中。",
    "company-section-safety-bullet3": "客户机密数据受到严格控制保护。",
    "company-section-safety-bullet4": "维持强劲资本以满足监管要求。",
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

    // Update the company safety translations
    Object.keys(TRANSLATIONS[lang]).forEach((key) => {
      data[key] = TRANSLATIONS[lang][key];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(
      `✅ Updated ${lang}: Added ${
        Object.keys(TRANSLATIONS[lang]).length
      } company safety keys`
    );
  } catch (error) {
    console.error(`❌ Error updating ${lang}:`, error.message);
  }
}

console.log("🚀 Updating company safety translations...\n");

LANGUAGES.forEach(updateLanguageFile);

console.log("\n✨ Company safety translation update completed!");
