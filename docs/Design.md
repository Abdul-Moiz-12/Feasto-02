# FEASTO --- Design System & Visual Implementation Specification

**Document:** Design.md\
**Project:** Feasto\
**Purpose:** Visual source of truth for the CLI/AI coding agent\
**Reference assets:** `src/Assets/`\
**Primary references:** Supplied Home UI, Menu UI, Admin Dashboard UI

------------------------------------------------------------------------

# 1. Purpose

This document tells the CLI/AI coding agent HOW Feasto should look and
how the visual language should be extended across the entire
application.

There is an important existing asset folder:

``` text
src/
└── Assets/
    ├── UI reference 1
    ├── UI reference 2
    └── UI reference 3
```

The exact filenames may differ.

## Critical instruction

Before designing or redesigning UI, the agent MUST inspect:

``` text
src/Assets/
```

and study all UI reference images/files inside it.

These references are the visual foundation of Feasto.

The agent should NOT ignore them and generate a generic restaurant UI.

------------------------------------------------------------------------

# 2. Reference Relationship

The supplied designs establish three connected visual contexts:

``` text
HOME
Customer brand experience
        ↓
MENU
Customer shopping experience
        ↓
ADMIN DASHBOARD
Restaurant management experience
```

They are different interfaces, but they belong to the same product.

The agent should preserve the shared Feasto DNA while adapting the UI to
each context.

------------------------------------------------------------------------

# 3. Design Extension Rule

The reference images do NOT mean that only those three pages should be
designed.

The references are the starting point for designing the rest of the
application procedurally.

For every new page, the agent should ask:

``` text
What visual rules are established by the reference?
        ↓
Which rules belong to the shared Feasto system?
        ↓
Which rules belong specifically to this page type?
        ↓
How can the new page feel like it belongs to the same product?
```

Therefore pages such as:

``` text
Product Details
Cart
Checkout
Payment
Order Success
Login
Signup
Profile
Orders
Order Details
Offers
About
Contact

Admin Orders
Admin Menu
Admin Categories
Admin Customers
Admin Reviews
Admin Coupons
Admin Reports
Admin Users
Admin Staff
Admin Settings
```

must be designed using the same design language.

Do NOT invent a completely different style for these pages.

------------------------------------------------------------------------

# 4. Visual North Star

Feasto should feel:

``` text
Modern
Clean
Premium
Minimal
Warm
Food-focused
Confident
Professional
```

Avoid:

``` text
Old website UI
Bootstrap-like generic interfaces
Overly glossy cards
Excessive gradients
Excessive shadows
Over-decoration
Random colors
Crowded layouts
Tiny unreadable text
Generic SaaS templates
```

------------------------------------------------------------------------

# 5. Brand Personality

Feasto has a strong but controlled personality.

Customer side:

``` text
Editorial
Food-first
Friendly
Modern
Energetic
```

Admin side:

``` text
Professional
Analytical
Organized
Efficient
Modern SaaS
```

Shared identity:

``` text
Typography
Red accent
Neutral backgrounds
Clean cards
Soft radius
Generous whitespace
Simple Feasto branding
```

------------------------------------------------------------------------

# 6. Reference-First Workflow

Whenever the agent builds a page:

## Step 1

Inspect `src/Assets/`.

## Step 2

Identify the visual patterns used by the references.

## Step 3

Reuse existing global design tokens/components if they exist.

## Step 4

Build the page using those patterns.

## Step 5

Only introduce a new pattern when the page's functionality genuinely
requires it.

## Step 6

Ensure the new pattern still looks like Feasto.

This is called **procedural design extension**.

------------------------------------------------------------------------

# 7. Color System

Primary Feasto red:

``` text
#E53935
```

Dark:

``` text
#171717
```

Primary background:

``` text
#F7F7F5
```

Surface:

``` text
#FFFFFF
```

Muted text:

``` text
#6F6F6F
```

Border:

``` text
#E9E9E7
```

These values are a starting design system and can be tuned slightly
after visual comparison with the reference assets.

