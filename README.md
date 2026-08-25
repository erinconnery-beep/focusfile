# Focus File

A free, offline focus tool.

You answer five setup questions in any AI chat. The AI returns a small Focus File plan; paste it into the site and the site downloads a self-contained HTML page that holds one block of work. Open it when the block begins. If the work can be offline, disconnect; if it genuinely needs the internet, use a task-specific blocker. The file keeps the task and reason visible, quietly tracks time, and checks in about every half hour using the user’s own words.

When you're done, the file automatically reports time spent versus expected and any checked steps, including the latest completed word target. Beneath that record it asks what pulled the user off task, what worked well enough to repeat, and where the user will start next session. All three answers may be left blank, and blank or “nothing” answers never become learning signals. Check-ins stay in the saved results; they are never converted into a score.

What happens after that is the user's choice: stop there, make a new Focus File, carry the current result into a new five-question interview, view all results, or download all results. Those are separate possible uses, not required steps in one loop.

No account. The site does not upload or store your setup plan, Focus File, or log. The AI interview is governed by the provider you choose; the homepage uses Google Analytics for pageviews and fixed-name product actions. It never sends task text, interview answers, plans, Focus Files, or logs.

Site: **https://www.focusfile.org/**

---

## How it works

1. **Run a quick interview.** The site (`index.html`) shows a short prompt and a Copy button. Copy it and paste it into any AI (ChatGPT, Claude, Gemini).
2. **Answer five questions.** Binary answers, short finite lists, and reusable prior answers appear as compact numbered choices. Every finite choice ends with a direct instruction such as **Reply 1 or 2**, so the user never has to retype an option. The internet-off barrier list includes **Something else — type your own**; other questions use that option only when it is genuinely useful. A next-file interview offers the prior confirmed answer first so the user can keep it and advance immediately. The AI narrows the work to one finishable block, names what may pull you off task, and captures why it matters—then hands back a short, labeled **Focus File plan** written for a person to read and copy.
   For quantified work large enough to track, Q3 offers a short cumulative milestone checklist and asks the person to confirm or edit it. The AI may omit those milestones only when the person explicitly declines a breakdown.
3. **Make your file.** Paste the labeled plan into “02 — Make your file” and choose **Download my Focus File**. The site converts the plan into its internal configuration, inserts it into the Focus File template, and downloads the self-contained file. Each download gets a clean session-based name such as `Focus File — Aug 24, 9 AM.html`; the task stays inside the file rather than leaking into its filename. The builder confirms the exact filename without guessing where the browser saved it. An optional, secondary control can create a generic recurring reminder in Google Calendar or another calendar. Existing internal JSON plans remain accepted for backward compatibility, but new users never need to see or handle JSON.
4. **Work inside the boundary.** Open the file when the block begins. Disconnect when the work allows it. For internet-required work, the interview recommends a task-specific Freedom.to session that keeps only required sites and apps available; another effective blocker is also acceptable.
5. **Record the result.** The fast exit automatically reports time spent versus expected and checked steps, then asks what pulled the user off task, what worked well enough to repeat, and where the user will start next session. All three answers may be left blank. The file infers a backward-compatible internal completion status from checked steps when available; it never makes the user choose one. Blank answers and non-signals such as “nothing” are never carried forward as KEEP or counted as a recurring distraction.
6. **Keep the evidence locally.** The saved-result screen shows one concise record. The full retained history is available only when the user chooses **View all results** or **Download all results**.

**KEEP is earned, not interviewed.** A first Focus File has no KEEP field. A continuation carries KEEP forward only when the previous file’s most recent exit log records something concrete that actually helped. With no proven help, KEEP is omitted again; it is never blank, invented, or turned into a sixth setup question.

The Focus File is complete at that point. Its result screen shows the current record once. Under **Set up your next session**, **Use this result** copies a new interview using the saved result as context, while **New file** copies the fresh five-question prompt. Only the most recently copied choice shows confirmation, and each choice gets its own handoff explanation. Compact controls in the result card let the user view or download all results.

