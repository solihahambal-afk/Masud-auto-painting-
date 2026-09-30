import { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  ChevronLeft,
  Languages, 
  MapPin, 
  Menu, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  X,
  Star,
  Clock,
  CheckCircle2
} from 'lucide-react';

type Lang = 'en' | 'ar';

interface ContentData {
  nav: string[];
  eyebrow: string;
  hero: string;
  sub: string;
  quote: string;
  call: string;
  proof: string;
  services: string;
  servicesSub: string;
  process: string;
  processSub: string;
  transform: string;
  transformSub: string;
  contact: string;
  contactSub: string;
  location: string;
  phone: string;
  footerNote: string;
}

const copy: Record<Lang, ContentData> = {
  en: {
    nav: ['Home', 'Services', 'Process', 'Transformations', 'Contact'],
    eyebrow: 'AUTO PAINT • BODY REFINISHING • SANAYA, QATAR',
    hero: 'Bring Back the Finish Your Car Deserves.',
    sub: 'Professional automotive paint, scratch removal, and oven-baked refinishing in Sanaya, Qatar. Flawless showroom finish with guaranteed computerised color matching.',
    quote: 'Send Car Photos on WhatsApp',
    call: 'Call Workshop',
    proof: '5.0 ★ Rated Workshop • Trusted Quality',
    services: 'Paint & Finish Solutions',
    servicesSub: 'Precision craftsmanship and durable oven-baked finishes tailored for Qatar climate.',
    process: 'From Damaged Surface to Showroom Shine',
    processSub: 'Our multi-step precision process ensures complete surface bonding, exact factory color matching, and a mirror gloss coat.',
    transform: 'Real Results & Transformations',
    transformSub: 'See how our professional refinishing transforms weathered and damaged panels into pristine factory condition.',
    contact: 'Ready to Refresh Your Car?',
    contactSub: 'Send clear photos of your car on WhatsApp for a fast assessment and transparent quotation.',
    location: 'Street 551, Sanaya (Industrial Area), Qatar',
    phone: '+974 7127 0891',
    footerNote: 'Masud Auto Paint Zone — Qatar’s trusted workshop for automotive painting, scratch repair, and high-gloss oven finishes.'
  },
  ar: {
    nav: ['الرئيسية', 'الخدمات', 'الخطوات', 'قبل وبعد', 'تواصل معنا'],
    eyebrow: 'دهان سيارات • تشطيب وتجديد الهيكل • الصناعية، قطر',
    hero: 'أعد لسيارتك اللمعان والمظهر الذي تستحقه.',
    sub: 'ورشة متخصصة في دهان السيارات بالفرن الحراري، وإزالة الخدوش وتجديد الهيكل في المنطقة الصناعية بقطر. مطابقة دقيقة لألوان الوكالة بالكمبيوتر.',
    quote: 'أرسل صور السيارة عبر واتساب',
    call: 'اتصل بالورشة',
    proof: 'تقييم 5.0 ★ • جودة مضمونة وخبرة موثوقة',
    services: 'حلول الدهان وتشطيب السيارات',
    servicesSub: 'حرفية متقنة وتشطيبات حرارية مقاومة لعوامل الطقس في قطر.',
    process: 'خطوات العمل من التجهيز إلى اللمعان',
    processSub: 'نتبع خطوات دقيقة من معالجة السطح إلى الرش بالفرن الحراري والتلميع المائي لضمان أعلى درجات الجودة.',
    transform: 'نتائج حقيقية قبل وبعد',
    transformSub: 'شاهد الفرق الواضح عند تجديد وإصلاح طلاء السيارات المتضررة وإعادتها لمظهر الوكالة.',
    contact: 'هل ترغب في تجديد مظهر سيارتك؟',
    contactSub: 'أرسل صور الأجزاء المتضررة عبر واتساب للحصول على معاينة سريعة وعرض سعر مباشر.',
    location: 'شارع 551، المنطقة الصناعية، قطر',
    phone: '+974 7127 0891',
    footerNote: 'منطقة مسعود لدهان السيارات — ورشتكم الموثوقة لدهان السيارات وإصلاح الخدوش والتشطيب الحراري في الصناعية، قطر.'
  }
};

