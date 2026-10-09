#!/usr/bin/env node
/* Here With Her — page generator.
   Reads content.js and writes the finished HTML pages, plus the link-preview
   images and icons. The output is committed to git, so Vercel needs no build.

   Usage:
     node scripts/generate.js                 build pages and images
     node scripts/generate.js --skip-images   build pages only (no `npm install` needed)
*/
const fs = require("fs");
const path = require("path");
const { SITE, CONTENT } = require("../content.js");

const ROOT = path.join(__dirname, "..");
const SKIP_IMAGES = process.argv.includes("--skip-images");
const langs = Object.keys(CONTENT);

/* ---------- helpers ---------- */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fill = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => v[k]);
const jsonForHtml = (o) => JSON.stringify(o).replace(/</g, "\\u003c");
const prefixFor = (lang) => (lang === SITE.defaultLang ? "" : "/" + lang);
const pagePath = (lang, slug) => prefixFor(lang) + (slug ? "/" + slug : "/");
const fileFor = (lang, slug) =>
  path.join(ROOT, prefixFor(lang).slice(1), (slug || "index") + ".html");
const ogName = (lang, slug) =>
  (lang === SITE.defaultLang ? "" : lang + "-") + (slug || "home") + ".png";

function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data);
}

/* ---------- small illustrations (no text, so they translate for free) ---------- */
const ART = {
  sun: `<circle class="gold" cx="100" cy="80" r="34"/><g class="stroke gold-s">${[0, 45, 90, 135, 180, 225, 270, 315]
    .map((a) => `<line x1="100" y1="22" x2="100" y2="34" transform="rotate(${a} 100 80)"/>`)
    .join("")}</g>`,
  fan: `<g transform="translate(100 80)">${[0, 120, 240]
    .map((a) => `<ellipse class="rose" cx="0" cy="-30" rx="15" ry="32" transform="rotate(${a})"/>`)
    .join("")}<circle class="gold" r="10"/></g><g class="stroke"><path d="M18 52h22M12 80h18M18 108h22"/></g>`,
  moon: `<path class="accent" d="M118 26a54 54 0 1 0 30 88a44 44 0 0 1-30-88z"/><circle class="gold" cx="150" cy="40" r="5"/><circle class="gold" cx="168" cy="72" r="3.5"/><circle class="gold" cx="42" cy="34" r="4"/>`,
  cloud: `<g class="sage"><circle cx="78" cy="70" r="26"/><circle cx="108" cy="58" r="32"/><circle cx="136" cy="76" r="24"/><rect x="62" y="70" width="90" height="30" rx="15"/></g><g class="stroke rose-s"><path d="M80 116v14M108 116v22M136 116v14"/></g>`,
  hands: `<path class="sage" d="M64 56h72l-8 78a10 10 0 0 1-10 9H82a10 10 0 0 1-10-9z"/><path class="accent" d="M69 92h62l-3 42a10 10 0 0 1-10 9H82a10 10 0 0 1-10-9z"/><path class="gold" d="M100 46c-18-16-30 2-18 12l18 14l18-14c12-10 0-28-18-12z" transform="translate(0 -14) scale(1)"/>`,
  heart: `<path class="rose" d="M100 136C36 92 48 32 100 60c52-28 64 32 0 76z"/><circle class="gold" cx="150" cy="38" r="6"/><circle class="gold" cx="48" cy="48" r="4"/><circle class="gold" cx="164" cy="104" r="4"/>`,
};
const artSvg = (name) =>
  `<svg class="art" viewBox="0 0 200 160" role="presentation" aria-hidden="true" focusable="false">${ART[name] || ART.heart}</svg>`;

