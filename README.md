# Final Project — CommunityHub

**Course:** Web Development Fundamentals  
**Project:** Interactive Community Events & Activity Planner  
**Difficulty:** Intermediate (medium)  
**Suggested duration:** 2 weeks (10 working days)  
**Team size:** 2–3 students; individual submissions may be permitted  

---

## 1. Project Overview

Imagine that a local community organization has hired your team to build **CommunityHub**: a responsive website where residents can discover, browse, save, and submit local events. Events might include workshops, concerts, sports, education sessions, or volunteer opportunities.

The site should feel like a real, polished product: attractive layouts, clear navigation, useful forms, and immediate interactive feedback. It must combine the techniques practiced throughout this course.

**Scope:** This is a **front-end-only** application. No backend, database, login, payment processing, or external event API is required. Use JavaScript data and browser `localStorage` instead.

### Learning outcomes

At the end of this project you should be able to:

1. Organize a multi-page (or multi-view) website using semantic HTML5.
2. Create responsive layouts with the CSS box model, Flexbox, CSS Grid, and media queries.
3. Apply CSS transitions/transforms and organize styles with SCSS.
4. Render and update content using JavaScript and the DOM APIs.
5. Build accessible forms with native and JavaScript validation.
6. Use jQuery for a small interactive component.
7. Create a data-driven visualization with HTML5 Canvas and include HTML5 audio or video.
8. Demonstrate Tailwind CSS in a clearly identifiable component.
9. Plan an interface with wireframes and collaborate using Git/GitHub.

---

## 2. Required Pages and Features

Build at least **three views**. They may be three HTML pages or three views in one site, provided users can navigate between them without confusion.

### Page 1 — Discover Events

The main event discovery page must contain:

- A navigation bar with a brand name/logo and links to the three views.
- A hero area with a title, short introduction, and a clear call to action.
- A text search box for event titles.
- A category selector/filter.
- A **responsive event-card grid** using CSS Grid.
- A footer with useful navigation or site information.
- At least **8 predefined events** from at least **3 categories**.

Every event card must show: **event title, date, location, category, image,** and a **View Details** or **Save** control. Each event should have a stable unique `id`.

**Expected interactions**

- Cards are rendered with JavaScript from an array of event objects, **not** written as eight separate hardcoded HTML cards.
- Typing into the search box updates the results without a full-page reload.
- Changing the category updates results.
- **Search and category filtering work together.**
- Clicking an event reveals its longer description in a modal, panel, or detail view.
- A user can save or unsave an event.
- An appropriate message appears if no events match the selected filters.

### Page 2 — Create Event

Create an event submission form containing:

| Field | Recommended element | Requirement |
|---|---|---|
| Event title | `input type="text"` | Required; minimum 3 characters |
| Event date | `input type="date"` | Required; today or a future date |
| Location | `input type="text"` | Required |
| Category | `select` | Required; choose from defined categories |
| Description | `textarea` | Required; minimum 20 characters |
| Image URL | `input type="url"` | Optional; use placeholder image when blank |
| Submit | `button type="submit"` | Validates and creates an event |
| Reset | `button type="reset"` | Clears the form |

**Validation:** Use appropriate labels, semantic form elements, `required`/`minlength`/input types where suitable, **and** JavaScript validation for business rules such as disallowing past dates. Display specific, human-readable error messages and a clear success message. Invalid submissions must not create events.

**After successful submission:**

1. Read the form values.
2. Create an event object with a unique identifier.
3. Add it to the in-memory event collection.
4. Update the Discover page so the new event appears.
5. Persist student-created events in `localStorage` so they survive a browser refresh.

### Page 3 — My Events / Dashboard

The dashboard must include:

- A list or grid of events saved by the visitor.
- A way to remove events from the saved list.
- A friendly empty state if nothing is saved.
- A **data-driven HTML5 Canvas chart**, such as a bar chart of the number of events in each category.
- At least one **HTML5 `<video>` or `<audio>` element** with functioning native playback controls. Use original or appropriately licensed media.
- A jQuery-based interaction, for example an expandable **FAQ / Help** section (this may appear on another view if more appropriate).

**Persistence:** Saved event IDs must be stored in `localStorage` and restored after a browser refresh. Chart values must come from the real event collection, not hardcoded decorative values.

---

## 3. HTML and CSS Requirements

### Semantic HTML

