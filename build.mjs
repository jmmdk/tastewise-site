// Static site generator for gettastewise.com. Run: node build.mjs
// Writes index.html (EN), da/index.html, privacy/, terms/, delete-account/ (+ da/ versions), 404.html, sitemap.xml, robots.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { content } from './src/content.mjs';
import { legal } from './src/legal.mjs';
import { icons } from './src/icons.mjs';

const SITE = 'https://gettastewise.com';
const STORE = { ios: '#', android: '#' }; // replace with real store links when the app is live
const LASTMOD = '2026-11-12';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => s.replace(/<[^>]+>/g, '');
const write = (file, html) => { mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, html); console.log('wrote', file); };
const legalPath = (lang, kind) => (lang === 'en' ? `/${kind}/` : `/da/${kind}/`);

function head({ c, title, description, path, altPath, ogImage, jsonld = [] }) {
  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE}${path}">
<link rel="alternate" hreflang="${c.lang}" href="${SITE}${path}">
<link rel="alternate" hreflang="${c.alt.lang}" href="${SITE}${altPath}">
<link rel="alternate" hreflang="x-default" href="${SITE}${c.lang === 'en' ? path : altPath}">
<meta name="theme-color" content="#EEEDF4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#15151B" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Tastewise">
<meta property="og:locale" content="${c.locale}">
<meta property="og:locale:alternate" content="${c.lang === 'en' ? 'da_DK' : 'en_US'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${SITE}${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(c.ogTitle)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE}${ogImage}">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@500;600;700&display=swap">
<link rel="stylesheet" href="/assets/site.css?v=1">
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}
</head>`;
}

function header(c, altPath, home) {
  const h = home ? '' : c.path;
  return `<a class="skip" href="#main">${c.lang === 'da' ? 'Spring til indhold' : 'Skip to content'}</a>
<header class="top"><div class="wrap">
<a class="brand" href="${c.path}"><img src="/assets/img/icon-256.webp" width="38" height="38" alt="">Tastewise</a>
<nav class="nav" aria-label="${c.lang === 'da' ? 'Hovedmenu' : 'Main'}">
<a class="hide-m" href="${h}#how">${c.nav.how}</a>
<a class="hide-m" href="${h}#science">${c.nav.science}</a>
<a class="hide-m" href="${h}#faq">${c.nav.faq}</a>
<a class="lang" href="${altPath}" hreflang="${c.alt.lang}" lang="${c.alt.lang}">${c.alt.label}</a>
</nav></div></header>`;
}

function badges(c) {
  return `<div class="badges">
<a class="badge" href="${STORE.ios}" aria-label="${esc(c.badges.ios1 + ' ' + c.badges.ios2)}">${icons.apple}<span><small>${c.badges.ios1}</small><b>${c.badges.ios2}</b></span></a>
<a class="badge" href="${STORE.android}" aria-label="${esc(c.badges.and1 + ' ' + c.badges.and2)}">${icons.play}<span><small>${c.badges.and1}</small><b>${c.badges.and2}</b></span></a>
</div>`;
}

function footer(c) {
  const year = 2026;
  return `<footer><div class="wrap">
