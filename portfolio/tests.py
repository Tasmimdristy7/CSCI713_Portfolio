from django.test import SimpleTestCase
from django.urls import reverse
from django.contrib.staticfiles import finders


class PortfolioTests(SimpleTestCase):
    def test_home_renders_sections_and_robot_animation(self):
        response = self.client.get(reverse("portfolio:home"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "portfolio/home.html")
        for marker in ['id="home"', 'id="education"', 'id="projects"', 'first-name', 'last-name', 'Build my name again']:
            self.assertContains(response, marker)
        self.assertContains(response, '/static/portfolio/script.js')

    def test_static_assets_exist(self):
        for name in ["styles.css", "script.js", "favicon.svg"]:
            self.assertIsNotNone(finders.find("portfolio/" + name))

    def test_unknown_page_returns_404(self):
        self.assertEqual(self.client.get("/missing/").status_code, 404)
