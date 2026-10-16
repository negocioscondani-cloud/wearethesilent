---
name: seo-audit-and-content
description: >-
  Comprehensive Technical SEO, On-Page SEO, Structured Data (Schema.org JSON-LD),
  and Daily Generative AI Content Strategy skill. Activate when auditing pages for search
  visibility, fixing metadata/sitemap/robots issues, adding rich snippets, or publishing
  daily high-ranking articles on Generative AI for ads, tutorials, monetization, and workflows.
---

# SEO Optimization & Generative AI Content Engine Skill

Use this skill to ensure every page on **The Silent Studio** (`wearethesilent.com`) and **Vivienne Wolski** (`/vivianne-wolski`, `/domingo`) ranks at the top of search engines, renders rich social previews, and feeds a compounding daily organic traffic engine.

---

## 1. Technical SEO Foundations (Next.js App Router)

1. **Canonical Domain Unification**:
   - The single canonical domain is `https://wearethesilent.com`.
   - `src/app/robots.ts`, `src/app/sitemap.ts`, and `src/app/layout.tsx` must all reference `https://wearethesilent.com` (never legacy staging domains).
2. **Complete Sitemap Coverage (`src/app/sitemap.ts`)**:
   - Every indexable commercial, editorial, and legal route must be in `sitemap.ts` with accurate `lastModified`, `changeFrequency`, and `priority`:
     - Priority `1.0`: `/`, `/oferta`, `/influencer-ia`, `/vivianne-wolski`
     - Priority `0.9`: `/blog`, `/domingo`
     - Priority `0.8`: Individual `/blog/[slug]` articles
     - Priority `0.5`: Legal & compliance pages (`/terms-of-service`, `/privacy-policy`, `/cookie-policy`, `/refund-policy`, `/legal-notice`)
3. **Server-Side Metadata (`layout.tsx` or `generateMetadata`)**:
   - Client components (`'use client'`) cannot export `metadata` directly. Every client-rendered route (`/oferta`, `/influencer-ia`, `/vivianne-wolski`, `/domingo`, `/blog`, `/blog/[slug]`) must have a companion `layout.tsx` or server wrapper with tailored `title`, `description`, `keywords`, `alternates.canonical`, `openGraph`, and `twitter` cards.
4. **Semantic Heading Hierarchy**:
   - Exactly **one `<h1>` per page** containing the primary search intent keyword.
   - Logical `<h2>` for main sections and `<h3>` for sub-items (never skip levels or use `<h1>` multiple times).

---

## 2. Structured Data (Schema.org JSON-LD)

Inject valid `<script type="application/ld+json">` on key pages to unlock Google Rich Snippets & AI Overview citations (GEO / AEO):
- **Vivienne Wolski (`/vivianne-wolski`)**:
  - `CollectionPage` + `ItemList` of curated luxury products + `Person` (fictional AI creator profile with `sameAs: ["https://www.instagram.com/vivianne_wolski/"]`).
- **Servicios de Video IA (`/oferta`)**:
  - `ProfessionalService` + `OfferCatalog` (₡30.000 / $60 USD single video, ₡420.000 / $840 USD pack 10, ₡750.000 / $1.500 USD pack 20) + `FAQPage` schema for the FAQ section.
- **Guía Influencer IA (`/influencer-ia`)**:
  - `Product` / `Book` ($47 USD offer, availability `InStock`) + `FAQPage` schema.
- **Artículos del Blog (`/blog/[slug]`)**:
  - `BlogPosting` / `TechArticle` with `headline`, `datePublished`, `author`, `image`, and `keywords`.

---

## 3. Daily Generative AI Article Framework (Editorial SEO)

To dominate organic search in Spanish and English for Generative AI, every daily article in `src/lib/blog.ts` (and `src/lib/blog-en.ts`) must follow one of the **6 Core Content Pillars**:

1. **IA para Anuncios (AI Ads & UGC)**:
   - Hooks, scripts, visual retention, Meta Ads / TikTok Ads performance, avatar lip-sync, cost-per-creative reduction.
2. **Tutoriales Paso a Paso (Step-by-Step Tutorials)**:
   - Prompt engineering, facial consistency (Seed/LoRA/Reference), voice cloning (ElevenLabs), video generation (Kling, Runway, Veo, HeyGen).
3. **Casos de Éxito (Case Studies)**:
   - Real breakdowns (like *Vivienne Wolski* or retail/fashion brands), metrics, before/after ROAS, organic reach analysis.
4. **Formas de Monetización (Monetization Models)**:
   - Selling AI video packages (₡30.000 / $60 USD single, ₡420.000 / $840 USD pack 10, ₡750.000 / $1.500 USD pack 20), ShopMy/affiliate boutiques, digital clubs (Gumroad/Skool), brand sponsorships.
5. **Usos Prácticos (Practical Workflows)**:
   - E-commerce product photography, virtual try-on, multilingual dubbing, automated content calendars.
6. **Planes de Trabajo (Action Plans & Roadmaps)**:
   - 7-day, 14-day, and 30-day execution blueprints with checklists, KPIs, and tool stacks.

### Anatomy of a High-Ranking Article
- **Title**: Compelling, keyword-rich, with a clear benefit or number (e.g., *"Cómo Crear Anuncios UGC con IA que Convierten: Guía y Plan de 7 Días"*).
- **Metadata**: `category` (pillar), `readTime`, `tags`, `date`, and `description` (140–160 chars).
- **Scannable Body HTML**:
  - Executive summary / Key takeaways box at the top.
  - Clear `<h2>` and `<h3>` subheadings.
  - Practical examples, prompts, or tables.
  - Internal links to `/oferta` (for done-for-you videos), `/influencer-ia` (for the $47 step-by-step method), and `/vivianne-wolski` (live case study).
