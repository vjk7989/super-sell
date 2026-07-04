---
version: "alpha"
name: "SuperSell Crisp Boutique"
description: "A bright, clean, bento-led fashion catalogue system for WhatsApp-first shopping."
colors:
  bg: "oklch(0.992 0.004 230)"
  surface: "oklch(0.972 0.006 230)"
  panel: "oklch(0.955 0.012 218)"
  ink: "oklch(0.145 0.025 248)"
  muted: "oklch(0.405 0.035 245)"
  primary: "oklch(0.455 0.13 178)"
  primary-hover: "oklch(0.395 0.125 178)"
  accent: "oklch(0.70 0.13 76)"
  plum: "oklch(0.38 0.125 340)"
  clay: "oklch(0.57 0.12 32)"
  line: "oklch(0.885 0.012 230)"
  danger: "oklch(0.55 0.18 28)"
  white: "#ffffff"
typography:
  display-lg:
    fontFamily: "Georgia"
    fontSize: "6rem"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "0em"
  display-md:
    fontFamily: "Georgia"
    fontSize: "4.75rem"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "0em"
  heading:
    fontFamily: "Arial"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0em"
  body:
    fontFamily: "Arial"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0em"
  label:
    fontFamily: "Arial"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  xl: "28px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(3rem, 6vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  surface-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  muted-copy:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "8px"
  line-card:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px"
  plum-bento:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  clay-bento:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  danger-badge:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
---

## Overview

SuperSell uses a crisp boutique catalogue system: bright white retail surfaces, lightly blue-tinted panels, strong fashion imagery, structured bento composition, and a direct WhatsApp ordering path. The mood is a daylit premium store where shoppers are browsing with intent on a phone, then confirming an order through a message.

## Colors

The body foundation is near-white, not cream. `surface` and `panel` create clean separation without heavy glass or beige warmth. `primary` is reserved for conversion actions, active controls, and order confidence. `accent` is a small brass merchandising note for offers and premium cues. `plum` and `clay` are supporting campaign colors for bento blocks only.

## Typography

Georgia remains the display voice for boutique polish, while Arial carries product data, controls, labels, and body text. Headings use balanced wrapping, no negative tracking, and restrained scale inside cards and panels. Body copy stays high contrast and avoids long low-contrast gray passages.

## Layout

Layouts favor asymmetric bento grids, image-led category and brand blocks, stable product cards, and generous section rhythm. Page sections are full-width bands or unframed constrained layouts; cards are reserved for actual products, categories, brands, cart items, form panels, and repeated commerce objects.

## Elevation & Depth

Depth is clean and retail-like: subtle borders, soft shadows, and rare backdrop blur only where it supports a sticky navigation or purchase panel. Decorative orbs and generic glow fields are avoided.

## Shapes

Buttons and controls use 14px to pill radii depending on affordance. Cards use 22px to 28px radii for a modern boutique feel, with no nested cards.

## Components

Primary buttons use teal-green with white text. Secondary buttons use ink. Ghost controls use white surfaces with visible borders. Product cards prioritize image, brand, name, price, stock, and quick actions. Filter controls are compact, high-contrast, and mobile friendly.

## Do's and Don'ts

Do lead with product imagery, clear prices, stock state, and WhatsApp actions. Do use bento grids for merchandising variety. Do keep contrast AA or better. Do not add payment, authentication, backend, or admin flows. Do not use heavy glass, decorative orbs, gradient text, repeated section eyebrows, or uniform icon-card grids.
