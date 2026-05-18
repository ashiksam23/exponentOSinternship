# ExponentOS — Free APIs for Projects

A curated list of free APIs that interns can use during the Python, API, and capstone sessions. All require no payment and have generous free tiers.

## Fun & Entertainment

| API | What It Does | URL | Auth |
|-----|-------------|-----|------|
| **JokeAPI** | Random jokes (safe mode available) | https://jokeapi.dev | None |
| **Chuck Norris Jokes** | Random Chuck Norris jokes | https://api.chucknorris.io | None |
| **Trivia API** | Quiz questions by category/difficulty | https://opentdb.com/api_config.php | None |
| **Pokemon API** | Pokemon data (stats, images, types) | https://pokeapi.co | None |
| **Dog CEO** | Random dog images by breed | https://dog.ceo/dog-api | None |
| **Cat Facts** | Random cat facts | https://catfact.ninja | None |
| **Advice Slip** | Random advice | https://api.adviceslip.com | None |

## Data & Information

| API | What It Does | URL | Auth |
|-----|-------------|-----|------|
| **REST Countries** | Country data (population, flags, languages) | https://restcountries.com | None |
| **Open-Meteo** | Weather forecasts (no key needed) | https://open-meteo.com | None |
| **Wikipedia API** | Wikipedia summaries | https://en.wikipedia.org/api/rest_v1 | None |
| **Numbers API** | Fun facts about numbers | http://numbersapi.com | None |
| **Quotable** | Random quotes | https://quotable.io | None |
| **Bored API** | Random activity suggestions | https://bored-api.appbrewery.com | None |

## Space & Science

| API | What It Does | URL | Auth |
|-----|-------------|-----|------|
| **NASA APOD** | Astronomy picture of the day | https://api.nasa.gov | Free key |
| **ISS Location** | Real-time ISS position | http://api.open-notify.org | None |
| **SpaceX API** | SpaceX launch data | https://api.spacexdata.com | None |

## AI (Free Tier)

| API | What It Does | URL | Auth |
|-----|-------------|-----|------|
| **Google Gemini API** | AI text generation for the capstone | https://aistudio.google.com | Free key |

## How to Use an API (Quick Reference)

```python
import requests

# Simple GET request (no auth)
response = requests.get("https://api.chucknorris.io/jokes/random")
data = response.json()
print(data["value"])

# With parameters
response = requests.get("https://opentdb.com/api.php", params={
    "amount": 5,
    "category": 18,
    "type": "multiple"
})
questions = response.json()["results"]
for q in questions:
    print(q["question"])
```

## Tips for Interns

- Start with APIs that need **no authentication** (no API key)
- Always check `response.status_code` — 200 means success
- Use `response.json()` to turn the response into a Python dictionary
- Print the full response first to understand the data structure
- Never paste API keys into public code or screenshots
- Be kind to APIs — don't send hundreds of requests per minute
