import { useEffect, useState } from 'react';
import { ArrowRight, Car, ChevronRight, Languages, Mail, MapPin, Menu, MessageCircle, Paintbrush, Phone, ShieldCheck, Sparkles, Truck, Wrench, X } from 'lucide-react';

type Lang='en'|'ar';
const copy={
  en:{nav:['Home','Services','Process','Transformations','Contact'],eyebrow:'AUTO PAINT • BODY REPAIR • DOHA, QATAR',hero:'Bring Back the Finish Your Car Deserves.',sub:'Professional auto painting, body repair and refinishing in Doha — with direct WhatsApp contact for fast enquiries and vehicle assessments.',quote:'Send Car Photos on WhatsApp',call:'Call Workshop',services:'Auto paint & body repair services',servicesSub:'Comprehensive automotive painting and bodywork solutions in Doha.',process:'A clearer path from damage to shine',transform:'See the transformation',transformSub:'Before-and-after imagery makes the value of paint restoration immediately visible.',contact:'Ready to refresh your car?',contactSub:'Send photos of the vehicle on WhatsApp and discuss the work directly with Mohammed Masud.',location:'5CCC+QXG, Doha, Qatar',phone:'+974 7127 0891',email:'mohamodmasud930@gmail.com',demo:'Doha Auto Paint Zone — Perfection in every coat. Premium automotive painting, body repair, and refinishing workshop in Doha, Qatar.'},
  ar:{nav:['الرئيسية','الخدمات','الخطوات','قبل وبعد','تواصل معنا'],eyebrow:'دهان سيارات • إصلاح الهيكل • الدوحة، قطر',hero:'أعد لسيارتك اللمعان الذي تستحقه.',sub:'خدمات احترافية لدهان السيارات وإصلاح الهيكل والتشطيب في الدوحة، مع تواصل مباشر عبر واتساب للاستفسار وتقييم السيارة.',quote:'أرسل صور السيارة عبر واتساب',call:'اتصل بالورشة',services:'خدمات دهان وإصلاح السيارات',servicesSub:'حلول متكاملة لدهان وإصلاح هياكل السيارات في الدوحة.',process:'من الضرر إلى اللمعان بخطوات واضحة',transform:'شاهد الفرق',transformSub:'صور قبل وبعد توضح قيمة ترميم الدهان بسرعة ووضوح.',contact:'هل تريد تجديد مظهر سيارتك؟',contactSub:'أرسل صور السيارة عبر واتساب وناقش العمل مباشرة مع محمد مسعود.',location:'5CCC+QXG، الدوحة، قطر',phone:'+974 7127 0891',email:'mohamodmasud930@gmail.com',demo:'دوحة أوتو باينت زون — الدقة والإتقان في كل طبقة طلاء. ورشتكم المتخصصة لدهان وإصلاح هياكل السيارات في الدوحة، قطر.'}
};
const services=[
 ['Full Body Paint','دهان كامل للسيارة',Paintbrush],['Dent Repair','إصلاح الصدمات',Car],['Scratch Removal','إزالة الخدوش',Sparkles],['Bumper Repair','إصلاح الصدام',Wrench],['Accident Repair','إصلاح أضرار الحوادث',ShieldCheck],['Chassis Repair','إصلاح الشاسيه',Wrench],['Color Matching','مطابقة الألوان',Paintbrush],['Polish & Ceramic Coating','تلميع وطلاء سيراميك',Sparkles],['Insurance Claim','مطالبات التأمين',ShieldCheck],['Pickup & Delivery','استلام وتوصيل',Truck]
];
const steps=[['01','Inspect','فحص'],['02','Prepare','تجهيز'],['03','Repair','إصلاح'],['04','Paint','دهان'],['05','Finish','تشطيب']];
export default function App(){
 const [lang,setLang]=useState<Lang>('en'); const [menu,setMenu]=useState(false); const t=copy[lang]; const rtl=lang==='ar';
 useEffect(()=>{document.documentElement.dir=rtl?'rtl':'ltr';document.documentElement.lang=lang},[lang,rtl]);
 const wa='https://wa.me/97471270891?text='+encodeURIComponent(rtl?'السلام عليكم، أريد الاستفسار عن خدمات دهان وإصلاح سيارتي.':'Assalamu Alaikum, I would like to ask about painting or repairing my car.');
 const Brand=()=> <div className="brandMark"><img className="brandLogo" src="/images/logo.png" alt="Doha Auto Paint Zone logo"/><div><b>DOHA AUTO PAINT ZONE</b><small>PERFECTION IN EVERY COAT</small></div></div>;
 return <main className={rtl?'rtl':''}>
  <header><a className="brand" href="#home"><Brand/></a><nav>{t.nav.map((n,i)=><a key={n} href={'#'+['home','services','process','work','contact'][i]}>{n}</a>)}</nav><div className="headActions"><button className="lang" onClick={()=>setLang(rtl?'en':'ar')}><Languages size={18}/>{rtl?'EN':'العربية'}</button><a className="miniCall" href="tel:+97471270891"><Phone size={17}/></a><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  {menu&&<div className="mobileNav">{t.nav.map((n,i)=><a onClick={()=>setMenu(false)} key={n} href={'#'+['home','services','process','work','contact'][i]}>{n}</a>)}</div>}
  <section id="home" className="hero"><img src="/images/hero-painted-car.png" alt="Beautifully painted SUV in an auto paint workshop"/><div className="heroShade"/><div className="heroContent"><div className="eyebrow"><span></span>{t.eyebrow}</div><h1>{t.hero}</h1><p>{t.sub}</p><div className="heroBtns"><a className="primary" href={wa} target="_blank"><MessageCircle size={20}/>{t.quote}<ArrowRight size={18}/></a><a className="ghost" href="tel:+97471270891"><Phone size={19}/>{t.call}</a></div><div className="proof"><ShieldCheck/><span>{rtl?'Doha Auto Paint Zone • محمد مسعود':'Doha Auto Paint Zone • Mohammed Masud'}</span></div></div><div className="heroCard"><small>{rtl?'تواصل مباشر':'DIRECT CONTACT'}</small><b>+974 7127 0891</b><span><MapPin size={15}/>{t.location}</span></div></section>
  <section id="services" className="section light"><div className="sectionTop"><div><span className="kicker">{rtl?'الخدمات':'SERVICES'}</span><h2>{t.services}</h2></div><p>{t.servicesSub}</p></div><div className="serviceGrid ten">{services.map(([en,ar,Icon],i)=><article key={String(en)}><div className="serviceIcon"><Icon/></div><small>{String(i+1).padStart(2,'0')}</small><h3>{rtl?String(ar):String(en)}</h3><a href={wa} target="_blank">{rtl?'استفسر الآن':'Ask on WhatsApp'} <ChevronRight size={16}/></a></article>)}</div></section>
  <section id="process" className="process"><div className="processImage"><img src="/images/workshop.png" alt="Auto paint workshop"/><div className="floating"><ShieldCheck/><span><b>{rtl?'الاهتمام بالتفاصيل':'Detail-focused presentation'}</b><small>{rtl?'من الإصلاح إلى التشطيب':'From repair to finish'}</small></span></div></div><div className="processText"><span className="kicker blue">{rtl?'طريقة العمل':'THE PROCESS'}</span><h2>{t.process}</h2><p>{rtl?'مسار بسيط يوضح للعميل مراحل العمل من فحص السيارة وحتى التشطيب النهائي.':'A simple customer journey from vehicle inspection through repair, paint and final finish.'}</p><div className="steps">{steps.map(s=><div className="step" key={s[0]}><b>{s[0]}</b><span>{rtl?s[2]:s[1]}</span></div>)}</div><a className="textLink" href={wa} target="_blank">{t.quote}<ArrowRight size={17}/></a></div></section>
  <section id="work" className="section dark">
    <div className="sectionTop">
      <div>
        <span className="kicker blue">{rtl ? 'النتائج والتحولات' : 'TRANSFORMATIONS'}</span>
        <h2>{t.transform}</h2>
      </div>
      <p>{t.transformSub}</p>
    </div>

    <div className="transformCard">
      <img src="/images/before-after-landcruiser.png" alt="Land Cruiser before and after paint restoration" />
      <div className="transformNote">
        <span>{rtl ? 'تويوتا لاند كروزر • ترميم وإصلاح كامل' : 'TOYOTA LAND CRUISER • COMPLETE RESTORATION'}</span>
        <b>{rtl ? 'لاند كروزر — قبل وبعد' : 'Land Cruiser — Before & After'}</b>
        <p>{rtl ? 'معالجة شاملة لسطح الهيكل وإصلاح الخدوش والطعجات، مع دهان حراري مطابق للوكالة وتلميع فائق.' : 'Complete body dent and scratch repair, precision color matching, oven-baked clear coat, and mirror gloss polish.'}</p>
      </div>
    </div>

    <div className="gallery">
      <figure>
        <img src="/images/brand-visual.png" alt="Doha Auto Paint Zone Brand Experience" />
        <figcaption>{rtl ? 'هوية دوحة أوتو باينت زون' : 'Doha Auto Paint Zone Brand Visual'}</figcaption>
      </figure>
      <figure>
        <img src="/images/paint-booth.png" alt="Paint application" />
        <figcaption>{rtl ? 'مرحلة الدهان بالفرن الحراري' : 'Precision Paint Booth Application'}</figcaption>
      </figure>
      <figure>
        <img src="/images/workshop.png" alt="Workshop" />
        <figcaption>{rtl ? 'تجهيز وتشطيب سيارات الدفع الرباعي' : 'Vehicle Preparation & Finish'}</figcaption>
      </figure>
    </div>
  </section>
  <section id="contact" className="cta"><div><span className="kicker blue">{rtl?'ابدأ الآن':'GET A QUOTE'}</span><h2>{t.contact}</h2><p>{t.contactSub}</p><div className="heroBtns"><a className="primary" href={wa} target="_blank"><MessageCircle size={20}/>{t.quote}</a><a className="ghost" href="tel:+97471270891"><Phone size={19}/>{t.phone}</a></div></div><div className="contactPanel"><MapPin/><span><small>{rtl?'الموقع':'LOCATION'}</small><b>{t.location}</b></span><Phone/><span><small>{rtl?'الهاتف / واتساب':'PHONE / WHATSAPP'}</small><b>+974 7127 0891</b></span><Mail/><span><small>{rtl?'البريد الإلكتروني':'EMAIL'}</small><a href="mailto:mohamodmasud930@gmail.com">{t.email}</a></span><Car/><span><small>{rtl?'جهة التواصل':'CONTACT PERSON'}</small><b>{rtl?'محمد مسعود':'Mohammed Masud'}</b></span></div></section>
  <footer><Brand/><p>{t.demo}</p><span>© 2026 Doha Auto Paint Zone — Perfection in Every Coat</span></footer>
  <a className="floatWa" href={wa} target="_blank" aria-label="WhatsApp"><MessageCircle/></a>
 </main>
}
