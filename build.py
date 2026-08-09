#!/usr/bin/env python3
"""Focus File build (lean).

    prompt-head.md + focus-file.html  ->  focus-file-prompt.md
    focus-file.html (+ each sample's own config)  ->  sample-*.html

index.html fetches focus-file-prompt.md at run time — nothing is embedded, so a
closing </script> inside the template never needs escaping. No minifying: the
template ships exactly as written (it's already lean).

    python3 build.py
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).parent
ISLAND = re.compile(r'<script id="focus-config" type="application/json">[\s\S]*?</script>')


def main() -> None:
    tpl = (ROOT / 'focus-file.html').read_text()
    if not ISLAND.search(tpl):
        sys.exit('build: no focus-config island in focus-file.html')

    prompt = (ROOT / 'prompt-head.md').read_text().rstrip() + '\n\n```html\n' + tpl + '\n```\n'
    (ROOT / 'focus-file-prompt.md').write_text(prompt)

    for name in ('sample-writing.html', 'sample-jobsearch.html'):
        p = ROOT / name
        keep = ISLAND.search(p.read_text()) if p.exists() else None
        if not keep:
            sys.exit(f'build: {name} needs a focus-config island to preserve — seed it first')
        p.write_text(ISLAND.sub(lambda _m: keep.group(0), tpl, count=1))

    final = (ROOT / 'index.html').read_text()
    problems = []
    if "fetch('focus-file-prompt.md')" not in final:
        problems.append('index.html no longer fetches the prompt file')
    for name in ('focus-file.html', 'sample-writing.html', 'sample-jobsearch.html'):
        s = (ROOT / name).read_text()
        if 'plausible' in s.lower() or '<script src' in s or 'fetch(' in s:
            problems.append(f'{name} makes a network call — a focus file never may')
    if problems:
        sys.exit('build FAILED:\n  - ' + '\n  - '.join(problems))

    print('build OK')
    print(f'  template  {len(tpl):>6,} chars')
    print(f'  prompt    {len(prompt):>6,} chars')
    print('\nDeploy: index.html + focus-file-prompt.md + sample-writing.html + sample-jobsearch.html')


if __name__ == '__main__':
    main()