const logo = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="15" fill="#1f4a36"/><circle cx="16" cy="14" r="6" fill="#e8b03a"/><path d="M6 24c4-5 16-5 20 0" stroke="#d9929c" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`;

/* ---------- shared page pieces ---------- */
function head(c, lang, slug, meta) {
  const url = SITE.siteUrl + pagePath(lang, slug);
  const img = `${SITE.siteUrl}/assets/og/${ogName(lang, slug)}`;
  const alts = langs
    .map(
      (l) =>
        `<link rel="alternate" hreflang="${l}" href="${SITE.siteUrl + pagePath(l, slug)}">`
    )
    .join("\n  ");
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <link rel="canonical" href="${url}">
  ${langs.length > 1 ? alts : ""}
  <meta name="theme-color" content="#e3eadb" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#16211b" media="(prefers-color-scheme: dark)">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(c.ui.siteName)}">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${img}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(meta.imageHeadline + ". " + meta.imageSub)}">
  <meta property="og:locale" content="${lang}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(meta.title)}">
  <meta name="twitter:description" content="${esc(meta.description)}">
  <meta name="twitter:image" content="${img}">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preload" href="/assets/fonts/YoungSerif-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/AtkinsonHyperlegible-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/styles.css">
</head>`;
}

function header(c, lang, slug) {
  let switcher = "";
  if (langs.length > 1) {
    const opts = langs
      .map(
        (l) =>
          `<option value="${pagePath(l, slug)}"${l === lang ? " selected" : ""}>${esc(
            SITE.languageNames[l] || l
          )}</option>`
      )
      .join("");
    switcher = `<div class="lang-switch"><label class="sr-only" for="lang">${esc(
      c.ui.languageLabel
    )}</label><select id="lang" onchange="location.href=this.value">${opts}</select></div>`;
  }
  return `<body>
<a class="skip-link" href="#main">${esc(c.ui.skipToContent)}</a>
<header class="site-header">
  <div class="wrap${slug ? "" : " wrap--wide"}">
    <a class="brand" href="${pagePath(lang, "")}">${logo}<span>${esc(c.ui.siteName)}</span></a>
    <div class="header-tools">${switcher}</div>
  </div>
</header>`;
}

