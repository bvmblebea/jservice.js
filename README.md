# jservice.py
Web-API for [jservice.io](https://jservice.io) website that provides Jeopardy trivia data including the questions and answers

## Example
```python
import jservice
jservice = jservice.JService()
random_question = jservice.get_random_question()
print(random_question)
```
