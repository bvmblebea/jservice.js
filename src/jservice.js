class JService {
	constructor() {
		this.api = "https://jservice.io/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	}

	async getClues(value = 1, categoryId = null, minDate = null, maxDate = null, offset = null) {
		let url = `${this.api}/clues?value=${value}`
		if (categoryId) {
			url += `&category=${categoryId}` 
		}
		if (minDate) {
			url += `&min_date=${minDate}` 
		}
		if (maxDate) {
			url += `&max_date=${maxDate}` 
		}
		if (offset) {
			url += `&offset=${offset}` 
		}
		const response = await fetch(
			url, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRandomQuestion(count = 1) {
		const response = await fetch(
			`${this.api}/random?count=${count}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFinalRandomQuestion(count = 1) {
		const response = await fetch(
			`${this.api}/final/random?count=${count}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCategories(count, offset) {
		const response = await fetch(
			`${this.api}/categories?count=${count}&offset=${offset}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCategory(categoryId) {
		const response = await fetch(
			`${this.api}/category?id=${categoryId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {JService}