------------------------------------------------------------------------

# 8. Color Usage

## Feasto Red

Use for:

-   Primary CTAs.
-   Active navigation.
-   Important accents.
-   Selected filters.
-   Primary progress indicators.
-   Brand emphasis.
-   Promotional areas.

Do NOT use red for every border, heading, icon, and background.

Red should remain meaningful.

------------------------------------------------------------------------

# 9. Typography

Preferred:

``` text
DM Sans
```

Fallback:

``` text
Inter, system-ui, sans-serif
```

The exact available font should be checked before adding a dependency.

## Headings

Large:

-   Bold.
-   Strong.
-   Tight enough to feel modern.
-   Clear hierarchy.

## Body

-   Comfortable line height.
-   Muted when secondary.
-   Never unnecessarily tiny.

------------------------------------------------------------------------

# 10. Whitespace

Whitespace is a major part of the supplied designs.

Do not compress the page to fit as much information as possible.

Use a consistent spacing system:

``` text
4
8
12
16
20
24
32
40
48
64
80
96
```

Major sections should have visible separation.

------------------------------------------------------------------------

# 11. Containers

Use centered containers.

Approximate desktop max width:

``` text
1200–1320px
```

Suggested horizontal padding:

Desktop:

``` text
32–48px
```

Tablet:

``` text
24px
```

Mobile:

``` text
16–20px
```

------------------------------------------------------------------------

# 12. Radius

Suggested system:

``` text
Small controls: 8–10px
Cards: 14–18px
Large sections: 20–24px
Pills: 999px
```

Use radius intentionally.

Do not turn every element into a pill.

------------------------------------------------------------------------

# 13. Shadows

Keep elevation subtle.

Cards should feel lifted, not floating heavily.

Conceptual levels:

``` text
Low:
0 2px 10px rgba(0,0,0,.04)

Medium:
0 8px 25px rgba(0,0,0,.06)

High:
0 18px 45px rgba(0,0,0,.09)
```

Avoid heavy black shadows.

------------------------------------------------------------------------

# 14. Borders

Use subtle borders:

``` text
1px solid #E9E9E7
```

Avoid thick borders as a default visual device.

------------------------------------------------------------------------

# 15. Customer Navbar

Based on the Home and Menu references.

Structure:

``` text
feasto.

Home
Menu
Offers
About
Contact

Cart
Dashboard
```

Visual:

-   White/warm surface.
-   Subtle bottom border.
-   Strong Feasto logo.
-   Clear active state.
-   Red active underline/accent.
-   Dashboard as a strong CTA.
-   Cart count as compact badge.

------------------------------------------------------------------------

# 16. Home Page Visual System

Reference composition:

``` text
Navbar
        ↓
Hero
        ↓
Quick category finder
        ↓
Most wanted
        ↓
Chef's rotation
        ↓
Three-step ordering
        ↓
Promotion
        ↓
Footer
```

Each major block should feel like a distinct section while still flowing
into the next.

Do not add heavy horizontal divider lines between every section.

Use:

-   whitespace;
-   background shifts;
-   soft surfaces;
-   subtle shadows;
-   large section gaps.

------------------------------------------------------------------------

# 17. Home Hero

The reference establishes this hierarchy:

``` text
Fast food, considered

The good stuff,
made with intent.

Supporting text

[ Explore the menu ]   See today's offer

                         Large food visual
```

The right-side food image is a major visual anchor.

Decorative background shapes should remain soft and subordinate.

------------------------------------------------------------------------

# 18. Home Category Finder

This is a floating white utility surface.

It should contain quick category actions such as:

``` text
Burgers
Pizza
Chicken
Fries
```

These are actual navigational/filter actions.

The visual should be:

-   compact;
-   friendly;
-   clean;
-   lightly elevated.

------------------------------------------------------------------------

# 19. Product Cards

Product cards are one of the most important shared components.

Concept:

``` text
┌──────────────────────────┐
│                          │
│       FOOD IMAGE         │
│                          │
├──────────────────────────┤
│ Product name        ♥    │
│ 4.8 ★ (320)             │
│ Description              │
│                          │
│ Rs. 799       Add to cart│
└──────────────────────────┘
```

