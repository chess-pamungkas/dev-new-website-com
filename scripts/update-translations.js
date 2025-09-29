#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Define the unused keys to remove
const UNUSED_KEYS = [
  "header-nav-tab-platforms-desc",
  "header-nav-tab-platforms-general-desc",
  "header-nav-tab-trading-education-how-to-videos-title",
  "header-nav-tab-trading-education-how-to-videos-desc",
  "header-nav-tab-trading-trading-tools-tradeview-title",
  "header-nav-tab-trading-trading-tools-tradeview-desc",
  "header-nav-tab-trading-trading-tools-economic-calendar-title",
  "header-nav-tab-trading-trading-tools-economic-calendar-desc",
  "header-nav-tab-trading-trading-tools-market-sentiment-tools-title",
  "header-nav-tab-trading-trading-tools-market-sentiment-tools-desc",
  "header-nav-tab-trading-education-title",
  "header-nav-tab-trading-education-desc",
  "header-nav-tab-trading-copy-trading-title",
  "header-nav-tab-trading-copy-trading-desc",
  "header-nav-tab-trading-why-trade-with-title",
  "header-nav-tab-trading-why-trade-with-desc",
  "header-nav-tab-partners-affiliate-partnership-title",
  "header-nav-tab-partners-affiliate-partnership-desc",
  "cookie_policy_search_placeholder",
  "cookie_policy_mobile_search_placeholder",
];

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

