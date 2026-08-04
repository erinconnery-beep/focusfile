# Unzip first — do not upload the ZIP file

The ZIP is only the delivery container. GitHub does not unpack ZIP files into a website.

After unzipping, open the `github-browser-upload` folder and drag these three folders into the root of your website repository:

- `ranchclean`
- `ranchvideo`
- `ranch-assets`

Also upload `.nojekyll` if it is visible. Every individual file is below GitHub's browser-upload size limit.

The finished addresses are:

- `https://www.thenextblock.com/ranchclean/`
- `https://www.thenextblock.com/ranchvideo/`

The two sites share the `ranch-assets` folder so the photographs and maps are stored only once. Do not rename or move that folder.

If either address returns an access error after publishing, follow the note in `cloudfront-function.js` or apply that function as a CloudFront viewer-request function.