- Use appropriate structural tags: `header`, `nav`, `main`, `section`, `article`, `footer`, and form elements as relevant.
- Use a logical heading hierarchy, meaningful labels, and descriptive button text.
- Add useful image alt text and ensure form controls can be used by keyboard.

### CSS concepts

Show evidence of all of the following:

- Selectors, classes, and IDs.
- **Box model:** spacing, padding, borders, and sizing.
- **Flexbox:** navigation, toolbar, or alignment.
- **CSS Grid:** responsive event-card layout.
- **Media queries:** layouts adapt to desktop, tablet, and mobile.
- **Transitions and transforms:** e.g., subtle card hover movement, button effects, or expanding components.
- Consistent type, colors, spacing, and visual hierarchy.

The website must remain usable on mobile without unwanted horizontal scrolling. Hover-only content should also have a touch/keyboard-accessible alternative.

### SCSS

Use SCSS for the site's custom styles. Demonstrate:

- At least **two variables** (e.g., colors and spacing).
- **Nesting** in an appropriate selector.
- At least **one partial or mixin** reused in the stylesheet.
- Compiled CSS available to the browser (document build steps in the README).

### Tailwind CSS

Use Tailwind utility classes in **one or more clearly identifiable components**, such as dashboard statistic cards or the event filter toolbar. In the README, identify where Tailwind is used. Avoid having Tailwind unintentionally override the SCSS styling.

**Bootstrap:** Optional bonus/extra design choice, **not required**; the class includes a Bootstrap lesson shown as a draft.

---

## 4. JavaScript and DOM Requirements

Represent events as JavaScript objects. A suggested data shape is:

```js
const events = [
  {
    id: "evt-001",
    title: "Beginner Photography Walk",
    date: "2027-01-16",
    location: "Community Park",
    category: "Arts",
    description: "Join a friendly outdoor photography walk and learn practical tips.",
    image: "assets/photography.jpg"
  }
];
```

You can create your own believable event examples. Use at least eight predefined events on first load. They can be from categories such as Arts, Technology, Sports, Music, Education, and Community.

Required behavior:

1. Render cards through JavaScript (`createElement`, `append`, `innerHTML` used safely, etc.).
2. Handle user interactions with event listeners.
3. Combine text search with category filtering.
4. Open and close event details.
5. Save and remove events from the personal list.
6. Create new events from the form.
7. Restore created events and saved event IDs on reload.
8. Update related UI without requiring manual page refresh.

**Implementation note:** `localStorage` is local to the user's browser and is not a shared database. Avoid collecting real personal information. If inserting user-supplied text into the page, use `textContent` rather than treating it as trusted HTML.

### jQuery

Use jQuery for **at least one meaningful, distinct feature**, such as an accordion-style FAQ with click handlers and show/hide effects. It should visibly work. Do not rewrite the entire application in jQuery just to meet this requirement.

---

## 5. Canvas and Media Requirements

### HTML5 Canvas

Draw at least one simple chart with the Canvas 2D API, such as events per category. Include:

- A chart title or caption.
- Clearly readable category labels.
- Values calculated from event data.
- A redraw when the underlying data changes, if new event submissions alter the chart's values.

A charting library may not replace the required Canvas drawing implementation.

### HTML5 Media

Include a video or audio element with functional `controls`. An event promo clip, local-community introduction, or short audio announcement would be suitable. Provide a descriptive label and a sensible fallback message for unsupported browsers.

---

## 6. Wireframing and UI Design

Before building the website, create at least:

- **One desktop wireframe** showing the major content areas.
- **One mobile wireframe** demonstrating layout changes.

The designs may be made in Figma, another design tool, or as clearly photographed hand sketches. The final application should reasonably follow the intended layout.

Review readability, spacing, navigation consistency, clear call-to-action buttons, contrast, and the form's error/success states.

---

## 7. Git and Team Collaboration

For team submissions:

- Create one shared GitHub repository.
- Work on meaningful feature branches (e.g., `feature/event-cards`, `feature/event-form`).
- Make descriptive commits throughout the project.
- Open and merge pull requests.
- Demonstrate at least **one reviewed pull request** or documented review discussion.
- Resolve merge conflicts when needed.
- Every member should contribute meaningful code and be able to explain their part.

Individual submissions should still demonstrate branches, commits, and merging.

Include a root `README.md` with project overview, team roles, implemented features, technology choices, installation/run instructions, screenshots, and known limitations.

---

## 8. Deliverables

Submit all of the following:

1. **GitHub repository URL** with complete source code and necessary assets/compiled CSS.
2. **README.md** with clear setup instructions and team responsibilities.
3. **Desktop and mobile wireframes** (files or a link).
4. **At least two finished-app screenshots:** one desktop and one mobile.
5. **A 5–7 minute live demonstration** covering search/filter, saved items, creating an event, responsive layout, and at least one advanced feature.

A hosted GitHub Pages URL is encouraged but optional. Students should ensure the site also works when served locally with a simple development server.

---

## 9. Grading Rubric (100 Points)

| Category | Points | Evidence |
|---|---:|---|
| UI design and wireframes | 10 | Organized interface; desktop/mobile wireframes; usability |
| Semantic HTML, CSS layout, responsiveness | 20 | Accessible structure; box model; Flexbox; Grid; breakpoints; transitions |
| JavaScript, DOM, event interactions | 20 | Dynamic cards; search+filter; details; save/remove; persistence |
| Forms and validation | 15 | Required fields; appropriate inputs; JS errors; successful submission and persistence |
| Canvas and HTML5 media | 10 | Data-driven Canvas chart; working audio/video |
| SCSS, Tailwind CSS, jQuery | 10 | SCSS variables/partial or mixin; identifiable Tailwind usage; functional jQuery interaction |
| Git and team collaboration | 10 | Meaningful commits; branches; review/PR; contributions |
| README, testing, presentation | 5 | Clear documentation; functional demo; basic quality checks |
| **Total** | **100** | |

**Bonus (up to 5 extra points):** dark/light theme, event sorting, editing/deleting created events, improved Canvas interactions, additional accessible UI behavior, or thoughtful Bootstrap use. Bonus work does not replace core requirements.

---

## 10. Suggested Two-Week Work Plan

| Days | Focus | Suggested milestones |
|---|---|---|
| 1–2 | Planning | Understand brief, create wireframes, establish repository, allocate features |
| 3–4 | HTML & CSS | Semantic pages, event cards, navigation, responsive design, SCSS |
| 5–6 | JavaScript | Data rendering, details, combined search and filter, save/unsave |
| 7–8 | Advanced features | Create-event form, validation, persistence, chart, media, jQuery, Tailwind |
| 9–10 | Quality & submission | Cross-size testing, bug fixing, merges, README, screenshots, demo |

---

## 11. Minimum Acceptance Checklist

- [ ] Home, Create Event, and My Events views can be reached through navigation.
- [ ] Home page initially shows at least 8 event cards across at least 3 categories.
- [ ] Cards are generated dynamically from JavaScript data.
- [ ] Search updates live and works together with category filtering.
- [ ] Details can be opened for an event.
- [ ] Users can save and unsave events.
- [ ] Saved selections survive a refresh.
- [ ] A valid submitted event appears in the site and survives a refresh.
- [ ] Invalid form submissions show informative errors and do not create events.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] Flexbox, Grid, media queries, transitions, and transforms are demonstrated.
- [ ] Custom styling uses SCSS variables, nesting, and a partial or mixin.
- [ ] At least one interface component uses Tailwind CSS utilities.
- [ ] At least one interaction uses jQuery.
- [ ] Canvas shows category statistics calculated from event data.
- [ ] An HTML5 audio or video player works.
- [ ] Desktop and mobile wireframes are included.
- [ ] GitHub history, branching, and at least one reviewed PR are demonstrated.
- [ ] Repository includes a usable README and final screenshots.
- [ ] Team is prepared for a 5–7 minute demo.

---

## 12. Course Topic Coverage

| Course unit | Where it appears |
|---|---|
| Week 1: Intro to web development, HTML elements, intro to CSS | Semantic structure, navigation, cards, basic styling |
| Week 2: Box model; Flexbox & Grid; responsive design; transitions/transforms | Layout systems, breakpoints, polish |
| Week 3: No published lessons shown in the supplied overview | No additional material assumed |
| Week 4: DOM I & II; forms & validation; media HTML & Canvas | Dynamic events, forms, chart and player |
| Week 5: SCSS; UI design/wireframing; jQuery | Styles, planning, FAQ accordion |
| Week 6: Tailwind CSS; Git review for teams | Utility-styled component and collaborative workflow |

> **Note for students:** Screenshots or sample layouts provided by the instructor are **illustrative examples**, not templates that must be copied pixel-for-pixel. Choose your own event titles, imagery, and color theme, while meeting the required features.