<div><a class="brand" href="${c.path}"><img src="/assets/img/icon-256.webp" width="38" height="38" alt="" loading="lazy">Tastewise</a>
<p style="margin-top:12px">${c.footer.about}</p></div>
<div><h4>${c.footer.legal}</h4><ul>
<li><a href="${legalPath(c.lang, 'privacy')}">${c.footer.privacy}</a></li>
<li><a href="${legalPath(c.lang, 'terms')}">${c.footer.terms}</a></li>
<li><a href="${legalPath(c.lang, 'delete-account')}">${c.footer.deleteAccount}</a></li>
<li><a href="${c.alt.path}" hreflang="${c.alt.lang}">${c.alt.label}</a></li></ul></div>
<div><h4>${c.footer.contact}</h4><ul>
<li><a href="mailto:hi@gettastewise.com">hi@gettastewise.com</a></li>
<li>Useful Apps ApS<br>Staghøjvej 23A<br>8210 Aarhus V, ${c.lang === 'da' ? 'Danmark' : 'Denmark'}<br>CVR: DK43969188</li></ul></div>
</div><div class="wrap"><p style="margin-top:20px">© ${year} Useful Apps ApS. ${c.footer.rights}</p></div></footer>`;
}

function landing(c) {
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: c.lang, mainEntity: c.faq.items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  const appLd = {
    '@context': 'https://schema.org', '@type': 'MobileApplication', name: 'Tastewise', operatingSystem: 'iOS, Android',
    applicationCategory: 'HealthApplication', description: c.description, url: SITE + c.path, inLanguage: c.lang,
    image: `${SITE}/assets/img/icon-512.png`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'DKK', description: c.lang === 'da' ? 'Gratis at hente. Tastewise Pro-abonnement med 7 dages gratis prøve.' : 'Free download. Tastewise Pro subscription with a 7-day free trial.' },
    publisher: { '@id': `${SITE}/#org` },
  };
  const orgLd = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE}/#org`, name: 'Useful Apps ApS', url: SITE, logo: `${SITE}/assets/img/icon-512.png`, email: 'hi@gettastewise.com', vatID: 'DK43969188', address: { '@type': 'PostalAddress', streetAddress: 'Staghøjvej 23A', postalCode: '8210', addressLocality: 'Aarhus V', addressCountry: 'DK' } };
  const webLd = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Tastewise', url: SITE + c.path, inLanguage: c.lang, publisher: { '@id': `${SITE}/#org` } };

  return `${head({ c, title: c.title, description: c.description, path: c.path, altPath: c.alt.path, ogImage: `/assets/img/og-${c.lang}.jpg`, jsonld: [appLd, orgLd, webLd, faqLd] })}
<body>
${header(c, c.alt.path, true)}
<main id="main">
<section class="hero"><div class="wrap">
<div>
<span class="eyebrow"><i></i>${c.hero.eyebrow}</span>
<h1>${c.hero.h1}</h1>
<p class="lead">${c.hero.lead}</p>
${badges(c)}
<p class="note">${c.hero.note} ${c.badges.soon}</p>
</div>
<div class="hero-art"><div class="bubble">${c.hero.bubble}</div>
<img src="/assets/img/turtle-wave.webp" width="520" height="569" alt="${c.lang === 'da' ? 'Tastewise-skildpadden vinker' : 'The Tastewise turtle waving hello'}" fetchpriority="high"></div>
</div></section>

<section class="center" aria-labelledby="feel"><div class="wrap">
<h2 id="feel">${c.feel.title}</h2>
<div class="feel">${c.feel.items.map((i) => `<span>${i}</span>`).join('')}</div>
<p class="lead" style="margin-top:26px">${c.feel.outro}</p>
</div></section>

<section id="how" aria-labelledby="how-t"><div class="wrap">
<div class="center"><div class="kicker">${c.how.kicker}</div><h2 id="how-t">${c.how.title}</h2><p class="lead">${c.how.lead}</p></div>
<div class="grid g4 steps" style="margin-top:34px">
${c.how.steps.map((s, i) => `<div class="card step"><div class="ico c-${s.k}">${icons[s.icon]}</div><h3>${i + 1}. ${s.t}</h3><p>${s.d}</p></div>`).join('\n')}
</div>
<div class="show">
${c.show.items.map((s) => `<figure><div class="phone"><img src="/assets/img/screen-${c.lang}-${s.img}.webp" width="416" height="900" loading="lazy" alt="${esc(s.t)}"></div><figcaption>${s.t}<span>${s.d}</span></figcaption></figure>`).join('\n')}
</div>
</div></section>

<section id="features" aria-labelledby="feat-t"><div class="wrap">
<div class="center"><div class="kicker">${c.features.kicker}</div><h2 id="feat-t">${c.features.title}</h2></div>
<div class="grid g3" style="margin-top:34px">
${c.features.items.map((f) => `<div class="card feat"><div class="ico ${f.c}">${icons[f.icon]}</div><div><h3>${f.t}</h3><p>${f.d}</p></div></div>`).join('\n')}
</div>
</div></section>

<section aria-labelledby="turtle-t"><div class="wrap split rev">
<div><h2 id="turtle-t">${c.turtle.title}</h2><p class="lead">${c.turtle.text}</p>
<blockquote class="quote">${c.turtle.quote}<small>${c.turtle.quoteBy}</small></blockquote></div>
<div class="art"><img class="turtle" src="/assets/img/turtle-okay.webp" width="360" height="445" loading="lazy" alt="${c.lang === 'da' ? 'Skildpadden lægger en rolig hånd på hjertet' : 'The turtle with a calm hand on its heart'}"></div>
</div></section>

<section id="science" class="proof" aria-labelledby="sci-t"><div class="wrap">
<div class="center"><div class="kicker">${c.science.kicker}</div><h2 id="sci-t">${c.science.title}</h2><p class="lead">${c.science.lead}</p></div>
<div class="grid g3" style="margin-top:34px">
${c.science.facts.map((f) => `<article class="fact"><b>${f.big}</b><p>${f.p}</p><cite><a href="${c.refs[f.ref].url}" rel="noopener" target="_blank">${esc(c.refs[f.ref].label)}</a></cite></article>`).join('\n')}
</div>
<div class="honest"><img src="/assets/img/turtle-think.webp" width="360" height="488" loading="lazy" alt=""><p>${c.science.honest}</p></div>
</div></section>

<section id="faq" aria-labelledby="faq-t"><div class="wrap">
<div class="center"><h2 id="faq-t">${c.faq.title}</h2></div>
<div class="faq">
${c.faq.items.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
</div>
</div></section>

<section id="download" aria-labelledby="dl-t"><div class="wrap"><div class="final">
<img src="/assets/img/turtle-eat_tomato.webp" width="420" height="451" loading="lazy" alt="${c.lang === 'da' ? 'Skildpadden tager en bid af en tomat' : 'The turtle taking a bite of a tomato'}">
<h2 id="dl-t">${c.final.title}</h2><p class="lead">${c.final.text}</p>
${badges(c)}
<p class="note">${c.badges.soon}</p>
</div></div></section>
</main>
${footer(c)}
</body></html>
`;
}

