"""Local dev/prod server for the portfolio site.

Serves the static site and exposes a tiny JSON API the front-end can grow into
(e.g. blog posts fetched dynamically instead of bundled as JS data).

Run:
    python3 server/app.py            # http://localhost:8000
    PORT=8321 python3 server/app.py  # custom port

No dependencies beyond the standard library, so it runs anywhere.
"""

import json
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORT = int(os.environ.get("PORT", 8000))


class PortfolioHandler(SimpleHTTPRequestHandler):
    """Static file server with a /api namespace."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        if self.path.startswith("/api/"):
            self.handle_api()
        else:
            super().do_GET()

    def handle_api(self):
        if self.path == "/api/health":
            self.send_json({"status": "ok"})
        elif self.path == "/api/contact":
            self.send_json(
                {
                    "name": "Arshad Ahmed Shaik",
                    "email": "ashaik8.us@gmail.com",
                    "location": "Fairfax, VA",
                    "linkedin": "https://www.linkedin.com/in/hire-arshad-shaik/",
                    "github": "https://github.com/ashaik8",
                }
            )
        else:
            self.send_json({"error": "not found"}, status=404)

    def send_json(self, payload, status=200):
        body = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        # Correct MIME for ES modules on some platforms
        if self.path.endswith(".js"):
            self.send_header("X-Content-Type-Options", "nosniff")
        # Stale ES-module caches break the site when data/renderer files change
        # together; force revalidation in dev.
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), PortfolioHandler)
    print(f"Serving {ROOT} at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
