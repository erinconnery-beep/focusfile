# Focus File analytics

The public homepage uses GoatCounter for a deliberately small measurement system. The downloaded Focus File, its samples, and all saved results remain tracker-free.

## The question the tracking should answer

Can a first-time visitor understand the product well enough to create a Focus File?

The primary funnel is:

1. `funnel-start-builder` — chose **Build a Focus File**.
2. `funnel-copy-interview` — copied the five-question interview.
3. `funnel-open-ai-claude`, `funnel-open-ai-chatgpt`, or `funnel-open-ai-gemini` — used one of the offered AI links. This step is optional because someone may paste into an AI they already have open.
4. `funnel-plan-submit` — returned and submitted a non-empty plan to the builder.
5. `funnel-file-created` — the browser successfully created and downloaded the Focus File.

The most useful weekly numbers are:

- Interview-copy rate: `funnel-copy-interview` ÷ homepage views.
- Return-to-builder rate: `funnel-plan-submit` ÷ `funnel-copy-interview`.
- Builder success rate: `funnel-file-created` ÷ `funnel-plan-submit`.
- Full creation rate: `funnel-file-created` ÷ homepage views.

Do not treat the AI-link rate as a required conversion step; visitors can use another AI or an already-open chat.

## Diagnostic events

- `builder-error-empty`, `builder-error-prompt`, `builder-error-json`, `builder-error-no-task`, `builder-error-template`, `builder-error-load`
- `preview-work`, `preview-checkin`, `preview-result`
- `download-sample-writing`, `download-sample-jobsearch`, `download-sample-study`
- `open-note-interview`, `open-note-design`, `open-note-privacy`, `open-note-feedback`
- `send-feedback`
- `share-site`

These events answer concrete design questions: where the builder fails, whether visitors inspect the product states, which example clarifies the tool, and whether people seek explanation or privacy details.

## What is never sent

Event names and titles are fixed in the site code. They never include:

- anything pasted into the builder;
- task names or generated filenames;
- interview answers or Focus File plans;
- check-ins, exit results, learning reports, or logs;
- anything from a downloaded Focus File.

## GoatCounter activation

`index.html` is prewired to:

`https://focusfile.goatcounter.com/count`

Create the GoatCounter site with the site code **focusfile**. Once that site exists and the updated `index.html` is deployed, pageviews and events will begin appearing automatically. If GoatCounter requires a different site code, replace `focusfile` in the `data-goatcounter` URL in `index.html`.

After deployment, verify one homepage view, one `funnel-copy-interview` event, and one successful `funnel-file-created` event. Ad blockers may intentionally prevent some visits from being counted.

## Review rhythm

Review weekly only after there is enough traffic to avoid reacting to one or two people. Change one thing at a time, then compare at least another full week. The builder-error mix should drive fixes before headline or visual experiments.
