# TheNextBlock Ranch Explore deployment

Production URL: `https://www.thenextblock.com/ranchexplore/`

The live site is served from Amazon S3 through CloudFront. This package is
organized for that setup.

## 1. Upload the website

Upload the enclosed `ranchexplore` folder to the root of the S3 bucket that
serves `www.thenextblock.com`.

The resulting S3 object key must be:

`ranchexplore/index.html`

Set the object's `Content-Type` metadata to `text/html; charset=utf-8`.

## 2. Enable the clean URL

The site's current CloudFront configuration does not automatically resolve
subdirectory index files. Create a CloudFront Function using the enclosed
`cloudfront-function.js`, publish it, and associate it with the distribution's
default behavior on the **Viewer request** event.

The function performs two operations:

- `/ranchexplore` redirects to `/ranchexplore/`
- `/ranchexplore/` serves `/ranchexplore/index.html`

If a Viewer Request function already exists, merge these two conditions into
that function instead of replacing it.

## 3. Refresh CloudFront

Create an invalidation for:

- `/ranchexplore`
- `/ranchexplore/`
- `/ranchexplore/index.html`

Then verify `https://www.thenextblock.com/ranchexplore/` in a private browser
window.

## Notes

- Photography, fonts, and video are loaded from public remote URLs.
- No build process or external JavaScript packages are required.
- The site is one self-contained HTML file.
- The contact button opens the visitor's email application.
