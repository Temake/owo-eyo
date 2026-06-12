# getskillmd:metamask-design

---
name: metamask-design
description: Use this skill when building interfaces, landing pages, or components for MetaMask Crypto Wallet. Buy and Sell Bitcoin, Ethereum, Solana. It includes the extracted color palette, typography scale, button styles, spacing tokens, and layout patterns from the source site so generated UI matches the brand without guessing.
packages:
  - name: clsx
    purpose: Tiny utility for conditionally joining class names
    kind: dependency
    curated: true
  - name: tailwind-merge
    purpose: Merge Tailwind classes without style conflicts
    kind: dependency
    curated: true
  - name: class-variance-authority
    purpose: Type-safe component style variants (CVA)
    kind: dependency
    curated: true
  - name: shadcn
    purpose: Accessible, unstyled UI primitives you copy into the project
    kind: setup
    curated: true
    command: pnpm dlx shadcn@latest add
  - name: react-color
    purpose: To allow users to pick colors from the defined scheme for dynamic UI adjustments.
    kind: dependency
    curated: false
  - name: zustand
    purpose: For managing the application's global state, including theme preferences and user data.
    kind: dependency
    curated: false
  - name: react-hook-form
    purpose: To handle form state and validation efficiently for user inputs.
    kind: dependency
    curated: false
  - name: react-router-dom
    purpose: For handling navigation between different sections of the application.
    kind: dependency
    curated: false
---
```yaml
brand: MetaMask
mood: Energetic, vibrant, and futuristic, making the complex world of crypto feel playful and accessible.
scheme: light

colors:
  primary: "#190066"
  primary-bright: "#4362d1"
  primary-deep: "#0a0a0a"
  on-primary: "#ffffff"
  ink: "#131416"
  ink-soft: "#393d46"
  on-ink: "#ffffff"
  canvas: "#fff1eb"
  paper: "#ffffff"
  cloud: "#e9edf6"
  hairline: "#c8ceda"
  hairline-strong: "#393d46"
  link: "#190066"
  link-pressed: "#0a0a0a"
  accent-fox: "#ff5c16"
  accent-apricot: "#ffa680"
  accent-lime: "#e5ffc3"
  accent-lavender: "#eac2ff"
  accent-sky: "#cce7ff"
  accent-interactive: "#2c56dd"

typography:
  display-xxl: { fontFamily: "MMPolyVariable", fontSize: 160px, fontWeight: 400, lineHeight: 1 }
  display-xl: { fontFamily: "MMPolyVariable", fontSize: 80px, fontWeight: 500, lineHeight: 1.1 }
  display-lg: { fontFamily: "MMPolyVariable", fontSize: 48px, fontWeight: 500, lineHeight: 1.2 }
  display-md: { fontFamily: "MMPolyVariable", fontSize: 35px, fontWeight: 500, lineHeight: 1.2 }
  body-lg: { fontFamily: "MMEuclidCircularB", fontSize: 24px, fontWeight: 400, lineHeight: 1.5 }
  body-md: { fontFamily: "MMEuclidCircularB", fontSize: 16px, fontWeight: 400, lineHeight: 1.5 }
  body-sm: { fontFamily: "MMEuclidCircularB", fontSize: 14px, fontWeight: 400, lineHeight: 1.5 }
  caption-md: { fontFamily: "MMEuclidCircularB", fontSize: 12px, fontWeight: 400, lineHeight: 1.5 }
  button-lg: { fontFamily: "MMEuclidCircularB", fontSize: 24px, fontWeight: 400, lineHeight: 1.5 }
  button-md: { fontFamily: "MMEuclidCircularB", fontSize: 14px, fontWeight: 500, lineHeight: 1, textTransform: "uppercase" }

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

shadows:
  none: "none"
  soft-lift: "rgba(0, 0, 0, 0.15) 0px 3px 5px 0px"
  hero-float: "rgba(0, 0, 0, 0) 109px 169px 56px 0px, rgba(0, 0, 0, 0.01) 70px 108px 51px 0px, rgba(0, 0, 0, 0.05) 39px 61px 43px 0px, rgba(0, 0, 0, 0.08) 17px 27px 32px 0px, rgba(0, 0, 0, 0.1) 4px 7px 18px 0px"

motion:
  duration-fast: "200ms"
  duration-base: "400ms"
  duration-slow: "700ms"
  ease-standard: "ease-out"
  ease-emphasized: "cubic-bezier(0.19, 1, 0.22, 1)"
  transition-default: "all {motion.duration-fast} {motion.ease-standard}"

components:
  button-primary:
    backgroundColor: "{colors.accent-interactive}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "none"
    shadow: "{shadows.soft-lift}"
    cursor: pointer
  button-primary-hover:
    backgroundColor: "{colors.primary-bright}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline-strong}"
    shadow: "{shadows.none}"
    cursor: pointer
  button-outline-hover:
    backgroundColor: "{colors.cloud}"
    border: "1px solid {colors.ink}"
  button-footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.accent-lime}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "10px 32px"
    border: "none"
    shadow: "{shadows.none}"
    cursor: pointer
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    shadow: "{shadows.soft-lift}"
    border: "1px solid {colors.hairline}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline}"
    cursor: text
  input-focus:
    border: "1px solid {colors.accent-interactive}"
    shadow: "0 0 0 2px rgba(44, 86, 221, 0.3)"
  link:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
    textDecoration: "underline"
    cursor: pointer
  link-hover:
    textColor: "{colors.link-pressed}"
```