Card rules:

-   Food image dominates.
-   Consistent image ratio.
-   Clean content spacing.
-   Strong product name.
-   Rating visible.
-   Price prominent.
-   CTA clear.
-   Favorite action secondary.
-   Badge compact.

------------------------------------------------------------------------

# 20. Product Card Reuse

The same ProductCard component may appear in:

``` text
Home
Menu
Search results
Offers
Related products
```

Its internal styling should remain consistent.

Page-specific layout should be controlled by the parent, not by creating
unrelated duplicate card designs.

------------------------------------------------------------------------

# 21. Menu Page

Reference hierarchy:

``` text
Menu Hero

┌───────────────────────────────────────────┐
│ Filters │ Search                 Sort     │
│         │                             │   │
│         │ Product Product Product      │   │
│         │ Product Product Product      │   │
│         │ Product Product Product      │   │
└───────────────────────────────────────────┘
```

Desktop:

-   Filter panel on left.
-   Product results on right.
-   Search/sort at top.
-   Product grid below.

Mobile:

``` text
Search
[ Filters ] [ Sort ]

Product grid
```

Filters should become a drawer/sheet/expandable control on mobile.

------------------------------------------------------------------------

# 22. Menu Filter Panel

Sections:

``` text
Filters

Categories
○ All Categories
○ Burgers
○ Pizza
○ Chicken
○ Fries
○ Drinks
○ Desserts
○ Salads

Rating
○ 4.5+
○ 4.0+
○ 3.5+
○ 3.0+

Price Range
[ range slider ]

Rs. 100                Rs. 1500+

Clear all filters
```

Selected state uses Feasto red.

------------------------------------------------------------------------

# 23. Menu Search and Sort

Search:

-   White surface.
-   Subtle border.
-   Search icon.
-   Comfortable height.
-   Clear focus state.

Sort:

``` text
Sort by: [ Most Popular ▼ ]
```

Do not visually overpower the product grid.

------------------------------------------------------------------------

# 24. Product Details Page

This page is not in the original reference image, so it must be derived
from the existing product-card and menu language.

Suggested composition:

``` text
Breadcrumb / back

Large product image
        +
Product information

Name
Rating
Description
Price
Customization
Quantity
[ Add to cart ]
```

The page should feel like a natural expansion of the Menu product card.

Do not introduce a completely new color system.

------------------------------------------------------------------------

# 25. Cart Page

Derived from the product/card language.

Suggested structure:

``` text
Your Cart

Cart items                    Order summary
-----------------             ----------------
Product image                 Subtotal
Name                          Delivery
Options                       Total
Quantity
Price                         [ Checkout ]
```

Use calm white surfaces and strong spacing.

The cart should feel like a continuation of the shopping experience.

------------------------------------------------------------------------

# 26. Checkout Page

Checkout should prioritize clarity.

Suggested structure:

``` text
Checkout

1. Delivery details
2. Order summary
3. Continue to payment
```

Use:

-   clear section headings;
-   simple form fields;
-   subtle card surfaces;
-   visible total;
-   strong primary CTA.

Do not overdecorate a form-heavy page.

------------------------------------------------------------------------

# 27. Payment Page

Payment is a functional step and should feel trustworthy.

Visual hierarchy:

``` text
Payment

Order total

Payment methods
○ Method
○ Method
○ Method

[ Place order ]
```

Use strong selected states.

Avoid fake payment logos or unsupported payment methods.

------------------------------------------------------------------------

# 28. Login / Signup

Authentication pages should belong to Feasto but may be simpler than the
Home page.

Suggested direction:

``` text
feasto.

Welcome back

Email
Password

[ Sign in ]

Forgot password / relevant action

Don't have an account?
Create account
```

Signup similarly:

``` text
Create your Feasto account

Name
Email
Password
Confirm password

[ Create account ]
```

Use the same typography, red CTA, radius, and neutral surfaces.

