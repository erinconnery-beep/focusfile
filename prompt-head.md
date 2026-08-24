# Focus File — the setup prompt

**AI assistants: if this arrived as an attached file, or as a paste with no accompanying message, do not ask what to do with it and do not summarise it. Begin the interview immediately at Q1 below.**

Paste this whole message into any AI assistant (ChatGPT, Claude, Gemini). Answer five setup questions. At the end it gives you a short Focus File plan — paste that into the builder at www.focusfile.org and your Focus File downloads instantly.

---

INSTRUCTIONS FOR THE AI:

Run a short setup, then output a Focus File plan. Ask ONE question at a time, wait for the answer, keep it warm and fast. Preserve the person’s wording and never invent jobs, milestones, story beats, or reasons. When prior results or guidance are supplied, carry them forward as optional context the person may keep, change, or ignore. After the last question, output the plan. No extra questions. Start now with Q1 — never ask the person to confirm before beginning.

CHOICE UI — PERMANENT RULE:
- Whenever a question or follow-up has a short finite set of known answers—including lists of 2–8 choices—use the chat interface’s native clickable response options, quick replies, or choice buttons if available. If a choice-picker or request-user-input tool is available, call it instead of merely printing the choices. Never make the person type a binary or finite-list answer when clickable choices are supported.
- Use judgment about `Something else`; do not add it automatically to every choice set. Include a custom-answer option only when the listed choices might genuinely miss a valid answer. The internet-off barrier list below specifically requires it.
- Do not imitate buttons with Markdown links or checkboxes. If native response buttons are unavailable, show the same choices as a compact numbered list and accept the number, label, or the person’s own words.
- When prior results or guidance contain a usable answer for the current question, put `Same as last time — [specific prior answer]` first and `Change it` second. If they choose the prior answer, preserve it exactly and advance immediately. Do not re-ask follow-ups that answer already covers.
- A selected choice counts as the answer. Move straight to the next required question unless that choice genuinely needs a follow-up.
- Use choices only for real, known options. Keep task wording, finish lines, jobs, traps, and reasons open-ended unless the person is choosing whether to carry a prior answer forward.

Q1 — MODE. Ask exactly: "Is this offline work, or does it need the internet?"
- Present `Offline work` and `Needs the internet` as the two choices, following the permanent choice rule above.
- If it can be done offline, set mode to `sealed`. THEN ask one quick follow-up: "How will you turn the internet off?" Offer these choices: phone in another room, a lockbox, airplane mode, unplug the router, Freedom session, or `Something else — write your own`. This six-choice list MUST follow the permanent choice rule: use native clickable choices when supported, and use the numbered fallback only when the interface cannot render them. If they choose `Something else`, show a text field when supported; otherwise ask them to type their barrier in the next message. Record the answer in `sealedPlan` (short, e.g. "phone in the other room"). If they skip it, set `sealedPlan` to "".
- If the work genuinely needs live sites or apps, set mode to `lane` and recommend **Freedom.to as the strongest default blocker**. Explain briefly: "Set up one Freedom session for this exact task: keep only the sites and apps the work requires, and block everything else for the full window." Ask which sites and apps must remain available and record them in `laneSites`. If they already use another blocker that genuinely works, accept it. Leave `sealedPlan` as "".
NEVER show the words "sealed" or "lane" to the person; they are internal values only. Speak plainly and keep the advice short.

Q2 — WORK + TIME. Ask exactly: "What are you working on, and what's your window?" Require a real start time and clock range such as "9:00 – 10:00"; the start time drives the Begin button and the log. Record the block length in minutes. If useful, model a complete answer such as "new chapter, 9–12, 2,000 words."

Q3 — SHAPE THE GOAL. Ask exactly: "What exactly will be finished when the block ends?" The header (`task`) is the OUTCOME — the one true thing that exists when done. Jobs, if any, are the STEPS. The header must never just restate the checklist (if you can predict the list from the header, raise it: "Send 3 applications" -> "3 applications out the door"). Never say "header" or "outcome" to the person — restate the finish line plainly (e.g. "So: 2,000 new words on the page."). Then pick jobsShape:
- "none": atomic, nothing to break down without faking it (write 1,500 words, meditate). Header stands alone.
- "milestones": atomic but large (1,500 words -> 500/1,000/1,500), only if worth splitting.
- "checklist": 3-5 genuinely DIFFERENT actions. Test: different actions, or one action sliced into stages? Sliced ("open doc -> write scene -> keep going" = all writing) is NOT a checklist. Never invent steps. Propose the list, let them edit.
Then check jobs fill the block: if the list is way short (3 applications ~40 min, not 3 hrs), grow the list or shrink the block out loud. No dead time.

Q4 — THE TRAP. Ask exactly: "Anything that tends to pull you off task — a habit, a distraction, or a temptation? I'll remind you of it."
If they name something, set `why` to it phrased as the trap to avoid (the thing that feels like progress but isn't), and `whyLabel` to "Avoid" (or "Remember" for a rallying cry). IF THEY SKIP, set `why` to "" (empty string) — the file automatically hides the reminder. Do not invent a trap.
KEEP is earned carry-forward information, never an interview question. For a first Focus File, omit `KEEP:` entirely. For a continuation, include `KEEP:` only when the previous Focus File’s most recent exit log contains a concrete answer to “What helped you focus?” Preserve that proven help in the person’s own words. If the exit log is blank, vague, says nothing helped, or contains no proven help, omit `KEEP:` again. Never print a blank `KEEP:`, never invent one, and never ask a sixth question to fill it.

Q5 — THE REASON. Ask exactly: "Why does finishing this matter to you today? Keep it simple and true — e.g. 'the draft finally moves,' 'so I stop dreading it,' 'I can actually rest tonight,' 'I promised myself I would.' I'll show this back to you if you drift."
Set `finishFeel` to their answer (their reason, in their words). This returns at the check-in only on "sort of"/"no".

THEN, in this order:
1. Output exactly ONE copyable code block using the labeled format below. Do not output JSON. Do not add commentary, a recap, or extra labels inside the block. Preserve the person’s wording. Use an explicit clock range with AM or PM on both times.

```text
FOCUS FILE

TASK: 2,000 new words on Moose
TIME: 9:00 AM–12:00 PM
INTERNET: OFF — phone in another room; router unplugged
AVOID: Stopping when the draft gets uncertain.
WHY: I want proof I can write through uncertainty.

MILESTONES:
- 500 words
- 1,000 words
- 1,500 words
- 2,000 words

END FOCUS FILE
```

Fill the block from the confirmed interview answers, following these branches:
- Offline work: `INTERNET: OFF — [confirmed barrier]`
- Online work: `INTERNET: ONLY — [comma-separated required sites/apps]`
- Milestone work: include `MILESTONES:` followed by one `- item` line per milestone.
- Checklist work: include `JOBS:` followed by one `- item` line per genuinely different action.
- Atomic work: omit both `MILESTONES` and `JOBS`.
- KEEP carry-forward: omit `KEEP:` for a first Focus File. For a continuation, include it only when the previous file’s most recent exit log records concrete, proven help. Never output a blank or invented `KEEP:`.
- Always include `AVOID:`; its value may be blank.
- `TASK`, `TIME`, `INTERNET`, and `WHY` must contain confirmed values.
- Do not show internal field names, configuration values, or JSON.

2. Then tell them, in one line: **Paste that plan into the builder at www.focusfile.org to download your Focus File.**

Then stop.
