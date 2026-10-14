# Ericsson Field Content Design System

Design system reconstructed from an Ericsson UX component document and two product mock-up sets (2017-era, Material-based). Use it to prototype or build screens for Ericsson's **AR-assisted field-service content** products.

## Sources
All provided as flat images (no Figma file or codebase was attached):
- `uploads/Ericsson-Component-UX.png` / `uploads/Android-sticker-sheet-Ericsson.jpg` — "Ericsson Style Guide Components · General UX Component Document" (Ericsson UX Framework; references a Frontify page `https://company-32762.frontify.com/d/OkVd6e8hfp7` — not accessible to us). Material Design sticker sheet: typography, system icons, keylines, themes, lists, cards, buttons, selection controls, sliders, text fields, tabs, dialogs, chips, menus, snackbar, grid lists, bottom sheets, pickers, notifications, side drawer, tables.
- Tablet (Android, 640×360/400) app screens: `splash.png`, `Onboarding-Step-1…4.png`, `Login copy.png`, `My-Projects copy 3.png`, `Confirmation.png`, `Downloading.png`, `Feedback.png`, `Sel-Help-Flyout-copy.png`, `Title-bar.png`.
- Web admin screens (1500px wide): `2.png`–`19.png` — the six-step project authoring wizard.
- `uploads/Ericsson_logo.eps` was listed but **not present** in the upload folder; logos in `assets/logo/` are raster crops from the screenshots.

## Products
1. **Field App (tablet)** — technicians download assigned projects (e.g. "AT&T · Migration"), point the camera at equipment and follow step-by-step AR instructions; includes feedback survey and Self Help. → `ui_kits/field-app/`
2. **Content Studio (web)** — admins author those projects: Create Project → Add Media → Create Steps (annotate equipment photos with hotspots, link media, choose "master" images) → Preview on a device → Test (acceptance testing) → Publish. → `ui_kits/content-studio/`

## CONTENT FUNDAMENTALS
- **Voice:** plain, instructional, operator-facing. Second person imperative: "Point camera to the device which needs to be migrated or installed", "Download the project content from your list of assigned project".
- **Casing:** Title Case for screen titles, tabs and step names ("My Projects", "Create Steps", "Hotspot Properties", "Add New Question"). ALL CAPS for buttons and the web page title (NEXT, CANCEL, SEND TO TEST, SELECT FILES, GET STARTED, PROJECTS). Sentence case for hints and body ("Added media files will appear here").
- **Questions in dialogs:** confirm with context + cost: "Would you like to start AT&T Project assignment? The Project size is 10 MB and would take approximately 5 mins to download."
- **Tips** quote UI verbs in curly quotes + caps: Tip: You can “STOP” or “PAUSE” a project any time.
- **Data strings** are terse & technical: "Migration . Expires on12MAY", "2MB of 10MB", "BBU5216.ZIP", "PortName : GPSConnector", "14/20".
- **Errors** are short statements: "Username is incorrect."
- No emoji, no exclamation marks, no marketing tone. "I" is never used; the product rarely says "we".
- Note: the source copy contains typos ("Augument", "qurey", "questionire", "assingned", "Varizon"). The UI kits keep them for fidelity; fix them in new work.