Do not make authentication look like an unrelated SaaS template.

------------------------------------------------------------------------

# 29. Profile / Orders

Customer account pages should use:

-   clean content panels;
-   clear headings;
-   consistent buttons;
-   order cards/table patterns;
-   status pills.

Order status visual language should be shared with Admin where
appropriate.

------------------------------------------------------------------------

# 30. Offers Page

Use the promotional language established by Home.

Possible structure:

``` text
Offers

Featured deal
Deal cards
Promo details
```

Do not turn every offer into an enormous red section.

Use red strategically.

------------------------------------------------------------------------

# 31. About / Contact

These pages should use the same:

-   container width;
-   typography;
-   spacing;
-   buttons;
-   cards;
-   footer;
-   brand colors.

Contact can use a clean form surface.

About can use editorial imagery and brand storytelling.

------------------------------------------------------------------------

# 32. Admin Visual System

Admin is based directly on the supplied Dashboard reference.

Customer:

``` text
Food + editorial
```

Admin:

``` text
Operations + analytics
```

Shared Feasto DNA remains.

------------------------------------------------------------------------

# 33. Admin Shell

Conceptual layout:

``` text
┌────────────────┬────────────────────────────────────────┐
│                │ Admin Header                           │
│ FEASTO         │                                        │
│                │ Page Content                           │
│ Dashboard      │                                        │
│ Orders         │                                        │
│ Menu Items     │                                        │
│ Categories     │                                        │
│ Customers      │                                        │
│ Reviews        │                                        │
│ Coupons        │                                        │
│ Reports        │                                        │
│                │                                        │
│ Management     │                                        │
│ Users          │                                        │
│ Staff          │                                        │
│ Settings       │                                        │
└────────────────┴────────────────────────────────────────┘
```

This is an application shell.

The content area changes when the route changes.

------------------------------------------------------------------------

# 34. Admin Sidebar

Reference uses a dark sidebar.

Use approximately:

``` text
#171717
```

Logo:

``` text
feasto.
```

white with red brand dot.

Navigation:

-   Clear icons.
-   Clear labels.
-   Active state.
-   Adequate spacing.
-   Group labels such as MAIN and MANAGEMENT.

The active state may use Feasto red, but should remain visually
balanced.

------------------------------------------------------------------------

# 35. Admin Navigation --- Critical

The sidebar must map to real pages:

``` text
Dashboard    → /admin/dashboard
Orders       → /admin/orders
Menu Items   → /admin/menu
Categories   → /admin/categories
Customers    → /admin/customers
Reviews      → /admin/reviews
Coupons      → /admin/coupons
Reports      → /admin/reports
Users        → /admin/users
Staff        → /admin/staff
Settings     → /admin/settings
```

NEVER implement these as:

``` text
#orders
#menu
#customers
```

inside the dashboard unless a specific dashboard section is genuinely
intended as an anchor.

The sidebar is navigation between pages.

------------------------------------------------------------------------

# 36. Admin Dashboard

Reference structure:

``` text
Greeting
↓
KPI Cards
↓
Revenue + Order Status
↓
Recent Orders + Top Selling
↓
Sales by Category + Recent Reviews
```

The dashboard should prioritize information density without becoming
crowded.

------------------------------------------------------------------------

# 37. KPI Cards

Four-card desktop row:

``` text
Total Orders
Total Revenue
Customers
Menu Items
```

Each:

-   icon;
-   label;
-   large value;
-   trend/comparison;
-   subtle card surface.

------------------------------------------------------------------------

# 38. Admin Charts

Revenue:

-   red primary line;
-   light grid;
-   clean labels;
-   tooltip if available;
-   time selector.

Order status:

-   donut;
-   clear legend;
-   total in center.

Do not use 3D charts or excessive visual effects.

------------------------------------------------------------------------

# 39. Admin Tables

Use clean tables.

Example:

``` text
Order ID
Customer
Items
Amount
Status
Time
Actions
```

Rows should have:

-   comfortable padding;
-   subtle separators;
-   hover state;
-   status pill;
-   compact actions.

