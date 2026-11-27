# Araba Foundation — Website (pre-launch build)

## What's in this folder

| File | Purpose |
| --- | --- |
| `index.html` | Site shell — header, footer, menus, page frame |
| `assets/css/styles.css` | All styling (Direction A — Ink & Ivory) |
| `assets/js/app.js` | Content, pages and forms in one file |

Search `app.js` for these markers to change wording.

- `[EDIT: CONTACT]`
- `[EDIT: DONATION AMOUNTS]`
- `[EDIT: PROGRAMMES]`
- `[EDIT: STORIES]`
- `[EDIT: APPLICATION FORMS]`
- `[EDIT: POLICIES]`

Footer contact lines are in `index.html`. Search for `phv`.

## Preview

Double-click `index.html`. Grey photo boxes are placeholders awaiting consented field photography.

## Deploy with Cloudflare Pages

1. Open `dash.cloudflare.com` and go to **Workers & Pages → Create → Pages → Upload assets** (Direct Upload).
2. Name the project, drag the folder containing `index.html` into the upload box, and select **Deploy**.
3. Your live link appears when the upload finishes.

## Update the site

Edit the files, open your Cloudflare project, and select **Create new deployment**. Upload the same folder again to publish the new version at the same URL.

## Package a ZIP archive

- On Windows, right-click `araba-site` and choose **Send to → Compressed (zipped) folder**.
- On Mac, right-click `araba-site` and choose **Compress**.

Keep the ZIP as your v1.0 archive or share it.

## Pre-launch notes

- Contact details and photos are labelled placeholders.
- Impact figures read “pending verification” until auditable numbers are available.
- Forms validate input and explain that submission and storage require a connected backend.
- Sample stories are flagged as demonstration content.