function footer(c, lang) {
  const u = c.ui;
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="share-site" data-share-site data-url="${SITE.siteUrl + pagePath(lang, "")}"
      data-message="${esc(u.shareSiteMessage)}" data-copied="${esc(u.shareSiteCopied)}">
      <p class="share-site-title">${esc(u.shareSiteHeading)}</p>
      <button type="button" class="btn btn--ghost" data-share-site-btn>${esc(u.shareSiteButton)}</button>
      <span class="status" role="status" data-share-site-status></span>
    </div>
    <nav class="footer-links" aria-label="Site">
      <a href="${pagePath(lang, "")}">${esc(u.homeLink)}</a>
      <a href="${pagePath(lang, "today")}">${esc(u.footerToday)}</a>
      <a href="${pagePath(lang, "quiz")}">${esc(u.footerQuiz)}</a>
    </nav>
    <p>${esc(c.ui.footerNote)}</p>
    <p>${esc(c.ui.footerPrivacy)}</p>
  </div>
</footer>
<script src="/assets/app.js" defer></script>
</body>
</html>
`;
}

const list = (items, cls) =>
  `<ul${cls ? ` class="${cls}"` : ""}>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

function extra(sections) {
  return (sections || [])
    .map(
      (s) => `<section${s.skipInPrint ? ' class="no-print"' : ""}>
  <h2>${esc(s.heading)}</h2>
  ${(s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("")}
  ${s.items ? list(s.items, "dots") : ""}
</section>`
    )
    .join("\n");
}

function pickerHtml(c, lang, exclude) {
  return `<ul class="picker">${c.audiences
    .filter((a) => a.slug !== exclude)
    .map(
      (a) =>
        `<li><a href="${pagePath(lang, a.slug)}"><span class="label">${esc(
          a.picker.label
        )}</span><small>${esc(a.picker.blurb)}</small></a></li>`
    )
    .join("")}</ul>`;
}

function symptomCard(c) {
  const s = c.home.symptoms;
  return `<section class="symptoms">
  <div class="not-say symptom-card">
    <h2>${esc(s.heading)}</h2>
    <p class="intro">${esc(s.intro)}</p>
    <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    <p class="instead">${esc(s.note)}</p>
    <p class="mark">${esc(c.ui.siteName)}</p>
  </div>
</section>`;
}

const doctorPanel = (c) =>
  `<section class="panel doctor"><h2>${esc(c.ui.doctorHeading)}</h2><p>${esc(c.ui.doctorBody)}</p></section>`;

function forHerBox(c, lang, path, forHer, o = {}) {
  const u = c.ui;
  return `<section class="for-her" data-for-her data-path="${path}"
      data-copied="${esc(u.copiedMessage)}" data-copy-failed="${esc(u.copyFailed)}">
      <h2>${esc(o.heading || u.forHerLabel)}</h2>
      ${"intro" in o ? (o.intro ? `<p>${esc(o.intro)}</p>` : "") : `<p>${esc(u.forHerIntro)}</p>`}
      ${
        forHer.opener
          ? `<p class="field-label">${esc(u.openerLabel)}</p><p class="opener">${esc(forHer.opener)}</p>`
          : ""
      }
      <label for="message">${esc(u.messageLabel)}</label>
      <textarea id="message" rows="6">${esc(forHer.message)}</textarea>
      <p class="page-link"><span class="sr-only">${esc(u.pageLinkLabel)}: </span><span data-link>${esc(
    SITE.siteUrl + path
  )}</span></p>
      <div class="actions">
        <button type="button" class="btn" data-copy>${esc(u.copyButton)}</button>
        <button type="button" class="btn btn--ghost" data-share hidden>${esc(u.shareButton)}</button>
      </div>
      <p class="status" role="status" data-status></p>
    </section>`;
}

function quizHtml(c, opts = {}) {
  const u = c.ui;
  const qs = c.quiz.questions.map((q) => ({
    statement: q.statement,
    answer: q.answer,
    explanation: q.explanation,
  }));
  return `<section id="quiz" class="quiz" data-quiz
  data-progress="${esc(u.quizQuestionOf)}" data-correct="${esc(u.quizCorrect)}"
  data-incorrect="${esc(u.quizIncorrect)}" data-next="${esc(u.quizNext)}"
  data-see-score="${esc(u.quizSeeScore)}" data-score-template="${esc(u.quizScore)}">
  ${opts.noHeading ? "" : `<h2>${esc(u.quizHeading)}</h2>`}
  <p>${esc(fill(u.quizIntro, { total: qs.length }))}</p>
  <p class="no-js-note">${esc(u.quizNeedsJs)}</p>
  <div class="js-only">
    <div data-q-question>
      <p class="quiz-progress" data-q-progress></p>
      <p class="quiz-statement" data-q-statement></p>
      <div class="quiz-choices" data-q-choices>
        <button type="button" class="btn" data-q-true>${esc(u.quizTrue)}</button>
        <button type="button" class="btn btn--ghost" data-q-false>${esc(u.quizFalse)}</button>
      </div>
      <div aria-live="polite">
        <div class="quiz-feedback" data-q-feedback hidden>
          <strong data-q-verdict></strong>
          <p data-q-why></p>
          <button type="button" class="btn btn--gold" data-q-next></button>
        </div>
      </div>
    </div>
    <div class="quiz-result" data-q-result hidden>
      <p class="big" data-q-score></p>
      <p data-q-message></p>
      <button type="button" class="btn" data-q-retake>${esc(u.quizRetake)}</button>
    </div>
  </div>
  <script type="application/json" data-quiz-data>${jsonForHtml(qs)}</script>
  <script type="application/json" data-quiz-messages>${jsonForHtml(c.quiz.scoreMessages)}</script>
</section>`;
}

/* ---------- pages ---------- */
function homePage(c, lang) {
  const h = c.home;
  return `${head(c, lang, "", h.meta)}
${header(c, lang, "")}
<main id="main">
  <div class="wrap wrap--wide">
    <section class="hero">
      <span class="kicker">${esc(h.hero.kicker)}</span>
      <h1>${esc(h.hero.title)}</h1>
      <p class="lede">${esc(h.hero.intro)}</p>
      <p class="hint">${esc(h.hero.forHerHint)}</p>
    </section>

    <section>
      <h2>${esc(h.explainer.heading)}</h2>
      <div class="explainer">${h.explainer.cards
        .map((k) => `<div class="panel"><h3>${esc(k.heading)}</h3><p>${esc(k.body)}</p></div>`)
        .join("")}</div>
    </section>

    ${symptomCard(c)}
    ${doctorPanel(c)}

    <section class="picker-section" id="picker">
      <h2>${esc(c.ui.pickerHeading)}</h2>
      <p>${esc(c.ui.pickerIntro)}</p>
      ${pickerHtml(c, lang)}
    </section>

    <section>
      <h2>${esc(c.ui.toolsHeading)}</h2>
      <ul class="picker">${h.tools.cards
        .map(
          (t) =>
            `<li><a href="${pagePath(lang, t.slug)}"><span class="label">${esc(t.label)}</span><small>${esc(
              t.blurb
            )}</small></a></li>`
        )
        .join("")}</ul>
    </section>

    ${quizHtml(c)}
  </div>
</main>
${footer(c, lang)}`;
}

function storyHtml(c, a) {
  const u = c.ui;
  const total = a.story.pages.length;
  return `<section class="story" data-story aria-label="${esc(u.storyRegionLabel)}"
  data-count-template="${esc(u.storyPageOf)}">
  <h2>${esc(a.story.heading)}</h2>
  ${a.story.pages
    .map(
      (p, i) => `<div class="story-page">
    ${artSvg(p.art)}
    <p><span class="sr-only">${esc(fill(u.storyPageOf, { n: i + 1, total }))}. </span>${esc(p.text)}</p>
  </div>`
    )
    .join("\n  ")}
  <div class="story-nav">
    <button type="button" class="btn btn--ghost" data-prev>${esc(u.storyPrev)}</button>
    <span class="story-count" data-count aria-live="polite"></span>
    <button type="button" class="btn" data-next data-label="${esc(u.storyNext)}" data-again="${esc(
    u.storyAgain
  )}">${esc(u.storyNext)}</button>
  </div>
</section>
${
  a.grownUpNote
    ? `<section class="panel grown-up"><h2>${esc(u.grownUpHeading)}</h2>${a.grownUpNote.paragraphs
        .map((p) => `<p>${esc(p)}</p>`)
        .join("")}</section>`
    : ""
}`;
}

function audiencePage(c, lang, a) {
  const u = c.ui;
  const p = pagePath(lang, a.slug);
  return `${head(c, lang, a.slug, a.meta)}
${header(c, lang, a.slug)}
<main id="main">
  <div class="wrap">
    <a class="back-link" href="${pagePath(lang, "")}#picker"><span aria-hidden="true">\u2190</span> ${esc(u.backLink)}</a>
    <section class="hero">
      <span class="kicker">${esc(a.hero.kicker)}</span>
      <h1>${esc(a.hero.title)}</h1>
      <p class="lede">${esc(a.hero.intro)}</p>
    </section>

    ${a.story ? storyHtml(c, a) : ""}
    ${extra(a.extraSections)}

    <section>
      <h2>${esc(a.notice.heading || u.noticeDefaultHeading)}</h2>
      ${list(a.notice.items, "dots")}
    </section>

    <section class="duo">
      <div class="panel yes"><h2>${esc(u.helpsHeading)}</h2>${list(a.helps)}</div>
      <div class="panel no"><h2>${esc(u.doesntHeading)}</h2>${list(a.doesnt)}</div>
    </section>

    <section>
      <h2>${esc(u.sayHeading)}</h2>
      ${list(a.say, "say")}
    </section>

    <section>
      <div class="not-say">
        <p class="label">${esc(u.notSayLabel)}</p>
        <blockquote>${esc(a.notSay.quote)}</blockquote>
        <p class="instead"><strong>${esc(u.notSayInstead)}</strong>${esc(a.notSay.instead)}</p>
        <p class="mark">${esc(u.siteName)}</p>
      </div>
    </section>

    ${extra(a.extraSectionsAfter)}

    ${a.symptomCard ? symptomCard(c) : ""}
    ${doctorPanel(c)}

    ${forHerBox(c, lang, p, a.forHer)}

    <section class="read-next">
      <h2>${esc(u.readNextHeading)}</h2>
      ${pickerHtml(c, lang, a.slug).replace('class="picker"', 'class="picker"')}
      <p><a href="${pagePath(lang, "")}">${esc(u.homeLink)}</a></p>
    </section>
  </div>
</main>
${footer(c, lang)}`;
}

function todayPage(c, lang) {
  const t = c.tools.today;
  const u = c.ui;
  const p = pagePath(lang, t.slug);
  return `${head(c, lang, t.slug, t.meta)}
${header(c, lang, t.slug)}
<main id="main">
  <div class="wrap">
    <a class="back-link" href="${pagePath(lang, "")}">${"\u2190"} ${esc(u.homeLink)}</a>
    <section class="hero">
      <span class="kicker">${esc(t.hero.kicker)}</span>
      <h1>${esc(t.hero.title)}</h1>
      <p class="lede">${esc(t.hero.intro)}</p>
    </section>

    <section>
      <h2>${esc(u.todayStatesHeading)}</h2>
      <p>${esc(u.todayStatesIntro)}</p>
      <div class="chips">${t.states
        .map(
          (s) =>
            `<button type="button" class="chip" data-state data-message="${esc(s.message)}">${esc(s.label)}</button>`
        )
        .join("")}</div>
    </section>

    <section class="panel builder" data-builder data-added="${esc(u.todayAdded)}" data-nothing="${esc(u.todayNothing)}">
      <h2>${esc(u.todayBuilderHeading)}</h2>
      <p>${esc(u.todayBuilderIntro)}</p>
      ${t.builder
        .map(
          (b, i) => `<label for="b${i}">${esc(b.label)}</label>
      <div class="starter" aria-hidden="true">${esc(b.starter)}\u2026</div>
      <input id="b${i}" type="text" data-starter="${esc(b.starter)}" placeholder="${esc(b.placeholder)}">`
        )
        .join("\n      ")}
      <button type="button" class="btn btn--gold" data-builder-add>${esc(u.todayBuilderAdd)}</button>
      <p class="status" role="status" data-builder-status></p>
    </section>

    ${forHerBox(c, lang, p, { message: t.defaultMessage }, { heading: u.todayMessageHeading, intro: "" })}
  </div>
</main>
${footer(c, lang)}`;
}

function quizPage(c, lang) {
  const t = c.tools.quiz;
  const p = pagePath(lang, t.slug);
  return `${head(c, lang, t.slug, t.meta)}
${header(c, lang, t.slug)}
<main id="main">
  <div class="wrap">
    <a class="back-link" href="${pagePath(lang, "")}">${"\u2190"} ${esc(c.ui.homeLink)}</a>
    <section class="hero">
      <span class="kicker">${esc(t.hero.kicker)}</span>
      <h1>${esc(t.hero.title)}</h1>
      <p class="lede">${esc(t.hero.intro)}</p>
    </section>
    ${quizHtml(c, { noHeading: true })}
    ${forHerBox(c, lang, p, t.forHer, { heading: c.ui.forHerLabel })}
  </div>
</main>
${footer(c, lang)}`;
}

/* ---------- link-preview images and icons (need `sharp`) ---------- */
function wrapText(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max) {
      lines.push(line);
      line = w;
    } else line = (line + " " + w).trim();
  }
  if (line) lines.push(line);
  return lines;
}