## Visual Theme & Atmosphere

The MetaMask brand projects a vibrant, playful, and futuristic atmosphere. It aims to demystify the often intimidating world of cryptocurrency and web3, making it feel approachable and secure for a broad audience. The design language is energetic, employing a wide palette of saturated accent colors like `{colors.accent-lime}` and `{colors.accent-apricot}` that pop against the soft, warm `{colors.canvas}` background. This creates a visual experience that is both engaging and friendly, avoiding the sterile, corporate feel common in financial technology.

The typography plays a crucial role in establishing this mood. A stark contrast is drawn between the wildly expressive, variable display font, `MMPolyVariable`, used for massive headlines like `{typography.display-xxl}`, and the clean, geometric sans-serif, `MMEuclidCircularB`, used for all body and UI copy. This pairing feels both artistic and highly functional. The overall aesthetic is clean and modern, characterized by generous whitespace, soft corners on UI elements, and a subtle sense of depth created by floating cards. It's a design that feels alive, dynamic, and optimistic about the future of the decentralized web.

**Key Characteristics:**
*   **Vibrant Color Blocking:** Bold, full-bleed sections use a rotating cast of accent colors like `{colors.accent-lime}`, `{colors.accent-apricot}`, and `{colors.primary}` for dramatic effect.
*   **Expressive Display Typography:** Headlines are a core design element, using the `MMPolyVariable` font at enormous sizes (`{typography.display-xl}` and larger) to make strong statements.
*   **Soft & Approachable UI:** Elements like buttons and inputs feature friendly `{rounded.pill}` or `{rounded.md}` radii, removing any hard, intimidating edges.
*   **Subtle Elevation:** Content is organized into floating `{card}` components that are lifted from the background with a gentle `{shadows.soft-lift}`, creating a clean, layered information architecture.
*   **Generous Spacing:** The layout breathes, with significant `{spacing.section}` gaps between content blocks and ample internal padding (`{spacing.lg}`) within components.
*   **Typographic Duality:** A clear separation between the artistic, statement-making heading font and the rational, legible body font is strictly maintained.
*   **Asymmetric & Dynamic Layouts:** Content cards and illustrations are often arranged in off-grid, asymmetric compositions that guide the eye and add visual interest.

