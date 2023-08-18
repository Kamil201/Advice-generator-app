const adviceNumberEl = document.querySelector(".advice__number");
const adviceQuoteEl = document.querySelector(".advice__quote");
const generateBtnEl = document.querySelector(".advice__btn");



let adviceNumber = 0;

async function fetchRandomAdvice() {
	try {
		const response = await fetch("https://api.adviceslip.com/advice");

		if (!response.ok) {
			throw new Error("Failed to fetch advise");
		}

		const data = await response.json();

		if (!data.slip || !data.slip.advice) {
			throw new error("Invalid response");
		}

		const randomAdvice = `"${data.slip.advice}"`;
		adviceNumber++;
		return randomAdvice;
	} catch (error) {
		return "Failed to fetch advise", error;
	}
}

async function generateQuote() {
	const randomAdvice = await fetchRandomAdvice();
	adviceQuoteEl.textContent = randomAdvice;
	adviceNumberEl.textContent = `#${adviceNumber}`;
}

generateBtnEl.addEventListener("click", generateQuote);
