import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Local Cafe Owner (UAE)",
    content: "أفينتا وايد سهّل عليّ إدارة المحل، الصراحة وفّر عليّ وقت ومجهود كبير في تتبع المبيعات والمخزون. نظام ذكي وبسيط.",
  },
  {
    name: "Rajesh Kumar",
    role: "Grocery Store Owner (India)",
    content: "अवेंटा ने मेरे बिज़नेस को बहुत आसान बना दिया है। अब सेल्स और इन्वेंटरी को ट्रैक करना बहुत सरल है। बहुत ही बढ़िया ऐप है!",
  },
  {
    name: "Maria Santos",
    role: "Sari-Sari Store Owner (Philippines)",
    content: "Sobrang laking tulong ng Aventa sa business ko. Dati ang gulo ng inventory, ngayon everything is organized and easy to track na! Highly recommended.",
  },
  {
    name: "Sarah Jenkins",
    role: "Boutique Owner",
    content: "I was drowning in spreadsheets. The idea of having sales and inventory connected in one simple app is exactly what I've been looking for.",
  },
  {
    name: "Marcus Chen",
    role: "Cafe Manager",
    content: "Staff scheduling takes me hours every week. Aventa's HR assistant sounds like a dream come true for my sanity.",
  },
  {
    name: "Fatima Al-Hashimi",
    role: "Fashion Designer (UAE)",
    content: "بصراحة أفينتا غير طريقتي في الشغل. الحين أقدر أركز على التصاميم وأنا متطمنة إن كل شي في المحل تحت السيطرة.",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Studio Founder",
    content: "I love that it's not just a POS. The AI insights for customer loyalty could really help me grow my community.",
  },
  {
    name: "Juan Dela Cruz",
    role: "Restaurant Manager (Philippines)",
    content: "Ang ganda ng analytics feature! Real-time ko nakikita ang sales kahit wala ako sa store. Napaka-convenient talaga.",
  },
  {
    name: "Amit Patel",
    role: "Electronics Shop Owner (India)",
    content: "स्टॉक खत्म होने से पहले ही अलर्ट मिल जाता है, जिससे मेरा काम बहुत आसान हो गया है। अवेंटा वाकई में लाजवाब है।",
  },
  {
    name: "Isabella Conti",
    role: "Restaurant Owner",
    content: "The finance reports look so clean. Knowing my margins in real-time instead of at the end of the month is a game changer.",
  },
  {
    name: "James Miller",
    role: "Tech Gadget Retailer",
    content: "I've tried 4 different systems this year. They're all too bloated. Aventa's 'what you actually need' philosophy resonates with me.",
  },
  {
    name: "Liam O'Connor",
    role: "Pub Owner",
    content: "Real-time insights from my phone while I'm away from the bar? That's the kind of freedom every owner needs.",
  },
  {
    name: "Chloe Zhang",
    role: "Gift Shop Owner",
    content: "I'm joining the waitlist because I want to help shape a product that actually understands small business struggles.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Testimonials</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Trusted by business owners <br />
            <span className="text-slate-500">who value their time.</span>
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col justify-between rounded-3xl bg-slate-50 p-8 dark:bg-slate-900"
              >
                <div>
                  <div className="flex gap-1 text-brand-500 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-brand-200 opacity-50 dark:text-brand-800" />
                    <p className="relative z-10 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <img
                    className="h-12 w-12 rounded-full bg-slate-200"
                    src={`https://picsum.photos/seed/${testimonial.name}/100/100`}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
