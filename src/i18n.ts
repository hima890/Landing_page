import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        features: 'Features',
        testimonials: 'Testimonials',
        why: 'Why Aventa',
        faq: 'FAQ',
        join: 'Get Access',
        admin: 'Admin'
      },
      hero: {
        badge: 'Limited early access — now accepting applications',
        title: 'The Business Management System',
        titleGradient: 'Built for Small Business.',
        description: 'Aventa is an all-in-one business management platform for SMBs. Combine POS, inventory tracking, finance insights, HR, and AI-powered CRM into one simple system — and run your business with total clarity.',
        cta: 'Get Early Access',
        learnMore: 'See how it works'
      },
      stats: {
        sales: 'Total Sales',
        inventory: 'Inventory',
        staff: 'Active Staff',
        units: 'units',
        active: 'active'
      },
      socialProof: {
        text: 'Join',
        businesses: '472+ businesses',
        suffix: 'already on the waiting list.'
      },
      problem: {
        badge: 'The Reality',
        title: 'Running a business is hard enough.',
        titleSecondary: 'Your tools shouldn\'t make it harder.',
        list: [
          { title: 'Manual Sales Tracking', desc: 'Still using spreadsheets or paper to track sales? Errors are inevitable and time is wasted.' },
          { title: 'Inventory Blindness', desc: 'Losing track of stock levels leads to missed sales or overstocking capital-heavy items.' },
          { title: 'Staff Management Chaos', desc: 'Scheduling, payroll, and performance tracking shouldn\'t feel like a second full-time job.' },
          { title: 'No Financial Clarity', desc: 'Operating without real-time insights means you\'re making critical decisions in the dark.' }
        ]
      },
      solution: {
        badge: 'The Solution',
        title: 'Aventa: The system you',
        titleGradient: 'actually need to start.',
        description: 'We didn\'t build the most complex enterprise software on earth. We built the most useful one for real business owners who value their time.',
        list: [
          { title: 'One Unified System', desc: 'Stop jumping between 5 different apps. Aventa brings everything under one roof.' },
          { title: 'Simple Workflows', desc: 'Designed for humans, not engineers. Get your team up to speed in minutes.' },
          { title: 'Everything Connected', desc: 'When you sell an item, your inventory and finance reports update instantly.' },
          { title: 'Real-time Insights', desc: 'Know exactly how your business is performing at any moment, from anywhere.' }
        ],
        simplicityTitle: 'Simplicity by Design',
        simplicityDesc: 'Our interface is built to be intuitive. If you can use a smartphone, you can manage your business with Aventa.'
      },
      features: {
        badge: 'All-in-One Platform',
        title: 'Every tool your small business needs,',
        titleSecondary: 'none of the enterprise bloat.',
        description: 'Aventa strips away complexity so you get the most powerful business management tools in their simplest, most affordable form.',
        list: [
          { title: 'POS & Sales Management', desc: 'A fast, reliable point-of-sale system for small businesses. Process payments, apply discounts, and generate receipts — fully connected to your inventory.' },
          { title: 'Inventory Tracking', desc: 'Automated stock alerts and real-time inventory management across locations. Never oversell or run out of your best-selling products again.' },
          { title: 'Finance & Reports', desc: 'Clear, visual finance insights into profit, loss, and cash flow. Turn tax season from a nightmare into a five-minute review.' },
          { title: 'Smart HR Assistant', desc: 'Manage staff shifts, payroll, and performance in one place. Built for business owners, not HR departments.' },
          { title: 'AI-Powered CRM', desc: 'Understand your customers with AI that predicts buying trends, automates follow-ups, and helps you build lasting loyalty.' }
        ],
        learnMore: 'Learn more',
        comingSoon: 'More features coming...',
        comingSoonDesc: 'We build new tools based on real SMB feedback. Join the waitlist to help shape our roadmap.'
      },
      ai: {
        badge: 'Powered by Real Intelligence',
        title: 'AI that actually',
        titleGradient: 'helps.',
        description: 'No hype, just helpful automation. Our AI assistants act like extra team members, handling the repetitive tasks so you can focus on the big picture.',
        customerAssistant: {
          title: 'Smart Customer Assistant',
          desc: 'Automatically identifies your most loyal customers, predicts when they might return, and suggests personalized offers to keep them coming back.',
          points: ['Predictive loyalty insights', 'Automated follow-ups', 'Trend analysis']
        },
        hrHelper: {
          title: 'HR & Staff Helper',
          desc: 'Behaves like a human HR coordinator. It spots scheduling conflicts before they happen and helps you optimize staff costs based on sales forecasts.',
          points: ['Smart shift optimization', 'Performance flagging', 'Payroll automation']
        }
      },
      testimonials: {
        badge: 'Testimonials',
        title: 'Trusted by business owners',
        titleSecondary: 'who value their time.',
        list: [
          { name: "Sarah Jenkins", role: "Boutique Owner", content: "I was drowning in spreadsheets. The idea of having sales and inventory connected in one simple app is exactly what I've been looking for." },
          { name: "Marcus Chen", role: "Cafe Manager", content: "Staff scheduling takes me hours every week. Aventa's HR assistant sounds like a dream come true for my sanity." },
          { name: "Elena Rodriguez", role: "Artisan Baker", content: "Most systems are too complex for a small shop like mine. Aventa seems to hit that sweet spot of power and simplicity." },
          { name: "David Thompson", role: "Hardware Store Owner", content: "Inventory tracking is my biggest headache. Automated alerts based on real sales data? Sign me up immediately." },
          { name: "Priya Sharma", role: "Yoga Studio Founder", content: "I love that it's not just a POS. The AI insights for customer loyalty could really help me grow my community." },
          { name: "Tom Wilson", role: "Pet Shop Entrepreneur", content: "Finally, a system that doesn't require a degree in IT to set up. I'm excited to see how this simplifies my daily routine." },
          { name: "Isabella Conti", role: "Restaurant Owner", content: "The finance reports look so clean. Knowing my margins in real-time instead of at the end of the month is a game changer." },
          { name: "James Miller", role: "Tech Gadget Retailer", content: "I've tried 4 different systems this year. They're all too bloated. Aventa's 'what you actually need' philosophy resonates with me." },
          { name: "Sophie Dubois", role: "Florist", content: "Managing seasonal stock is tough. Having AI predict my needs based on last year's trends would save me so much waste." },
          { name: "Robert Taylor", role: "Auto Parts Manager", content: "The HR features are what caught my eye. Tracking performance without being a micromanager is exactly the balance I want." },
          { name: "Aisha Bello", role: "Fashion Designer", content: "Simple workflows are everything when you're busy creating. I need a system that works for me, not the other way around." },
          { name: "Liam O'Connor", role: "Pub Owner", content: "Real-time insights from my phone while I'm away from the bar? That's the kind of freedom every owner needs." },
          { name: "Chloe Zhang", role: "Gift Shop Owner", content: "I'm joining the waitlist because I want to help shape a product that actually understands small business struggles." }
        ]
      },
      why: {
        badge: 'Our Philosophy',
        title: 'We are not everything.',
        titleGradient: 'We are what you need to start.',
        cards: [
          { title: 'Built for Real Needs', desc: 'We talked to hundreds of business owners. We didn\'t build features just to have them. We built what actually solves your daily headaches.' },
          { title: 'Zero Bloat', desc: 'Enterprise software is heavy and expensive. Aventa is lean, fast, and affordable. You pay for value, not for features you\'ll never touch.' },
          { title: 'Human Support', desc: 'When you need help, you talk to a human who understands business. We\'re partners in your growth, not just another subscription.' }
        ]
      },
      cta: {
        badge: 'Limited early access spots available',
        title: 'Ready to simplify your',
        titleSecondary: 'small business operations?',
        description: 'Join hundreds of SMB owners already on the waitlist. Get early access, special introductory pricing, and help shape the future of Aventa.',
        button: 'Get Early Access Now',
        points: ['Free Early Access', 'Special Launch Pricing', 'Shape the Product']
      },
      faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions',
        titleSecondary: 'about Aventa & business management software.',
        list: [
          {
            q: 'What is a business management system?',
            a: 'A business management system is an integrated software platform that helps small and medium businesses run core operations — sales, inventory, finance, HR, and customer relationships — all from one dashboard. It replaces spreadsheets and disconnected tools with a single source of truth.'
          },
          {
            q: 'Is Aventa suitable for small businesses?',
            a: 'Yes. Aventa is built specifically for small and medium businesses (SMBs). Whether you run a retail shop, restaurant, service business, or startup, you get everything you need without the cost or complexity of enterprise software.'
          },
          {
            q: 'How does inventory management work in Aventa?',
            a: 'Aventa tracks your stock levels in real time. Every sale through the POS automatically updates inventory. You get low-stock alerts before you run out of key items, and the system supports multiple locations from a single dashboard.'
          },
          {
            q: 'Does Aventa include a POS system?',
            a: "Yes. Aventa includes a fully integrated Point of Sale (POS) system for small businesses. It handles payments, discounts, and receipts, and because it's connected to inventory and finance, every transaction updates your reports automatically."
          },
          {
            q: 'What makes Aventa different from other business software?',
            a: 'Aventa is designed for simplicity and integration. Unlike bloated enterprise platforms, it gives SMBs POS, inventory, finance, HR tools, and AI-powered CRM — all connected, all in one place, built for business owners without a technical background.'
          },
          {
            q: 'Is Aventa affordable for small business owners?',
            a: "Yes. Aventa is built to be lean and affordable for SMBs. Early access members get special introductory pricing. You pay for the value you use — not for enterprise features you'll never need."
          }
        ]
      },
      footer: {
        tagline: 'Built for small businesses, by people who care about them.',
        badge: 'Early Stage • Built with ❤️',
        rights: 'Aventa Systems. All rights reserved.',
        admin: 'Admin'
      },
      admin: {
        login: {
          title: 'Admin Login',
          desc: 'Enter your credentials to access the dashboard',
          email: 'Email Address',
          password: 'Password',
          button: 'Login to Dashboard',
          back: 'Back to Site',
          error: 'Invalid email or password'
        },
        dashboard: {
          title: 'Admin Dashboard',
          stats: {
            signups: 'Waitlist Signups',
            visitors: 'Unique Visitors',
            categories: 'Top Categories'
          },
          table: {
            name: 'Name',
            business: 'Business',
            whatsapp: 'WhatsApp',
            problem: 'Problem',
            date: 'Date'
          },
          actions: {
            pdf: 'PDF',
            excel: 'Excel',
            logout: 'Logout'
          }
        }
      },
      signup: {
        title: 'Join the Waitlist',
        description: 'Be among the first to simplify your business operations.',
        successTitle: 'You\'re on the list!',
        alreadyJoined: 'You\'re already on the list!',
        alreadyJoinedTitle: 'You\'re already on the list!',
        successDesc: 'Thanks for joining the Aventa waiting list. We\'ll reach out soon with early access details.',
        alreadyJoinedDesc: 'We\'ve already received your request. We\'ll reach out soon!',
        close: 'Close',
        fullName: 'Full Name',
        fullNamePlaceholder: 'John Smith',
        businessName: 'Business Name',
        businessNamePlaceholder: 'My Business',
        whatsapp: 'WhatsApp Number',
        whatsappPlaceholder: '+1 234 567 8900',
        businessType: 'Business Type',
        selectType: 'Select type...',
        problem: 'Main Problem You Face',
        problemPlaceholder: 'Describe your main challenge...',
        submit: 'Join Waiting List',
        submitting: 'Submitting...',
        privacy: 'By joining, you agree to our privacy policy. No spam, ever.',
        businessTypes: [
          { id: 'retail', label: 'Retail Store' },
          { id: 'restaurant', label: 'Restaurant / Cafe' },
          { id: 'service', label: 'Service Provider' },
          { id: 'ecommerce', label: 'E-commerce' },
          { id: 'real_estate', label: 'Real Estate' },
          { id: 'logistics', label: 'Logistics / Transport' },
          { id: 'manufacturing', label: 'Manufacturing' },
          { id: 'healthcare', label: 'Healthcare / Clinic' },
          { id: 'education', label: 'Education / Training' },
          { id: 'technology', label: 'Technology / Software' },
          { id: 'other', label: 'Other' }
        ]
      }
    }
  },
  ar: {
    translation: {
      nav: {
        features: 'المميزات',
        testimonials: 'آراء العملاء',
        why: 'لماذا أفينتا',
        faq: 'الأسئلة الشائعة',
        join: 'ابدأ الآن',
        admin: 'الإدارة'
      },
      hero: {
        badge: 'وصول مبكر محدود — سجّل الآن',
        title: 'نظام إدارة الأعمال',
        titleGradient: 'المصمَّم للشركات الصغيرة.',
        description: 'أفينتا منصة متكاملة لإدارة الأعمال الصغيرة والمتوسطة. نقطة البيع، المخزون، المالية، الموارد البشرية، وإدارة العملاء بالذكاء الاصطناعي — كل ذلك في نظام واحد يمنحك رؤية كاملة على عملك.',
        cta: 'انضم لقائمة الانتظار',
        learnMore: 'اكتشف كيف يعمل'
      },
      stats: {
        sales: 'إجمالي المبيعات',
        inventory: 'المخزون',
        staff: 'الموظفون النشطون',
        units: 'وحدة',
        active: 'نشط'
      },
      socialProof: {
        text: 'انضم إلى',
        businesses: 'أكثر من 472 شركة',
        suffix: 'سجّلت بالفعل في قائمة الانتظار.'
      },
      problem: {
        badge: 'الواقع',
        title: 'إدارة الأعمال صعبة بما فيه الكفاية.',
        titleSecondary: 'أدواتك يجب ألّا تزيد الأمر تعقيداً.',
        list: [
          { title: 'إدارة المبيعات يدوياً', desc: 'هل ما زلت تعتمد على جداول البيانات أو الورق؟ الأخطاء حتمية والوقت يضيع.' },
          { title: 'غياب الرؤية على المخزون', desc: 'فقدان متابعة المخزون يعني ضياع مبيعات أو تكدّس أصناف غير مطلوبة.' },
          { title: 'تعقيدات إدارة الفريق', desc: 'الجدولة والرواتب ومتابعة الأداء لا ينبغي أن تستنزف وقتك كوظيفة ثانية.' },
          { title: 'غياب الوضوح المالي', desc: 'بدون رؤى فورية، ستتخذ قرارات مصيرية دون معلومات كافية.' }
        ]
      },
      solution: {
        badge: 'الحل',
        title: 'أفينتا: النظام الذي',
        titleGradient: 'تحتاجه فعلاً للبدء.',
        description: 'لم نبنِ أعقد برنامج في السوق. بنينا الأكثر فائدة لأصحاب الأعمال الحقيقيين الذين يُقدّرون وقتهم.',
        list: [
          { title: 'نظام واحد موحد', desc: 'لا مزيد من التنقل بين تطبيقات متعددة. أفينتا يجمع كل شيء في مكان واحد.' },
          { title: 'سير عمل بسيط', desc: 'مصمَّم للمستخدم العادي، لا للمطوّر. أنجز فريقك في دقائق.' },
          { title: 'كل شيء متصل', desc: 'عند كل عملية بيع، يُحدَّث المخزون والتقارير المالية تلقائياً.' },
          { title: 'رؤى فورية', desc: 'اعرف بدقة أداء عملك في أي لحظة ومن أي مكان.' }
        ],
        simplicityTitle: 'البساطة في التصميم',
        simplicityDesc: 'واجهتنا بديهية بالكامل. إذا كنت تستطيع استخدام هاتف ذكي، يمكنك إدارة عملك مع أفينتا.'
      },
      features: {
        badge: 'منصة متكاملة',
        title: 'كل ما تحتاجه،',
        titleSecondary: 'دون أي تعقيد زائد.',
        description: 'أزلنا كل التعقيدات لنمنحك أقوى أدوات إدارة الأعمال بأبسط صورة وأفضل سعر.',
        list: [
          { title: 'نقطة البيع وإدارة المبيعات', desc: 'نظام نقطة بيع سريع وموثوق للشركات الصغيرة. معالجة المدفوعات والخصومات وإصدار الفواتير — متصل بالمخزون بالكامل.' },
          { title: 'تتبع المخزون', desc: 'تنبيهات تلقائية للمخزون وإدارة فورية عبر مواقع متعددة. لا تفقد أفضل منتجاتك مبيعاً أبداً.' },
          { title: 'المالية والتقارير', desc: 'رؤية واضحة ومرئية على الأرباح والخسائر والتدفق النقدي. موسم الضرائب لم يكن أسهل من هذا.' },
          { title: 'مساعد موارد بشرية ذكي', desc: 'إدارة الورديات والرواتب وأداء الموظفين في مكان واحد. مصمَّم لأصحاب الأعمال، لا لأقسام الموارد البشرية.' },
          { title: 'إدارة عملاء بالذكاء الاصطناعي', desc: 'افهم عملاءك بعمق مع ذكاء اصطناعي يتوقع سلوك الشراء ويؤتمت المتابعات ويبني الولاء.' }
        ],
        learnMore: 'اعرف أكثر',
        comingSoon: 'المزيد قادم...',
        comingSoonDesc: 'نطوّر أدوات جديدة بناءً على ملاحظات عملاء حقيقيين. انضم لقائمة الانتظار وساهم في تشكيل خارطة طريقنا.'
      },
      ai: {
        badge: 'مدعوم بذكاء حقيقي',
        title: 'ذكاء اصطناعي يساعدك',
        titleGradient: 'فعلاً.',
        description: 'لا مبالغة، فقط أتمتة ذكية وفعّالة. مساعدونا يعملون كأعضاء في فريقك، يتولّون المهام الروتينية حتى تركّز على الصورة الكبيرة.',
        customerAssistant: {
          title: 'مساعد العملاء الذكي',
          desc: 'يحدد تلقائياً أكثر عملائك ولاءً، ويتوقع مواعيد عودتهم، ويقترح عروضاً مخصصة لإبقائهم دائمين.',
          points: ['رؤى تنبؤية للولاء', 'متابعات آلية', 'تحليل الاتجاهات']
        },
        hrHelper: {
          title: 'مساعد الموارد البشرية',
          desc: 'يعمل كمنسق موارد بشرية محترف. يرصد تعارضات الجدولة قبل وقوعها، ويساعدك على تحسين تكاليف الفريق بناءً على توقعات المبيعات.',
          points: ['تحسين ذكي للورديات', 'تنبيهات الأداء', 'أتمتة الرواتب']
        }
      },
      testimonials: {
        badge: 'آراء العملاء',
        title: 'يثق به أصحاب الأعمال',
        titleSecondary: 'الذين يُقدّرون وقتهم.',
        list: [
          { name: "سارة جينكينز", role: "صاحبة بوتيك", content: "كنت أغرق في جداول البيانات. ربط المبيعات بالمخزون في تطبيق واحد بسيط هو بالضبط ما كنت أبحث عنه." },
          { name: "ماركوس تشن", role: "مدير مقهى", content: "جدولة الموظفين تأخذ مني ساعات كل أسبوع. مساعد الموارد البشرية في أفينتا يبدو كحلم تحقق." },
          { name: "إيلينا رودريغيز", role: "خبازة حرفية", content: "معظم الأنظمة معقدة جداً لمتجر صغير مثلي. أفينتا يبدو أنه يحقق التوازن المثالي بين القوة والبساطة." },
          { name: "ديفيد تومبسون", role: "صاحب متجر أدوات", content: "متابعة المخزون هي أكبر صداع لدي. تنبيهات تلقائية بناءً على بيانات مبيعات حقيقية؟ أنا مهتم فوراً." },
          { name: "بريا شارما", role: "مؤسسة استوديو يوغا", content: "أحب أنه ليس مجرد نقطة بيع. رؤى الذكاء الاصطناعي لولاء العملاء يمكن أن تساعدني فعلاً في تنمية مجتمعي." },
          { name: "توم ويلسون", role: "رائد أعمال متجر حيوانات", content: "أخيراً، نظام لا يحتاج خبرة تقنية للإعداد. متحمس لرؤية كيف سيبسّط روتيني اليومي." },
          { name: "إيزابيلا كونتي", role: "صاحبة مطعم", content: "التقارير المالية تبدو واضحة ومنظّمة. معرفة هوامش الربح في الوقت الفعلي بدلاً من نهاية الشهر يغيّر كل شيء." },
          { name: "جيمس ميلر", role: "تاجر أجهزة تقنية", content: "جرّبت 4 أنظمة مختلفة هذا العام، كلها معقدة جداً. فلسفة أفينتا 'ما تحتاجه فعلاً' تعبّر عني تماماً." },
          { name: "صوفي دوبوا", role: "بائعة زهور", content: "إدارة المخزون الموسمي أمر صعب. ذكاء اصطناعي يتوقع احتياجاتي بناءً على اتجاهات العام الماضي سيوفر لي الكثير." },
          { name: "روبرت تايلور", role: "مدير قطع غيار سيارات", content: "ميزات الموارد البشرية هي ما لفت انتباهي. متابعة الأداء دون الإدارة التفصيلية المُملّة هو التوازن الذي أريده." },
          { name: "عائشة بيلو", role: "مصممة أزياء", content: "بساطة سير العمل هي كل شيء عندما تكون مشغولاً بالإبداع. أحتاج نظاماً يخدمني، لا أن أخدمه." },
          { name: "ليام أوكونور", role: "صاحب حانة", content: "رؤى فورية من هاتفي وأنا بعيد عن العمل؟ هذه هي الحرية التي يحتاجها كل صاحب عمل." },
          { name: "كلوي تشانغ", role: "صاحبة متجر هدايا", content: "أنضم لقائمة الانتظار لأنني أريد المساهمة في بناء منتج يفهم فعلاً تحديات الشركات الصغيرة." }
        ]
      },
      why: {
        badge: 'فلسفتنا',
        title: 'نحن لسنا كل شيء.',
        titleGradient: 'نحن ما تحتاجه للبدء.',
        cards: [
          { title: 'مبني لاحتياجات حقيقية', desc: 'تحدّثنا مع مئات أصحاب الأعمال. لم نبنِ ميزات لمجرد وجودها، بل بنينا ما يحلّ مشاكلك اليومية الفعلية.' },
          { title: 'بلا تعقيد زائد', desc: 'برامج الشركات الكبيرة ثقيلة ومكلفة. أفينتا خفيف وسريع وبأسعار مناسبة. أنت تدفع مقابل القيمة الحقيقية فقط.' },
          { title: 'دعم بشري حقيقي', desc: 'عندما تحتاج مساعدة، تتحدث مع إنسان يفهم الأعمال. نحن شركاء في نموك، وليس مجرد اشتراك شهري.' }
        ]
      },
      cta: {
        badge: 'أماكن محدودة للوصول المبكر',
        title: 'هل أنت مستعد لتبسيط',
        titleSecondary: 'إدارة عملك التجاري؟',
        description: 'انضم لمئات أصحاب الأعمال في قائمة الانتظار. احصل على وصول مبكر وأسعار تأسيسية خاصة، وساهم في تشكيل مستقبل أفينتا.',
        button: 'انضم لقائمة الانتظار الآن',
        points: ['وصول مبكر مجاني', 'أسعار تأسيسية خاصة', 'شارك في تطوير المنتج']
      },
      faq: {
        badge: 'الأسئلة الشائعة',
        title: 'أسئلة شائعة',
        titleSecondary: 'حول أفينتا وبرامج إدارة الأعمال.',
        list: [
          {
            q: 'ما هو نظام إدارة الأعمال؟',
            a: 'نظام إدارة الأعمال هو منصة برمجية متكاملة تمكّن الشركات الصغيرة والمتوسطة من إدارة عملياتها الأساسية — المبيعات والمخزون والمالية والموارد البشرية وإدارة العملاء — من لوحة تحكم واحدة. يحلّ محل جداول البيانات المتشتتة والأدوات المنفصلة.'
          },
          {
            q: 'هل أفينتا مناسب للشركات الصغيرة؟',
            a: 'نعم. صُمِّم أفينتا خصيصاً للشركات الصغيرة والمتوسطة. سواء كنت تدير متجراً أو مطعماً أو شركة خدمات أو مشروعاً ناشئاً، ستجد كل ما تحتاجه دون تعقيد أو تكلفة برامج الشركات الكبيرة.'
          },
          {
            q: 'كيف يعمل نظام تتبع المخزون في أفينتا؟',
            a: 'يتتبع أفينتا مستويات مخزونك لحظةً بلحظة. كل عملية بيع عبر نقطة البيع تُحدِّث المخزون تلقائياً، وستتلقى تنبيهات نقص المخزون قبل نفاد منتجاتك، مع دعم كامل لإدارة مواقع متعددة.'
          },
          {
            q: 'هل يتضمن أفينتا نظام نقطة بيع (POS)؟',
            a: 'نعم. يتضمن أفينتا نظام نقطة بيع متكاملاً. يعالج المدفوعات والخصومات وإصدار الفواتير، ولأنه مرتبط بالمخزون والمالية، تُحدَّث تقاريرك تلقائياً مع كل معاملة.'
          },
          {
            q: 'ما الذي يميّز أفينتا عن برامج الأعمال الأخرى؟',
            a: 'يقوم أفينتا على البساطة والتكامل. بخلاف المنصات المعقدة للشركات الكبيرة، يمنح أفينتا الشركات الصغيرة نقطة بيع وإدارة مخزون وتقارير مالية وأدوات موارد بشرية وإدارة عملاء بالذكاء الاصطناعي — كل ذلك متصل في مكان واحد.'
          },
          {
            q: 'هل أسعار أفينتا مناسبة للشركات الصغيرة؟',
            a: 'نعم. صُمِّم أفينتا ليكون رشيقاً وبأسعار في متناول الشركات الصغيرة والمتوسطة. يحصل أعضاء الوصول المبكر على أسعار تأسيسية خاصة، وأنت تدفع مقابل القيمة التي تستخدمها فعلاً.'
          }
        ]
      },
      footer: {
        tagline: 'صُنع للشركات الصغيرة، من فريق يؤمن بها.',
        badge: 'مرحلة مبكرة • صُنع بـ ❤️',
        rights: 'أنظمة أفينتا. جميع الحقوق محفوظة.',
        admin: 'مشرف'
      },
      admin: {
        login: {
          title: 'تسجيل دخول المسؤول',
          desc: 'أدخل بيانات حسابك للوصول إلى لوحة التحكم',
          email: 'البريد الإلكتروني',
          password: 'كلمة المرور',
          button: 'دخول إلى لوحة التحكم',
          back: 'العودة للموقع',
          error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
        },
        dashboard: {
          title: 'لوحة تحكم المسؤول',
          stats: {
            signups: 'المسجلون في القائمة',
            visitors: 'الزوار الفريدون',
            categories: 'أهم الفئات'
          },
          table: {
            name: 'الاسم',
            business: 'اسم المنشأة',
            whatsapp: 'واتساب',
            problem: 'التحدي الرئيسي',
            date: 'التاريخ'
          },
          actions: {
            pdf: 'PDF',
            excel: 'Excel',
            logout: 'تسجيل الخروج'
          }
        }
      },
      signup: {
        title: 'انضم لقائمة الانتظار',
        description: 'كن من أوائل من يحسّنون إدارة أعمالهم مع أفينتا.',
        successTitle: 'أنت الآن في القائمة!',
        alreadyJoined: 'سبق تسجيلك في القائمة!',
        alreadyJoinedTitle: 'سبق تسجيلك في القائمة!',
        successDesc: 'شكراً لتسجيلك في قائمة انتظار أفينتا. سنتواصل معك قريباً بتفاصيل الوصول المبكر.',
        alreadyJoinedDesc: 'لقد تلقّينا طلبك مسبقاً، وسنتواصل معك قريباً.',
        close: 'إغلاق',
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'أحمد محمد',
        businessName: 'اسم المنشأة',
        businessNamePlaceholder: 'مثال: متجر الفيصل',
        whatsapp: 'رقم واتساب',
        whatsappPlaceholder: '+966 5XX XXX XXXX',
        businessType: 'نوع النشاط التجاري',
        selectType: 'اختر النوع...',
        problem: 'أبرز تحدياتك الحالية',
        problemPlaceholder: 'أخبرنا عن أبرز التحديات التي تواجهها في إدارة عملك...',
        submit: 'انضم لقائمة الانتظار',
        submitting: 'جاري الإرسال...',
        privacy: 'بالتسجيل، توافق على سياسة الخصوصية. لن نُرسل إليك أي رسائل غير مرغوب فيها.',
        businessTypes: [
          { id: 'retail', label: 'متجر تجزئة' },
          { id: 'restaurant', label: 'مطعم / مقهى' },
          { id: 'service', label: 'مزود خدمة' },
          { id: 'ecommerce', label: 'تجارة إلكترونية' },
          { id: 'real_estate', label: 'عقارات' },
          { id: 'logistics', label: 'لوجستيات / نقل' },
          { id: 'manufacturing', label: 'تصنيع' },
          { id: 'healthcare', label: 'رعاية صحية / عيادة' },
          { id: 'education', label: 'تعليم / تدريب' },
          { id: 'technology', label: 'تقنية / برمجيات' },
          { id: 'other', label: 'أخرى' }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
