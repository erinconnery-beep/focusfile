#!/usr/bin/env python3
"""Focus File build (config-handoff).

  prompt-head.md            -> focus-file-prompt.md  (the short prompt users copy)
                            -> re-embedded into index.html's <script id="fullPrompt">
  focus-file.html           the FULL template the site's builder fetches + fills in.
  sample-*.html             standalone full files (each with its own focus-config);
                            REGENERATED here = current template + that sample's config.

Flow: copy the short prompt -> AI interview -> AI outputs a JSON config -> paste it into
the builder on index.html -> it fetches focus-file.html, injects the config, downloads focus.html.
Run: python3 build.py
"""
import re, sys
from pathlib import Path
ROOT=Path(__file__).parent
ISLAND=re.compile(r'<script id="focus-config" type="application/json">[\s\S]*?</script>')

def main():
    head=(ROOT/'prompt-head.md').read_text()
    (ROOT/'focus-file-prompt.md').write_text(head)

    idx=(ROOT/'index.html'); s=idx.read_text()
    i=s.find('<script type="text/plain" id="fullPrompt">'); j=s.find('</script>',i)
    if i<0 or j<0: sys.exit('build: fullPrompt block not found in index.html')
    s=s[:i]+'<script type="text/plain" id="fullPrompt">'+head+'\n'+s[j:]
    idx.write_text(s)
    if "fetch('focus-file.html')" not in s: sys.exit('build: builder fetch missing from index.html')

    tpl=(ROOT/'focus-file.html').read_text()
    if not ISLAND.search(tpl): sys.exit('build: focus-config island missing from focus-file.html')

    # Regenerate each sample = current template + that sample's own config island.
    for name in ('sample-writing.html','sample-jobsearch.html'):
        p=ROOT/name
        if not p.exists(): sys.exit('build: %s missing'%name)
        m=ISLAND.search(p.read_text())
        if not m: sys.exit('build: no focus-config island in %s'%name)
        island=m.group(0)
        p.write_text(ISLAND.sub(lambda _:island, tpl, count=1))

    print('build OK - short prompt %d chars; template %d chars'%(len(head),len(tpl)))
    print('Deploy: index.html + focus-file.html + focus-file-prompt.md + sample-writing.html + sample-jobsearch.html')

if __name__=='__main__': main()