// Define translations for each language
const TRANSLATIONS = {
  ar: {
    "header-nav-tab-top-markets": "المنتجات",
    "footer-nav-tab-top-markets": "أهم الأسواق",
    "header-nav-tab-top-markets-indices-title": "المؤشرات",
    "header-nav-tab-top-markets-indices-desc":
      "تداول أوسع نطاق من المؤشرات في الصناعة",
    "header-nav-tab-top-markets-forex-title": "الفوركس",
    "header-nav-tab-top-markets-forex-desc":
      "{{ forex-currency-pairs }} أزواج عملات للتداول 24/5",
    "header-nav-tab-top-markets-metals-title": "المعادن",
    "header-nav-tab-top-markets-metals-desc":
      "احصل على تعرض للتقلبات عبر أهم المعادن الثمينة.",
    "header-nav-tab-top-markets-shares-title": "الأسهم",
    "header-nav-tab-top-markets-shares-desc":
      "تداول أكثر الأسهم المطلوبة بقوة عقود الفروقات الآن",
    "header-nav-tab-top-markets-energies-title": "الطاقة",
    "header-nav-tab-top-markets-energies-desc":
      "خام غرب تكساس الوسيط، برنت والمزيد",
    "header-nav-tab-top-markets-allmarkets-title": "نظرة عامة على جميع الأسواق",
    "header-nav-tab-top-markets-allmarkets-desc":
      "نظرة عامة على الأسواق التي يمكنك التداول بها مع أوكتيما",
    "header-nav-tab-top-markets-crypto-title-fsa": "العملات الرقمية",
    "header-nav-tab-top-markets-crypto-desc-fsa":
      "تداول أزواج العملات الرقمية مع أهم العملات في العالم",
    "header-nav-tab-platforms-title": "المنصات",
    "header-nav-tab-platforms-general-title": "نظرة عامة",
    "header-nav-tab-platforms-mt4-title": "MT4",
    "header-nav-tab-platforms-mt4-desc":
      "قم بالتحميل والتداول باستخدام MT4، أشهر منصة في العالم",
    "header-nav-tab-platforms-mt5-title": "MT5",
    "header-nav-tab-platforms-mt5-desc":
      "مستقبل منصات ميتاكوت. اكتشف الميزات الجديدة المحسنة على MT5",
    "header-nav-tab-platforms-ctrader-title": "cTrader",
    "header-nav-tab-platforms-ctrader-desc":
      "ميزات تداول متقدمة، تداول الفوركس بسلاسة عند أطراف أصابعك مع cTrader.",
    "header-nav-tab-trading": "التداول",
    "header-nav-tab-trading-funding-withdrawals-title": "التمويل والسحب",
    "header-nav-tab-trading-funding-withdrawals-desc": "آمن، سريع وسهل",
    "header-nav-tab-trading-funding-withdrawals-spreads-title":
      "الفروق والرسوم",
    "header-nav-tab-trading-funding-withdrawals-spreads-desc":
      "شفافة قدر الإمكان",
    "header-nav-tab-trading-funding-withdrawals-accounts-title":
      "أنواع الحسابات",
    "header-nav-tab-trading-funding-withdrawals-accounts-desc":
      "تقدم أوكتيما لك نهج مرن للتداول",
    "header-nav-tab-trading-trading-tools-title": "أدوات التداول",
    "header-nav-tab-trading-trading-tools-desc": "الأدوات للنجاح",
    "header-nav-tab-company": "مركز التداول",
    "header-nav-tab-company-about-title": "حول",
    "header-nav-tab-company-about-desc": "اكتشف، لماذا أوكتيما؟",
    "header-nav-tab-company-contact-title": "اتصل بنا",
    "header-nav-tab-company-contact-desc": "طرق متعددة للتواصل معنا",
    "header-nav-tab-company-legal-title": "قانوني",
    "header-nav-tab-company-legal-desc": "طريقة تنظيمنا مهمة",
    "header-nav-tab-company-help-center-title":
      "مركز المساعدة (الأسئلة الشائعة)",
    "header-nav-tab-company-help-center-desc": "كيف يمكننا المساعدة؟",
    "header-nav-tab-partners-fsa": "الشركاء",
    "header-nav-tab-partners-collaboration-partnership-title-fsa":
      "الوسطاء المقدمون (IB)",
    "header-nav-tab-partners-collaboration-partnership-desc-fsa":
      "شراكة مع وسيط عالي التحويل وموثوق",
    "cookie-title": "مركز تفضيلات الخصوصية",
    "cookie-description":
      "عندما تزور أي موقع ويب، قد يخزن أو يسترد معلومات في متصفحك، غالبًا في شكل ملفات تعريف الارتباط. قد تكون هذه المعلومات عنك، أو تفضيلاتك، أو جهازك وتستخدم في الغالب لجعل الموقع يعمل كما تتوقع. لا تحدد المعلومات عادة هويتك مباشرة، ولكن يمكن أن تمنحك تجربة ويب أكثر تخصيصًا. لأننا نحترم حقك في الخصوصية، يمكنك اختيار عدم السماح ببعض أنواع ملفات تعريف الارتباط. انقر على عناوين الفئات المختلفة لمعرفة المزيد وتغيير الإعدادات الافتراضية. ومع ذلك، قد يؤثر حظر بعض أنواع ملفات تعريف الارتباط على تجربتك للموقع والخدمات التي يمكننا تقديمها.",
    "cookie-consent-title": "إدارة تفضيلات الموافقة",
    "cookie-consent-btn": "السماح للجميع",
    "cookie-consent-close-btn": "إغلاق",
    "cookie-consent-confirm-btn": "تأكيد اختياري",
    "cookie-necessary": "ملفات تعريف الارتباط الضرورية تمامًا",
    "cookie-performance": "ملفات تعريف الارتباط للأداء",
    "cookie-segmentation": "ملفات تعريف الارتباط للتقسيم",
    "cookie-popup-body":
      'بالنقر على "قبول الكل"، توافق على تخزين ملفات تعريف الارتباط على جهازك لتحسين التنقل في الموقع وتجربة المستخدم، وتحليل استخدام الموقع، وتقديم تجربة مخصصة.',
    "cookie-popup-bnt-learn-more": "تعلم المزيد",
    "cookie-popup-bnt-accept-all": "قبول الكل",
    cookie_policy_table_header_company: "الشركة",
    cookie_policy_table_header_cookies: "ملفات تعريف الارتباط",
    cookie_policy_table_header_opt_out: "خيار إلغاء الاشتراك",
    cookie_policy_mobile_cookies: "ملفات تعريف الارتباط",
    cookie_policy_mobile_opt_out: "خيار إلغاء الاشتراك",
    "index_main-promotion-title": "تكاليف أفضل،\nتداول عالمي أفضل",
    "index_main-promotion-animated-text-forex-traders": "متداولو الفوركس",
    "index_main-promotion-animated-text-day-traders": "متداولو اليوم",
    "index_main-promotion-animated-text-day-trader": "متداول اليوم",
    "index_main-promotion-animated-text-quant-traders": "متداولو الكم",
    "index_main-promotion-animated-text-crypto-traders-fsa":
      "متداولو العملات الرقمية",
    "index_main-promotion-animated-text-stock-traders": "متداولو الأسهم",
    "index_main-promotion-animated-text-ea-traders": "متداولو EA",
    "index_main-promotion-animated-text-ea-users": "مستخدمو EA",
    "index_main-promotion-animated-text-expert-traders": "متداولو خبراء",
    "index_main-promotion-animated-text-mt4-mt5-passionate":
      "شغوفون بـ MT4 – MT5",
    "index_main-promotion-animated-text-mt4-and-mt5-graduates":
      "خريجو MT4 و MT5",
    "index_main-promotion-animated-text-crypto-cfds-enthusiast":
      "متحمسون لعقود الفروقات للعملات الرقمية",
    "index_main-promotion-animated-text-btc-signals-expert":
      "خبير إشارات البيتكوين",
    "index_main-promotion-animated-text-wti-and-brent-crude-oil-traders":
      "متداولو النفط الخام WTI وبرنت",
    "index_main-promotion-animated-text-natural-gas-traders":
      "متداولو الغاز الطبيعي",
    "index_main-promotion-animated-text-gold-enthusiast": "متحمس للذهب",
    "index_main-promotion-animated-text-silver-passionate": "شغوف بالفضة",
    "index_main-promotion-animated-text-ea-for-mt4-and-mt5": "EA لـ MT4 و MT5",
    "index_main-promotion-animated-text-scalpers": "المضاربون",
    "index_main-promotion-animated-text-fundamental-or-technical-traders":
      "متداولو أساسي أو تقني",
    "index_main-promotion-animated-text-novices-to-trading":
      "مبتدئون في التداول",
    "index_main-promotion-animated-text-traders-looking-for-education":
      "متداولون يبحثون عن التعليم",
    "index_main-promotion-animated-text-traders-ready-to-graduate-to-the-next-level":
      "متداولون مستعدون للتخرج إلى المستوى التالي",
    "index_main-promotion-animated-text-you": "أنت",
    "index_main-promotion-hero-gianluigi-buffon-name": "جيانلويجي بوفون",
    "index_main-promotion-hero-gianluigi-buffon-text-fsa":
      "أسطورة بطل كأس العالم ومتداول شغوف: يستخدم أوكتيما للتداول",
    "index_main-promotion-hero-sea-name": "سي",
    "index_main-promotion-hero-sea-text":
      "أسطورة بطل العالم - سفير علامة أوكتيما التجارية",
    "index_main-promotion-hero-europe-name": "أوروبا",
    "index_main-promotion-hero-europe-text":
      "أسطورة بطل العالم - سفير علامة أوكتيما التجارية",
    "index_main-promotion-hero-south-africa-name": "جنوب أفريقيا",
    "index_main-promotion-hero-south-africa-text":
      "أسطورة بطل العالم - سفير علامة أوكتيما التجارية",
    "index_main-promotion-hero-japan-name": "اليابان",
    "index_main-promotion-hero-japan-text":
      "أسطورة بطل العالم - سفير علامة أوكتيما التجارية",
    "index_main-promotion-hero-australia-name": "أستراليا",
    "index_main-promotion-hero-australia-text":
      "أسطورة بطل العالم - سفير علامة أوكتيما التجارية",
    "index_main-promotion-badge": "الوصول إلى الأسواق العالمية",
    "index_main-promotion-subtitle":
      "تداول بأقل عمولة تبلغ 1.5 دولار فقط لكل جانب واستمتع بفروق أسعار ضيقة باستمرار من 0.0.",
    "index_main-promotion-warning":
      "عقود الفروقات هي أدوات معقدة وتأتي مع مخاطر عالية لخسارة المال",
    "index_main-promotion-reviews": "436 مراجعة على",
    "index_trading-ticker-section-crypto": "العملات الرقمية",
    "index_trading-ticker-section-forex": "الفوركس",
    "index_trading-ticker-section-indices": "المؤشرات",
    "index_trading-ticker-section-energies": "الطاقة",
    "index_trading-ticker-section-metals": "المعادن",
    "index_trading-ticker-section-shares": "الأسهم",
    "index_trading-ticker-section-etf": "ETF",
    "index_trading-ticker-buy": "شراء",
    "index_trading-ticker-sell": "بيع",
    "index_trading-ticker-bid": "عرض",
    "index_trading-ticker-ask": "طلب",
    "index_trading-ticker-spread": "الفارق",
    "index_trade-with-promotion-title": "تداول الآن مع",
    "trade-with-promotion-title-accent": "2",
    "index_trade-with-promotion-bitcoin": "البيتكوين",
    "index_trade-with-promotion-gold": "الذهب",
    "index_trade-with-promotion-silver": "الفضة",
    "index_trade-with-promotion-platinum": "البلاتين",
    "index_trade-with-promotion-crude-oil-wti": "النفط الخام WTI",
    "index_trade-with-promotion-crude-oil": "النفط الخام",
    "index_trade-with-promotion-brent-oil": "نفط برنت",
    "index_trade-with-promotion-soybean": "فول الصويا",
    "index_trade-with-promotion-palladium": "البلاديوم",
    "index_trade-with-promotion-copper": "النحاس",
    "index_trade-with-promotion-coffee-arabica": "قهوة أرابيكا",
    "index_trade-with-promotion-cotton": "القطن",
    "system-page-404-title": "الصفحة غير موجودة",
    "system-page-404-subtitle":
      "الصفحة التي تبحث عنها غير متاحة — ربما تم نقلها أو تحديثها أو لا توجد.",
    "system-page-coming-soon-title": "قريبًا",
    "system-page-coming-soon-subtitle":
      "عذرًا، نحن على وشك الانتهاء من هذه الصفحة/الخدمة، ولكن ليس بعد...",
    "system-page-go-back-btn": "العودة إلى الصفحة الرئيسية",
    "system-info_badge-text": "أنت خارج المخطط.",
    "legal_documents-btn": "عرض PDF",
  },
  br: {
    "header-nav-tab-top-markets": "Produtos",
    "footer-nav-tab-top-markets": "Principais Mercados",
    "header-nav-tab-top-markets-indices-title": "Índices",
    "header-nav-tab-top-markets-indices-desc":
      "Negocie uma das maiores gamas de Índices da indústria",
    "header-nav-tab-top-markets-forex-title": "Forex",
    "header-nav-tab-top-markets-forex-desc":
      "{{ forex-currency-pairs }} Pares de moedas para negociar 24/5",
    "header-nav-tab-top-markets-metals-title": "Metais",
    "header-nav-tab-top-markets-metals-desc":
      "Obtenha exposição à volatilidade através dos metais preciosos mais quentes.",
    "header-nav-tab-top-markets-shares-title": "Ações",
    "header-nav-tab-top-markets-shares-desc":
      "Negocie as ações mais procuradas com o poder dos CFDs agora",
    "header-nav-tab-top-markets-energies-title": "Energias",
    "header-nav-tab-top-markets-energies-desc": "WTI, Brent e mais",
    "header-nav-tab-top-markets-allmarkets-title":
      "Visão Geral de Todos os Mercados",
    "header-nav-tab-top-markets-allmarkets-desc":
      "Uma visão geral dos mercados que você pode negociar com a OQtima",
    "header-nav-tab-top-markets-crypto-title-fsa": "Crypto",
    "header-nav-tab-top-markets-crypto-desc-fsa":
      "Negocie pares de criptomoedas com as moedas mais importantes do mundo",
    "header-nav-tab-platforms-title": "Plataformas",
    "header-nav-tab-platforms-general-title": "Visão Geral",
    "header-nav-tab-platforms-mt4-title": "MT4",
    "header-nav-tab-platforms-mt4-desc":
      "Baixe e negocie com MT4, a plataforma mais popular do mundo",
    "header-nav-tab-platforms-mt5-title": "MT5",
    "header-nav-tab-platforms-mt5-desc":
      "O futuro das plataformas Metaquote. Encontre os novos recursos aprimorados no MT5",
    "header-nav-tab-platforms-ctrader-title": "cTrader",
    "header-nav-tab-platforms-ctrader-desc":
      "Recursos de negociação avançados, negociação forex perfeita na ponta dos seus dedos com cTrader.",
    "header-nav-tab-trading": "Negociação",
    "header-nav-tab-trading-funding-withdrawals-title":
      "Financiamento e Saques",
    "header-nav-tab-trading-funding-withdrawals-desc": "Seguro, rápido e fácil",
    "header-nav-tab-trading-funding-withdrawals-spreads-title":
      "Spreads e Taxas",
    "header-nav-tab-trading-funding-withdrawals-spreads-desc":
      "Tão transparente quanto possível",
    "header-nav-tab-trading-funding-withdrawals-accounts-title":
      "Tipos de Conta",
    "header-nav-tab-trading-funding-withdrawals-accounts-desc":
      "A OQtima oferece uma abordagem flexível para negociar",
    "header-nav-tab-trading-trading-tools-title": "Ferramentas de Negociação",
    "header-nav-tab-trading-trading-tools-desc": "Ferramentas para o sucesso",
    "header-nav-tab-company": "Hub de Trading",
    "header-nav-tab-company-about-title": "Sobre",
    "header-nav-tab-company-about-desc": "Descubra, por que a OQtima?",
    "header-nav-tab-company-contact-title": "Entre em contato",
    "header-nav-tab-company-contact-desc":
      "Múltiplas formas de entrar em contato conosco",
    "header-nav-tab-company-legal-title": "Legal",
    "header-nav-tab-company-legal-desc":
      "A forma como somos regulamentados importa",
    "header-nav-tab-company-help-center-title": "Central de Ajuda (F.A.Q)",
    "header-nav-tab-company-help-center-desc": "Como podemos ajudar?",
    "header-nav-tab-partners-fsa": "Parceiros",
    "header-nav-tab-partners-collaboration-partnership-title-fsa":
      "Introducing Brokers (IB)",
    "header-nav-tab-partners-collaboration-partnership-desc-fsa":
      "Seja parceiro de uma corretora de alta conversão e respeitável",
    "cookie-title": "Centro de Preferências de Privacidade",
    "cookie-description":
      "Quando você visita qualquer site, ele pode armazenar ou recuperar informações no seu navegador, principalmente na forma de cookies. Essas informações podem ser sobre você, suas preferências ou seu dispositivo e são usadas principalmente para fazer o site funcionar como você espera. As informações geralmente não o identificam diretamente, mas podem dar a você uma experiência web mais personalizada. Como respeitamos seu direito à privacidade, você pode escolher não permitir alguns tipos de cookies. Clique nos diferentes cabeçalhos de categoria para saber mais e alterar nossas configurações padrão. No entanto, bloquear alguns tipos de cookies pode afetar sua experiência do site e os serviços que podemos oferecer.",
    "cookie-consent-title": "Gerenciar Preferências de Consentimento",
    "cookie-consent-btn": "Permitir todos",
    "cookie-consent-close-btn": "Fechar",
    "cookie-consent-confirm-btn": "Confirmar minha escolha",
    "cookie-necessary": "Cookies estritamente necessários",
    "cookie-performance": "Cookies de Performance",
    "cookie-segmentation": "Cookies de Segmentação",
    "cookie-popup-body":
      'Ao clicar em "Aceitar Todos", você concorda em armazenar cookies no seu dispositivo para melhorar a navegação do site e a experiência do usuário, analisar o uso do site e oferecer uma experiência personalizada.',
    "cookie-popup-bnt-learn-more": "Saiba Mais",
    "cookie-popup-bnt-accept-all": "Aceitar todos",
    cookie_policy_table_header_company: "Empresa",
    cookie_policy_table_header_cookies: "Cookies",
    cookie_policy_table_header_opt_out: "Opção de Opt-out",
    cookie_policy_mobile_cookies: "Cookies",
    cookie_policy_mobile_opt_out: "Opção de Opt-out",
    "index_main-promotion-title": "Custos Melhores,\nNegociação Global Melhor",
    "index_main-promotion-animated-text-forex-traders": "Traders de Forex",
    "index_main-promotion-animated-text-day-traders": "Traders Diários",
    "index_main-promotion-animated-text-day-trader": "Trader Diário",
    "index_main-promotion-animated-text-quant-traders": "Traders Quant",
    "index_main-promotion-animated-text-crypto-traders-fsa":
      "Traders de Crypto",
    "index_main-promotion-animated-text-stock-traders": "Traders de Ações",
    "index_main-promotion-animated-text-ea-traders": "Traders de EA",
    "index_main-promotion-animated-text-ea-users": "Usuários de EA",
    "index_main-promotion-animated-text-expert-traders":
      "Traders Especialistas",
    "index_main-promotion-animated-text-mt4-mt5-passionate":
      "Apaixonados por MT4 – MT5",
    "index_main-promotion-animated-text-mt4-and-mt5-graduates":
      "Formados em MT4 e MT5",
    "index_main-promotion-animated-text-crypto-cfds-enthusiast":
      "Entusiastas de CFDs de Crypto",
    "index_main-promotion-animated-text-btc-signals-expert":
      "Especialista em Sinais BTC",
    "index_main-promotion-animated-text-wti-and-brent-crude-oil-traders":
      "Traders de Petróleo Bruto WTI e Brent",
    "index_main-promotion-animated-text-natural-gas-traders":
      "Traders de Gás Natural",
    "index_main-promotion-animated-text-gold-enthusiast": "Entusiasta de Ouro",
    "index_main-promotion-animated-text-silver-passionate":
      "Apaixonado por Prata",
    "index_main-promotion-animated-text-ea-for-mt4-and-mt5":
      "EA para MT4 e MT5",
    "index_main-promotion-animated-text-scalpers": "Scalpers",
    "index_main-promotion-animated-text-fundamental-or-technical-traders":
      "Traders Fundamentalistas ou Técnicos",
    "index_main-promotion-animated-text-novices-to-trading":
      "Iniciantes em Negociação",
    "index_main-promotion-animated-text-traders-looking-for-education":
      "Traders Procurando Educação",
    "index_main-promotion-animated-text-traders-ready-to-graduate-to-the-next-level":
      "Traders Prontos para Graduar para o Próximo Nível",
    "index_main-promotion-animated-text-you": "Você",
    "index_main-promotion-hero-gianluigi-buffon-name": "Gianluigi Buffon",
    "index_main-promotion-hero-gianluigi-buffon-text-fsa":
      "Lenda Campeã da Copa do Mundo e Trader Apaixonado: Usa OQtima para negociar",
    "index_main-promotion-hero-sea-name": "Sea",
    "index_main-promotion-hero-sea-text":
      "Lenda Campeã Mundial - Embaixador da Marca OQtima",
    "index_main-promotion-hero-europe-name": "Europa",
    "index_main-promotion-hero-europe-text":
      "Lenda Campeã Mundial - Embaixador da Marca OQtima",
    "index_main-promotion-hero-south-africa-name": "África do Sul",
    "index_main-promotion-hero-south-africa-text":
      "Lenda Campeã Mundial - Embaixador da Marca OQtima",
    "index_main-promotion-hero-japan-name": "Japão",
    "index_main-promotion-hero-japan-text":
      "Lenda Campeã Mundial - Embaixador da Marca OQtima",
    "index_main-promotion-hero-australia-name": "Austrália",
    "index_main-promotion-hero-australia-text":
      "Lenda Campeã Mundial - Embaixador da Marca OQtima",
    "index_main-promotion-badge": "Acesso aos Mercados Globais",
    "index_main-promotion-subtitle":
      "Negocie com a menor comissão de apenas $1,5 por lado e desfrute de spreads consistentemente apertados a partir de 0,0.",
    "index_main-promotion-warning":
      "CFDs são instrumentos complexos e vêm com alto risco de perda de dinheiro",
    "index_main-promotion-reviews": "436 avaliações no",
    "index_trading-ticker-section-crypto": "Crypto",
    "index_trading-ticker-section-forex": "Forex",
    "index_trading-ticker-section-indices": "Índices",
    "index_trading-ticker-section-energies": "Energias",
    "index_trading-ticker-section-metals": "Metais",
    "index_trading-ticker-section-shares": "Ações",
    "index_trading-ticker-section-etf": "ETF",
    "index_trading-ticker-buy": "Comprar",
    "index_trading-ticker-sell": "Vender",
    "index_trading-ticker-bid": "Oferta",
    "index_trading-ticker-ask": "Demanda",
    "index_trading-ticker-spread": "Spread",
    "index_trade-with-promotion-title": "Negocie agora com",
    "trade-with-promotion-title-accent": "2",
    "index_trade-with-promotion-bitcoin": "Bitcoin",
    "index_trade-with-promotion-gold": "Ouro",
    "index_trade-with-promotion-silver": "Prata",
    "index_trade-with-promotion-platinum": "Platina",
    "index_trade-with-promotion-crude-oil-wti": "Petróleo Bruto WTI",
    "index_trade-with-promotion-crude-oil": "Petróleo Bruto",
    "index_trade-with-promotion-brent-oil": "Petróleo Brent",
    "index_trade-with-promotion-soybean": "Soja",
    "index_trade-with-promotion-palladium": "Paládio",
    "index_trade-with-promotion-copper": "Cobre",
    "index_trade-with-promotion-coffee-arabica": "Café Arábica",
    "index_trade-with-promotion-cotton": "Algodão",
    "system-page-404-title": "Página não encontrada",
    "system-page-404-subtitle":
      "A página que você está procurando não está disponível — pode ter sido movida, atualizada ou não existe.",
    "system-page-coming-soon-title": "Em Breve",
    "system-page-coming-soon-subtitle":
      "Ops, estamos quase prontos com esta página/serviço, mas ainda não...",
    "system-page-go-back-btn": "Voltar à Página Inicial",
    "system-info_badge-text": "Você está fora do gráfico.",
    "legal_documents-btn": "Ver PDF",
  },
  cn: {
    "header-nav-tab-company": "交易中心",
    "footer-nav-tab-top-markets": "主要市场",
    "header-nav-tab-top-markets": "产品",
    "header-nav-tab-platforms-title": "平台",
    "header-nav-tab-trading": "交易",
    "header-nav-tab-partners-fsa": "合作伙伴",
    "system-page-go-back-btn": "返回首页",
    "system-info_badge-text": "你超出了图表范围。",
    "legal_documents-btn": "查看PDF",
  },
  es: {
    "header-nav-tab-company": "Centro de Trading",
    "footer-nav-tab-top-markets": "Principales Mercados",
    "header-nav-tab-top-markets": "Productos",
    "header-nav-tab-platforms-title": "Plataformas",
    "header-nav-tab-trading": "Trading",
    "header-nav-tab-partners-fsa": "Socios",
    "system-page-go-back-btn": "Volver al Inicio",
    "system-info_badge-text": "Estás fuera del gráfico.",
    "legal_documents-btn": "Ver PDF",
  },
  fr: {
    "header-nav-tab-company": "Hub de Trading",
    "footer-nav-tab-top-markets": "Principaux Marchés",
    "header-nav-tab-top-markets": "Produits",
    "header-nav-tab-platforms-title": "Plateformes",
    "header-nav-tab-trading": "Trading",
    "header-nav-tab-partners-fsa": "Partenaires",
    "system-page-go-back-btn": "Retour à l'Accueil",
    "system-info_badge-text": "Vous êtes hors du graphique.",
    "legal_documents-btn": "Voir PDF",
  },
  id: {
    "header-nav-tab-company": "Pusat Trading",
    "footer-nav-tab-top-markets": "Pasar Utama",
    "header-nav-tab-top-markets": "Produk",
    "header-nav-tab-platforms-title": "Platform",
    "header-nav-tab-trading": "Trading",
    "header-nav-tab-partners-fsa": "Mitra",
    "system-page-go-back-btn": "Kembali ke Beranda",
    "system-info_badge-text": "Anda berada di luar grafik.",
    "legal_documents-btn": "Lihat PDF",
  },
  it: {
    "header-nav-tab-company": "Hub di Trading",
    "footer-nav-tab-top-markets": "Mercati Principali",
    "header-nav-tab-top-markets": "Prodotti",
    "header-nav-tab-platforms-title": "Piattaforme",
    "header-nav-tab-trading": "Trading",
    "header-nav-tab-partners-fsa": "Partner",
    "system-page-go-back-btn": "Torna alla Homepage",
    "system-info_badge-text": "Sei fuori dal grafico.",
    "legal_documents-btn": "Visualizza PDF",
  },
  jp: {
    "header-nav-tab-company": "トレーディングハブ",
    "footer-nav-tab-top-markets": "主要市場",
    "header-nav-tab-top-markets": "商品",
    "header-nav-tab-platforms-title": "プラットフォーム",
    "header-nav-tab-trading": "トレーディング",
    "header-nav-tab-partners-fsa": "パートナー",
    "system-page-go-back-btn": "ホームページに戻る",
    "system-info_badge-text": "あなたはチャートの外にいます。",
    "legal_documents-btn": "PDFを表示",
  },
  my: {
    "header-nav-tab-company": "Hub Perdagangan",
    "footer-nav-tab-top-markets": "Pasaran Utama",
    "header-nav-tab-top-markets": "Produk",
    "header-nav-tab-platforms-title": "Platform",
    "header-nav-tab-trading": "Perdagangan",
    "header-nav-tab-partners-fsa": "Rakan Kongsi",
    "system-page-go-back-btn": "Kembali ke Laman Utama",
    "system-info_badge-text": "Anda berada di luar carta.",
    "legal_documents-btn": "Lihat PDF",
  },
  th: {
    "header-nav-tab-company": "ศูนย์การเทรด",
    "footer-nav-tab-top-markets": "ตลาดหลัก",
    "header-nav-tab-top-markets": "ผลิตภัณฑ์",
    "header-nav-tab-platforms-title": "แพลตฟอร์ม",
    "header-nav-tab-trading": "การเทรด",
    "header-nav-tab-partners-fsa": "พาร์ทเนอร์",
    "system-page-go-back-btn": "กลับสู่หน้าแรก",
    "system-info_badge-text": "คุณอยู่นอกกราฟ",
    "legal_documents-btn": "ดู PDF",
  },
  vn: {
    "header-nav-tab-company": "Trung Tâm Giao Dịch",
    "footer-nav-tab-top-markets": "Thị Trường Chính",
    "header-nav-tab-top-markets": "Sản Phẩm",
    "header-nav-tab-platforms-title": "Nền Tảng",
    "header-nav-tab-trading": "Giao Dịch",
    "header-nav-tab-partners-fsa": "Đối Tác",
    "system-page-go-back-btn": "Về Trang Chủ",
    "system-info_badge-text": "Bạn đang ngoài biểu đồ.",
    "legal_documents-btn": "Xem PDF",
  },
  zh: {
    "header-nav-tab-company": "交易中心",
    "footer-nav-tab-top-markets": "主要市场",
    "header-nav-tab-top-markets": "产品",
    "header-nav-tab-platforms-title": "平台",
    "header-nav-tab-trading": "交易",
    "header-nav-tab-partners-fsa": "合作伙伴",
    "system-page-go-back-btn": "返回首页",
    "system-info_badge-text": "你超出了图表范围。",
    "legal_documents-btn": "查看PDF",
  },
};

