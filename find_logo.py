with open("index.html", "r") as f:
    html = f.read()

import re
matches = re.finditer(r'data-framer-name="Logo"', html)
for i, match in enumerate(matches):
    start = match.start()
    # Go back a bit to see the tag
    start_tag = html.rfind('<', 0, start)
    print(f"--- Logo {i} ---")
    print(html[start_tag:start_tag+500])

