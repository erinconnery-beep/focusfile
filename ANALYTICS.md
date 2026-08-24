# Focus File analytics

The public homepage uses Google Analytics 4 for a deliberately small measurement system. The downloaded Focus File, its samples, and all saved results remain tracker-free.

## The question the tracking should answer

Can a first-time visitor understand the product well enough to create a Focus File?

The primary funnel is:

1. `funnel_copy_interview` — copied the five-question interview.
2. `funnel_open_ai_claude`, `funnel_open_ai_chatgpt`, or `funnel_open_ai_gemini` — used one of the offered AI links. This step is optional because someone may paste into an AI they already have open.
3. `funnel_plan_submit` — returned and submitted a non-empty plan to the builder.
4. `funnel_file_created` — the browser successfully created and downloaded the Focus File.

The most useful weekly numbers are:

- Interview-copy rate: `funnel_copy_interview` ÷ homepage views.
- Return-to-builder rate: `funnel_plan_submit` ÷ `funnel_copy_interview`.
- Builder success rate: `funnel_file_created` ÷ `funnel_plan_submit`.
- Full creation rate: `funnel_file_created` ÷ homepage views.

Do not treat the AI-link rate as a required conversion step; visitors can use another AI or an already-open chat.

## Diagnostic events

- `builder_error_empty`, `builder_error_prompt`, `builder_error_json`, `builder_error_shape`, `builder_error_template`, `builder_error_load`
- `download_sample_writing`, `download_sample_jobsearch`, `download_sample_study`
- `open_note_design`, `open_note_privacy`, `open_note_feedback`
- `send_feedback`
- `share_site`

These events answer concrete design questions: where the builder fails, which example clarifies the tool, and whether people seek explanation or privacy details.

## What is never sent

Event names and titles are fixed in the site code. They never include:

- anything pasted into the builder;
- task names or generated filenames;
- interview answers or Focus File plans;
- check-ins, exit results, learning reports, or logs;
- anything from a downloaded Focus File.

## GA4 configuration

`index.html` is prewired to measurement ID:

`G-LXHDBXCQ8E`

The page loads Google&rsquo;s `gtag.js`, sends the standard GA4 pageview, and emits only the fixed event names above. Google Signals and advertising-personalization signals are disabled in the page configuration. GA4 still receives the page, referral, device, and network data needed to produce its reports.

After deployment, open **Reports → Realtime** in Google Analytics and verify one homepage view, one `funnel_copy_interview` event, and one successful `funnel_file_created` event. Realtime data should appear within minutes; full standard reports can take longer. Ad blockers may intentionally prevent some visits from being counted.

## Review rhythm

Review weekly only after there is enough traffic to avoid reacting to one or two people. Change one thing at a time, then compare at least another full week. The builder error mix should drive fixes before headline or visual experiments.
