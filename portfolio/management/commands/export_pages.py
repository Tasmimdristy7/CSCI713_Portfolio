"""Export the Django portfolio for GitHub Pages."""
from pathlib import Path
from django.conf import settings
from django.core.management import BaseCommand, call_command
from django.template.loader import render_to_string
from django.test.utils import override_settings


class Command(BaseCommand):
    help = "Render the portfolio and collect assets into docs/ for GitHub Pages"

    def handle(self, *args, **options):
        destination = Path(settings.BASE_DIR) / "docs"
        destination.mkdir(exist_ok=True)
        with override_settings(STATIC_URL="./static/", STATIC_ROOT=destination / "static"):
            html = render_to_string("portfolio/home.html")
            # Relative URLs work under the repository subpath on Pages.
            html = html.replace('href="/static/', 'href="./static/').replace('src="/static/', 'src="./static/')
            call_command("collectstatic", interactive=False, verbosity=0)
        (destination / "index.html").write_text(html, encoding="utf-8")
        (destination / ".nojekyll").touch()
        self.stdout.write(self.style.SUCCESS("Exported portfolio to docs/"))