## Color Usage Rules

The color palette is a cornerstone of the MetaMask identity, designed to be vibrant and expressive. It is intentionally diverse, but its application is governed by specific rules to maintain coherence and usability. The foundation of any page is built upon `{colors.canvas}` for the main background and `{colors.paper}` for primary card surfaces. All other colors are layered on top of this neutral, warm base.

The core palette an agent should reuse consists of `{colors.canvas}`, `{colors.paper}`, `{colors.ink}`, `{colors.primary}`, and the set of vibrant accents. When building new UI, these tokens should cover nearly every requirement.

*   **Primary (`{colors.primary}`)**: This deep indigo is reserved for major headlines and for creating immersive, high-contrast sections, such as the page footer. It should *not* be used for primary call-to-action buttons on light backgrounds. It functions as a foundational, serious color that anchors the more playful accents.
*   **Accent Colors (`{colors.accent-lime}`, `{colors.accent-apricot}`, `{colors.accent-sky}`)**: These colors are used for full-bleed section backgrounds to create a rhythm and visual journey down the page. A key rule is to never use the same accent color for two consecutive sections; they must be alternated to maintain dynamism.
*   **Fox Orange (`{colors.accent-fox}`)**: This specific orange is intrinsically tied to the MetaMask logo. Its use should be limited to the brand mark itself and perhaps one other critical, brand-affirming element per page. It should never be used for general UI components like buttons or text links.
*   **Interactive Blue (`{colors.accent-interactive}`)**: This is the designated color for primary call-to-action buttons (`{button-primary}`). It provides excellent contrast on both `{colors.canvas}` and `{colors.paper}` backgrounds and should be used to draw the user's eye to the most important action.
*   **Text Colors**: All body text on light surfaces must use `{colors.ink}` for maximum readability. Secondary or less important text can use `{colors.ink-soft}`. On dark backgrounds like `{colors.primary}`, text must be light, using either `{colors.on-ink}` or a high-contrast accent like `{colors.accent-lime}`.
*   **Links**: Inline text links on light backgrounds should use `{colors.link}` (`#190066`) to stand out from `{colors.ink}` text while remaining harmonious. On dark backgrounds, links must use a bright color like `{colors.accent-lime}` to ensure they are visible and clickable.
*   **Rule**: Never introduce a new color that is not already a defined token. The existing palette is comprehensive and has been carefully chosen. Reusing existing tokens is always preferable to inventing new ones.
*   **Rule**: Emphasis comes from typography, color, and space. Do not rely on shadows for emphasis beyond the prescribed `{shadows.soft-lift}` for cards. The design is fundamentally flat, punctuated by floating content blocks.

## Typography Hierarchy

The typographic system is built on a clear and strict separation of roles between two primary font families. All headings and display text MUST use **MMPolyVariable**, an expressive and flexible font that gives the brand its unique voice. All body copy, UI labels, buttons, and other functional text MUST use **MMEuclidCircularB**, a clean and highly legible geometric sans-serif. There are no exceptions to this rule; the families must never be mixed in their roles.

| Role          | Token                   | Use                                                                 |
|---------------|-------------------------|---------------------------------------------------------------------|
| Display XXL   | `{typography.display-xxl}` | The primary hero headline. Use once per page for maximum impact.      |
| Display XL    | `{typography.display-xl}`  | Major section titles that introduce a new core concept.             |
| Display LG    | `{typography.display-lg}`  | Sub-section titles or large callouts.                               |
| Display MD    | `{typography.display-md}`  | Headings for content cards or smaller, tertiary sections.           |
| Body Large    | `{typography.body-lg}`     | Introductory paragraphs or key descriptive text that needs emphasis.  |
| Body Medium   | `{typography.body-md}`     | The default size for all paragraph text. The workhorse of the system. |
| Body Small    | `{typography.body-sm}`     | Smaller descriptive text within components, or detailed annotations.  |
| Caption       | `{typography.caption-md}`  | Legal disclaimers, metadata, or text in the smallest UI elements.   |
| Button Large  | `{typography.button-lg}`   | For oversized, high-impact call-to-action buttons.                  |
| Button Medium | `{typography.button-md}`   | For all standard navigation items and secondary buttons.            |

