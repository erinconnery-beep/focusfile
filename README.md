# Focus File

A free, offline focus tool.

You answer five quick questions in any AI chat. The AI returns a small Focus File plan; paste it into the site and the site downloads a self-contained HTML page that holds one block of work. Open it when the block begins. If the work can be offline, disconnect; if it genuinely needs the internet, use a task-specific blocker. The file keeps the task and reason visible, quietly tracks time, and checks in about every half hour using the user’s own words.

When you're done, a short exit records what finished, what helped, what pulled you away, and where you stopped. The file then turns its saved results into a local **What you're learning** report: repeated helpful cues, repeated distractions, the conditions used, and a concrete carry-forward for the next block. Check-ins stay in the saved results; they are never converted into a score.

What happens after that is the user's choice: stop there, make another Focus File, review the learning report and its underlying results, or copy a result to discuss with a therapist, coach, or anyone else helping them. Those are separate possible uses, not required steps in one loop.

No account. The site does not upload or store your setup plan, Focus File, or log. The AI interview is governed by the provider you choose; the homepage uses Google Analytics for pageviews and fixed-name product actions. It never sends task text, interview answers, plans, Focus Files, or logs.

Site: **https://www.focusfile.org/**

---

## How it works

1. **Run a quick interview.** The site (`index.html`) shows a short prompt and a Copy button. Copy it and paste it into any AI (Claude, ChatGPT, Gemini).
2. **Answer five questions.** The AI narrows the work to one finishable block, names what may pull you off task, and captures why it matters—then hands back a small **Focus File plan**. It is JSON under the hood, but the user does not need to understand or edit it.
3. **Build your file.** Paste the returned plan into the builder on the site ("2 — Build your file"). The site inserts it into the Focus File template and the file **downloads instantly**.
4. **Work inside the boundary.** Open the file when the block begins. Disconnect when the work allows it. For internet-required work, the interview recommends a task-specific Freedom.to session that keeps only required sites and apps available; another effective blocker is also acceptable.
5. **Record the result.** At the end, save what finished, what helped, what pulled you off, and where you stopped.
6. **Learn locally.** The file compares the saved results it can access and builds the learning report in the browser.

The Focus File is complete at that point. Its result screen offers optional exits: close the file, copy one next-file interview, inspect or copy the full log, copy this block’s result, download the log, or start a fresh reporting period.

The learning report defaults to **Today** and shows the actual date behind its block count. The user can switch to the last 7 days, last 14 days, or all history. It also compares actual minutes with planned minutes and states the difference plainly—shorter, longer, or matched—without turning time into a percentage or score. **Start report from now…** begins a new report window from that moment without erasing anything; every earlier result remains in the full log. A separate, confirmed **Delete all saved results** action clears the history this file uses in that browser. Downloaded Focus File copies may still contain embedded history and must be deleted separately if the user wants those copies gone. To keep a standalone file responsive, Focus File retains the most recent 100 structured results available to that file; copying a result forward keeps the same most-recent-100 limit.

The Focus File runs entirely in the browser with no internet connection. Its current entries live in browser storage and can be copied or downloaded. If browser storage is disabled, full, or unavailable, the result remains usable in the open tab and the file warns the user to copy or download the log before closing. Private-browsing behavior varies: some browsers keep this storage only until the private session closes, so copy or download anything that must outlast that session. **Copy next-file interview** creates one clipboard payload containing today’s results, today’s learning summary, the complete saved history, the five interview questions, and the current Focus File template. The user pastes it once into an AI. The AI conducts the interview and returns the complete next `.html` Focus File with the history embedded. There is no return box, separate settings step, learning-record download, or homepage import.

Browser timers can be delayed when a tab is in the background or a device is asleep. A scheduled check-in may therefore arrive later than its nominal window; the title change and on-card state make it visible once the browser runs the timer, but the file cannot override browser throttling.

That one-copy handoff is intentionally explicit about privacy: the combined results and history remain local until the user pastes the payload into an AI, at which point that provider’s terms and privacy policy apply.

A person can use the report alone, or someone helping them can review only the results the user voluntarily shares. The user keeps the files and the data.

---

## Homepage structure

The public page is intentionally ordered around trying the product before reading the larger idea:

1. **Product promise and preview:** Work → Check-in → Learn. On desktop, the equal-size cards form a shallow stack with Work in front and Learn furthest back; on mobile, the same states become tabs.
2. **Builder:** Copy the interview prompt, then paste the returned Focus File plan to download a file.
3. **Optional result uses:** Create another file, review patterns, or copy/share a result.
4. **Professional use:** “For coaches and therapists: a tool for clients between sessions.” It is not part of the required product flow.
5. **Downloadable examples:** Writing, Job search, and Study.

The header links are **The interview**, **Why a file?**, **Privacy**, and **Feedback**. “The interview” explains the five questions; “Why a file?” explains the offline, accountless format without repeating the workflow.

---

## The files

| File | What it is | Deploy? |
| --- | --- | --- |
| `index.html` | **The website** — landing page, the short prompt + Copy button, and the "Build your file" box. | **Yes** |
| `focus-file-logo.svg` | The worksheet logo used in the site header and browser tab. | **Yes** |
| `focus-file-social.png` | The 1200×630 social preview card referenced by the homepage metadata. | **Yes** |
| `focus-file.html` | **The focus-file template.** The builder fetches this file to construct each focus file. **The site breaks without it.** | **Yes** |
| `sample-writing.html` | A downloadable writing Focus File demonstrating offline work and milestones. | **Yes** |
| `sample-jobsearch.html` | A downloadable job-search Focus File demonstrating internet-required work and a checklist. | **Yes** |
| `sample-study.html` | A downloadable study Focus File demonstrating active recall and a specific avoidance pattern. | **Yes** |
| `focus-file-prompt.md` | A standalone copy of the setup prompt. Not referenced by the site. | Optional |
| `prompt-head.md` | The editable source of the interview instructions. `build.py` reads it. | Source only |
| `build.py` | Rebuilds the generated copies safely. Never hand-edit the generated regions. | Source only |
| `LICENSE` | MIT license. | Repository only |
| `ANALYTICS.md` | The small measurement plan and GA4 verification notes. | Repository only |

