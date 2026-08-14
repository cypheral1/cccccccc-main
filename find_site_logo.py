import re

with open("index.html", "r") as f:
    html = f.read()

matches = list(re.finditer(r'data-framer-name="Site Logo"', html))
if matches:
    start = matches[0].start()
    start_tag = html.rfind('<', 0, start)
    # Find the matching closing div for framer-s0n0kj.
    # We can just take the next 3000 characters which should include the whole SVG.
    print(html[start_tag:start_tag+3000])

