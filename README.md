# jservice.js
Web-API for [jservice.io](https://jservice.io) website that provides Jeopardy trivia data including the questions and answers

## Example
```JavaScript
async function main() {
	const { JService } = require("./jservice.js.js")
	const jService = new JService()
	const randomQuestion = await jService.getRandomQuestion()
	console.log(randomQuestion)
}

main()
```

