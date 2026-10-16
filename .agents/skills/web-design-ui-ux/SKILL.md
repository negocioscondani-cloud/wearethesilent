---
name: web-design-ui-ux
description: >-
  Comprehensive Web Design, UI/UX Usability, Information Architecture, Readability,
  and Conversion Rate Optimization (CRO) skill. Activate when auditing, designing,
  or optimizing web interfaces for clarity, visual hierarchy, scannability,
  editorial luxury (Vivienne Wolski), or high-converting agency pages (The Silent Studio).
---

# Web Design & UI/UX Usability Skill

Use this skill to audit, design, and refine web pages so they are **ultra-clean, effortless to read, intuitive to discover, and immediately understandable**.

---

## 1. Core Principles of Clarity & Discovery (The 5-Second Rule)

Every page must pass the **5-Second Clarity Test** above the fold:
1. **Who is this?** (Brand identity & positioning)
2. **What do I get here?** (Clear value proposition or editorial purpose)
3. **Where do I click next?** (One primary Call-To-Action or intuitive discovery path)

### Visual Hierarchy & Scannability (F-Pattern & Z-Pattern)
- **Headlines (`H1`, `H2`)**: High contrast, generous line-height (`1.1` to `1.25` for display serifs), and concise length (max 10–12 words).
- **Body Copy**:
  - Optimal line width (*measure*): **60ch to 72ch** (`max-w-2xl` or `max-w-3xl`). Lines spanning 120+ characters cause eye fatigue and drop reading completion by 40%.
  - Line height: `1.6` to `1.75` (`leading-relaxed`) for long-form reading.
  - Paragraph spacing: Break walls of text into 2–4 sentence blocks separated by visual breathing room, bullet lists, or callout boxes.
- **Progressive Disclosure**:
  - Show the core hook, visual proof, and key outcome first.
  - Place secondary technical details inside clean accordions, tabs, or quick-view modals so the main canvas stays uncluttered.

---

## 2. Dual-Brand Design Systems in This Workspace

### A. Vivienne Wolski (`El Armario de Vivienne` & `El Domingo de los Números`)
- **Archetype**: *Quiet Luxury Editorial Magazine / Old-World Salon*.
- **Palette**:
  - Background: Ivory `#F7F1E6` & Warm Cream `#FAF5EC` (Never wrap in dark `#080808` containers that cause flash of dark background).
  - Primary Text: Espresso `#2B1D14` (Contrast ratio > 11:1 against ivory).
  - Muted Text: Warm Taupe `#6E5D53` (Avoid low-contrast `#9C8F85` on small text under 12px).
  - Accents & Hairlines: Antique Gold `#B08D57`.
  - Highlights & Editorial Notes: Burgundy `#6B1F2A`.
- **Usability Rules**:
  - **Separated Search & Filter Bar**: Search input must be distinct from category pills, with a clear `×` reset button and live result counter (`Mostrando X de Y piezas`).
  - **Product Cards**: 4:5 vertical aspect ratio, `1px` gold border on hover, clear brand tag, serif title, price in small-caps mono, handwritten/italic "Nota de Vivi", and explicit outbound action (`Comprar en Tienda Oficial ↗`).
  - **Cross-Navigation**: Seamless discovery bar connecting *El Armario (Boutique)* ↔ *Fonoteca Wolski Club (Audios)* ↔ *El Domingo de los Números (Ritual)*.

### B. The Silent Studio (`/`, `/oferta`, `/influencer-ia`, `/blog`)
- **Archetype**: *Post-AI Creative Intelligence Agency / Dark Cinema*.
- **Palette**:
  - Background: Obsidian `#0A0D0E` / `#08080A` with subtle surface cards `#12161A`.
  - Primary Text: Crisp Off-White `#F5F3EF`.
  - Secondary Text: Zinc `#A1A1AA` (Never use `#52525B` for body copy on dark backgrounds).
  - Primary Accent: Champagne Gold `#C5A059` / `#D4AF37`.
- **Usability Rules**:
  - **No Double Headers/Footers**: Standalone landing pages (`/oferta`, `/influencer-ia`, `/vivianne-wolski`, `/domingo`) must cleanly suppress the global layout chrome if they render their own sticky navigation and footer.
  - **Unified Ecosystem Discovery**: The homepage (`/`) must immediately orient visitors to the 4 pillars:
    1. *Agencia & Producción de Videos IA* (`/oferta`)
    2. *Guía & Método Influencer IA* (`/influencer-ia`)
    3. *Caso de Éxito Vivo: Vivienne Wolski* (`/vivianne-wolski`)
    4. *Editorial & Artículos Diarios de IA* (`/blog`)
  - **Frictionless Conversion**: Video demos must play inline or in a 1-click modal with obvious sound toggle; pricing cards must highlight deliverables vs. exclusions clearly.

---

## 3. UI/UX Audit Checklist

When auditing any page, evaluate these 6 dimensions from 1 to 10:
1. **First-Impression Clarity**: Can a new user understand the offer in 3 seconds?
2. **Typography & Readability**: Are font sizes (`>= 15px` body on mobile), contrast ratios (WCAG AA `>= 4.5:1`), and line lengths (`65ch`) respected?
3. **Navigation & Wayfinding**: Are there dead ends, duplicate headers/footers, or hidden pages? Can the user easily jump between related sections?
4. **Mobile Touch Ergonomics**: Are tap targets at least `44x44px`? Do sticky bars cover important content?
5. **Visual Breathing Room (Whitespace)**: Is there at least 25–35% open canvas, or are cards cramped together?
6. **Conversion Architecture**: Are CTAs action-oriented, visually distinct, and backed by social proof/examples right where decisions happen?
