from requests import get

class JService:
	def __init__(self) -> None:
		self.api = "https://jservice.io/api"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	

	def get_clues(
			self,
			value: int = 1,
			category_id: int = None,
			min_date: str = None,
			max_date: str = None,
			offset: int = None) -> dict:
		url = f"{self.api}/clues?value={value}"
		if category_id:
			url += f"&category={category_id}"
		if min_date:
			url += f"&min_date={min_date}"
		if max_date:
			url += f"&min_date={max_date}"
		if offset:
			url +- f"&offset={offset}"
		return get(
			url, headers=self.headers).json()

	def get_random_question(
			self,
			count: int = 1) -> dict:
		return get(
			f"{self.api}/random?count={count}",
			headers=self.headers).json()

	def get_final_random_question(
			self,
			count: int = 1) -> dict:
		return get(
			f"{self.api}/final?count={count}",
			headers=self.headers).json()

	def get_categories(
			self,
			count: int,
			offset: int) -> dict:
		return get(
			f"{self.api}/categories?count={count}&offset={offset}",
			headers=self.headers).json()

	def get_category_by_id(
			self,
			category_id: int) -> dict:
		return get(
			f"{self.api}/category?id={category_id}",
			headers=self.headers).json()