**Typography Principles:**

1.  **Strict Role Separation:** Never use `MMPolyVariable` for body copy or `MMEuclidCircularB` for headings. This contrast is fundamental to the brand's visual identity.
2.  **Hierarchy Through Scale:** The primary means of establishing hierarchy is through the dramatic shifts in font size defined in the type scale. Use the `display-*` tokens to command attention.
3.  **Readability is Paramount:** For all text set in `MMEuclidCircularB`, ensure line lengths do not exceed 75 characters. Use the default `lineHeight` of `1.5` to ensure comfortable reading.
4.  **Purposeful Uppercasing:** The `textTransform: "uppercase"` style is reserved for `{typography.button-md}` to create scannable, uniform navigation and button labels. Avoid using it for other text elements.
5.  **Weight for Emphasis, Not Style:** Use heavier font weights only for emphasis within a sentence or for hover states. The base weight for each family should be the default for all standard text.

## Component Patterns

Components are the reusable building blocks of the MetaMask interface. They are constructed using the defined tokens and follow consistent patterns of behavior and appearance. Every component must be implemented using token references, not raw values.

*   **Primary Button (`button-primary`)**: This is the main call-to-action button, using `{colors.accent-interactive}` for its background. It should be used for the most critical action in a given view, such as "Accept" or "Submit." On hover, its background color transitions to `{colors.primary-bright}` over `{motion.duration-fast}`. It always has a `cursor: pointer`.

*   **Outline Button (`button-outline`)**: Used for secondary actions, or in contexts like the main navigation where a less visually dominant button is required. It features a transparent background and a `{colors.hairline-strong}` border. On hover, the background fills with `{colors.cloud}`. This component must have `cursor: pointer`.

*   **Footer Button (`button-footer`)**: A special variant designed for high contrast on dark backgrounds like `{colors.primary}`. It uses `{colors.accent-lime}` for its text color and has a friendly `{rounded.pill}` shape. Its typography is larger, `{typography.button-lg}`, to give it prominence. It requires `cursor: pointer`.

*   **Card (`card`)**: The standard container for grouping related content. Cards float above the page background with `{shadows.soft-lift}` and feature generous `{rounded.xl}` corners. The default background is `{colors.paper}`, but can be substituted with a light accent color like `{colors.accent-lavender}` for variation. All content inside should be padded by `{spacing.lg}`.

*   **Input Field (`input`)**: Used for all text entry forms. It has a distinctive `{rounded.pill}` shape that makes it feel modern and approachable. When focused, it gains a subtle blue outer glow (`{input-focus}`) to provide clear user feedback. All text inputs must use `cursor: text`. Placeholder text should use `{colors.ink-soft}`.

*   **Link (`link`)**: Used for inline navigation within text blocks. It is styled with `{colors.link}` and a default `textDecoration: "underline"`. The underline provides a clear affordance. The color shifts to `{colors.link-pressed}` on hover, with the transition animated over `{motion.duration-fast}`. All links must use `cursor: pointer`.

## Layout & Spacing

The layout and spacing system is designed to create a sense of clarity, order, and visual breathing room. It is built upon a foundational 8px grid, from which all spacing tokens are derived. Consistent application of this system is critical to achieving the clean, uncluttered MetaMask aesthetic.

The primary structural element is the section band. Pages are composed of stacked, full-width sections, each separated by a generous `{spacing.section}` (80px) margin. This creates a strong vertical rhythm and allows each section's distinct background color to have maximum impact. Content within these sections is typically centered in a single column with a maximum width of around 1200px on desktop to ensure comfortable line lengths.