// Function to read English file and get all keys
function getEnglishKeys() {
  try {
    const englishPath = path.join(__dirname, "../src/locales/en/index.json");
    const englishContent = fs.readFileSync(englishPath, "utf8");
    const englishData = JSON.parse(englishContent);
    return englishData;
  } catch (error) {
    console.error("Error reading English file:", error);
    return {};
  }
}

// Function to remove unused keys and update translations
function updateLanguageFile(langCode, englishKeys) {
  try {
    const filePath = path.join(
      __dirname,
      `../src/locales/${langCode}/index.json`
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    // Read current language file
    const currentContent = fs.readFileSync(filePath, "utf8");
    const currentData = JSON.parse(currentContent);

    // Create new data object with same structure as English
    const newData = {};

    // Process each key from English file
    for (const [key, englishValue] of Object.entries(englishKeys)) {
      // Skip if key is in unused keys list
      if (UNUSED_KEYS.includes(key)) {
        console.log(`Removing unused key: ${key}`);
        continue;
      }

      // Use translation if available, otherwise keep existing or use English
      if (TRANSLATIONS[langCode] && TRANSLATIONS[langCode][key]) {
        newData[key] = TRANSLATIONS[langCode][key];
      } else if (currentData[key]) {
        newData[key] = currentData[key];
      } else {
        newData[key] = englishValue;
        console.log(`Using English for missing key: ${key}`);
      }
    }

    // Write updated file
    const updatedContent = JSON.stringify(newData, null, 2);
    fs.writeFileSync(filePath, updatedContent, "utf8");

    console.log(`✅ Updated ${langCode}/index.json`);
    console.log(`   - Total keys: ${Object.keys(newData).length}`);
    console.log(`   - Removed unused keys: ${UNUSED_KEYS.length}`);
  } catch (error) {
    console.error(`Error updating ${langCode}:`, error);
  }
}

// Main function
function main() {
  console.log("🚀 Starting translation update process...\n");

  // Get English keys as reference
  const englishKeys = getEnglishKeys();
  console.log(
    `📖 Loaded ${Object.keys(englishKeys).length} keys from English file\n`
  );

  // Process each language
  LANGUAGES.forEach((langCode) => {
    console.log(`🔄 Processing ${langCode}...`);
    updateLanguageFile(langCode, englishKeys);
    console.log("");
  });

  console.log("✨ Translation update process completed!");
  console.log("\n📋 Summary:");
  console.log(`   - Languages processed: ${LANGUAGES.length}`);
  console.log(`   - Unused keys removed: ${UNUSED_KEYS.length}`);
  console.log(`   - All files now have consistent key order matching English`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  updateLanguageFile,
  getEnglishKeys,
  UNUSED_KEYS,
  TRANSLATIONS,
};
