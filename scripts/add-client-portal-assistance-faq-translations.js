/*
  Adds/updates Client Portal Assistance FAQ translations in all languages.

  Usage:
    node scripts/add-client-portal-assistance-faq-translations.js [--overwrite]

  Notes:
  - By default, it only adds missing keys and leaves existing ones untouched.
  - Pass --overwrite to force-update values in all locales.
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "locales");
const OVERWRITE = process.argv.includes("--overwrite");

// English copy based on FAQ items
const TRANSLATIONS = {
  en: {
    "client-portal-assistance_faq-title1":
      "I didn't receive my verification email. What should I do?",
    "client-portal-assistance_faq-content1":
      "OQtima only offers CFDs and does not support physical delivery of the asset. When trading CFDs you are trading based on price speculation, you are not physically buying or selling the instruments. If you open a trade in Gold, you do not physically own that amount of gold, but you can earn profit or loss depending on the market movement.",
    "client-portal-assistance_faq-title2":
      "What documents can I use for ID verification?",
    "client-portal-assistance_faq-content2":
      "You can use various government-issued identification documents for ID verification, such as a passport, national ID card, or driver's license. Make sure the document is valid, clearly visible, and contains all required information.",
    "client-portal-assistance_faq-title3":
      "Can I use crypto to fund my account?",
    "client-portal-assistance_faq-content3":
      "Yes, OQtima supports cryptocurrency deposits. You can fund your account using various cryptocurrencies. Please check our payment methods page for a complete list of supported cryptocurrencies and processing times.",
    "client-portal-assistance_faq-title4":
      "I submitted my documents, but nothing changed.",
    "client-portal-assistance_faq-content4":
      "Document verification typically takes 1-3 business days. If it's been longer than that, please check your email for any notifications or contact our support team. Make sure your documents meet all requirements: they should be clear, valid, and show all necessary information.",
  },
  ar: {
    "client-portal-assistance_faq-title1":
      "لم أتلق بريد التحقق الإلكتروني. ماذا يجب أن أفعل؟",
    "client-portal-assistance_faq-content1":
      "OQtima تقدم فقط عقود الفروقات (CFDs) ولا تدعم التسليم الفعلي للأصول. عند تداول عقود الفروقات، أنت تتداول بناءً على المضاربة في الأسعار، وليس شراء أو بيع الأدوات فعلياً. إذا فتحت صفقة في الذهب، فأنت لا تملك فعلياً ذلك المقدار من الذهب، ولكن يمكنك كسب الربح أو الخسارة اعتماداً على حركة السوق.",
    "client-portal-assistance_faq-title2":
      "ما هي المستندات التي يمكنني استخدامها للتحقق من الهوية؟",
    "client-portal-assistance_faq-content2":
      "يمكنك استخدام مختلف المستندات الصادرة عن الحكومة للتحقق من الهوية، مثل جواز السفر أو بطاقة الهوية الوطنية أو رخصة القيادة. تأكد من أن المستند ساري المفعول وواضح و يحتوي على جميع المعلومات المطلوبة.",
    "client-portal-assistance_faq-title3":
      "هل يمكنني استخدام العملات المشفرة لتمويل حسابي؟",
    "client-portal-assistance_faq-content3":
      "نعم، OQtima تدعم إيداعات العملات المشفرة. يمكنك تمويل حسابك باستخدام مختلف العملات المشفرة. يرجى التحقق من صفحة طرق الدفع للحصول على قائمة كاملة بالعملات المشفرة المدعومة وأوقات المعالجة.",
    "client-portal-assistance_faq-title4": "قدمت مستنداتي، لكن لم يتغير شيء.",
    "client-portal-assistance_faq-content4":
      "عادة ما يستغرق التحقق من المستندات من 1 إلى 3 أيام عمل. إذا مر وقت أطول من ذلك، يرجى التحقق من بريدك الإلكتروني للحصول على أي إشعارات أو الاتصال بفريق الدعم. تأكد من أن مستنداتك تستوفي جميع المتطلبات: يجب أن تكون واضحة وصالحة وتعرض جميع المعلومات اللازمة.",
  },
  br: {
    "client-portal-assistance_faq-title1":
      "Não recebi meu e-mail de verificação. O que devo fazer?",
    "client-portal-assistance_faq-content1":
      "OQtima oferece apenas CFDs e não suporta entrega física do ativo. Ao negociar CFDs, você está negociando com base em especulação de preços, não está comprando ou vendendo fisicamente os instrumentos. Se você abrir uma negociação em Ouro, não possui fisicamente essa quantidade de ouro, mas pode obter lucro ou prejuízo dependendo do movimento do mercado.",
    "client-portal-assistance_faq-title2":
      "Quais documentos posso usar para verificação de identidade?",
    "client-portal-assistance_faq-content2":
      "Você pode usar vários documentos de identificação emitidos pelo governo para verificação de identidade, como passaporte, carteira de identidade nacional ou carteira de motorista. Certifique-se de que o documento é válido, claramente visível e contém todas as informações necessárias.",
    "client-portal-assistance_faq-title3":
      "Posso usar criptomoedas para financiar minha conta?",
    "client-portal-assistance_faq-content3":
      "Sim, OQtima suporta depósitos em criptomoedas. Você pode financiar sua conta usando várias criptomoedas. Consulte nossa página de métodos de pagamento para obter uma lista completa de criptomoedas suportadas e tempos de processamento.",
    "client-portal-assistance_faq-title4":
      "Enviei meus documentos, mas nada mudou.",
    "client-portal-assistance_faq-content4":
      "A verificação de documentos normalmente leva de 1 a 3 dias úteis. Se passou mais tempo que isso, verifique seu e-mail para notificações ou entre em contato com nossa equipe de suporte. Certifique-se de que seus documentos atendem a todos os requisitos: devem ser claros, válidos e mostrar todas as informações necessárias.",
  },
  cn: {
    "client-portal-assistance_faq-title1": "我没有收到验证邮件。我应该怎么做？",
    "client-portal-assistance_faq-content1":
      "OQtima 仅提供差价合约（CFD），不支持实物资产交割。交易差价合约时，您是基于价格投机进行交易，而不是实际买卖工具。如果您开立黄金交易，您并不实际拥有该数量的黄金，但可以根据市场波动获得利润或亏损。",
    "client-portal-assistance_faq-title2": "我可以使用哪些文件进行身份验证？",
    "client-portal-assistance_faq-content2":
      "您可以使用各种政府颁发的身份证明文件进行身份验证，例如护照、国民身份证或驾驶执照。确保文件有效、清晰可见，并包含所有必需的信息。",
    "client-portal-assistance_faq-title3": "我可以使用加密货币为账户注资吗？",
    "client-portal-assistance_faq-content3":
      "是的，OQtima 支持加密货币存款。您可以使用各种加密货币为账户注资。请查看我们的付款方式页面，获取支持的加密货币和处理时间的完整列表。",
    "client-portal-assistance_faq-title4": "我提交了文件，但没有任何变化。",
    "client-portal-assistance_faq-content4":
      "文件验证通常需要 1-3 个工作日。如果超过这个时间，请检查您的电子邮件是否有任何通知，或联系我们的支持团队。确保您的文件满足所有要求：文件应清晰、有效，并显示所有必要的信息。",
  },
  zh: {
    "client-portal-assistance_faq-title1": "我沒有收到驗證郵件。我應該怎麼做？",
    "client-portal-assistance_faq-content1":
      "OQtima 僅提供差價合約（CFD），不支持實物資產交割。交易差價合約時，您是基於價格投機進行交易，而不是實際買賣工具。如果您開立黃金交易，您並不實際擁有該數量的黃金，但可以根據市場波動獲得利潤或虧損。",
    "client-portal-assistance_faq-title2": "我可以使用哪些文件進行身份驗證？",
    "client-portal-assistance_faq-content2":
      "您可以使用各種政府頒發的身份證明文件進行身份驗證，例如護照、國民身份證或駕駛執照。確保文件有效、清晰可見，並包含所有必需的信息。",
    "client-portal-assistance_faq-title3": "我可以使用加密貨幣為賬戶注資嗎？",
    "client-portal-assistance_faq-content3":
      "是的，OQtima 支持加密貨幣存款。您可以使用各種加密貨幣為賬戶注資。請查看我們的付款方式頁面，獲取支持的加密貨幣和處理時間的完整列表。",
    "client-portal-assistance_faq-title4": "我提交了文件，但沒有任何變化。",
    "client-portal-assistance_faq-content4":
      "文件驗證通常需要 1-3 個工作日。如果超過這個時間，請檢查您的電子郵件是否有任何通知，或聯繫我們的支持團隊。確保您的文件滿足所有要求：文件應清晰、有效，並顯示所有必要的信息。",
  },
  es: {
    "client-portal-assistance_faq-title1":
      "No recibí mi correo electrónico de verificación. ¿Qué debo hacer?",
    "client-portal-assistance_faq-content1":
      "OQtima solo ofrece CFD y no admite la entrega física del activo. Al operar con CFD, está operando basándose en especulación de precios, no está comprando o vendiendo físicamente los instrumentos. Si abre una operación en Oro, no posee físicamente esa cantidad de oro, pero puede obtener ganancias o pérdidas dependiendo del movimiento del mercado.",
    "client-portal-assistance_faq-title2":
      "¿Qué documentos puedo usar para la verificación de identidad?",
    "client-portal-assistance_faq-content2":
      "Puede usar varios documentos de identificación emitidos por el gobierno para la verificación de identidad, como un pasaporte, documento de identidad nacional o licencia de conducir. Asegúrese de que el documento sea válido, claramente visible y contenga toda la información requerida.",
    "client-portal-assistance_faq-title3":
      "¿Puedo usar criptomonedas para financiar mi cuenta?",
    "client-portal-assistance_faq-content3":
      "Sí, OQtima admite depósitos en criptomonedas. Puede financiar su cuenta usando varias criptomonedas. Consulte nuestra página de métodos de pago para obtener una lista completa de criptomonedas admitidas y tiempos de procesamiento.",
    "client-portal-assistance_faq-title4":
      "Envié mis documentos, pero nada cambió.",
    "client-portal-assistance_faq-content4":
      "La verificación de documentos generalmente toma de 1 a 3 días hábiles. Si ha pasado más tiempo que eso, revise su correo electrónico para cualquier notificación o contacte a nuestro equipo de soporte. Asegúrese de que sus documentos cumplan con todos los requisitos: deben ser claros, válidos y mostrar toda la información necesaria.",
  },
  fr: {
    "client-portal-assistance_faq-title1":
      "Je n'ai pas reçu mon e-mail de vérification. Que dois-je faire?",
    "client-portal-assistance_faq-content1":
      "OQtima n'offre que des CFD et ne prend pas en charge la livraison physique de l'actif. Lorsque vous négociez des CFD, vous négociez sur la base d'une spéculation sur les prix, vous n'achetez ou ne vendez pas physiquement les instruments. Si vous ouvrez une transaction sur l'Or, vous ne possédez pas physiquement cette quantité d'or, mais vous pouvez réaliser des profits ou des pertes selon le mouvement du marché.",
    "client-portal-assistance_faq-title2":
      "Quels documents puis-je utiliser pour la vérification d'identité?",
    "client-portal-assistance_faq-content2":
      "Vous pouvez utiliser divers documents d'identité délivrés par le gouvernement pour la vérification d'identité, tels qu'un passeport, une carte d'identité nationale ou un permis de conduire. Assurez-vous que le document est valide, clairement visible et contient toutes les informations requises.",
    "client-portal-assistance_faq-title3":
      "Puis-je utiliser des crypto-monnaies pour financer mon compte?",
    "client-portal-assistance_faq-content3":
      "Oui, OQtima prend en charge les dépôts en crypto-monnaies. Vous pouvez financer votre compte en utilisant diverses crypto-monnaies. Veuillez consulter notre page des méthodes de paiement pour obtenir une liste complète des crypto-monnaies prises en charge et des délais de traitement.",
    "client-portal-assistance_faq-title4":
      "J'ai soumis mes documents, mais rien n'a changé.",
    "client-portal-assistance_faq-content4":
      "La vérification des documents prend généralement de 1 à 3 jours ouvrables. Si cela prend plus de temps, veuillez vérifier votre e-mail pour toute notification ou contacter notre équipe de support. Assurez-vous que vos documents répondent à toutes les exigences : ils doivent être clairs, valides et montrer toutes les informations nécessaires.",
  },
  id: {
    "client-portal-assistance_faq-title1":
      "Saya tidak menerima email verifikasi. Apa yang harus saya lakukan?",
    "client-portal-assistance_faq-content1":
      "OQtima hanya menawarkan CFD dan tidak mendukung pengiriman fisik aset. Saat trading CFD, Anda melakukan trading berdasarkan spekulasi harga, Anda tidak membeli atau menjual instrumen secara fisik. Jika Anda membuka trade di Emas, Anda tidak secara fisik memiliki jumlah emas tersebut, tetapi Anda dapat memperoleh keuntungan atau kerugian tergantung pada pergerakan pasar.",
    "client-portal-assistance_faq-title2":
      "Dokumen apa yang dapat saya gunakan untuk verifikasi identitas?",
    "client-portal-assistance_faq-content2":
      "Anda dapat menggunakan berbagai dokumen identitas yang dikeluarkan pemerintah untuk verifikasi identitas, seperti paspor, kartu identitas nasional, atau SIM. Pastikan dokumen tersebut valid, jelas terlihat, dan berisi semua informasi yang diperlukan.",
    "client-portal-assistance_faq-title3":
      "Bisakah saya menggunakan crypto untuk mendanai akun saya?",
    "client-portal-assistance_faq-content3":
      "Ya, OQtima mendukung deposit cryptocurrency. Anda dapat mendanai akun Anda menggunakan berbagai cryptocurrency. Silakan periksa halaman metode pembayaran kami untuk daftar lengkap cryptocurrency yang didukung dan waktu pemrosesan.",
    "client-portal-assistance_faq-title4":
      "Saya telah mengirimkan dokumen saya, tetapi tidak ada yang berubah.",
    "client-portal-assistance_faq-content4":
      "Verifikasi dokumen biasanya memakan waktu 1-3 hari kerja. Jika sudah lebih lama dari itu, silakan periksa email Anda untuk pemberitahuan apa pun atau hubungi tim dukungan kami. Pastikan dokumen Anda memenuhi semua persyaratan: dokumen harus jelas, valid, dan menampilkan semua informasi yang diperlukan.",
  },
  it: {
    "client-portal-assistance_faq-title1":
      "Non ho ricevuto la mia email di verifica. Cosa devo fare?",
    "client-portal-assistance_faq-content1":
      "OQtima offre solo CFD e non supporta la consegna fisica dell'asset. Quando operi con i CFD, stai operando sulla base della speculazione sui prezzi, non stai acquistando o vendendo fisicamente gli strumenti. Se apri un trade su Oro, non possiedi fisicamente quella quantità d'oro, ma puoi guadagnare profitti o perdite a seconda del movimento del mercato.",
    "client-portal-assistance_faq-title2":
      "Quali documenti posso usare per la verifica dell'identità?",
    "client-portal-assistance_faq-content2":
      "Puoi usare vari documenti di identità rilasciati dal governo per la verifica dell'identità, come un passaporto, carta d'identità nazionale o patente di guida. Assicurati che il documento sia valido, chiaramente visibile e contenga tutte le informazioni richieste.",
    "client-portal-assistance_faq-title3":
      "Posso usare criptovalute per finanziare il mio account?",
    "client-portal-assistance_faq-content3":
      "Sì, OQtima supporta depositi in criptovalute. Puoi finanziare il tuo account usando varie criptovalute. Controlla la nostra pagina dei metodi di pagamento per un elenco completo delle criptovalute supportate e dei tempi di elaborazione.",
    "client-portal-assistance_faq-title4":
      "Ho inviato i miei documenti, ma non è cambiato nulla.",
    "client-portal-assistance_faq-content4":
      "La verifica dei documenti richiede generalmente 1-3 giorni lavorativi. Se è passato più tempo, controlla la tua email per eventuali notifiche o contatta il nostro team di supporto. Assicurati che i tuoi documenti soddisfino tutti i requisiti: devono essere chiari, validi e mostrare tutte le informazioni necessarie.",
  },
  jp: {
    "client-portal-assistance_faq-title1":
      "確認メールが届きませんでした。どうすればよいですか？",
    "client-portal-assistance_faq-content1":
      "OQtimaはCFDのみを提供しており、資産の物理的な引き渡しはサポートしていません。CFDを取引する場合、価格投機に基づいて取引しており、実際に金融商品を購入または販売しているわけではありません。ゴールドで取引を開いた場合、その量のゴールドを物理的に所有しているわけではありませんが、市場の動きに応じて利益または損失を得ることができます。",
    "client-portal-assistance_faq-title2":
      "本人確認にはどのような書類を使用できますか？",
    "client-portal-assistance_faq-content2":
      "パスポート、国民IDカード、運転免許証など、政府発行の各種身分証明書を本人確認に使用できます。書類が有効で、明確に表示され、必要なすべての情報が含まれていることを確認してください。",
    "client-portal-assistance_faq-title3":
      "暗号通貨を使用してアカウントに資金を入金できますか？",
    "client-portal-assistance_faq-content3":
      "はい、OQtimaは暗号通貨の入金をサポートしています。さまざまな暗号通貨を使用してアカウントに資金を入金できます。サポートされている暗号通貨と処理時間の完全なリストについては、お支払い方法のページをご覧ください。",
    "client-portal-assistance_faq-title4":
      "書類を提出しましたが、何も変わりませんでした。",
    "client-portal-assistance_faq-content4":
      "書類の確認には通常1〜3営業日かかります。それより長い時間が経過した場合は、メールで通知を確認するか、サポートチームにお問い合わせください。書類がすべての要件を満たしていることを確認してください：書類は明確で、有効で、必要なすべての情報を表示する必要があります。",
  },
  my: {
    "client-portal-assistance_faq-title1":
      "Saya tidak menerima e-mel pengesahan. Apa yang perlu saya lakukan?",
    "client-portal-assistance_faq-content1":
      "OQtima hanya menawarkan CFD dan tidak menyokong penghantaran fizikal aset. Apabila berdagang CFD, anda berdagang berdasarkan spekulasi harga, anda tidak membeli atau menjual instrumen secara fizikal. Jika anda membuka dagangan dalam Emas, anda tidak memiliki jumlah emas tersebut secara fizikal, tetapi anda boleh memperoleh keuntungan atau kerugian bergantung pada pergerakan pasaran.",
    "client-portal-assistance_faq-title2":
      "Dokumen apa yang boleh saya gunakan untuk pengesahan identiti?",
    "client-portal-assistance_faq-content2":
      "Anda boleh menggunakan pelbagai dokumen identiti yang dikeluarkan kerajaan untuk pengesahan identiti, seperti pasport, kad pengenalan negara, atau lesen memandu. Pastikan dokumen itu sah, jelas kelihatan, dan mengandungi semua maklumat yang diperlukan.",
    "client-portal-assistance_faq-title3":
      "Bolehkah saya menggunakan kripto untuk membiayai akaun saya?",
    "client-portal-assistance_faq-content3":
      "Ya, OQtima menyokong deposit kriptowang. Anda boleh membiayai akaun anda menggunakan pelbagai kriptowang. Sila semak halaman kaedah pembayaran kami untuk senarai lengkap kriptowang yang disokong dan masa pemprosesan.",
    "client-portal-assistance_faq-title4":
      "Saya telah menyerahkan dokumen saya, tetapi tiada yang berubah.",
    "client-portal-assistance_faq-content4":
      "Pengesahan dokumen biasanya mengambil masa 1-3 hari bekerja. Jika sudah lebih lama daripada itu, sila semak e-mel anda untuk sebarang pemberitahuan atau hubungi pasukan sokongan kami. Pastikan dokumen anda memenuhi semua keperluan: dokumen harus jelas, sah, dan menunjukkan semua maklumat yang diperlukan.",
  },
  th: {
    "client-portal-assistance_faq-title1":
      "ฉันไม่ได้รับอีเมลยืนยัน ฉันควรทำอย่างไร?",
    "client-portal-assistance_faq-content1":
      "OQtima เสนอเฉพาะ CFD และไม่รองรับการส่งมอบสินทรัพย์ทางกายภาพ เมื่อเทรด CFD คุณกำลังเทรดตามการเก็งกำไรด้านราคา คุณไม่ได้ซื้อหรือขายเครื่องมือทางการเงินจริงๆ หากคุณเปิดเทรดทองคำ คุณไม่ได้เป็นเจ้าของทองคำจำนวนนั้นจริงๆ แต่คุณสามารถทำกำไรหรือขาดทุนได้ขึ้นอยู่กับการเคลื่อนไหวของตลาด",
    "client-portal-assistance_faq-title2":
      "ฉันสามารถใช้เอกสารอะไรสำหรับการยืนยันตัวตน?",
    "client-portal-assistance_faq-content2":
      "คุณสามารถใช้เอกสารระบุตัวตนที่ออกโดยรัฐบาลต่างๆ สำหรับการยืนยันตัวตน เช่น หนังสือเดินทาง บัตรประจำตัวประชาชน หรือใบขับขี่ ตรวจสอบให้แน่ใจว่าเอกสารนั้นถูกต้อง ชัดเจน และมีข้อมูลที่จำเป็นทั้งหมด",
    "client-portal-assistance_faq-title3":
      "ฉันสามารถใช้คริปโตเพื่อเติมเงินเข้าบัญชีได้ไหม?",
    "client-portal-assistance_faq-content3":
      "ใช่ OQtima รองรับการฝากเงินด้วยสกุลเงินดิจิทัล คุณสามารถเติมเงินเข้าบัญชีโดยใช้สกุลเงินดิจิทัลต่างๆ โปรดตรวจสอบหน้าวิธีการชำระเงินของเราสำหรับรายการสกุลเงินดิจิทัลที่รองรับและเวลาที่ใช้ในการประมวลผล",
    "client-portal-assistance_faq-title4":
      "ฉันส่งเอกสารแล้ว แต่ไม่มีอะไรเปลี่ยนแปลง",
    "client-portal-assistance_faq-content4":
      "การยืนยันเอกสารมักใช้เวลา 1-3 วันทำการ หากผ่านไปนานกว่านั้น โปรดตรวจสอบอีเมลของคุณสำหรับการแจ้งเตือนหรือติดต่อทีมสนับสนุนของเรา ตรวจสอบให้แน่ใจว่าเอกสารของคุณเป็นไปตามข้อกำหนดทั้งหมด: เอกสารควรชัดเจน ถูกต้อง และแสดงข้อมูลที่จำเป็นทั้งหมด",
  },
  vn: {
    "client-portal-assistance_faq-title1":
      "Tôi không nhận được email xác minh. Tôi nên làm gì?",
    "client-portal-assistance_faq-content1":
      "OQtima chỉ cung cấp CFD và không hỗ trợ giao hàng tài sản vật lý. Khi giao dịch CFD, bạn đang giao dịch dựa trên suy đoán giá, bạn không mua hoặc bán các công cụ một cách vật lý. Nếu bạn mở giao dịch Vàng, bạn không sở hữu vật lý số lượng vàng đó, nhưng bạn có thể kiếm lợi nhuận hoặc lỗ tùy thuộc vào biến động thị trường.",
    "client-portal-assistance_faq-title2":
      "Tôi có thể sử dụng tài liệu nào để xác minh danh tính?",
    "client-portal-assistance_faq-content2":
      "Bạn có thể sử dụng các tài liệu nhận dạng do chính phủ cấp khác nhau để xác minh danh tính, chẳng hạn như hộ chiếu, thẻ căn cước quốc gia hoặc bằng lái xe. Đảm bảo tài liệu hợp lệ, rõ ràng và chứa tất cả thông tin cần thiết.",
    "client-portal-assistance_faq-title3":
      "Tôi có thể sử dụng tiền điện tử để nạp tiền vào tài khoản không?",
    "client-portal-assistance_faq-content3":
      "Có, OQtima hỗ trợ gửi tiền bằng tiền điện tử. Bạn có thể nạp tiền vào tài khoản bằng các loại tiền điện tử khác nhau. Vui lòng kiểm tra trang phương thức thanh toán của chúng tôi để xem danh sách đầy đủ các loại tiền điện tử được hỗ trợ và thời gian xử lý.",
    "client-portal-assistance_faq-title4":
      "Tôi đã gửi tài liệu của mình, nhưng không có gì thay đổi.",
    "client-portal-assistance_faq-content4":
      "Xác minh tài liệu thường mất 1-3 ngày làm việc. Nếu đã qua thời gian đó, vui lòng kiểm tra email của bạn để biết bất kỳ thông báo nào hoặc liên hệ với nhóm hỗ trợ của chúng tôi. Đảm bảo tài liệu của bạn đáp ứng tất cả các yêu cầu: chúng phải rõ ràng, hợp lệ và hiển thị tất cả thông tin cần thiết.",
  },
};

function isLanguageDir(entryName) {
  const full = path.join(ROOT, entryName);
  if (!fs.existsSync(full)) return false;
  const stat = fs.statSync(full);
  if (!stat.isDirectory()) return false;
  // exclude non-language directories/files
  return !["language.config.js", "processLanguages.js"].includes(entryName);
}

function updateLocale(langDir) {
  const file = path.join(ROOT, langDir, "index.json");

  if (!fs.existsSync(file)) {
    console.warn(`⚠️  File not found: ${file}`);
    return;
  }

  try {
    const content = fs.readFileSync(file, "utf8");
    const data = JSON.parse(content);
    let updated = false;
    let added = 0;
    let skipped = 0;

    const langTranslations = TRANSLATIONS[langDir] || TRANSLATIONS.en;

    for (const [key, value] of Object.entries(langTranslations)) {
      if (!(key in data)) {
        data[key] = value;
        updated = true;
        added++;
      } else if (OVERWRITE) {
        const oldValue = data[key];
        data[key] = value;
        if (oldValue !== value) {
          updated = true;
          added++;
          console.log(`  ↻ Updated: ${key}`);
        } else {
          skipped++;
        }
      } else {
        skipped++;
      }
    }

    if (updated) {
      // Sort keys alphabetically for better maintainability
      const sortedData = {};
      Object.keys(data)
        .sort()
        .forEach((key) => {
          sortedData[key] = data[key];
        });

      fs.writeFileSync(
        file,
        JSON.stringify(sortedData, null, 2) + "\n",
        "utf8"
      );
      console.log(`✓ ${langDir}: ${added} added/updated, ${skipped} skipped`);
    } else {
      console.log(`⊘ ${langDir}: ${skipped} skipped (no changes)`);
    }
  } catch (err) {
    console.error(`✗ Error processing ${langDir}:`, err.message);
  }
}

// Main execution
console.log("Adding Client Portal Assistance FAQ translations...\n");

const langDirs = fs.readdirSync(ROOT).filter(isLanguageDir).sort();

langDirs.forEach(updateLocale);

console.log("\n✓ Done!");