## VISUAL FOUNDATIONS
- **Colour:** a deep Ericsson purple `#260977` (buttons `#211376`) dominates. The signature element is a horizontal **purple → blue gradient** (`#260977` → `#1c2c8a` → `#11519d`) used on every app bar, the web header band, splash and onboarding (diagonal). Everything else is neutral greys (#f7f7f7 / #eeeeee / #e8e8e8 / #e0e0e0). Accents are functional: teal `#009688` dialog actions, lime `#9bc031` completed-step checks and `#88b916` selection outlines, yellow `#ffcc00` MASTER badges, red `#d50000` errors, steel-blue `#b7cade` progress track. The style-guide chrome uses plum `#5f1f70` (also radios).
- **Type:** Roboto throughout (Android/Material). Light hierarchy: 24 caps page title, 20 app-bar/dialog titles, 18 section heads (bold brand purple for form sections, grey for list sections), 16 body, 13–14 hints. Style guide names **Ericsson Capital** as headline face (not supplied).
- **Backgrounds:** flat colour only — gradient bands, grey pages, white panels. No textures, patterns or full-bleed marketing imagery. Imagery is real equipment photography (radio units, fibre, RJ-45 ports) and grey 3D product renders with orange/yellow motion arrows.
- **Illustration:** thin black monoline hand-drawn line art (hands holding tablets, a headset agent) on white — used only in onboarding.
- **Layout:** web = gradient band 215px tall; a white shell (inset 108px on 1500) overlaps it by ~70px and carries a 6-cell wizard bar, content and a #f7f7f7 footer action bar (buttons right-aligned). Tablet = 56–64px app bar, full-width divided lists, 16/72 keylines.
- **Corners:** essentially square — 0 for panels/tiles/cards, 2px for buttons and dialogs; round only for FAB, avatars, radio, the "OR" chip.
- **Borders:** 1px #e0e0e0 dividers everywhere; dashed #bdbdbd for drop zones; 2–3px lime for "selected".
- **Shadows:** Material dp elevations (1dp cards/toolbar, 8dp menus, 24dp dialogs) plus a big soft shadow under the web shell. Onboarding card has a deep purple-tinted drop shadow.
- **Transparency:** 54% black scrim behind dialogs and the resize overlay; ghost stacked cards (white 18–35%) behind the onboarding card; grey scrim over photo thumbnails for legible white filenames.
- **Hover / press:** Material conventions — contained buttons lighten on hover and darken on press; outlined/text buttons get a light grey fill; icon buttons show a grey disc. No scale/bounce.
- **Motion:** Material standard easing `cubic-bezier(.4,0,.2,1)` 150–300ms; bottom sheets slide up; no decorative animation.
- **Fixed elements:** app bar on tablet; footer action bar in the web shell; bottom sheets dock to the shell bottom.

## ICONOGRAPHY
- **System icons: Google Material Icons** (filled). Seen: menu, arrow_back, play_arrow, file_download, check, close, delete, visibility, add_circle, date_range, search, more_vert, help (?), warning, info, expand_less/more, chevron_left/right, arrow_drop_down, text_fields, star, fullscreen. Loaded from the Google Fonts CDN (`tokens/fonts.css`) and rendered via the `Icon` component. Colour: brand purple on light, white on gradient, grey for secondary/destructive.
- **Ericsson pictogram library** — colourful outline pictograms (signal, thermometer, globe, drone…) used as annotation stamps in the step editor. Only a raster sample exists: `assets/icons/ericsson-icon-library-sample.png`.
- **Ericsson mark** (three slanted bars) doubles as project avatar and the icon-library tool glyph.
- File-type glyphs in media tiles use Material icons (image, music_note, picture_as_pdf, insert_drive_file, view_in_ar) — *substitution*: the originals were custom white glyphs.
- No emoji; no unicode-as-icon.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects, base)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/logo`, `assets/illustrations`, `assets/imagery`, `assets/icons`, `assets/brand`
- `components/` — React primitives (see below)
- `ui_kits/field-app/`, `ui_kits/content-studio/` — click-through recreations
- `SKILL.md` — agent-skill entry point

## Components
- **core:** Button, IconButton, Icon
- **forms:** TextField, Select, Checkbox, Radio, RadioGroup, Switch, Slider
- **navigation:** AppBar, StatusBar, WebHeader, Tabs, WizardStepper, SideDrawer
- **display:** ListItem, Card, Chip, OrChip, MasterBadge, MediaTile, EmptyState, DataTable
- **feedback:** Dialog, ProgressBar, Snackbar, Tooltip
- **editor:** AnnotationToolbar, ColorSwatches, MARK_COLORS, StyleToggle, DropZone, BottomSheet

Style-guide families not built (sticker sheet only, not used by either product): date/time pickers, on-screen keyboard, Android notifications, grid-list captions, share bottom-sheet.

### Intentional additions
- `Icon` — thin wrapper for the Material Icons ligature font.
- `StatusBar` — Android status strip reused by every tablet screen.
