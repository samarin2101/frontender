export class Tab {
	constructor(element) {
		this.element = element
		this.element.addEventListener('click', this.handleClick.bind(this))
	}

	handleClick(event) {
		event.preventDefault()

		const siblings = Array.from(this.element.parentNode.children).filter(
			function (child) {
				return child !== this.element
			},
			this
		)

		siblings.forEach(function (sibling) {
			sibling.classList.remove('tabs--active')
		})

		const parentSiblings = Array.from(
			this.element.parentNode.parentNode.children
		).filter(function (child) {
			return child !== this.element.parentNode
		}, this)

		parentSiblings.forEach(function (sibling) {
			Array.from(sibling.querySelectorAll('div')).forEach(function (div) {
				div.classList.remove('tabs-content--active')
			})
		})

		this.element.classList.add('tabs--active')

		const contentId = this.element.getAttribute('href')
		document.querySelector(contentId).classList.add('tabs-content--active')
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab')

	tabs.forEach(function (tab) {
		new Tab(tab)
	})
})


