# Day 8 — Python Foundations

**Date:** Thursday, May 21, 2026  
**Goal:** By the end of today, interns will write beginner Python using print, variables, input, and conditionals.

## Kickoff (0:00 - 0:10)

**Warm-up:** "What is something a computer can decide based on your answer?"

**Recap:** We used no-code tools to build AI products. Today we add code as a new building power.

**Today's goal:** "Write actual Python and finish a small program someone else can run."

## Learn Block (0:10 - 0:50)

### Concepts
- Why code: repeatable instructions
- `print()` shows output
- Variables store information
- `input()` asks the user a question
- `if`, `elif`, `else` let programs decide
- Strings, numbers, and simple debugging

### Live Demo
Build a tiny recommendation program:

```python
name = input("What's your name? ")
energy = input("High or low energy today? ")

if energy == "high":
    print(f"{name}, try a 25-minute focus sprint.")
else:
    print(f"{name}, start with a 5-minute easy task.")
```

### Pause Points
- "What is stored in the variable?"
- "What happens if the user types something unexpected?"
- "How could we make the output friendlier?"

## Build Block (1:00 - 1:50)

### Project: Beginner Python Mini-Project

Choose one:

- Personality quiz
- Mad Libs generator
- Study suggestion tool
- Mood-based playlist recommender

Requirements:

- At least 3 user inputs
- At least 2 variables
- At least 2 conditionals
- A clear final result

**Stretch:** Add input normalization with `.lower()`.

## Play Block (2:00 - 2:40)

### Activity: Logic Puzzle Race

Teams solve short logic challenges and translate them into if/else rules:

- If it rains and you forgot an umbrella, what happens?
- If a quiz score is 90+, 70-89, or below 70, what message appears?
- If a user chooses A/B/C, which result should print?

## Share & Wrap (2:40 - 3:00)

**Share prompt:** "Run your program and show one decision it makes."

**Next-session preview:** "Tomorrow we add loops, functions, and real data from APIs."

## Post-Session Notes

- Award Code Newbie badge to everyone who runs a working Python program.
- Track who needs extra Replit help before Day 9.
