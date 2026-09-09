# CSCI713_Portfolio

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

This Django application needs a Python-capable host; GitHub Pages cannot execute its Python server. The original static portfolio remains a separate site. For production, set `DJANGO_DEBUG=false`, a private `DJANGO_SECRET_KEY`, and comma-separated `DJANGO_ALLOWED_HOSTS`; use a production WSGI server and serve collected static files through the host. Do not use Django's development server for production.

This repository conversion does not implement the assignment's separate toy project or Kanban board.