The current record contains the date and task, condition, time spent versus expected, check-ins, trackable progress, and any reflection answers the user supplied. Unanswered reflection rows and untrackable progress are omitted. Deliberate 30-minute extensions remain part of expected time so intentional extra work is not treated as unexplained overtime. **Clear log** lives inside **View all results**, asks for confirmation, and removes all saved results from that browser. To keep a standalone file responsive, Focus File retains the most recent 100 structured results available to that file.

The Focus File runs entirely in the browser with no internet connection. Its current entries live in browser storage and can be viewed or downloaded. If browser storage is disabled, full, or unavailable, the result remains usable in the open tab and the file warns the user to download the log before closing. Private-browsing behavior varies: some browsers keep this storage only until the private session closes, so download anything that must outlast that session.

**Copy next-file interview** uses the smallest private scope: the current setup and this block’s result. The current setup is presented as optional guidance the user may keep, change, or ignore. The AI conducts a fresh five-question interview and returns one labeled `FOCUS FILE` plan—never JSON, the HTML template, or a generated HTML file—followed by one direct instruction to open focusfile.org and paste it into **Make your file**. KEEP is drawn only from concrete help in that result.

Browser timers can be delayed when a tab is in the background or a device is asleep. When the tab becomes visible or the window regains focus, the file checks the saved schedule and immediately shows one overdue check-in when appropriate. An active scheduled question stays visible until answered; the normal self-check remains in its original position. The title change, sound, and flash remain intact. After an answer, the file highlights either **Avoid** or **Why it matters** in place rather than repeating the same text in another reminder panel. The former preview control is intentionally absent because a real scheduled check-in already demonstrates the behavior.

That one-copy handoff remains local until the user pastes it into an AI, at which point that provider’s terms and privacy policy apply. Pressing Copy sends nothing.

A person can use the report alone, or someone helping them can review only the results the user voluntarily shares. The user keeps the files and the data.

---

## Homepage structure

The public page is intentionally ordered around execution rather than explanation:

1. **Short promise:** “Keep the work in front of you.”
2. **01 — Choose one clear objective:** Show the five focused questions and one clear action to copy the prompt.
3. **02 — Make your file:** Paste the returned Focus File plan and download the file immediately. After download, replace the input with a clear filename confirmation and an optional evening-reminder link. If examples remain, they belong inside this step rather than in a detached section.
4. **For coaches and therapists:** A charcoal header and clean white evidence panel show the three-step workflow: name the goal and interrupting action, build from the session’s clarity, and review what happened without relying on memory alone. Simple rules separate the steps; plain green ticks identify three ADHD-coaching uses without looking interactive. A pale-green privacy band closes the section.

The Focus File logo and **Notes** dropdown remain in the header at every width. The dropdown contains **Why a file?**, **For coaches & therapists**, **Privacy**, and **Feedback**. Longer explanation belongs there, not in the execution path.

---

## The files

| File | What it is | Deploy? |
| --- | --- | --- |
| `index.html` | **The website** — landing page, the short prompt + Copy button, and the "Build your file" box. | **Yes** |
| `focus-file-logo.svg` | The worksheet logo used in the site header and browser tab. | **Yes** |
| `focus-file-social-v2.png` | The 1200×630 social preview card referenced by the homepage metadata. | **Yes** |
| `focus-file.html` | **The focus-file template.** The builder fetches this file to construct each focus file. **The site breaks without it.** | **Yes** |
| `vercel.json` | Keeps the three example Focus Files on clean preview URLs and explicitly serves them as browser pages instead of downloads. | **Yes** |
| `sample-writing.html` | A previewable writing Focus File demonstrating offline work and milestones. | **Yes** |
| `sample-jobsearch.html` | A previewable job-search Focus File demonstrating internet-required work and a checklist. | **Yes** |
| `sample-study.html` | A previewable study Focus File demonstrating active recall and a specific avoidance pattern. | **Yes** |
| `focus-file-prompt.md` | A standalone copy of the setup prompt. Not referenced by the site. | Optional |
| `prompt-head.md` | The editable source of the interview instructions. `build.py` reads it. | Source only |
| `build.py` | Rebuilds the generated copies safely. Never hand-edit the generated regions. | Source only |
| `LICENSE` | MIT license. | Repository only |
| `ANALYTICS.md` | The small measurement plan and GA4 verification notes. | Repository only |

