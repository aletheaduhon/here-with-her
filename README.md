# Here With Her

A free, static website that helps women going through perimenopause explain it to the people around her: her partner, teens, young kids, family and friends, and coworkers. Each audience gets its own page, and each page ends with a "For her" box so she can send it.

No accounts, no tracking, no health data. Everything runs in the browser. It shares general information only and is not medical advice.

## How it's built

Plain HTML, CSS, and JavaScript. No framework, no build step on Vercel.

```
content.js            ALL the words: audiences, quiz, share messages, story, preview text
scripts/generate.js   turns content.js into the .html pages and preview images
assets/styles.css     the one shared stylesheet (includes dark mode and print)
assets/app.js         the one shared script (copy/share, quiz, story pager)
assets/fonts/         self-hosted Young Serif and Atkinson Hyperlegible
assets/og/            link-preview images (one per page, generated)
*.html (index, partner, teen, kids, ...)   generated pages
sitemap.xml, robots.txt                     generated for search engines
favicon.svg, favicon-32.png, apple-touch-icon.png                          icons
vercel.json           turns on clean URLs (/partner instead of /partner.html)
```

The generated `.html` files and preview images are **committed to git**. Vercel just serves them.

### The one rule

Never edit the `.html` files by hand. Edit `content.js`, then run:

```bash
npm install            # first time only (installs `sharp` for preview images)
npm run generate          # writes pages + preview images
```

To rebuild pages only, without the image step: `npm run generate:pages`.

Then commit everything that changed, including the generated files.

## Before you launch: set your address

In `content.js`, change `siteUrl` near the top to your real address (no trailing slash), for example `https://herewithher.org`. Link previews need a full address, so this matters. Run `npm run generate` and commit.

## Preview on your computer

```bash
npm run preview
```

