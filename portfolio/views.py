from django.shortcuts import render


def home(request):
    """Render the portfolio and its original robot animation."""
    return render(request, "portfolio/home.html")