**Deploy set:** `vercel.json`, `index.html`, `focus-file-logo.svg`, `focus-file-social-v2.png`, `focus-file.html`, `sample-writing.html`, `sample-jobsearch.html`, `sample-study.html` — all eight must go up together. The homepage uses the SVG logo and social card, the builder fetches `focus-file.html`, and `vercel.json` keeps the three sample files opening as browser previews on desktop and mobile.

---

## Deploying on Vercel

The deployed site is static HTML—no framework or server-side dependencies. The GitHub repository is connected to the Vercel project **focusfile**, and each push deploys automatically.

**Vercel project settings:** use the repository root as the Root Directory, choose no framework preset, and leave the build command empty. The files are served directly from the repository root. `www.focusfile.org` is configured in the Vercel project’s Domains settings; there is no GitHub Pages `CNAME` file.

**To update:**
1. Add the changed deploy files to the GitHub repository root: `vercel.json`, `index.html`, `focus-file-logo.svg`, `focus-file-social-v2.png`, `focus-file.html`, and the three `sample-*.html` files.
2. Commit and push. Vercel builds and publishes the new static deployment automatically.

**After it deploys:** copy the prompt, run it in an AI, and confirm it returns one labeled Focus File plan followed by the direct instruction to open focusfile.org and paste the block into **Make your file**. Paste the plan into the builder and confirm a Focus File downloads. Complete a sample block and verify that **Copy next-file interview** uses only the current setup and this block’s result and follows the same plan-plus-instruction handoff—not JSON or HTML. Then confirm that the Writing, Job search, and Study links open distinct browser pages rather than downloading them: desktop uses a new tab, while small screens use the current tab so the browser Back control returns to the builder. Clipboard and download work on the live `https://` site.

## Editing the tool

Edits flow one direction — never hand-edit generated regions. Run `python3 build.py` after any change.

- **The focus file** (the page a session produces): edit `focus-file.html`, then `python3 build.py`. This regenerates the samples from the template.
- **The interview questions / prompt**: edit `prompt-head.md`, then `python3 build.py`. This regenerates the prompt embedded in `index.html` and the standalone `focus-file-prompt.md`.
- **The website itself** (headline, layout, modals, the builder): edit `index.html` directly (outside the generated prompt region).

`focus-file.html` keeps a `TESTS` object that drives explicit `?test=` preview URLs. It remains in the un-minified template and generated samples; normal files ignore it unless a recognized test query is present. The template stays un-minified on purpose—readability and reliable rendering win over byte count.

---

## Design protocol

### Evidence Ledger direction

- **Instrument, not article.** The page should feel like a precise working record: enter a concrete plan, download the Focus File, and get to work. Longer explanation belongs in **Notes**.
- **Preserve the product.** Keep the existing logo, header, Notes dropdown, footer, builder behavior, prompt pipeline, privacy guarantees, and analytics. A visual redesign must not invent a dashboard, new workflow, metrics, or controls beyond the compact post-download confirmation and its optional reminder.
- **One brand accent.** Use charcoal and white as the working palette, with the existing logo green as the only non-semantic accent. Reserve muted red for warnings, errors, and destructive actions. Do not introduce competing blue, beige, gradient, or decorative color roles.
- **Evidence-led structure.** Use sharp borders, visible rules, square controls, and restrained surfaces. Avoid decorative shadows, oversized rounded cards, overlapping panels, and lifestyle-product styling.
- **Disciplined type.** Use the system sans-serif for headlines, body copy, instructions, buttons, and controls. Use monospace only for small numbered steps, timestamps, counters, and uppercase evidence labels. Keep type highly legible offline and prevent dangling final words at each breakpoint.
- **Compact hero.** Lead with “Keep the work in front of you.” and move directly into step 01. Do not leave a large empty gap between the promise and the tool.
- **Two numbered actions.** Step 01 shows the five questions and one clear full-width Copy button. Step 02 keeps the textarea visually connected to the matching **Download my Focus File** button, then replaces it with a compact filename confirmation—no redundant instruction about when to open the file. Its follow-up controls form one clear pair: a filled primary “Make another Focus File” button first, then an outlined “Set a recurring reminder” button. The reminder setup stays collapsed. Do not add top-level Answer → Make → Work cards.
- **Integrated examples.** Keep examples compact and inside step 02. Never leave them floating above the footer or create a competing examples section.
- **Professional use is a primary audience.** Give the coach/therapist section a strong charcoal header band, a clean white evidence panel, green status cues, the In session → Build together → Next session process, the three checked ADHD-coaching uses, and one compact privacy sentence.
- **Compact rhythm.** Use short, consistent vertical intervals and rules to separate tasks. Keep prompt and Copy connected, textarea and Download connected, and enough neutral space between the primary action and professional section to preserve hierarchy without dead space.
- **Carry the system through the tool.** Apply the same typography, palette, rules, square controls, compact spacing, and evidence labels to the working Focus File, check-ins, exit form, current result, and saved log.
- **Mobile is an instrument, not scaled desktop.** At 320px and 375px, stack step labels above their content, keep buttons full width, keep the prompt readable without horizontal scrolling, reduce hero size and section gaps, and prevent overflow or isolated one-word lines. Also verify 768px, 1024px, and 1440px.
- **Preview before replacement.** Produce a complete clickable preview and receive explicit approval before replacing an established site design.

