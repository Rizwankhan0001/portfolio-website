# Modern Developer Portfolio (Alternative Website)

A responsive HTML/CSS/JavaScript portfolio concept for **Rizwan Khan**, with an animated hero, career timeline, technology showcase, project cards and direct email contact.

This repository contains an **alternative portfolio implementation**. For the public GitHub Pages source, see [Rizwankhan0001.github.io](https://github.com/Rizwankhan0001/Rizwankhan0001.github.io).

## What it showcases

- Ecommerce work: Dhampur Green and Delight Foods storefront revamps
- B2B lead platform to support Dhampur Green's sales workflows
- Full-stack projects using React, TypeScript, Node.js and MongoDB
- Selected open-source portfolio demos (SehatNama, EduFee360, BlockFarm and RefDirectly)

Reported company sales growth is contextual business information, not independently verified attribution to specific software changes. No employer-owned source code is included here.

## Design features

- Responsive layout and mobile navigation
- Scroll effects and lightweight animations
- Technology cards and project deep links
- Direct email contact via `mailto:`

**Contact behavior:** This project does **not** have a backend email service. The previous fake-success contact form was removed; the email button opens the visitor's email application.

## Local preview

```bash
git clone https://github.com/Rizwankhan0001/portfolio-website.git
cd portfolio-website/frontend
python3 -m http.server 8000
```

Open http://localhost:8000.

The `frontend/` directory contains the static portfolio experience. Other directories in this repository contain separate earlier experiments; they are not required for the static site preview.

## Structure

| Path | Contents |
| --- | --- |
| `frontend/index.html` | Content, links and layout |
| `frontend/style.css` | Visual styling |
| `frontend/script.js` | Frontend interaction |
| `backend/` | Separate experimental server code |
| `database/` | Earlier database experiments |
| `react-portfolio/` | Alternative React portfolio code |

## Validation

A proposed GitHub Actions workflow checks the JavaScript syntax and common placeholder links/content on each pull request. Test mobile navigation and the `mailto:` flow manually before deployment.

## Contacts

[GitHub](https://github.com/Rizwankhan0001) · [LinkedIn](https://www.linkedin.com/in/khan-rizwan07/)
