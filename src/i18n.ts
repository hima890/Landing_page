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
        rights: 'Aventa Systems. All rights reserved.'
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
        join: 'احصل على وصول مبكر',
        admin: 'الإدارة'
      },
      hero: {
        badge: 'نقبل الآن طلبات الوصول المبكر',
        title: 'إدارة عملك التجاري',
        titleGradient: "لا ينبغي أن تكون صعبة.",
        description: 'يجمع أفينتا بين المبيعات والمخزون والموارد البشرية والرؤى المدعومة بالذكاء الاصطناعي في نظام واحد بسيط. مصمم للشركات الصغيرة التي ترغب في النمو دون تعقيد.',
        cta: 'انضم لقائمة الانتظار',
        learnMore: 'تعرف على كيفية العمل'
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
        suffix: 'موجودة بالفعل في قائمة الانتظار.'
      },
      problem: {
        badge: 'الواقع',
        title: 'إدارة الأعمال صعبة بما فيه الكفاية.',
        titleSecondary: 'لا ينبغي لأدواتك أن تجعل الأمر أكثر صعوبة.',
        list: [
          { title: 'تتبع المبيعات يدوياً', desc: 'هل ما زلت تستخدم جداول البيانات أو الورق لتتبع المبيعات؟ الأخطاء حتمية والوقت يضيع.' },
          { title: 'عمى المخزون', desc: 'فقدان تتبع مستويات المخزون يؤدي إلى ضياع المبيعات أو تكدس الأصناف المكلفة.' },
          { title: 'فوضى إدارة الموظفين', desc: 'الجدولة والرواتب وتتبع الأداء لا ينبغي أن تشعر وكأنها وظيفة ثانية بدوام كامل.' },
          { title: 'غياب الوضوح المالي', desc: 'العمل بدون رؤى فورية يعني أنك تتخذ قرارات حاسمة في الظلام.' }
        ]
      },
      solution: {
        badge: 'الحل',
        title: 'أفينتا: النظام الذي',
        titleGradient: 'تحتاجه فعلاً للبدء.',
        description: 'لم نقم ببناء أكثر البرامج تعقيداً في العالم. لقد بنينا الأكثر فائدة لأصحاب الأعمال الحقيقيين الذين يقدرون وقتهم.',
        list: [
          { title: 'نظام واحد موحد', desc: 'توقف عن التنقل بين 5 تطبيقات مختلفة. أفينتا يجمع كل شيء تحت سقف واحد.' },
          { title: 'سير عمل بسيط', desc: 'مصمم للبشر، وليس للمهندسين. اجعل فريقك يعمل بكفاءة في دقائق.' },
          { title: 'كل شيء متصل', desc: 'عندما تبيع صنفاً، يتم تحديث مخزونك وتقاريرك المالية فوراً.' },
          { title: 'رؤى فورية', desc: 'اعرف بالضبط كيف يؤدي عملك في أي لحظة، ومن أي مكان.' }
        ],
        simplicityTitle: 'البساطة في التصميم',
        simplicityDesc: 'واجهتنا مصممة لتكون بديهية. إذا كنت تستطيع استخدام هاتف ذكي، يمكنك إدارة عملك مع أفينتا.'
      },
      features: {
        badge: 'المميزات',
        title: 'كل ما تحتاجه،',
        titleSecondary: 'ولا شيء غير ذلك.',
        description: 'لقد جردنا تعقيدات الشركات الكبيرة لنمنحك أقوى الأدوات في أبسط صورها.',
        list: [
          { title: 'نقطة البيع وإدارة المبيعات', desc: 'تجربة دفع سريعة كالبرق تتعامل مع المدفوعات والخصومات والإيصالات بسهولة.' },
          { title: 'تتبع المخزون', desc: 'تنبيهات تلقائية للمخزون وإدارة سهلة لمواقع متعددة حتى لا تنفد أفضل مبيعاتك أبداً.' },
          { title: 'المالية والتقارير', desc: 'رؤى مرئية حول أرباحك وخسائرك وتدفقاتك النقدية. موسم الضرائب أصبح سهلاً.' },
          { title: 'مساعد موارد بشرية ذكي', desc: 'إدارة الورديات والرواتب وأداء الموظفين دون الصداع الإداري المعتاد.' },
          { title: 'إدارة عملاء مدعومة بالذكاء الاصطناعي', desc: 'افهم عملاءك بشكل أفضل مع ذكاء اصطناعي يتوقع الاتجاهات ويساعدك على بناء الولاء.' }
        ],
        learnMore: 'تعرف على المزيد',
        comingSoon: 'والمزيد...',
        comingSoonDesc: 'نحن نبني أدوات جديدة باستمرار بناءً على ملاحظاتك. انضم لقائمة الانتظار لتشكيل خارطة طريقنا.'
      },
      ai: {
        badge: 'مدعوم بذكاء حقيقي',
        title: 'ذكاء اصطناعي يساعدك',
        titleGradient: 'فعلياً.',
        description: 'لا مبالغة، فقط أتمتة مفيدة. يعمل مساعدونا كأعضاء إضافيين في الفريق، ويتولون المهام المتكررة حتى تتمكن من التركيز على الصورة الكبيرة.',
        customerAssistant: {
          title: 'مساعد عملاء ذكي',
          desc: 'يحدد تلقائياً أكثر عملائك ولاءً، ويتوقع متى قد يعودون، ويقترح عروضاً مخصصة لإبقائهم دائمين.',
          points: ['رؤى تنبؤية للولاء', 'متابعات مؤتمتة', 'تحليل الاتجاهات']
        },
        hrHelper: {
          title: 'مساعد الموارد البشرية',
          desc: 'يتصرف كمنسق موارد بشرية بشري. يكتشف تعارضات الجدولة قبل حدوثها ويساعدك على تحسين تكاليف الموظفين بناءً على توقعات المبيعات.',
          points: ['تحسين ذكي للورديات', 'تنبيهات الأداء', 'أتمتة الرواتب']
        }
      },
      testimonials: {
        badge: 'آراء العملاء',
        title: 'موثوق من قبل أصحاب الأعمال',
        titleSecondary: 'الذين يقدرون وقتهم.',
        list: [
          { name: "سارة جينكينز", role: "صاحبة بوتيك", content: "كنت أغرق في جداول البيانات. فكرة ربط المبيعات والمخزون في تطبيق واحد بسيط هي بالضبط ما كنت أبحث عنه." },
          { name: "ماركوس تشن", role: "مدير مقهى", content: "تستغرق جدولة الموظفين مني ساعات كل أسبوع. مساعد الموارد البشرية في أفينتا يبدو كحلم يتحقق لراحتي النفسية." },
          { name: "إيلينا رودريغيز", role: "خبازة حرفية", content: "معظم الأنظمة معقدة للغاية لمتجر صغير مثل متجري. يبدو أن أفينتا يحقق التوازن المثالي بين القوة والبساطة." },
          { name: "ديفيد تومبسون", role: "صاحب متجر أدوات", content: "تتبع المخزون هو أكبر صداع لي. تنبيهات تلقائية بناءً على بيانات مبيعات حقيقية؟ سجلني فوراً." },
          { name: "بريا شارما", role: "مؤسسة استوديو يوغا", content: "أحب أنه ليس مجرد نقطة بيع. رؤى الذكاء الاصطناعي لولاء العملاء يمكن أن تساعدني حقاً في تنمية مجتمعي." },
          { name: "توم ويلسون", role: "رائد أعمال متجر حيوانات", content: "أخيراً، نظام لا يتطلب شهادة في تكنولوجيا المعلومات لإعداده. أنا متحمس لرؤية كيف سيبسط هذا روتيني اليومي." },
          { name: "إيزابيلا كونتي", role: "صاحبة مطعم", content: "تقارير المالية تبدو نظيفة جداً. معرفة هوامش ربحي في الوقت الفعلي بدلاً من نهاية الشهر هو تغيير جذري." },
          { name: "جيمس ميلر", role: "تاجر أجهزة تقنية", content: "لقد جربت 4 أنظمة مختلفة هذا العام. كلها معقدة جداً. فلسفة أفينتا 'ما تحتاجه فعلاً' تروق لي." },
          { name: "صوفي دوبوا", role: "بائعة زهور", content: "إدارة المخزون الموسمي صعبة. وجود ذكاء اصطناعي يتوقع احتياجاتي بناءً على اتجاهات العام الماضي سيوفر لي الكثير من الهدر." },
          { name: "روبرت تايلور", role: "مدير قطع غيار سيارات", content: "ميزات الموارد البشرية هي ما لفت انتباهي. تتبع الأداء دون أن أكون مديراً مجهرياً هو بالضبط التوازن الذي أريده." },
          { name: "عائشة بيلو", role: "مصممة أزياء", content: "سير العمل البسيط هو كل شيء عندما تكون مشغولاً بالإبداع. أحتاج إلى نظام يعمل من أجلي، وليس العكس." },
          { name: "ليام أوكونور", role: "صاحب حانة", content: "رؤى فورية من هاتفي وأنا بعيد عن العمل؟ هذا هو نوع الحرية الذي يحتاجه كل مالك." },
          { name: "كلوي تشانغ", role: "صاحبة متجر هدايا", content: "أنضم لقائمة الانتظار لأنني أريد المساعدة في تشكيل منتج يفهم حقاً صراعات الأعمال الصغيرة." }
        ]
      },
      why: {
        badge: 'فلسفتنا',
        title: 'نحن لسنا كل شيء.',
        titleGradient: 'نحن ما تحتاجه للبدء.',
        cards: [
          { title: 'مصمم لاحتياجات حقيقية', desc: 'تحدثنا إلى مئات من أصحاب الأعمال. لم نبنِ ميزات لمجرد وجودها. بنينا ما يحل صداعك اليومي فعلياً.' },
          { title: 'بدون حشو', desc: 'برامج المؤسسات ثقيلة ومكلفة. أفينتا رشيق وسريع وبأسعار معقولة. أنت تدفع مقابل القيمة، وليس مقابل ميزات لن تلمسها أبداً.' },
          { title: 'دعم بشري', desc: 'عندما تحتاج للمساعدة، تتحدث إلى إنسان يفهم الأعمال. نحن شركاء في نموك، ولسنا مجرد اشتراك آخر.' }
        ]
      },
      cta: {
        badge: 'أماكن الوصول المبكر محدودة',
        title: 'جاهز لتبسيط',
        titleSecondary: 'عملك التجاري؟',
        description: 'انضم لقائمة الانتظار اليوم للحصول على وصول مبكر، وعروض افتتاحية خاصة، وفرصة للمساعدة في تشكيل مستقبل أفينتا.',
        button: 'انضم لقائمة الانتظار الآن',
        points: ['وصول مبكر', 'عروض خاصة', 'شارك في بناء المنتج']
      },
      faq: {
        badge: 'الأسئلة الشائعة',
        title: 'الأسئلة الشائعة',
        titleSecondary: 'حول أفينتا وبرامج إدارة الأعمال.',
        list: [
          {
            q: 'ما هو نظام إدارة الأعمال؟',
            a: 'نظام إدارة الأعمال هو منصة برمجية متكاملة تساعد الشركات الصغيرة والمتوسطة على إدارة العمليات الأساسية — المبيعات والمخزون والمالية والموارد البشرية وإدارة العملاء — من لوحة تحكم واحدة. يحل محل جداول البيانات المتشتتة والأدوات المنفصلة.'
          },
          {
            q: 'هل أفينتا مناسب للشركات الصغيرة؟',
            a: 'نعم. أفينتا مصمم خصيصاً للشركات الصغيرة والمتوسطة. سواء كنت تدير متجر تجزئة أو مطعماً أو شركة خدمات أو شركة ناشئة، ستحصل على كل ما تحتاجه دون التعقيد أو التكلفة العالية لبرامج الشركات الكبيرة.'
          },
          {
            q: 'كيف يعمل نظام تتبع المخزون في أفينتا؟',
            a: 'يتتبع أفينتا مستويات مخزونك في الوقت الفعلي. كل عملية بيع عبر نظام نقطة البيع تُحدِّث المخزون تلقائياً. ستتلقى تنبيهات نقص المخزون قبل نفاد المنتجات الأكثر مبيعاً، ويدعم النظام مواقع متعددة.'
          },
          {
            q: 'هل يتضمن أفينتا نظام نقطة بيع (POS)؟',
            a: 'نعم. يتضمن أفينتا نظام نقطة بيع متكاملاً للشركات الصغيرة. يعالج المدفوعات والخصومات والإيصالات، ولأنه مرتبط بالمخزون والمالية، كل معاملة تُحدِّث تقاريرك تلقائياً.'
          },
          {
            q: 'ما الذي يميز أفينتا عن برامج الأعمال الأخرى؟',
            a: 'صُمِّم أفينتا للبساطة والتكامل. على عكس المنصات المعقدة للشركات الكبيرة، يمنح أفينتا الشركات الصغيرة نظام نقطة بيع وإدارة مخزون وتقارير مالية وأدوات موارد بشرية وإدارة عملاء بالذكاء الاصطناعي — كل ذلك متصل في مكان واحد.'
          },
          {
            q: 'هل أفينتا بأسعار معقولة لأصحاب الشركات الصغيرة؟',
            a: 'نعم. أفينتا مصمم ليكون رشيقاً وبأسعار معقولة للشركات الصغيرة والمتوسطة. يحصل أعضاء الوصول المبكر على أسعار تعريفية خاصة. أنت تدفع مقابل القيمة التي تستخدمها فقط.'
          }
        ]
      },
      footer: {
        tagline: 'بني للشركات الصغيرة، من قبل أشخاص يهتمون بهم.',
        badge: 'مرحلة مبكرة • بني بـ ❤️',
        rights: 'أنظمة أفينتا. جميع الحقوق محفوظة.'
      },
      admin: {
        login: {
          title: 'دخول الإدارة',
          desc: 'أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم',
          email: 'البريد الإلكتروني',
          password: 'كلمة المرور',
          button: 'الدخول للوحة التحكم',
          back: 'العودة للموقع',
          error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
        },
        dashboard: {
          title: 'لوحة تحكم الإدارة',
          stats: {
            signups: 'المسجلون في القائمة',
            visitors: 'الزوار الفريدون',
            categories: 'أهم الفئات'
          },
          table: {
            name: 'الاسم',
            business: 'العمل التجاري',
            whatsapp: 'واتساب',
            problem: 'المشكلة',
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
        description: 'كن من بين الأوائل لتبسيط عمليات عملك التجاري.',
        successTitle: 'لقد انضممت للقائمة!',
        alreadyJoined: 'أنت موجود بالفعل في القائمة!',
        alreadyJoinedTitle: 'أنت موجود بالفعل في القائمة!',
        successDesc: 'شكراً لانضمامك لقائمة انتظار أفينتا. سنتواصل معك قريباً بتفاصيل الوصول المبكر.',
        alreadyJoinedDesc: 'لقد استلمنا طلبك بالفعل. سنتواصل معك قريباً!',
        close: 'إغلاق',
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'أحمد محمد',
        businessName: 'اسم العمل التجاري',
        businessNamePlaceholder: 'عملي التجاري',
        whatsapp: 'رقم واتساب',
        whatsappPlaceholder: '+966 5XX XXX XXXX',
        businessType: 'نوع العمل',
        selectType: 'اختر النوع...',
        problem: 'المشكلة الرئيسية التي تواجهها',
        problemPlaceholder: 'صف التحدي الرئيسي الذي تواجهه...',
        submit: 'انضم لقائمة الانتظار',
        submitting: 'جاري الإرسال...',
        privacy: 'بانضمامك، فإنك توافق على سياسة الخصوصية الخاصة بنا. لا رسائل مزعجة أبداً.',
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
