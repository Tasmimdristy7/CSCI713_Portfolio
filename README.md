# CSCI713_Portfolio

**Stack: Python · Django · HTML · CSS · JavaScript**

Tasmim Rashid's portfolio, implemented with Python and Django. Preserves the original monochrome pixel design, Home, Education & Experience, Projects, and two robots pushing the first and last names into place.

## Run

Requires Python 3.10 or newer (Django 5.2).

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver 127.0.0.1:8001
```

Open http://127.0.0.1:8001/. No database setup is needed for this read-only portfolio.

## Validate

```sh
python manage.py check
python manage.py test
python manage.py collectstatic --noinput
```

## Structure

- `config/`: Python settings, URL routing, and WSGI application.
- `portfolio/views.py`: Python view rendering the home page.
- `portfolio/templates/portfolio/home.html`: Django template.
- `portfolio/static/portfolio/`: original CSS, JavaScript animations, and favicon.
- `portfolio/tests.py`: route, template, and static asset checks.

The server is Python/Django; the browser still uses HTML, CSS, and JavaScript for the design and animation. Content is based on the owner's résumé. Built with OpenAI Codex. The original section-by-section Git history is preserved.

## Hosting

Repository: https://github.com/Tasmimdristy7/CSCI713_Portfolio

Live portfolio: https://tasmimdristy7.github.io/CSCI713_Portfolio/

GitHub Pages serves the static export in `docs/` (main branch). Python/Django remains the source; Pages does not run the Python server. All current portfolio features and animations work in this static export.

After changing the template or assets, update the published version with:

```sh
python manage.py export_pages
git add docs
git commit -m "Update GitHub Pages export"
git push
```

For a live Django server instead, use a Python-capable host, set `DJANGO_DEBUG=false`, a private `DJANGO_SECRET_KEY`, and comma-separated `DJANGO_ALLOWED_HOSTS`, then serve the WSGI app and collected static files.

This repository conversion does not implement the assignment's separate toy project or Kanban board.