Within sections, a two-column grid is often used to present information and accompanying visuals. The gutter between these columns should be a consistent `{spacing.xl}` (32px). All content containers, such as `{card}` components, must use internal padding of at least `{spacing.lg}` (24px) to prevent text and UI elements from touching the edges. Margins between smaller elements, like a heading and the paragraph below it, should use `{spacing.md}` (16px), while margins between larger groups of content should use `{spacing.xl}` (32px) or `{spacing.xxl}` (48px).

This adherence to a proportional spacing scale ensures a harmonious and balanced layout. Random or arbitrary spacing values are strictly forbidden. Every margin and padding value must map to a token from the `{spacing}` scale.

## Do's and Don'ts

**Do's:**
1.  **Do** build all UIs by composing surfaces from `{colors.canvas}`, `{colors.paper}`, and the vibrant accent palette.
2.  **Do** use `MMPolyVariable` exclusively for headings and `MMEuclidCircularB` exclusively for all body and UI text.
3.  **Do** create a strong visual hierarchy using the full range of the typography scale, from `{typography.display-xxl}` down to `{typography.caption-md}`.
4.  **Do** separate major content areas with full-bleed colored sections and a vertical rhythm defined by `{spacing.section}`.
5.  **Do** enclose grouped content within `{card}` components that feature `{rounded.xl}` corners and `{shadows.soft-lift}`.
6.  **Do** ensure every single interactive element, including buttons, links, and tabs, explicitly sets `cursor: pointer`.
7.  **Do** use the established spacing tokens (`{spacing.md}`, `{spacing.lg}`, etc.) for all margins and padding to maintain a consistent rhythm.
8.  **Do** pair dark backgrounds like `{colors.primary}` with high-contrast text colors like `{colors.on-ink}` or `{colors.accent-lime}` to maintain accessibility.

**Don'ts:**
1.  **Don't** ever introduce a color, font, or spacing value that is not already defined as a token.
2.  **Don't** add a box-shadow to any element unless it maps directly to `{shadows.soft-lift}` or another defined shadow token. The aesthetic is primarily flat.
3.  **Don't** ever leave the browser's default arrow cursor on a button, link, or custom interactive component.
4.  **Don't** use sharp (`0px`) corners on UI elements like buttons or cards; the design language is soft and rounded.
5.  **Don't** make layouts feel dense or cramped. Prioritize generous whitespace using `{spacing.lg}` and larger tokens.
6.  **Don't** use `{colors.accent-fox}` for anything other than the official brand mark or a single, critical brand highlight.
7.  **Don't** use the same accent color for two consecutive page sections; always alternate them for visual variety.
8.  **Don't** apply underlining to any text that is not an active `{link}` component.

## Responsive Behavior

The MetaMask design system is fluid and fully responsive, ensuring a seamless experience across all device sizes. The layout adapts based on a standard set of breakpoints.

| Breakpoint      | Viewport Width | Key Characteristics                                                                      |
|-----------------|----------------|------------------------------------------------------------------------------------------|
| Mobile          | < 768px        | Single-column layout. Grids stack vertically. Navigation collapses to a hamburger menu.    |
| Tablet          | 768px - 1023px | Primarily single-column with wider margins. Some two-column layouts may be introduced.   |
| Desktop         | 1024px - 1279px| Full two-column layouts are common. The main navigation is fully expanded horizontally.    |
| Desktop-Large   | ≥ 1280px       | Layouts gain more horizontal whitespace. Max-width containers prevent content from stretching too wide. |

**Touch Targets:** All interactive elements must have a minimum touch target size of 44x44px on mobile devices. Components like `{button-primary}` with `{padding: "12px 24px"}` and `{typography.body-md}` easily meet this requirement.

