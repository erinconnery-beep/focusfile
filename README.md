# Focus File

A free, offline focus tool.

You answer a few quick questions in any AI chat, and the site hands back a single self-contained HTML page — a "focus file" — that holds one block of work. You save it, turn off the internet, and open it. It shows what you're doing, quietly tracks your time, and knocks every half hour to ask if you're still on task, replaying your own reasons back to you. When you're done, a 60-second exit log records what happened and seeds your next block.

No account. No server. Nothing leaves your browser.

Site: **thenextblock.org**

---

## How it works

1. **Run a quick interview.** The site (`index.html`) shows a short prompt and a Copy button. Copy it and paste it into any AI (Claude, ChatGPT, Gemini).
2. **Answer five questions.** The AI narrows the work to one finishable block, names what will pull you off task, and captures why it matters — then hands back a small **settings block** (a few lines of JSON), not a whole file.
3. **Build your file.** Paste that settings block into the builder on the site ("2 — Build your file"). The site injects it into the focus-file template and your file **downloads instantly** — no waiting for the AI to type out a 60 KB page.
4. **Work offline.** Save the file, turn off the internet, and open it.

At the end, the exit log closes the block and seeds the next one: "Set up the next block" copies your last session plus a short interview, so the next block picks up where this one ended.

The focus file runs entirely in the browser with no internet connection. The log lives in the browser's local storage and can be copied or downloaded to share with a coach or therapist.

---

## The files

| File | What it is | Deploy? |
| --- | --- | --- |
| `index.html` | **The website** — landing page, the short prompt + Copy button, and the "Build your file" box. | **Yes** |
| `focus-file.html` | **The focus-file template.** The builder fetches this file to construct each focus file. **The site breaks without it.** | **Yes** |
| `sample-writing.html` | A finished focus file for a writing block. Linked from the site as a live example. | **Yes** |
| `sample-jobsearch.html` | A finished focus file for a job-search block. Linked from the site as a live example. | **Yes** |
| `focus-file-prompt.md` | A standalone copy of the setup prompt. Not referenced by the site. | Optional |
| `prompt-head.md` | The editable source of the interview instructions. `build.py` reads it. | Source only |
| `build.py` | Rebuilds the generated copies safely. Never hand-edit the generated regions. | Source only |
| `LICENSE` | MIT license. | Repository only |

**Deploy set:** `index.html`, `focus-file.html`, `sample-writing.html`, `sample-jobsearch.html` — all four must go up together. The builder fetches `focus-file.html`, and the site's sample links point to the two `sample-*.html` files.

---

## Deploying

Static HTML files — no build step, no framework, no dependencies. The repo is connected to a static host that auto-deploys on every push, so **updating the site just means updating the files in GitHub**.

**To update:**
1. In the GitHub repo, drag the changed files in (`index.html`, `focus-file.html`, `sample-writing.html`, `sample-jobsearch.html`) and confirm the overwrite.
2. Commit. The site redeploys automatically within a minute.

**Keep `index.html` at the repo root.** When dragging from a folder, drag the files *from inside* it — not the folder itself — so `index.html` lands at the top level, not in a subfolder.

**After it deploys:** copy the prompt, run it in an AI, paste the settings block into the builder, and confirm a focus file downloads. Clipboard and download work on the live `https://` site.

## Editing the tool

Edits flow one direction — never hand-edit generated regions. Run `python3 build.py` after any change.

- **The focus file** (the page a session produces): edit `focus-file.html`, then `python3 build.py`. This regenerates the samples from the template.
- **The interview questions / prompt**: edit `prompt-head.md`, then `python3 build.py`. This regenerates the prompt embedded in `index.html` and the standalone `focus-file-prompt.md`.
- **The website itself** (headline, layout, modals, the builder): edit `index.html` directly (outside the generated prompt region).

`focus-file.html` keeps a `TESTS` object (dev-only, drives `?test=` preview URLs); `build.py` strips it from anything shipped. The template is kept un-minified on purpose — readability and reliable rendering win over byte count.

---

## Design principles

- **Decide once, then just begin.** The setup ends fast so the doing can start. It plans just enough to begin, not enough to keep you planning.
- **It thinks with you, not for you.** It helps shape the work but builds nothing until you approve it.
- **Accountability in your own words.** The knock replays what *you* said: your task, your reason, your usual escape.
- **The file holds the commitment between sessions.** Made ahead of time, it waits open beside the work like a note from an earlier self.
- **Why a file?** No account, no service, nothing that can be taken away. The log stays in your browser, and the whole thing works with the Wi-Fi off — which is where most focused work happens anyway.

---

## Privacy

Focus files and logs live on the user's device, not on any server. There are no accounts, no storage, and no dashboard. The site only copies a prompt; whatever the user pastes into their AI is governed by that provider's own terms and privacy policy.

Focus File is not medical or psychological advice.

---

## Contact

Feedback, ideas, or problems: **erinconnery@gmail.com**

Built by a writer who couldn't start.

## License

MIT — free to use and adapt, including commercially. See `LICENSE`. The only requirement is keeping the copyright notice in copies of the code.