const services = [
  {
    image: '/images/services/service-respray.jpg',
    num: '01',
    titleEn: 'Full Body Respray',
    titleAr: 'دهان كامل للسيارة',
    descEn: 'Complete vehicle respray in temperature-controlled oven booths for an immaculate, seamless finish with long-lasting gloss.',
    descAr: 'رش كامل للسيارة داخل كابينة فرن حراري متطورة لضمان توزيع متجانس ولمعان يدوم طويلاً.'
  },
  {
    image: '/images/services/service-panel.jpg',
    num: '02',
    titleEn: 'Panel & Scratch Refinishing',
    titleAr: 'إصلاح ودهان الخدوش والأجزاء',
    descEn: 'Spot repair and seamless panel blending for bumpers, fenders, hoods, and doors with zero visible paint transition lines.',
    descAr: 'معالجة دقيقة للصدامات والرفارف والأبواب والخدوش مع دمج احترافي دون أي فوارق في اللون.'
  },
  {
    image: '/images/services/service-prep.jpg',
    num: '03',
    titleEn: 'Surface Prep & Dent Repair',
    titleAr: 'تجهيز السطح وتعديل الصدمات',
    descEn: 'Thorough sanding, body filler leveling, anti-corrosion primer application, and masking before paint spray.',
    descAr: 'تسوية الصدمات، صنفرة دقيقة للسطح، وضع طبقات الأساس العازلة والمقاومة للصدأ والتغطية المحكمة.'
  },
  {
    image: '/images/services/service-polish.jpg',
    num: '04',
    titleEn: 'Finish & Mirror Polish',
    titleAr: 'التشطيب والتلميع فائق اللمعان',
    descEn: 'Multi-stage machine polishing, wet sanding, and ceramic clear coat enhancement to bring out rich, deep showroom reflection.',
    descAr: 'تلميع مائي وصنفرة ناعمة بأحدث الأجهزة مع طبقات ورنيش حرارية لحماية الطلاء وإبراز البريق العميق.'
  }
];