**Behavior by Breakpoint:**
*   **Navigation:** The main header navigation, which is displayed horizontally on Desktop, collapses into a hamburger-toggled menu on Mobile and Tablet.
*   **Typography:** The massive display typography (`{typography.display-xxl}`, `{typography.display-xl}`) scales down significantly on smaller screens to prevent text from overwhelming the viewport. A fluid typography approach using `clamp()` is recommended.
*   **Grids:** Any multi-column grid layout on Desktop must stack into a single vertical column on Mobile. The order of stacked elements should prioritize the most important content first.
*   **Images & Illustrations:** All visual assets must be responsive, scaling fluidly to fit their container (`width: 100%`, `height: auto`). On mobile, decorative background illustrations may be simplified or hidden to reduce clutter and improve performance.

## Iteration Guide

When building or iterating on UI in the MetaMask style, follow these steps to ensure consistency and brand alignment. This process prioritizes a token-driven workflow.

1.  **Define the Structure:** Begin by blocking out the major sections of the page. Use full-width containers for each section and separate them with a consistent `{spacing.section}` margin.
2.  **Apply the Color Palette:** Assign a unique background color to each section band, drawing from the accent palette (`{colors.accent-lime}`, `{colors.accent-apricot}`, `{colors.accent-sky}`) or using `{colors.primary}` for a dark theme section. Ensure no two adjacent sections share the same accent color.
3.  **Establish Hierarchy with Typography:** Place headings in each section using the appropriate `display-*` token from `{typography}`. All headings must be set in `MMPolyVariable`. Populate content with body text using `{typography.body-md}` in the `MMEuclidCircularB` font.
4.  **Compose with Components:** Use the pre-defined components for all standard UI needs. Group related information into `{card}` elements. Use `{button-primary}` for the main action and `{button-outline}` for secondary ones. All form fields must use the `{input}` component style.
5.  **Implement Spacing Rhythm:** Apply spacing tokens for all padding and margins. Use `{spacing.lg}` for internal component padding and a mix of `{spacing.md}`, `{spacing.lg}`, and `{spacing.xl}` for spacing between elements. Do not use custom pixel values.
6.  **Ensure Interactivity and Affordance:** Verify that every single clickable element (`button`, `link`, etc.) has its `cursor` property explicitly set to `pointer`. Implement hover states for all interactive components, using `{motion.transition-default}` for smooth animations.
7.  **Review Accessibility:** Check the color contrast of all text against its background, especially on the vibrant accent color sections. Text on `{colors.primary}` must use `{colors.on-ink}` or `{colors.accent-lime}`.
8.  **Test Responsiveness:** View the design at each breakpoint (Mobile, Tablet, Desktop). Ensure that layouts stack correctly, typography scales appropriately, and touch targets are sufficiently large on mobile.
9.  **Final Token Audit:** Before finalizing, perform a check to ensure no raw hex codes or pixel values have been used where a design token exists. The entire implementation must be token-driven to maintain system integrity.

## Suggested Packages

Packages that help implement this skill well. Install them with your package manager (examples use pnpm).

- **clsx** — Tiny utility for conditionally joining class names. `pnpm add clsx`
- **tailwind-merge** — Merge Tailwind classes without style conflicts. `pnpm add tailwind-merge`
- **class-variance-authority** — Type-safe component style variants (CVA). `pnpm add class-variance-authority`
- **shadcn** — Accessible, unstyled UI primitives you copy into the project. `pnpm dlx shadcn@latest add`

Also worth considering (verify before installing):

- **react-color** — To allow users to pick colors from the defined scheme for dynamic UI adjustments.. `pnpm add react-color`
- **zustand** — For managing the application's global state, including theme preferences and user data.. `pnpm add zustand`
- **react-hook-form** — To handle form state and validation efficiently for user inputs.. `pnpm add react-hook-form`
- **react-router-dom** — For handling navigation between different sections of the application.. `pnpm add react-router-dom`

# end getskillmd:metamask-design