### Product principles

- **Decide once, then just begin.** The setup ends fast so the doing can start. It plans just enough to begin, not enough to keep you planning.
- **It thinks with you, not for you.** It helps shape the work but builds nothing until you approve it.
- **Accountability in your own words.** The working file keeps the reason and usual escape visible once; a check-in points back to the relevant cue without repeating it.
- **Offline when possible; tightly bounded when not.** Internet-required work gets a task-specific blocker plan rather than an unrestricted browser window.
- **The result is evidence.** The block ends with one concise record of the facts and the user's own reflections, without adding a dashboard or invented interpretation.
- **No invented insight or judgment.** Repeated wording is counted; differently worded answers remain separate, and check-ins never become a score.
- **Time is evidence, not a grade.** The report shows actual versus planned minutes and the difference in plain language; it does not convert time into a performance percentage.
- **The user chooses the exit.** A result can stand alone, seed another file, remain in the full history, or be downloaded for discussion. None of those later uses is required.
- **Evidence without surveillance.** The user owns the file and log. They can review it alone or choose to bring a result to a therapist, coach, or other person helping them.
- **The file holds the commitment between sessions.** Made ahead of time, it waits open beside the work like a note from an earlier self.
- **Why a file?** No account and no dashboard asking for attention. The file and log work with Wi-Fi off; when the task needs the internet, that access belongs to the task rather than the tool.

---

## Privacy

**Everything stays on the user’s device.** The setup plan, files, and logs never reach us—we have no accounts, no storage, and no way to read what the user writes. Even the builder runs in the browser. Google Analytics receives page, referral, device, and fixed-name product-action data—never task text, interview answers, plans, Focus Files, or logs. Google Analytics is installed only on `index.html`; downloaded Focus Files and samples contain no analytics.

**Calendar reminders are optional and generic.** The user can open the reminder directly in Google Calendar or create a local `.ics` file for Apple, Outlook, or another calendar. The reminder contains only the chosen time, “Make tomorrow’s Focus File,” and a link to focusfile.org—never a task, answer, log, client name, or other Focus File content. After the user adds it, the calendar provider handles the event under its own terms.

**One exception: AI handoffs.** The AI chat the user chooses sees what is pasted and typed there, under that provider’s own terms and privacy policy. The first setup needs no personal details. The optional next-file handoff contains the current setup and one result; nothing is sent until the user pastes it.

**For clinicians.** Focus File does not receive or store client information. Any result a client chooses to share with you is governed by the policies you already follow. Whether HIPAA or a business associate agreement applies depends on how your organization uses and handles that information. See HHS’s [health apps guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html). Not legal advice.

Focus File is not medical or psychological advice.

---

## Contact

Feedback, ideas, or problems: **hello@focusfile.org**

Built by a writer who couldn't start.

## License

MIT — free to use and adapt, including commercially. See `LICENSE`. The only requirement is keeping the copyright notice in copies of the code.