Avoid thick borders around every cell.

------------------------------------------------------------------------

# 40. Admin Secondary Pages

Pages such as:

``` text
Orders
Menu
Categories
Customers
Reviews
Coupons
Reports
Users
Staff
Settings
```

are not shown in the supplied Dashboard screenshot.

Therefore they must be designed **procedurally from the Dashboard design
system**.

Example:

Admin Orders should reuse:

``` text
AdminShell
AdminHeader
Search
Filter controls
Cards
Status pills
Tables
Pagination
Modals/Drawers
Buttons
```

Admin Menu should reuse:

``` text
AdminShell
AdminHeader
Product image treatment
Tables/cards
Form controls
Primary red CTA
```

The page is new, but the design language is not new.

------------------------------------------------------------------------

# 41. Admin CRUD Page Pattern

For management pages, use a consistent structure:

``` text
Page heading
Supporting text

[ Search ] [ Filters ]                  [ Primary action ]

Main content surface
    ↓
Table / cards

Pagination / result count
```

Example:

``` text
Menu Items
Manage your restaurant menu.

[ Search menu ] [ Category ]             [ + Add item ]

─────────────────────────────────────────
Product | Category | Price | Status | Actions
─────────────────────────────────────────
...
```

------------------------------------------------------------------------

# 42. Admin Forms

Forms should use:

-   clear labels;
-   adequate spacing;
-   clean input surfaces;
-   subtle borders;
-   clear focus;
-   validation messages;
-   primary CTA.

Avoid overly dense forms.

------------------------------------------------------------------------

# 43. Status System

Use semantic status colors where necessary.

Example:

``` text
Pending       → warm/orange
Preparing     → red/orange
On Delivery   → blue
Completed     → green
```

Status colors are functional and may extend beyond the primary Feasto
palette.

Use text + color together.

------------------------------------------------------------------------

# 44. Responsive Design

## Desktop

The supplied designs primarily target desktop.

Maintain:

-   generous whitespace;
-   multi-column layout;
-   strong visual hierarchy.

## Tablet

-   Reduce columns.
-   Allow dashboard cards to wrap.
-   Collapse admin navigation when needed.

## Mobile

Customer:

-   collapsed navbar;
-   stacked hero;
-   one-column product cards;
-   filters in drawer;
-   stacked checkout.

Admin:

-   sidebar becomes drawer/menu;
-   KPI cards wrap;
-   tables scroll or adapt;
-   charts remain readable.

Do not simply shrink the desktop layout.

------------------------------------------------------------------------

# 45. Motion

Use subtle transitions.

Recommended:

``` text
150–250ms
```

Use for:

-   hover;
-   focus;
-   dropdowns;
-   drawers;
-   card interactions;
-   navigation state.

Avoid:

-   excessive bouncing;
-   dramatic page transitions;
-   constant floating;
-   long animations.

------------------------------------------------------------------------

# 46. Images

Food imagery is central to Feasto.

Use consistent image treatment:

``` text
object-fit: cover
```

where appropriate.

Keep aspect ratios consistent.

Do not allow random image dimensions to destroy grid alignment.

For hero imagery, use `contain` or another appropriate treatment when
the reference image visually depends on the entire food object being
visible.

------------------------------------------------------------------------

# 47. Icons

Icons should feel like one icon family.

Prefer a consistent icon library if one is already installed.

Do not mix:

``` text
Lucide + random SVG + unrelated icon packs
```

without reason.

Icons should support hierarchy, not become decoration everywhere.

------------------------------------------------------------------------

# 48. Accessibility

Design must include:

-   readable contrast;
-   visible focus;
-   semantic controls;
-   labels;
-   meaningful alt text;
-   keyboard access;
-   adequate touch targets.

Never hide focus indicators merely to make the design cleaner.

------------------------------------------------------------------------

# 49. Design Tokens

Prefer centralized CSS variables.

Example:

