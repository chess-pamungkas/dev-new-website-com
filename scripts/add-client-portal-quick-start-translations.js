/*
  Adds/updates "Client Portal Quick Start" translations in all languages.

  Usage:
    node scripts/add-client-portal-quick-start-translations.js [--overwrite]

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
    "client-portal-assistance_onboarding_guide_badge": "Onboarding guide",
    "client-portal-assistance_quick_start_title": "Your OQtima Quick Start",
    "client-portal-assistance_quick_start_description":
      "Explore essential guides to set up, verify, and fund your OQtima account seamlessly. Get started quickly and unlock the full potential of your trading journey.",
    "client-portal-assistance_search_placeholder":
      "Search setup topics (e.g. account verification, withdrawals)",
    "client-portal-assistance_getting_started_title": "Getting Started",
    "client-portal-assistance_getting_started_create_account":
      "Create your Oqtima account",
    "client-portal-assistance_getting_started_update_password":
      "Update your password",
    "client-portal-assistance_getting_started_access_client_portal":
      "Access your client portal",
    "client-portal-assistance_verification_title": "Verification",
    "client-portal-assistance_verification_verify_identity":
      "Verify your identity",
    "client-portal-assistance_verification_submit_documents":
      "Submit required documents",
    "client-portal-assistance_verification_check_status":
      "Check verification status",
    "client-portal-assistance_funding_account_title": "Funding your account",
    "client-portal-assistance_funding_account_how_to_deposit":
      "How to make a deposit",
    "client-portal-assistance_funding_account_payment_methods":
      "Accepted Payment Methods & Processing Times",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Deposit troubleshooting",
    "client-portal-assistance_loyalty_program_title": "Loyalty Program",
    "client-portal-assistance_loyalty_program_how_it_works":
      "How the Loyalty Program Works",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Loyalty Tiers and Benefits",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Access your client portal",
  },
  ar: {
    "client-portal-assistance_onboarding_guide_badge": "دليل الانضمام",
    "client-portal-assistance_quick_start_title":
      "دليل البداية السريعة لـ OQtima",
    "client-portal-assistance_quick_start_description":
      "استكشف الأدلة الأساسية لإعداد وحساب OQtima وتمويله بسلاسة. ابدأ بسرعة واطلق العنان لإمكانات رحلة التداول الكاملة.",
    "client-portal-assistance_search_placeholder":
      "البحث عن مواضيع الإعداد (مثل التحقق من الحساب، السحوبات)",
    "client-portal-assistance_getting_started_title": "البدء",
    "client-portal-assistance_getting_started_create_account":
      "إنشاء حساب OQtima الخاص بك",
    "client-portal-assistance_getting_started_update_password":
      "تحديث كلمة المرور",
    "client-portal-assistance_getting_started_access_client_portal":
      "الوصول إلى بوابة العميل",
    "client-portal-assistance_verification_title": "التحقق",
    "client-portal-assistance_verification_verify_identity": "التحقق من هويتك",
    "client-portal-assistance_verification_submit_documents":
      "تقديم المستندات المطلوبة",
    "client-portal-assistance_verification_check_status":
      "التحقق من حالة التحقق",
    "client-portal-assistance_funding_account_title": "تمويل حسابك",
    "client-portal-assistance_funding_account_how_to_deposit":
      "كيفية إيداع الأموال",
    "client-portal-assistance_funding_account_payment_methods":
      "طرق الدفع المقبولة وأوقات المعالجة",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "حل مشاكل الإيداع",
    "client-portal-assistance_loyalty_program_title": "برنامج الولاء",
    "client-portal-assistance_loyalty_program_how_it_works":
      "كيف يعمل برنامج الولاء",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "مستويات الولاء والفوائد",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "الوصول إلى بوابة العميل",
  },
  br: {
    "client-portal-assistance_onboarding_guide_badge": "Guia de integração",
    "client-portal-assistance_quick_start_title": "Seu Guia Rápido OQtima",
    "client-portal-assistance_quick_start_description":
      "Explore guias essenciais para configurar, verificar e financiar sua conta OQtima perfeitamente. Comece rapidamente e desbloqueie todo o potencial da sua jornada de negociação.",
    "client-portal-assistance_search_placeholder":
      "Pesquisar tópicos de configuração (ex: verificação de conta, saques)",
    "client-portal-assistance_getting_started_title": "Primeiros Passos",
    "client-portal-assistance_getting_started_create_account":
      "Criar sua conta OQtima",
    "client-portal-assistance_getting_started_update_password":
      "Atualizar sua senha",
    "client-portal-assistance_getting_started_access_client_portal":
      "Acessar seu portal do cliente",
    "client-portal-assistance_verification_title": "Verificação",
    "client-portal-assistance_verification_verify_identity":
      "Verificar sua identidade",
    "client-portal-assistance_verification_submit_documents":
      "Enviar documentos necessários",
    "client-portal-assistance_verification_check_status":
      "Verificar status de verificação",
    "client-portal-assistance_funding_account_title": "Financiar sua conta",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Como fazer um depósito",
    "client-portal-assistance_funding_account_payment_methods":
      "Métodos de Pagamento Aceitos e Tempos de Processamento",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Solução de problemas de depósito",
    "client-portal-assistance_loyalty_program_title": "Programa de Fidelidade",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Como Funciona o Programa de Fidelidade",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Níveis e Benefícios de Fidelidade",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Acessar seu portal do cliente",
  },
  cn: {
    "client-portal-assistance_onboarding_guide_badge": "入门指南",
    "client-portal-assistance_quick_start_title": "您的 OQtima 快速入门",
    "client-portal-assistance_quick_start_description":
      "探索基本指南，无缝设置、验证和资助您的 OQtima 账户。快速开始并释放您交易之旅的全部潜力。",
    "client-portal-assistance_search_placeholder":
      "搜索设置主题（例如账户验证、提款）",
    "client-portal-assistance_getting_started_title": "入门指南",
    "client-portal-assistance_getting_started_create_account":
      "创建您的 OQtima 账户",
    "client-portal-assistance_getting_started_update_password": "更新您的密码",
    "client-portal-assistance_getting_started_access_client_portal":
      "访问您的客户门户",
    "client-portal-assistance_verification_title": "验证",
    "client-portal-assistance_verification_verify_identity": "验证您的身份",
    "client-portal-assistance_verification_submit_documents": "提交所需文件",
    "client-portal-assistance_verification_check_status": "检查验证状态",
    "client-portal-assistance_funding_account_title": "为您的账户注资",
    "client-portal-assistance_funding_account_how_to_deposit": "如何存款",
    "client-portal-assistance_funding_account_payment_methods":
      "接受的付款方式和处理时间",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "存款故障排除",
    "client-portal-assistance_loyalty_program_title": "忠诚计划",
    "client-portal-assistance_loyalty_program_how_it_works": "忠诚计划如何运作",
    "client-portal-assistance_loyalty_program_tiers_benefits": "忠诚等级和福利",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "访问您的客户门户",
  },
  es: {
    "client-portal-assistance_onboarding_guide_badge": "Guía de incorporación",
    "client-portal-assistance_quick_start_title": "Tu Inicio Rápido OQtima",
    "client-portal-assistance_quick_start_description":
      "Explora guías esenciales para configurar, verificar y financiar tu cuenta OQtima sin problemas. Comienza rápidamente y desbloquea todo el potencial de tu viaje comercial.",
    "client-portal-assistance_search_placeholder":
      "Buscar temas de configuración (ej: verificación de cuenta, retiros)",
    "client-portal-assistance_getting_started_title": "Primeros Pasos",
    "client-portal-assistance_getting_started_create_account":
      "Crea tu cuenta OQtima",
    "client-portal-assistance_getting_started_update_password":
      "Actualiza tu contraseña",
    "client-portal-assistance_getting_started_access_client_portal":
      "Accede a tu portal del cliente",
    "client-portal-assistance_verification_title": "Verificación",
    "client-portal-assistance_verification_verify_identity":
      "Verifica tu identidad",
    "client-portal-assistance_verification_submit_documents":
      "Envía los documentos necesarios",
    "client-portal-assistance_verification_check_status":
      "Verifica el estado de verificación",
    "client-portal-assistance_funding_account_title": "Financiar tu cuenta",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Cómo hacer un depósito",
    "client-portal-assistance_funding_account_payment_methods":
      "Métodos de Pago Aceptados y Tiempos de Procesamiento",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Solución de problemas de depósito",
    "client-portal-assistance_loyalty_program_title": "Programa de Lealtad",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Cómo Funciona el Programa de Lealtad",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Niveles y Beneficios de Lealtad",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Accede a tu portal del cliente",
  },
  fr: {
    "client-portal-assistance_onboarding_guide_badge": "Guide d'intégration",
    "client-portal-assistance_quick_start_title":
      "Votre Démarrage Rapide OQtima",
    "client-portal-assistance_quick_start_description":
      "Explorez les guides essentiels pour configurer, vérifier et financer votre compte OQtima en toute simplicité. Commencez rapidement et débloquez tout le potentiel de votre parcours de trading.",
    "client-portal-assistance_search_placeholder":
      "Rechercher des sujets de configuration (ex: vérification de compte, retraits)",
    "client-portal-assistance_getting_started_title": "Pour Commencer",
    "client-portal-assistance_getting_started_create_account":
      "Créez votre compte OQtima",
    "client-portal-assistance_getting_started_update_password":
      "Mettez à jour votre mot de passe",
    "client-portal-assistance_getting_started_access_client_portal":
      "Accédez à votre portail client",
    "client-portal-assistance_verification_title": "Vérification",
    "client-portal-assistance_verification_verify_identity":
      "Vérifiez votre identité",
    "client-portal-assistance_verification_submit_documents":
      "Soumettez les documents requis",
    "client-portal-assistance_verification_check_status":
      "Vérifiez le statut de vérification",
    "client-portal-assistance_funding_account_title": "Financer votre compte",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Comment effectuer un dépôt",
    "client-portal-assistance_funding_account_payment_methods":
      "Méthodes de Paiement Acceptées et Délais de Traitement",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Dépannage des dépôts",
    "client-portal-assistance_loyalty_program_title": "Programme de Fidélité",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Comment Fonctionne le Programme de Fidélité",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Niveaux et Avantages de Fidélité",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Accédez à votre portail client",
  },
  id: {
    "client-portal-assistance_onboarding_guide_badge": "Panduan onboarding",
    "client-portal-assistance_quick_start_title": "Panduan Cepat OQtima Anda",
    "client-portal-assistance_quick_start_description":
      "Jelajahi panduan penting untuk mengatur, memverifikasi, dan mendanai akun OQtima Anda dengan mulus. Mulai dengan cepat dan buka potensi penuh perjalanan trading Anda.",
    "client-portal-assistance_search_placeholder":
      "Cari topik pengaturan (mis. verifikasi akun, penarikan)",
    "client-portal-assistance_getting_started_title": "Memulai",
    "client-portal-assistance_getting_started_create_account":
      "Buat akun OQtima Anda",
    "client-portal-assistance_getting_started_update_password":
      "Perbarui kata sandi Anda",
    "client-portal-assistance_getting_started_access_client_portal":
      "Akses portal klien Anda",
    "client-portal-assistance_verification_title": "Verifikasi",
    "client-portal-assistance_verification_verify_identity":
      "Verifikasi identitas Anda",
    "client-portal-assistance_verification_submit_documents":
      "Kirim dokumen yang diperlukan",
    "client-portal-assistance_verification_check_status":
      "Periksa status verifikasi",
    "client-portal-assistance_funding_account_title": "Mendanai akun Anda",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Cara melakukan deposit",
    "client-portal-assistance_funding_account_payment_methods":
      "Metode Pembayaran yang Diterima & Waktu Pemrosesan",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Pemecahan masalah deposit",
    "client-portal-assistance_loyalty_program_title": "Program Loyalitas",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Cara Kerja Program Loyalitas",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Tingkat dan Manfaat Loyalitas",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Akses portal klien Anda",
  },
  it: {
    "client-portal-assistance_onboarding_guide_badge": "Guida di onboarding",
    "client-portal-assistance_quick_start_title": "La Tua Guida Rapida OQtima",
    "client-portal-assistance_quick_start_description":
      "Esplora le guide essenziali per configurare, verificare e finanziare il tuo conto OQtima senza problemi. Inizia rapidamente e sblocca tutto il potenziale del tuo viaggio di trading.",
    "client-portal-assistance_search_placeholder":
      "Cerca argomenti di configurazione (es: verifica account, prelievi)",
    "client-portal-assistance_getting_started_title": "Per Iniziare",
    "client-portal-assistance_getting_started_create_account":
      "Crea il tuo account OQtima",
    "client-portal-assistance_getting_started_update_password":
      "Aggiorna la tua password",
    "client-portal-assistance_getting_started_access_client_portal":
      "Accedi al tuo portale clienti",
    "client-portal-assistance_verification_title": "Verifica",
    "client-portal-assistance_verification_verify_identity":
      "Verifica la tua identità",
    "client-portal-assistance_verification_submit_documents":
      "Invia i documenti richiesti",
    "client-portal-assistance_verification_check_status":
      "Controlla lo stato di verifica",
    "client-portal-assistance_funding_account_title":
      "Finanziare il tuo account",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Come effettuare un deposito",
    "client-portal-assistance_funding_account_payment_methods":
      "Metodi di Pagamento Accettati e Tempi di Elaborazione",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Risoluzione dei problemi di deposito",
    "client-portal-assistance_loyalty_program_title": "Programma Fedeltà",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Come Funziona il Programma Fedeltà",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Livelli e Vantaggi Fedeltà",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Accedi al tuo portale clienti",
  },
  jp: {
    "client-portal-assistance_onboarding_guide_badge": "オンボーディングガイド",
    "client-portal-assistance_quick_start_title": "OQtima クイックスタート",
    "client-portal-assistance_quick_start_description":
      "OQtimaアカウントをシームレスにセットアップ、検証、資金提供するための重要なガイドを探索してください。迅速に始めて、取引の旅の全ポテンシャルを解き放ちましょう。",
    "client-portal-assistance_search_placeholder":
      "セットアップトピックを検索（例：アカウント検証、出金）",
    "client-portal-assistance_getting_started_title": "はじめに",
    "client-portal-assistance_getting_started_create_account":
      "OQtimaアカウントを作成",
    "client-portal-assistance_getting_started_update_password":
      "パスワードを更新",
    "client-portal-assistance_getting_started_access_client_portal":
      "クライアントポータルにアクセス",
    "client-portal-assistance_verification_title": "本人確認",
    "client-portal-assistance_verification_verify_identity": "身元を確認",
    "client-portal-assistance_verification_submit_documents":
      "必要な書類を提出",
    "client-portal-assistance_verification_check_status":
      "確認ステータスを確認",
    "client-portal-assistance_funding_account_title": "アカウントに資金を入金",
    "client-portal-assistance_funding_account_how_to_deposit": "入金方法",
    "client-portal-assistance_funding_account_payment_methods":
      "受け入れられた支払い方法と処理時間",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "入金トラブルシューティング",
    "client-portal-assistance_loyalty_program_title": "ロイヤルティプログラム",
    "client-portal-assistance_loyalty_program_how_it_works":
      "ロイヤルティプログラムの仕組み",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "ロイヤルティティアと特典",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "クライアントポータルにアクセス",
  },
  my: {
    "client-portal-assistance_onboarding_guide_badge": "Panduan onboarding",
    "client-portal-assistance_quick_start_title": "Panduan Pantas OQtima Anda",
    "client-portal-assistance_quick_start_description":
      "Terokai panduan penting untuk menyediakan, mengesahkan, dan membiayai akaun OQtima anda dengan lancar. Mulakan dengan cepat dan buka potensi penuh perjalanan trading anda.",
    "client-portal-assistance_search_placeholder":
      "Cari topik persediaan (cth. pengesahan akaun, pengeluaran)",
    "client-portal-assistance_getting_started_title": "Mula",
    "client-portal-assistance_getting_started_create_account":
      "Cipta akaun OQtima anda",
    "client-portal-assistance_getting_started_update_password":
      "Kemas kini kata laluan anda",
    "client-portal-assistance_getting_started_access_client_portal":
      "Akses portal klien anda",
    "client-portal-assistance_verification_title": "Pengesahan",
    "client-portal-assistance_verification_verify_identity":
      "Sahkan identiti anda",
    "client-portal-assistance_verification_submit_documents":
      "Hantar dokumen yang diperlukan",
    "client-portal-assistance_verification_check_status":
      "Semak status pengesahan",
    "client-portal-assistance_funding_account_title": "Membiayai akaun anda",
    "client-portal-assistance_funding_account_how_to_deposit":
      "Cara membuat deposit",
    "client-portal-assistance_funding_account_payment_methods":
      "Kaedah Pembayaran yang Diterima & Masa Pemprosesan",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Penyelesaian masalah deposit",
    "client-portal-assistance_loyalty_program_title": "Program Kesetiaan",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Bagaimana Program Kesetiaan Berfungsi",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Tier dan Faedah Kesetiaan",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Akses portal klien anda",
  },
  th: {
    "client-portal-assistance_onboarding_guide_badge": "คู่มือการเริ่มต้น",
    "client-portal-assistance_quick_start_title":
      "คู่มือเริ่มต้นด่วน OQtima ของคุณ",
    "client-portal-assistance_quick_start_description":
      "สำรวจคู่มือสำคัญในการตั้งค่า ตรวจสอบ และเติมเงินในบัญชี OQtima ของคุณอย่างราบรื่น เริ่มต้นได้อย่างรวดเร็วและปลดล็อกศักยภาพทั้งหมดของการเทรดของคุณ",
    "client-portal-assistance_search_placeholder":
      "ค้นหาหัวข้อการตั้งค่า (เช่น การยืนยันบัญชี การถอนเงิน)",
    "client-portal-assistance_getting_started_title": "เริ่มต้น",
    "client-portal-assistance_getting_started_create_account":
      "สร้างบัญชี OQtima ของคุณ",
    "client-portal-assistance_getting_started_update_password":
      "อัปเดตรหัสผ่านของคุณ",
    "client-portal-assistance_getting_started_access_client_portal":
      "เข้าถึงพอร์ทัลลูกค้าของคุณ",
    "client-portal-assistance_verification_title": "การยืนยันตัวตน",
    "client-portal-assistance_verification_verify_identity":
      "ยืนยันตัวตนของคุณ",
    "client-portal-assistance_verification_submit_documents":
      "ส่งเอกสารที่จำเป็น",
    "client-portal-assistance_verification_check_status":
      "ตรวจสอบสถานะการยืนยัน",
    "client-portal-assistance_funding_account_title": "เติมเงินในบัญชีของคุณ",
    "client-portal-assistance_funding_account_how_to_deposit": "วิธีการฝากเงิน",
    "client-portal-assistance_funding_account_payment_methods":
      "วิธีการชำระเงินที่ยอมรับและเวลาการประมวลผล",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "แก้ไขปัญหาการฝากเงิน",
    "client-portal-assistance_loyalty_program_title": "โปรแกรมความภักดี",
    "client-portal-assistance_loyalty_program_how_it_works":
      "โปรแกรมความภักดีทำงานอย่างไร",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "ระดับและสิทธิประโยชน์ความภักดี",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "เข้าถึงพอร์ทัลลูกค้าของคุณ",
  },
  vn: {
    "client-portal-assistance_onboarding_guide_badge": "Hướng dẫn bắt đầu",
    "client-portal-assistance_quick_start_title":
      "Hướng Dẫn Bắt Đầu Nhanh OQtima Của Bạn",
    "client-portal-assistance_quick_start_description":
      "Khám phá các hướng dẫn cần thiết để thiết lập, xác minh và nạp tiền vào tài khoản OQtima của bạn một cách liền mạch. Bắt đầu nhanh chóng và mở khóa tiềm năng đầy đủ của hành trình giao dịch của bạn.",
    "client-portal-assistance_search_placeholder":
      "Tìm kiếm chủ đề thiết lập (vd: xác minh tài khoản, rút tiền)",
    "client-portal-assistance_getting_started_title": "Bắt Đầu",
    "client-portal-assistance_getting_started_create_account":
      "Tạo tài khoản OQtima của bạn",
    "client-portal-assistance_getting_started_update_password":
      "Cập nhật mật khẩu của bạn",
    "client-portal-assistance_getting_started_access_client_portal":
      "Truy cập cổng thông tin khách hàng của bạn",
    "client-portal-assistance_verification_title": "Xác Minh",
    "client-portal-assistance_verification_verify_identity":
      "Xác minh danh tính của bạn",
    "client-portal-assistance_verification_submit_documents":
      "Gửi tài liệu cần thiết",
    "client-portal-assistance_verification_check_status":
      "Kiểm tra trạng thái xác minh",
    "client-portal-assistance_funding_account_title":
      "Nạp tiền vào tài khoản của bạn",
    "client-portal-assistance_funding_account_how_to_deposit": "Cách nạp tiền",
    "client-portal-assistance_funding_account_payment_methods":
      "Phương Thức Thanh Toán Được Chấp Nhận & Thời Gian Xử Lý",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "Khắc phục sự cố nạp tiền",
    "client-portal-assistance_loyalty_program_title":
      "Chương Trình Trung Thành",
    "client-portal-assistance_loyalty_program_how_it_works":
      "Chương Trình Trung Thành Hoạt Động Như Thế Nào",
    "client-portal-assistance_loyalty_program_tiers_benefits":
      "Cấp Độ và Lợi Ích Trung Thành",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "Truy cập cổng thông tin khách hàng của bạn",
  },
  zh: {
    "client-portal-assistance_onboarding_guide_badge": "入门指南",
    "client-portal-assistance_quick_start_title": "您的 OQtima 快速入门",
    "client-portal-assistance_quick_start_description":
      "探索基本指南，无缝设置、验证和资助您的 OQtima 账户。快速开始并释放您交易之旅的全部潜力。",
    "client-portal-assistance_search_placeholder":
      "搜索设置主题（例如账户验证、提款）",
    "client-portal-assistance_getting_started_title": "入门指南",
    "client-portal-assistance_getting_started_create_account":
      "创建您的 OQtima 账户",
    "client-portal-assistance_getting_started_update_password": "更新您的密码",
    "client-portal-assistance_getting_started_access_client_portal":
      "访问您的客户门户",
    "client-portal-assistance_verification_title": "验证",
    "client-portal-assistance_verification_verify_identity": "验证您的身份",
    "client-portal-assistance_verification_submit_documents": "提交所需文件",
    "client-portal-assistance_verification_check_status": "检查验证状态",
    "client-portal-assistance_funding_account_title": "为您的账户注资",
    "client-portal-assistance_funding_account_how_to_deposit": "如何存款",
    "client-portal-assistance_funding_account_payment_methods":
      "接受的付款方式和处理时间",
    "client-portal-assistance_funding_account_deposit_troubleshooting":
      "存款故障排除",
    "client-portal-assistance_loyalty_program_title": "忠诚计划",
    "client-portal-assistance_loyalty_program_how_it_works": "忠诚计划如何运作",
    "client-portal-assistance_loyalty_program_tiers_benefits": "忠诚等级和福利",
    "client-portal-assistance_loyalty_program_access_client_portal":
      "访问您的客户门户",
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