**Deploy set:** `index.html`, `focus-file-logo.svg`, `focus-file-social.png`, `focus-file.html`, `sample-writing.html`, `sample-jobsearch.html`, `sample-study.html` — all seven must go up together. The homepage uses the SVG logo and social card, the builder fetches `focus-file.html`, and the site's sample links point to the three `sample-*.html` files.

---

## Deploying on Vercel

The deployed site is static HTML—no framework or server-side dependencies. The GitHub repository is connected to the Vercel project **focusfile**, and each push deploys automatically.

**Vercel project settings:** use the repository root as the Root Directory, choose no framework preset, and leave the build command empty. The files are served directly from the repository root. `www.focusfile.org` is configured in the Vercel project’s Domains settings; there is no GitHub Pages `CNAME` file.

**To update:**
1. Add the changed deploy files to the GitHub repository root: `index.html`, `focus-file-logo.svg`, `focus-file-social.png`, `focus-file.html`, and the three `sample-*.html` files.
2. Commit and push. Vercel builds and publishes the new static deployment automatically.

**After it deploys:** copy the prompt, run it in an AI, paste the returned Focus File plan into the builder, and confirm a Focus File downloads. Complete a sample block and verify that **Copy next-file interview** produces one payload that the AI can use to interview the user and return the complete next HTML file. Then confirm the Writing, Job search, and Study example links each download a distinct file. Clipboard and download work on the live `https://` site.

## Editing the tool

Edits flow one direction — never hand-edit generated regions. Run `python3 build.py` after any change.

- **The focus file** (the page a session produces): edit `focus-file.html`, then `python3 build.py`. This regenerates the samples from the template.
- **The interview questions / prompt**: edit `prompt-head.md`, then `python3 build.py`. This regenerates the prompt embedded in `index.html` and the standalone `focus-file-prompt.md`.
- **The website itself** (headline, layout, modals, the builder): edit `index.html` directly (outside the generated prompt region).

`focus-file.html` keeps a `TESTS` object that drives explicit `?test=` preview URLs. It remains in the un-minified template and generated samples; normal files ignore it unless a recognized test query is present. The template stays un-minified on purpose—readability and reliable rendering win over byte count.

---

## Design principles

- **Decide once, then just begin.** The setup ends fast so the doing can start. It plans just enough to begin, not enough to keep you planning.
- **It thinks with you, not for you.** It helps shape the work but builds nothing until you approve it.
- **Accountability in your own words.** The knock replays what *you* said: your task, your reason, your usual escape.
- **Offline when possible; tightly bounded when not.** Internet-required work gets a task-specific blocker plan rather than an unrestricted browser window.
- **The result is evidence; the report makes it useful.** The block ends with an accurate record, then the local report compares the evidence it actually has. It labels one block as a signal rather than pretending it is already a pattern.
- **A count needs a timeframe.** The report names its date span and can show today, 7 days, 14 days, all history, or a new report window the user starts deliberately.
- **No invented insight or judgment.** Repeated wording is counted; differently worded answers remain separate. Conditions are described, not graded, and check-ins never become a score.
- **Time is evidence, not a grade.** The report shows actual versus planned minutes and the difference in plain language; it does not convert time into a performance percentage.
- **The user chooses the exit.** A result can stand alone, seed another file, feed the learning report, or be copied for discussion. None of those later uses is required.
- **Evidence without surveillance.** The user owns the file and log. They can review it alone or choose to bring a result to a therapist, coach, or other person helping them.
- **The file holds the commitment between sessions.** Made ahead of time, it waits open beside the work like a note from an earlier self.
- **Why a file?** No account and no dashboard asking for attention. The file and log work with Wi-Fi off; when the task needs the internet, that access belongs to the task rather than the tool.

---

## Privacy

**Everything stays on the user’s device.** The setup plan, files, and logs never reach us—we have no accounts, no storage, and no way to read what the user writes. Even the builder runs in the browser. Google Analytics receives page, referral, device, and fixed-name product-action data—never task text, interview answers, plans, Focus Files, or logs. Google Analytics is installed only on `index.html`; downloaded Focus Files and samples contain no analytics.

**One exception: AI handoffs.** The AI chat the user chooses sees what is pasted and typed there, under that provider’s own terms and privacy policy. The first setup needs no personal details. The optional next-file handoff includes today’s results and learning plus the saved history required to carry that learning into the next file; the interface states this before the user pastes it.

**For clinicians.** Focus File does not receive or store client information. Any result a client chooses to share with you is governed by the policies you already follow. Whether HIPAA or a business associate agreement applies depends on how your organization uses and handles that information. See HHS’s [health apps guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html). Not legal advice.

Focus File is not medical or psychological advice.

---

## Contact

Feedback, ideas, or problems: **erinconnery@gmail.com**

Built by a writer who couldn't start.

## License

MIT — free to use and adapt, including commercially. See `LICENSE`. The only requirement is keeping the copyright notice in copies of the code.