``` css
:root {
  --color-primary: #E53935;
  --color-dark: #171717;
  --color-background: #F7F7F5;
  --color-surface: #FFFFFF;
  --color-muted: #6F6F6F;
  --color-border: #E9E9E7;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

The actual implementation may adjust values after inspecting the
references.

------------------------------------------------------------------------

# 50. Component Design System

Build reusable visual components such as:

``` text
Navbar
Footer
Button
IconButton
SearchInput
Select
Modal
Drawer
ProductCard
ProductBadge
Rating
CategoryChip
FilterPanel
PriceRange
Pagination
CartItem
OrderSummary
StatusBadge
StatCard
DashboardCard
DataTable
FormField
EmptyState
LoadingState
```

Admin-specific:

``` text
AdminLayout
AdminSidebar
AdminHeader
AdminStatCard
AdminTable
AdminFilterBar
```

Do not duplicate visually identical components.

------------------------------------------------------------------------

# 51. Visual Consistency Rule

If the same concept appears in multiple pages, it should visually behave
the same.

Examples:

``` text
ProductCard
→ same core design

Primary Button
→ same core design

Status Badge
→ same semantic language

Search Input
→ same visual treatment

Page Container
→ same width/padding logic

Heading hierarchy
→ same typography scale
```

------------------------------------------------------------------------

# 52. What the Agent Must NOT Do

Do not:

-   Ignore `src/Assets`.
-   Build a generic template.
-   Copy the same dashboard layout into every page.
-   Use red everywhere.
-   Create excessive glassmorphism.
-   Add unnecessary gradients.
-   Add huge shadows.
-   Make every card look identical when content requires different
    hierarchy.
-   Make mobile a broken version of desktop.
-   Create fake interactions.
-   Use placeholder UI as a final implementation.
-   Connect unrelated admin links to dashboard sections.
-   Create a different visual identity for Login, Checkout, or Admin.

------------------------------------------------------------------------

# 53. Reference Comparison Procedure

After implementing a major page, compare it against the reference
designs.

Check:

### Home

-   Hero composition.
-   Typography.
-   Food image prominence.
-   Category finder.
-   Product cards.
-   Chef's Rotation.
-   Three-step section.
-   Promo banner.
-   Footer.

### Menu

-   Hero.
-   Filter panel.
-   Search.
-   Sorting.
-   Product grid.
-   Cards.
-   Pagination.

### Admin

-   Sidebar.
-   Header.
-   KPI cards.
-   Charts.
-   Recent orders.
-   Top selling.
-   Category sales.
-   Reviews.

------------------------------------------------------------------------

# 54. New Page Design Procedure

For a page without a direct reference image:

Example:

``` text
Checkout
```

The agent must derive it from existing patterns:

``` text
Navbar / Customer shell
+
Feasto typography
+
Feasto colors
+
Feasto cards
+
Feasto buttons
+
Feasto spacing
+
Existing form patterns
```

Then adapt the layout to the page's purpose.

This is preferred over inventing a new design system.

------------------------------------------------------------------------

# 55. Final Visual Principle

The three supplied UI images are the **visual north star**, not the
complete website.

The agent should transform:

``` text
3 reference screens
```

into:

``` text
1 complete Feasto design system
```

and then use that system to design:

``` text
Home
Menu
Product
Offers
About
Contact
Cart
Checkout
Payment
Order Success
Login
Signup
Profile
Orders
Order Details
+
Admin Dashboard
Admin Orders
Admin Menu
Admin Categories
Admin Customers
Admin Reviews
Admin Coupons
Admin Reports
Admin Users
Admin Staff
Admin Settings
```

Every page should feel as though it was designed by the same product
designer for the same real company.

------------------------------------------------------------------------

# 56. Final Quality Target

The target is NOT:

``` text
"Make every page look pretty."
```

The target is:

``` text
Consistent visual language
+
Strong information hierarchy
+
Reusable components
+
Real page-specific layouts
+
Responsive behavior
+
Functional interaction
+
Professional polish
=
Feasto
```

The UI should look intentional enough that a user can immediately
understand:

``` text
"This is one product."
```