const steps = [
  { num: '01', en: 'Damage Assessment', ar: 'فحص ومعاينة' },
  { num: '02', en: 'Surface Prep & Sanding', ar: 'صنفرة وتجهيز' },
  { num: '03', en: 'Precision Masking', ar: 'عزل وتغطية' },
  { num: '04', en: 'Oven-Baked Paint', ar: 'دهان بالفرن الحراري' },
  { num: '05', en: 'Gloss Polish & QC', ar: 'تلميع وفحص الجودة' }
];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  const rtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, rtl]);

  const wa = 'https://wa.me/97471270891?text=' + encodeURIComponent(
    lang === 'ar' 
      ? 'السلام عليكم، أود الاستفسار عن دهان وتجديد سيارتي في منطقة مسعود لدهان السيارات.' 
      : 'Hello Masud Auto Paint Zone, I would like to get a quote and assess my car for paint/refinishing.'
  );

  return (
    <main className={rtl ? 'rtl' : ''}>
      {/* Header */}
      <header>
        <a className="brand" href="#home">
          <img src="/images/logo.png" alt="Masud Auto Paint Zone" className="brandLogo" />
          <span className="brandInfo">
            <b>MASUD</b>
            <small>AUTO PAINT ZONE</small>
          </span>
        </a>

        <nav>
          {t.nav.map((n, i) => (
            <a key={n} href={'#' + ['home', 'services', 'process', 'work', 'contact'][i]}>
              {n}
            </a>
          ))}
        </nav>

        <div className="headActions">
          <button 
            type="button" 
            className="lang" 
            onClick={() => setLang(rtl ? 'en' : 'ar')}
            aria-label="Change Language"
          >
            <Languages size={18} />
            <span>{rtl ? 'English' : 'العربية'}</span>
          </button>

          <a className="miniCall" href="tel:+97471270891" aria-label="Call Workshop">
            <Phone size={17} />
          </a>

          <button 
            type="button" 
            className="menu" 
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation menu"
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menu && (
        <div className="mobileNav">
          {t.nav.map((n, i) => (
            <a 
              onClick={() => setMenu(false)} 
              key={n} 
              href={'#' + ['home', 'services', 'process', 'work', 'contact'][i]}
            >
              {n}
            </a>
          ))}
          <div className="mobileNavActions">
            <a className="primary w-full justify-center" href={wa} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>{t.quote}</span>
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <img 
          src="/images/hero-painted-car.png" 
          alt="Premium freshly painted vehicle in workshop" 
          loading="eager"
        />
        <div className="heroShade" />

        <div className="heroContent">
          <div className="eyebrow">
            <span />
            {t.eyebrow}
          </div>
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>

          <div className="heroBtns">
            <a className="primary" href={wa} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              <span>{t.quote}</span>
              {rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </a>
            <a className="ghost" href="tel:+97471270891">
              <Phone size={19} />
              <span>{t.call}</span>
            </a>
          </div>

          <div className="proof">
            <Star className="text-amber-400 fill-amber-400" size={18} />
            <span>{t.proof}</span>
          </div>
        </div>

        <div className="heroCard">
          <small>{rtl ? 'تواصل مباشر' : 'DIRECT CONTACT'}</small>
          <b dir="ltr">+974 7127 0891</b>
          <span>
            <MapPin size={15} />
            {t.location}
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section light">
        <div className="sectionTop">
          <div>
            <span className="kicker">{rtl ? 'الخدمات المتاحة' : 'OUR SERVICES'}</span>
            <h2>{t.services}</h2>
          </div>
          <p>{t.servicesSub}</p>
        </div>

        <div className="serviceGrid">
          {services.map((s) => (
            <article key={s.num}>
              <div className="serviceImgWrap">
                <img 
                  src={s.image} 
                  alt={rtl ? s.titleAr : s.titleEn} 
                  className="serviceImg" 
                  loading="lazy" 
                />
              </div>
              <small>{s.num}</small>
              <h3>{rtl ? s.titleAr : s.titleEn}</h3>
              <p>{rtl ? s.descAr : s.descEn}</p>
              <a href={wa} target="_blank" rel="noreferrer">
                <span>{rtl ? 'استفسر عبر واتساب' : 'Inquire on WhatsApp'}</span>
                {rtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="processImage">
          <img 
            src="/images/workshop.png" 
            alt="Masud Auto Paint Zone workshop in Sanaya" 
          />
          <div className="floating">
            <ShieldCheck size={26} />
            <span>
              <b>{rtl ? 'ضمان الجودة والإتقان' : 'Quality Craftsmanship Guaranteed'}</b>
              <small>{rtl ? 'أفران حرارية ومطابقة للألوان بالكمبيوتر' : 'Oven-baked finishes & precision matching'}</small>
            </span>
          </div>
        </div>

        <div className="processText">
          <span className="kicker gold">{rtl ? 'طريقة العمل' : 'THE PROCESS'}</span>
          <h2>{t.process}</h2>
          <p>{t.processSub}</p>

          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <b>{s.num}</b>
                <span>{rtl ? s.ar : s.en}</span>
              </div>
            ))}
          </div>

          <a className="textLink" href={wa} target="_blank" rel="noreferrer">
            <span>{t.quote}</span>
            {rtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
          </a>
        </div>
      </section>

      {/* Transformations / Work Section */}
      <section id="work" className="section dark">
        <div className="sectionTop">
          <div>
            <span className="kicker gold">{rtl ? 'معرض الأعمال' : 'TRANSFORMATIONS'}</span>
            <h2>{t.transform}</h2>
          </div>
          <p>{t.transformSub}</p>
        </div>

        {/* Featured Before & After Card */}
        <div className="transformCard">
          <img 
            src="/images/before-after-landcruiser.png" 
            alt="Toyota Land Cruiser Before and After Paint Restoration" 
          />
          <div className="transformNote">
            <span>{rtl ? 'تويوتا لاند كروزر • إصلاح وترميم كامل' : 'TOYOTA LAND CRUISER • COMPLETE RESTORATION'}</span>
            <b>{rtl ? 'معالجة الخدوش ودهان حراري فاخر' : 'Scratch Repair & Flawless Pearl Respray'}</b>
            <p>
              {rtl 
                ? 'معالجة كاملة لسطح الهيكل، طبقات طلاء مطابقة للون الوكالة، وطبقة ورنيش حرارية فائقة اللمعان.'
                : 'Full body prep, precision computerised color match, oven clear coat, and mirror-finish polishing.'}
            </p>
          </div>
        </div>

        {/* Studio Gallery Images */}
        <div className="gallery">
          <figure>
            <img 
              src="/images/paint-booth.png" 
              alt="Automotive paint application inside spray booth" 
            />
            <figcaption>{rtl ? 'الرش داخل الكابينة الحرارية' : 'Precision spray booth application'}</figcaption>
          </figure>
          <figure>
            <img 
              src="/images/workshop.png" 
              alt="SUV preparation and polish finish in workshop" 
            />
            <figcaption>{rtl ? 'تجهيز وتشطيب سيارات الدفع الرباعي' : 'SUV preparation & finish'}</figcaption>
          </figure>
        </div>
      </section>

      {/* Trust & Highlights Section */}
      <section className="trust">
        <div>
          <div className="trustIconRow">
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <b>5.0 ★</b>
          </div>
          <span>{rtl ? 'تقييم ممتاز من العملاء' : 'Customer Review Rating'}</span>
        </div>

        <div>
          <div className="trustIconRow">
            <CheckCircle2 className="text-amber-400" size={24} />
            <b>100%</b>
          </div>
          <span>{rtl ? 'مطابقة لون الوكالة' : 'Exact Color Match Guarantee'}</span>
        </div>

        <div>
          <div className="trustIconRow">
            <MapPin className="text-amber-400" size={24} />
            <b>Sanaya</b>
          </div>
          <span>{rtl ? 'المنطقة الصناعية، قطر' : 'Convenient Qatar Location'}</span>
        </div>

        <div>
          <div className="trustIconRow">
            <Clock className="text-amber-400" size={24} />
            <b>Fast</b>
          </div>
          <span>{rtl ? 'إنجاز سريع ومواعيد دقيقة' : 'On-Time Turnaround'}</span>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="cta">
        <div>
          <span className="kicker gold">{rtl ? 'تواصل معنا الآن' : 'GET A FAST QUOTE'}</span>
          <h2>{t.contact}</h2>
          <p>{t.contactSub}</p>

          <div className="heroBtns">
            <a className="primary" href={wa} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              <span>{t.quote}</span>
            </a>
            <a className="ghost" href="tel:+97471270891">
              <Phone size={19} />
              <span>{t.phone}</span>
            </a>
          </div>
        </div>

        <div className="contactPanel">
          <div className="contactItem">
            <MapPin className="text-amber-400" size={24} />
            <div>
              <small>{rtl ? 'الموقع' : 'WORKSHOP LOCATION'}</small>
              <b>{t.location}</b>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Masud+Auto+Paint+Zone+Sanaya+Qatar"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 text-xs block mt-1 hover:underline"
              >
                {rtl ? 'عرض على خرائط Google ←' : 'Open in Google Maps →'}
              </a>
            </div>
          </div>

          <div className="contactItem">
            <Phone className="text-amber-400" size={24} />
            <div>
              <small>{rtl ? 'الهاتف وواتساب' : 'PHONE & WHATSAPP'}</small>
              <b dir="ltr">+974 7127 0891</b>
              <span className="text-xs text-gray-400 block mt-1">
                {rtl ? 'متاح طوال أيام العمل' : 'Available for calls & WhatsApp'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="brand">
          <img src="/images/logo.png" alt="Masud Auto Paint Zone" className="brandLogo" />
          <span className="brandInfo">
            <b>MASUD</b>
            <small>AUTO PAINT ZONE</small>
          </span>
        </div>
        <p>{t.footerNote}</p>
        <span>© 2026 Masud Auto Paint Zone. {rtl ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}</span>
      </footer>

      {/* Floating WhatsApp Action */}
      <a 
        className="floatWa" 
        href={wa} 
        target="_blank" 
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
