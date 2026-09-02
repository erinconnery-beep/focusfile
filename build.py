#!/usr/bin/env python3
"""Build Focus File's generated prompt and sample files from their sources.

  prompt-head.md    -> focus-file-prompt.md
                    -> index.html's generated fullPrompt region
                    -> focus-file.html's fresh-interview prompt
  focus-file.html   -> sample-*.html using the source configs below

Never hand-edit the generated prompt region or the generated sample files.
Run: python3 build.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
ISLAND = re.compile(r'<script id="focus-config" type="application/json">[\s\S]*?</script>')
PROMPT_OPEN = '<script type="text/plain" id="fullPrompt">'
FRESH_PROMPT_OPEN = '<script type="text/plain" id="freshInterviewPrompt">'
CANONICAL = '<link rel="canonical" href="https://www.focusfile.org/">'

SAMPLES = {
    "sample-writing.html": {
        "templateVersion": "2026-07-20",
        "task": "1,500 new words at the desk",
        "scope": "9:00 – 11:00",
        "mode": "sealed",
        "laneSites": [],
        "sealedPlan": "phone in the other room, router unplugged",
        "whyLabel": "Avoid",
        "why": "Re-reading and tweaking what's there will feel like work. It's the detour. New words only — forward.",
        "finishFeel": "The draft finally moves — 1,500 words that didn't exist at 9. Tomorrow I shape them instead of dreading the blank page.",
        "jobsShape": "milestones",
        "jobs": ["500 words", "1,000 words", "1,500 words — done"],
        "blockMinutes": 120,
        "knockMinMin": 28,
        "knockMaxMin": 33,
        "doneWhenShort": "1,500 new words",
    },
    "sample-jobsearch.html": {
        "templateVersion": "2026-07-20",
        "task": "3 applications fully out the door",
        "scope": "9:00 – 11:00",
        "mode": "lane",
        "laneSites": ["LinkedIn", "Gmail", "the 3 company career pages", "my resume doc"],
        "sealedPlan": "",
        "whyLabel": "Avoid",
        "why": "\"Researching the company\" and reading job descriptions will feel like progress. It's the detour. Tailor, write, submit — three all the way out.",
        "finishFeel": "Three real applications submitted, not five tabs of maybes. One less week where I meant to apply and didn't.",
        "jobsShape": "checklist",
        "jobs": [
            "Tailor resume bullets for role #1, submit the application",
            "Write the 3-sentence cover note for role #2, submit",
            "Fill out the long form for role #3, submit",
            "Add all three (company, role, date) to the tracker",
        ],
        "blockMinutes": 120,
        "knockMinMin": 28,
        "knockMaxMin": 33,
        "doneWhenShort": "3 applications submitted",
    },
    "sample-study.html": {
        "templateVersion": "2026-07-20",
        "task": "All 12 cranial nerves from memory",
        "scope": "7:00 – 8:30",
        "mode": "sealed",
        "laneSites": [],
        "sealedPlan": "phone in another room, laptop on airplane mode",
        "whyLabel": "Avoid",
        "why": "Re-reading the deck will feel like studying. It’s the detour. Recall with it closed, or you don’t know it.",
        "finishFeel": "All twelve, in order, from memory — the thing I’ve been avoiding is simply done.",
        "jobsShape": "checklist",
        "jobs": [
            "Write all 12 from memory without checking",
            "Check the deck and mark every miss",
            "Drill only the missed nerves until clean",
            "Final blank-page recall — all 12 in order",
        ],
        "blockMinutes": 90,
        "knockMinMin": 28,
        "knockMaxMin": 33,
        "doneWhenShort": "all 12 from memory",
    },
}


def config_island(config):
    payload = json.dumps(config, indent=2, ensure_ascii=False).replace("<", "\\u003c")
    return '<script id="focus-config" type="application/json">\n' + payload + '\n</script>'


def main():
    head = (ROOT / "prompt-head.md").read_text()
    (ROOT / "focus-file-prompt.md").write_text(head)

    index_path = ROOT / "index.html"
    index = index_path.read_text()
    if CANONICAL not in index:
        sys.exit("build: index.html canonical must be https://www.focusfile.org/")
    start = index.find(PROMPT_OPEN)
    end = index.find("</script>", start)
    if start < 0 or end < 0:
        sys.exit("build: fullPrompt block not found in index.html")
    embedded_head = head.replace("</script>", r"<\/script>")
    index = index[:start] + PROMPT_OPEN + embedded_head + "\n" + index[end:]
    index_path.write_text(index)
    if "fetch('focus-file.html')" not in index:
        sys.exit("build: builder fetch missing from index.html")

    template_path = ROOT / "focus-file.html"
    template = template_path.read_text()
    fresh_start = template.find(FRESH_PROMPT_OPEN)
    fresh_end = template.find("</script>", fresh_start)
    if fresh_start < 0 or fresh_end < 0:
        sys.exit("build: freshInterviewPrompt block not found in focus-file.html")
    template = template[:fresh_start] + FRESH_PROMPT_OPEN + embedded_head + "\n" + template[fresh_end:]
    template_path.write_text(template)
    if not ISLAND.search(template):
        sys.exit("build: focus-config island missing from focus-file.html")
    for name, config in SAMPLES.items():
        generated = ISLAND.sub(lambda _: config_island(config), template, count=1)
        (ROOT / name).write_text(generated)

    print("build OK - short prompt %d chars; template %d chars" % (len(head), len(template)))
    print("Deploy to Vercel: vercel.json + index.html + focus-file-logo.svg + focus-file-social-v2.png + focus-file.html + sample-writing.html + sample-jobsearch.html + sample-study.html")


if __name__ == "__main__":
    main()
