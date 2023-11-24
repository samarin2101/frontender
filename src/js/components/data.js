export function data() {
	const dateTimeContainers = document.querySelectorAll('.dateTimeSpan')
	function getCurrentDateTimeWithYear(dateTimeContainer) {
		const now = new Date()
		const date = now.toLocaleDateString('ru', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		})
		const time = now.toLocaleTimeString('ru', {
			hour: '2-digit',
			minute: '2-digit',
		})
		dateTimeContainer.textContent = `${date} в ${time}`
	}
	for (let i = 0; i < dateTimeContainers.length; i++) {
		getCurrentDateTimeWithYear(dateTimeContainers[i])
	}
}
