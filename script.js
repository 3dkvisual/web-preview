// ─── I18N ─────────────────────────────────────────────────────────
const translations = {
  es: {
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portfolio',
    'nav.academy': 'Academia',
    'nav.contact': 'Contacto',
    'hero.label': 'Buenos Aires, Motion & CGI Studio',
    'hero.headline': 'Unreal to Real.',
    'hero.sub': 'FOOH &nbsp;·&nbsp; DOOH &nbsp;·&nbsp; Animación 3D &nbsp;·&nbsp; IA Generativa',
    'hero.cta1': 'Cotizá tu proyecto',
    'hero.cta2': 'Ver trabajos →',
    'stats.label1': 'Proyectos',
    'stats.label2': 'Clientes',
    'stats.label3': 'Años',
    'stats.label4': 'Marcas',
    'services.tag': 'Lo que hacemos',
    'services.title': 'Servicios',
    's1.name': 'CGI FOOH',
    's1.desc': 'Campañas CGI de Fake Out-Of-Home diseñadas para impacto viral. Efectos visuales hiperrealistas integrados en footage real.',
    's1.link': 'Iniciar proyecto →',
    's2.name': 'DOOH',
    's2.desc': 'Contenido 3D anamórfico para pantallas digitales out-of-home. Visuales inmersivos que rompen el marco y detienen audiencias.',
    's2.link': 'Iniciar proyecto →',
    's3.name': 'Video 3D de Producto',
    's3.desc': 'Renders y animaciones 3D hiperrealistas de producto para publicidad y e-commerce. Cada detalle llevado al máximo nivel.',
    's3.link': 'Iniciar proyecto →',
    's4.name': 'Workflow con IA',
    's4.desc': 'Producción CGI acelerada con workflows de IA integrada. Más iteraciones, más posibilidades, mismo estándar de producción.',
    's4.link': 'Iniciar proyecto →',
    'portfolio.tag': 'Trabajos seleccionados',
    'portfolio.title': 'Portfolio',
    'clients.label': 'Marcas que confiaron en nosotros',
    'academy.tag': '3DK Academia',
    'academy.title': 'Aprendé CGI e IA de un<br>profesional en actividad.',
    'academy.sub': 'Workflows reales. Clientes reales. Resultados reales.<br>Dominá las herramientas que cobran desde un estudio CGI en Buenos Aires.',
    'c1.num': '01', 'c1.title': 'CGI FOOH<br>en Blender', 'c1.niche': 'Publicidad Viral',
    'c1.f1': 'Tracking y compositing VFX', 'c1.f2': 'Producción de campañas FOOH',
    'c1.f3': 'Add-on de tracking exclusivo (3 meses gratis)', 'c1.f4': 'Mentoría 1:1 incluida',
    'c1.note': 'Precio lanzamiento · Regular $499', 'c1.cta': 'Reservar lugar',
    'c2.num': '02', 'c2.title': 'Blender +<br>ComfyUI', 'c2.niche': 'Workflows Híbridos',
    'c2.f1': 'Pipeline 3D + IA integrado', 'c2.f2': 'ControlNet y workflows de profundidad',
    'c2.f3': 'Outputs listos para producción', 'c2.f4': 'Mentoría 1:1 incluida',
    'c2.note': 'Precio lanzamiento · Regular $499', 'c2.cta': 'Reservar lugar',
    'c3.num': '03', 'c3.title': 'Master<br>ComfyUI', 'c3.niche': 'IA por Nodos',
    'c3.f1': 'De cero a producción — nodo por nodo', 'c3.f2': 'Stable Diffusion, LoRA, IPAdapter',
    'c3.f3': 'Workflows de video e imagen', 'c3.f4': 'Mentoría 1:1 incluida',
    'c3.note': 'Precio lanzamiento · Regular $499', 'c3.cta': 'Reservar lugar',
    'bundle.title': 'Bundle — Los 3 cursos', 'bundle.save': 'Ahorrás $203 USD',
    'bundle.regular': 'Regular $1.197', 'bundle.cta': 'Obtener el Bundle',
    'academy.note': 'Precio de lanzamiento — primeros 6 meses. Financiación disponible: 6 cuotas de $50 USD.',
    'about.tag': 'El estudio',
    'about.p1': 'Director Creativo &amp; Head of CGI con <strong>más de 10 años</strong> entregando trabajo visual de alto nivel para marcas globales. Fundador de 3DK Visual, un estudio en Buenos Aires con <strong>más de 1.000 proyectos</strong> y <strong>más de 100 clientes</strong> en publicidad, DOOH, FOOH y AR.',
    'about.p2': 'Colaboraciones con agencias de <strong>Publicis Group</strong> y <strong>WPP / Ogilvy</strong>.',
    'contact.tag': 'Trabajemos juntos',
    'contact.title': 'Iniciá un proyecto',
    'contact.sub': 'Contanos qué estás construyendo.<br>Nosotros te decimos cómo hacerlo inolvidable.',
    'form.name': 'Nombre', 'form.name.ph': 'Tu nombre',
    'form.company': 'Empresa', 'form.company.ph': 'Nombre de tu empresa',
    'form.email': 'Email', 'form.email.ph': 'tu@email.com',
    'form.service': 'Servicio', 'form.service.ph': 'Seleccioná un servicio',
    'form.message': 'Mensaje', 'form.message.ph': 'Contanos sobre tu proyecto…',
    'form.submit': 'Enviar mensaje',
    'contact.loc': 'Ubicación',
    'footer.tagline': 'Unreal to Real.',
    'footer.copy': '© 2026 3DK Visual. Todos los derechos reservados.',
  },
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.academy': 'Academy',
    'nav.contact': 'Contact',
    'hero.label': 'Buenos Aires, Motion & CGI Studio',
    'hero.headline': 'Unreal to Real.',
    'hero.sub': 'FOOH &nbsp;·&nbsp; DOOH &nbsp;·&nbsp; 3D Animation &nbsp;·&nbsp; Generative AI',
    'hero.cta1': 'Get a Quote',
    'hero.cta2': 'View Our Work →',
    'stats.label1': 'Projects',
    'stats.label2': 'Clients',
    'stats.label3': 'Years',
    'stats.label4': 'Brands',
    'services.tag': 'What We Do',
    'services.title': 'Services',
    's1.name': 'CGI FOOH',
    's1.desc': 'Fake Out-Of-Home CGI campaigns engineered for viral reach. Hyper-realistic visual effects seamlessly integrated into real-world footage.',
    's1.link': 'Start a project →',
    's2.name': 'DOOH',
    's2.desc': 'Anamorphic 3D content for digital out-of-home screens. Immersive visuals that break the frame and stop audiences in their tracks.',
    's2.link': 'Start a project →',
    's3.name': '3D Product Video',
    's3.desc': 'Hyper-realistic 3D product renders and animations for advertising and e-commerce. Every detail crafted to the highest standard.',
    's3.link': 'Start a project →',
    's4.name': 'AI Workflow',
    's4.desc': 'CGI production accelerated with integrated AI workflows. Faster iterations, broader creative possibilities, production-grade output.',
    's4.link': 'Start a project →',
    'portfolio.tag': 'Selected Work',
    'portfolio.title': 'Portfolio',
    'clients.label': 'Trusted by global brands',
    'academy.tag': '3DK Academy',
    'academy.title': 'Learn CGI & AI from a<br>Working Professional.',
    'academy.sub': 'Real workflows. Real clients. Real results.<br>Master the tools that pay — straight from a Buenos Aires CGI studio.',
    'c1.num': '01', 'c1.title': 'CGI FOOH<br>in Blender', 'c1.niche': 'Viral Advertising',
    'c1.f1': 'VFX tracking & compositing', 'c1.f2': 'FOOH campaign production',
    'c1.f3': 'Exclusive tracking add-on (3 months free)', 'c1.f4': '1:1 mentorship included',
    'c1.note': 'Launch price · Regular $499', 'c1.cta': 'Reserve Your Spot',
    'c2.num': '02', 'c2.title': 'Blender +<br>ComfyUI', 'c2.niche': 'Hybrid Workflows',
    'c2.f1': '3D + AI pipeline integration', 'c2.f2': 'ControlNet & depth workflows',
    'c2.f3': 'Production-ready outputs', 'c2.f4': '1:1 mentorship included',
    'c2.note': 'Launch price · Regular $499', 'c2.cta': 'Reserve Your Spot',
    'c3.num': '03', 'c3.title': 'Master<br>ComfyUI', 'c3.niche': 'AI by Nodes',
    'c3.f1': 'Zero to production — node by node', 'c3.f2': 'Stable Diffusion, LoRA, IPAdapter',
    'c3.f3': 'Video & image workflows', 'c3.f4': '1:1 mentorship included',
    'c3.note': 'Launch price · Regular $499', 'c3.cta': 'Reserve Your Spot',
    'bundle.title': 'Bundle — All 3 Courses', 'bundle.save': 'Save $203 USD',
    'bundle.regular': 'Regular $1,197', 'bundle.cta': 'Get the Bundle',
    'academy.note': 'Launch pricing — first 6 months only. Financing available: 6 x $50 USD.',
    'about.tag': 'About the Studio',
    'about.p1': 'Creative Director &amp; Head of CGI with <strong>10+ years</strong> delivering high-end visual work for global brands. Founder of 3DK Visual, a Buenos Aires-based studio with <strong>1,000+ projects</strong> and <strong>100+ clients</strong> across advertising, DOOH, FOOH, and AR.',
    'about.p2': 'Agency collaborations include <strong>Publicis Group</strong> and <strong>WPP / Ogilvy</strong>.',
    'contact.tag': 'Work With Us',
    'contact.title': 'Start a Project',
    'contact.sub': 'Tell us what you\'re building.<br>We\'ll tell you how to make it unforgettable.',
    'form.name': 'Name', 'form.name.ph': 'Your name',
    'form.company': 'Company', 'form.company.ph': 'Company name',
    'form.email': 'Email', 'form.email.ph': 'your@email.com',
    'form.service': 'Service', 'form.service.ph': 'Select a service',
    'form.message': 'Message', 'form.message.ph': 'Tell us about your project…',
    'form.submit': 'Send Message',
    'contact.loc': 'Location',
    'footer.tagline': 'Unreal to Real.',
    'footer.copy': '© 2026 3DK Visual. All rights reserved.',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  document.documentElement.lang = lang;
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'es' ? 'ES' : 'EN';
  currentLang = lang;
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// Sticky nav
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .portfolio-card, .course-card, .stat').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
