# DH Drumming — Website

Personal drumming website featuring a score library, video tutorials, competition performances, member login, and contact page.

## File structure

```
dh-drumming/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styles (shared across pages)
├── js/
│   └── main.js             ← Shared JavaScript (nav, filters, forms)
├── pages/
│   ├── scores.html         ← Score library
│   ├── tutorials.html      ← Video tutorials
│   ├── performances.html   ← Competition performances
│   ├── members.html        ← Member login & registration
│   └── contact.html        ← Contact form
└── README.md
```

## Deploying to GitHub Pages

### Option A — New repository (simplest)

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** — name it `dh-drumming` (or anything you like)
3. Set visibility to **Public**
4. Click **Create repository**
5. Upload all files — drag the entire `dh-drumming` folder contents into the repository
6. Go to **Settings → Pages**
7. Under *Source*, select **Deploy from a branch**
8. Choose branch: `main`, folder: `/ (root)`
9. Click **Save**

Your site will be live at:
`https://YOUR-USERNAME.github.io/dh-drumming/`

### Option B — Using Git CLI

```bash
cd dh-drumming
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dh-drumming.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings → Pages as above.

### Custom domain (optional)

1. Buy a domain (e.g. `dhdrumming.com`)
2. In GitHub Pages settings, enter your custom domain
3. With your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`

## Adding your own content

### Scores
Edit `pages/scores.html` — copy an existing `.score-item` block and update the name, genre, level, and format. Set `data-genre` and `data-level` attributes to match the filter buttons.

### Tutorials
Edit `pages/tutorials.html` — copy a `.video-card` block. Add `class="vid-lock"` to member-only content.

### Performances
Edit `pages/performances.html` — copy a `.comp-item` row and update year, event name, venue, and placement.

### Logo image
Replace the SVG favicon in each `<head>` with `<link rel="icon" href="/images/favicon.png" />` and place your image in an `/images/` folder.

## Adding real video embeds

Replace the `.video-cover` div with a YouTube embed:

```html
<div class="video-cover" style="padding:0; height:auto;">
  <iframe width="100%" height="130"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0" allowfullscreen></iframe>
</div>
```

## Member authentication

The current login/register forms are front-end only (static). To add real authentication consider:

- **Netlify Identity** — free, works with static sites
- **Supabase** — free tier, simple email auth
- **Firebase Auth** — Google's free auth service

All three can be wired into the existing HTML forms with a small JS addition.

## Notes

- The site is fully responsive down to 320px wide
- No dependencies or frameworks — plain HTML, CSS, and JavaScript
- Fonts load from Google Fonts (requires internet connection)
- The contact form currently shows a confirmation message but does not send email — connect it to **Formspree** or **Netlify Forms** for real submissions