function ogSvg(c, meta) {
  const head = wrapText(meta.imageHeadline, 20).slice(0, 3);
  const sub = wrapText(meta.imageSub, 40).slice(0, 2);
  const serif = `'Young Serif', Georgia, 'Times New Roman', serif`;
  const sans = `'Atkinson Hyperlegible', 'Helvetica Neue', Arial, sans-serif`;
  const hy = 250 - (head.length - 1) * 38;
  const headSvg = head
    .map((l, i) => `<text x="110" y="${hy + i * 84}" font-family="${serif}" font-size="74" fill="#f6f4ec">${esc(l)}</text>`)
    .join("");
  const subY = hy + head.length * 84 + 10;
  const subSvg = sub
    .map((l, i) => `<text x="110" y="${subY + i * 42}" font-family="${sans}" font-size="32" fill="#cfe0d1">${esc(l)}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#e3eadb"/>
  <rect x="48" y="48" width="1104" height="534" rx="40" fill="#1f4a36"/>
  <circle cx="1010" cy="190" r="120" fill="#e8b03a"/>
  <path d="M780 470c70-90 270-90 340 0" stroke="#d9929c" stroke-width="22" fill="none" stroke-linecap="round"/>
  ${headSvg}${subSvg}
  <circle cx="126" cy="506" r="20" fill="#e8b03a"/>
  <text x="162" y="515" font-family="${serif}" font-size="30" fill="#e8b03a">${esc(c.ui.siteName)}</text>
</svg>`;
}

async function makeImages() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch (e) {
    console.warn("! `sharp` isn't installed, so images were skipped. Run `npm install` once, then run this again.");
    return;
  }
  const outDir = path.join(ROOT, "assets", "og");
  fs.mkdirSync(outDir, { recursive: true });
  let n = 0;
  for (const lang of langs) {
    const c = CONTENT[lang];
    const jobs = [
      { slug: "", meta: c.home.meta },
      ...c.audiences.map((a) => ({ slug: a.slug, meta: a.meta })),
      ...Object.values(c.tools).map((t) => ({ slug: t.slug, meta: t.meta })),
    ];
    for (const j of jobs) {
      await sharp(Buffer.from(ogSvg(c, j.meta)))
        .png({ compressionLevel: 9 })
        .toFile(path.join(outDir, ogName(lang, j.slug)));
      n++;
    }
  }
  const icon = fs.readFileSync(path.join(ROOT, "favicon.svg"));
  await sharp(icon, { density: 300 }).resize(32, 32).png().toFile(path.join(ROOT, "favicon-32.png"));
  await sharp(icon, { density: 300 }).resize(180, 180).flatten({ background: "#e3eadb" }).png().toFile(path.join(ROOT, "apple-touch-icon.png"));
  console.log(`Wrote ${n} preview images and the icons.`);
}

