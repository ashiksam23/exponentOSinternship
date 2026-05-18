# Day 9 — Python Loops, Functions, and APIs

**Date:** Friday, May 22, 2026  
**Goal:** By the end of today, interns will understand loops, lists, functions, and basic API calls.

## Kickoff (0:00 - 0:10)

**Warm-up:** "What app have you used that pulls live information from the internet?"

**Recap:** Yesterday we wrote Python programs that ask questions and make decisions. Today our code repeats work and talks to the internet.

**Today's goal:** "Build a small Python project that uses a list, a function, and data from an API."

## Learn Block (0:10 - 0:50)

### Concepts
- Lists store multiple values
- Loops repeat actions
- Functions package reusable logic
- APIs let code request data from another service
- JSON is structured data Python can read
- Status codes: 200 means success

### Live Demo
Fetch a random joke:

```python
import requests

def get_joke():
    response = requests.get("https://official-joke-api.appspot.com/random_joke")
    data = response.json()
    return data["setup"] + " " + data["punchline"]

for i in range(3):
    print(get_joke())
```

### Pause Points
- "Where does the internet data enter our program?"
- "What should we do if the API fails?"
- "How could this connect to a capstone?"

## Build Block (1:00 - 1:50)

### Project: API-Powered Practice Project

Choose one API from [Free APIs](../../resources/free-apis.md), then build:

- Trivia quiz
- Weather summary
- Country fact finder
- Quote generator
- Random activity recommender

Requirements:

- One function
- One API request
- Uses JSON response data
- Prints a useful result for the user

**Stretch:** Add error handling for failed requests.

## Play Block (2:00 - 2:40)

### Activity: API Explorer Challenge

Teams compete to find:

- Most useful API
- Weirdest data returned
- Best capstone idea inspired by an API
- Clearest explanation of JSON

## Share & Wrap (2:40 - 3:00)

**Share prompt:** "Show one piece of live data your Python program pulled from the internet."

**Next-session preview:** "Next session is Monday, May 25. We connect Python to an actual AI model with the Gemini API."

## Post-Session Notes

- Confirm interns understand API keys must stay private.
- Identify capstone ideas that could reuse today's API pattern.