Open the address it prints (usually http://localhost:3000). Use this server, not by double-clicking a file: the clean URLs and font paths need a server.

## Create the GitHub repo

1. On github.com choose **New repository**, name it (for example `here-with-her`), leave it empty, and create it.
2. In this folder, run:

```bash
git add .
git commit -m "First version of Here With Her"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/here-with-her.git
git push -u origin main
```

## Deploy on Vercel

1. In Vercel choose **Add New... > Project** and import the GitHub repo.
2. Framework Preset: **Other**. `vercel.json` already tells Vercel there is nothing to build; leave the Build Command and Output Directory settings alone. Root Directory stays `./`.
3. Click **Deploy**. Every push to `main` goes live automatically.

## Connect a custom domain

1. In the Vercel project, open **Settings > Domains** and add your domain (for example `herewithher.org`).
2. Vercel shows the DNS records to add. At your domain registrar, add them: usually an `A` record for the bare domain and a `CNAME` for `www`, exactly as Vercel lists.
3. Wait for Vercel to show a green check (minutes to a few hours). HTTPS is automatic.
4. Make sure `siteUrl` in `content.js` matches the domain, then rebuild and push.

## Preview changes before they go live

Don't push straight to `main`. Make a branch instead:

```bash
git checkout -b edit-partner-page
# edit content.js, then:
npm run generate
git add . && git commit -m "Edit partner page"
git push -u origin edit-partner-page
```

Vercel builds a **Preview Deployment** for every branch, with its own temporary link (it appears on the branch's page on GitHub, or in the Vercel dashboard). Check it on your phone. When you like it, open a pull request on GitHub and merge it. Merging to `main` publishes it.

Note: link-preview tags always point to `siteUrl`, so on a preview link the shared image comes from the live site. Everything else on the preview is the new version.

---

## 1. Add a new audience page

Example: a page for grandparents.

1. Open `content.js` and find `audiences: [`.
2. Copy an existing entry (the `teen` one is short) and paste it at the end of the list, before the closing `]`.
3. Change these fields:
   - `slug`: the web address. `"grandparents"` becomes `/grandparents`. Use lowercase letters and dashes.
   - `picker`: the tile's `label` and `blurb` on the home page.
   - `meta`: `title`, `description`, and the preview-image text (`imageHeadline`, `imageSub`).
   - `hero`, `notice`, `helps`, `doesnt`, `say`, `notSay`, and `forHer`: the page text. Every audience needs all of these.
   - Optional: `extraSections` (blocks between the intro and "what they might notice") and `extraSectionsAfter` (blocks after "things you can say"). Delete them if you don't need them.
4. Run `npm run generate`. You'll get `grandparents.html` and `assets/og/grandparents.png`, and the picker tile appears on the home page and in every page's "Not who you were looking for?" list.
5. Commit and push. No other file needs to change.

Only `/kids` uses the optional `story` and `grownUpNote` fields.

## 2. Add or edit quiz questions

In `content.js`, find `quiz: { questions: [ ... ] }`. Each question looks like this:

```js
{
  statement: "Perimenopause can last for several years.",
  answer: true,          // true if the statement is TRUE, false if it's FALSE
  explanation: "For many women it lasts four years or so..."
}
```

- **Edit:** change the text in place.
- **Add:** copy a block, paste it into the list, and change it.
- **Remove:** delete the whole `{ ... },` block.

The quiz counts its questions automatically, so the progress text and score update on their own. The messages shown with the score are in `scoreMessages`. Each has a `min` score; if you change the number of questions, adjust those numbers. Run `npm run generate`, then commit.

## 3. Update the link preview text and image for a page

Each page's preview lives in its `meta` block in `content.js` (for the home page, `home.meta`):

```js
meta: {
  title: "For her partner | Here With Her",   // the browser tab and preview title
  description: "What perimenopause is doing...", // the preview's second line (aim for under 160 characters)
  imageHeadline: "For her partner",          // big text on the preview image
  imageSub: "What's going on, and how to be on her side"  // smaller text on the image
}
```

Change the text, run `npm run generate`, and the page tags and `assets/og/<slug>.png` are both rewritten. Commit and push.

**To use your own picture instead:** make a 1200x630 PNG, save it as `assets/og/<slug>.png` (the home page is `home.png`), and rebuild with `npm run generate:pages`, which doesn't regenerate images. Don't run the full `npm run generate` afterward, or it will replace your picture.

**Previews are cached.** Messaging apps remember the old preview for a while. To refresh, test with a fresh link (add `?v=2` to the end), or use the Facebook Sharing Debugger.

The preview image uses Georgia unless Young Serif is installed on the machine running the build. That's fine.

---

## The two tool pages

Besides the audience pages there are two others, both in the `tools` block of `content.js`:

- `/today` ("How I'm feeling today"): feeling buttons that fill in a short message, and three finish-the-sentence boxes. Edit the `states` (the buttons) and `builder` (the sentence starters) lists.
- `/quiz`: the same quiz as the home page, on its own address with its own preview image, so it can be sent as a link.

The home page's "Common signs" card and the "talk to a doctor" note are in `home.symptoms` and `ui.doctorBody`. Add `symptomCard: true` to any audience to show the signs card on that page too (the partner page does).

## Translating later

Everything visible is in `content.js` under `CONTENT.en`. To add a language, copy the whole `en: { ... }` block, rename it (for example `es`), translate the text, and add the name to `languageNames` in the `SITE` block. The generator then writes `/es/...` pages, adds `hreflang` tags, and shows a language picker in the header. With only one language, no picker appears. Text inside images isn't used on the site itself, so nothing needs redrawing. Preview images are generated per language.

## Printing

Every audience page prints as a one-page handout (use the browser's Print, or save as PDF). Printing leaves out the story, the "For her" box, the quiz, the buttons, and the doctor and symptom cards. To leave a block of your own off the printout, add `skipInPrint: true` to it. When you add long text to a page, print-preview it to make sure it still fits on one sheet.

## Accessibility notes

Visible keyboard focus, 44px or larger tap targets, reduced-motion support, light and dark themes that follow the device setting, a skip link, and no text inside images.

## Fonts

Young Serif and Atkinson Hyperlegible, both under the SIL Open Font License, hosted in `assets/fonts/` so visitors' browsers never contact Google.