/* ---------- run ---------- */
(async () => {
  // favicon.svg is the one hand-made source file for the icons
  write(
    path.join(ROOT, "favicon.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#1f4a36"/><circle cx="16" cy="14" r="6.5" fill="#e8b03a"/><path d="M6 24c4-5 16-5 20 0" stroke="#d9929c" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>\n`
  );
  let pages = 0;
  for (const lang of langs) {
    const c = CONTENT[lang];
    write(fileFor(lang, ""), homePage(c, lang));
    pages++;
    for (const a of c.audiences) {
      write(fileFor(lang, a.slug), audiencePage(c, lang, a));
      pages++;
    }
    write(fileFor(lang, c.tools.today.slug), todayPage(c, lang));
    write(fileFor(lang, c.tools.quiz.slug), quizPage(c, lang));
    pages += 2;
  }
  // sitemap and robots
  const urls = [];
  for (const lang of langs) {
    const c = CONTENT[lang];
    ["", ...c.audiences.map((a) => a.slug), ...Object.values(c.tools).map((t) => t.slug)].forEach((s) =>
      urls.push(SITE.siteUrl + pagePath(lang, s))
    );
  }
  write(
    path.join(ROOT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${u}</loc></url>`)
      .join("\n")}\n</urlset>\n`
  );
  write(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.siteUrl}/sitemap.xml\n`);
  console.log(`Wrote ${pages} pages.`);
  if (!SKIP_IMAGES) await makeImages();
})();
