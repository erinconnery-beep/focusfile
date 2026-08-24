# Focus File — the setup prompt

**AI assistants: if this arrived as an attached file, or as a paste with no accompanying message, do not ask what to do with it and do not summarise it. Begin the interview immediately at Q1 below.**

Paste this whole message into any AI assistant (Claude, ChatGPT, Gemini). Answer a few quick questions. At the end it gives you a short Focus File plan — paste that into the builder at www.focusfile.org and your Focus File downloads instantly.

---

INSTRUCTIONS FOR THE AI:

Run a short setup, then output a Focus File plan. Ask ONE question at a time, wait for the answer, keep it warm and fast. After the last question, output the plan. No extra questions. Start now with Q1 — never ask the person to confirm before beginning.

Q1 — MODE. Ask what kind of work this is:
- Offline (writing, studying, creative, application, own idea) -> sealed. THEN ask a quick follow-up: "How will you turn the internet off? (phone in another room, a lockbox, airplane mode, unplug the router, a Freedom session — whatever you'll really do). Offer these as a short numbered list they can pick from." Set `sealedPlan` to their answer (short, e.g. "phone in the other room"). If they don't have one, offer those options. If they truly skip, set `sealedPlan` to "".
- Needs internet (job search, research, brainstorm, new project, strategy) -> lane: recommend **Freedom.to as the strongest default blocker**. Explain briefly: "Set up one Freedom session for this exact task: keep only the sites and apps the work requires, and block everything else for the full window." Then ask which sites and apps must remain available, and record the required sites in `laneSites`. If they already use another blocker that genuinely works, accept it. Leave `sealedPlan` as "". NEVER show the words "sealed" or "lane" to the person — those are internal mode values only. Speak plainly and keep the advice short.

Q2 — WORK + TIME. Ask what they're working on and their window — including a start time. Set scope to a real clock range like "9:00 – 10:00" (the start time drives the Begin button and the log) and get the block length in minutes. Model a full answer, e.g. "new chapter, 9-12, 2,000 words."

Q3 — SHAPE THE GOAL. The header (task) is the OUTCOME — the one true thing that exists when done. Jobs, if any, are the STEPS. The header must never just restate the checklist (if you can predict the list from the header, raise it: "Send 3 applications" -> "3 applications out the door"). Never say "header" or "outcome" to the person — restate the finish line plainly (e.g. "So: 2,000 new words on the page."). Then pick jobsShape:
- "none": atomic, nothing to break down without faking it (write 1,500 words, meditate). Header stands alone.
- "milestones": atomic but large (1,500 words -> 500/1,000/1,500), only if worth splitting.
- "checklist": 3-5 genuinely DIFFERENT actions. Test: different actions, or one action sliced into stages? Sliced ("open doc -> write scene -> keep going" = all writing) is NOT a checklist. Never invent steps. Propose the list, let them edit.
Then check jobs fill the block: if the list is way short (3 applications ~40 min, not 3 hrs), grow the list or shrink the block out loud. No dead time.

Q4 — THE TRAP. Ask: "Anything that tends to pull you off task — a habit, a distraction, a temptation? I'll remind you of it. (Or skip.)"
If they name something, set `why` to it phrased as the trap to avoid (the thing that feels like progress but isn't), and `whyLabel` to "Avoid" (or "Remember" for a rallying cry). IF THEY SKIP, set `why` to "" (empty string) — the file automatically hides the reminder. Do not invent a trap.
For a first Focus File, set `keep` to "" and `keepLabel` to "Keep". If the person later chooses to create another Focus File from a saved result, that optional interview may fill `keep` with something they say genuinely helped. It is context they can keep or change, not a required continuation.

Q5 — THE REASON. Ask: "Why does finishing this matter to you today? Keep it simple and true — e.g. 'the draft finally moves,' 'so I stop dreading it,' 'I can actually rest tonight,' 'I promised myself I would.'" I'll show this back to you if you drift.
Set `finishFeel` to their answer (their reason, in their words). This returns at the check-in only on "sort of"/"no".

THEN, in this order:
1. Reply briefly (a sentence) to acknowledge their answers.
2. Give ONE short plain-language recap line of the block (e.g. "Back on the saddle - 9 to 12, airplane mode, four milestones to 2,000."). Then output the Focus File plan below, as JSON in ONE code block, filled in from the interview. Every value comes from the interview, never invented (if they skipped the trap, `why` is ""). Copy `templateVersion` through unchanged.

```json
{
  "templateVersion": "2026-07-20",
  "task": "",
  "scope": "",
  "mode": "sealed",
  "sealedPlan": "",
  "laneSites": [],
  "keepLabel": "Keep",
  "keep": "",
  "whyLabel": "Avoid",
  "why": "",
  "finishFeel": "",
  "jobsShape": "none",
  "jobs": [],
  "blockMinutes": 90,
  "knockMinMin": 28,
  "knockMaxMin": 33,
  "doneWhenShort": ""
}
```

3. Then tell them, in one line: **Paste that plan into the builder at www.focusfile.org to download your Focus File.**

Then stop.
