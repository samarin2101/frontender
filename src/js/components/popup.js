export default class Popup {
	constructor() {
		this.popupLinks = document.querySelectorAll('.popup-link')
		this.body = document.body
		this.lockPagging = document.querySelectorAll('.fix-blocks')
		this.unlock = true
		this.timeout = 500

		this.init()
	}

	init() {
		this.popupLinks.forEach(popupLink => {
			popupLink.addEventListener('click', e => {
				const popupName = popupLink.getAttribute('href').replace('#', '')
				const curentPopup = document.getElementById(popupName)
				this.open(curentPopup)
				e.preventDefault()
			})
		})

		const popupCloseIcon = document.querySelectorAll('.close-popup')
		popupCloseIcon.forEach(el => {
			el.addEventListener('click', e => {
				this.close(el.closest('.popup'))
				e.preventDefault()
			})
		})

		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				const popupActive = document.querySelector('.popup.open')
				this.close(popupActive)
			}
		})
	}

	open(curentPopup) {
		if (curentPopup && this.unlock) {
			const popupActive = document.querySelector('.popup.open')
			if (popupActive) {
				this.close(popupActive, false)
			} else {
				this.bodyLock()
			}
			curentPopup.classList.add('open')
			curentPopup.addEventListener('click', e => {
				if (!e.target.closest('.popup__content')) {
					this.close(e.target.closest('.popup'))
				}
			})
		}
	}

	close(popupActive, doUnlock = true) {
		if (this.unlock) {
			popupActive.classList.remove('open')
			if (doUnlock) {
				this.bodyUnLock()
			}
		}
	}

	bodyLock() {
		const lockPaddingValue =
			window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
		this.lockPagging.forEach(el => {
			el.style.paddingRight = lockPaddingValue
		})

		this.body.style.paddingRight = lockPaddingValue
		this.body.classList.add('stop-scroll')

		this.unlock = false
		setTimeout(() => {
			this.unlock = true
		}, this.timeout)
	}

	bodyUnLock() {
		setTimeout(() => {
			this.lockPagging.forEach(el => {
				el.style.paddingRight = '0px'
			})
			this.body.style.paddingRight = '0px'
			this.body.classList.remove('stop-scroll')
		}, 0)

		this.unlock = false

		setTimeout(() => {
			this.unlock = true
		}, this.timeout)
	}
}

const popup = new Popup();