function legalPage(c, kind) {
  const doc = legal[c.lang][kind];
  const path = legalPath(c.lang, kind);
  const altPath = legalPath(c.alt.lang, kind);
  return `${head({ c, title: doc.metaTitle, description: doc.description, path, altPath, ogImage: `/assets/img/og-${c.lang}.jpg` })}
<body>
${header(c, altPath, false)}
<main id="main" class="legal">
<h1>${doc.title}</h1>
${doc.html}
</main>
${footer(c)}
</body></html>
`;
}

for (const lang of ['en', 'da']) {
  const c = content[lang];
  const base = lang === 'en' ? '' : 'da/';
  write(`${base}index.html`, landing(c));
  write(`${base}privacy/index.html`, legalPage(c, 'privacy'));
  write(`${base}terms/index.html`, legalPage(c, 'terms'));
  write(`${base}delete-account/index.html`, legalPage(c, 'delete-account'));
}

// 404
const c = content.en;
write('404.html', `${head({ c, title: 'Page not found – Tastewise', description: c.description, path: '/404.html', altPath: '/da/', ogImage: '/assets/img/og-en.jpg' }).replace('<link rel="canonical" href="https://gettastewise.com/404.html">', '<meta name="robots" content="noindex">')}
<body>${header(c, '/da/', false)}
<main id="main" class="legal center"><img src="/assets/img/turtle-think.webp" width="240" height="325" alt="" style="width:200px;margin:0 auto 20px"><h1>This page wandered off</h1><p class="lead">Even turtles take a wrong turn sometimes.</p><p><a class="btn" href="/">Back to Tastewise ${icons.arrow}</a></p></main>
${footer(c)}</body></html>
`);

const urls = [['/', '/da/'], ['/privacy/', '/da/privacy/'], ['/terms/', '/da/terms/'], ['/delete-account/', '/da/delete-account/']];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.flatMap(([en, da]) => [en, da].map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${LASTMOD}</lastmod>
<xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/><xhtml:link rel="alternate" hreflang="da" href="${SITE}${da}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${en}"/></url>`)).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
write('CNAME', 'gettastewise.com\n');
write('.nojekyll', '');
write('site.webmanifest', JSON.stringify({ name: 'Tastewise', short_name: 'Tastewise', start_url: '/', display: 'browser', background_color: '#EEEDF4', theme_color: '#53B05B', icons: [{ src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 2));
