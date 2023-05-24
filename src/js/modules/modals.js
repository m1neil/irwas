const modals = () => {

	openModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
	openModal('.phone_link', '.popup', '.popup_close');
	openModal('.phone_link', '.popup', '.popup_close', 3000);

	function openModal(triggerSelector, modalSelector, crosshairCloseSelector, byTime = 0) {

		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector);

		triggers.forEach(trigger => {
			trigger.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				showModal(modal);
			});
		});

		if (byTime) {
			setTimeout(() => {
				showModal(modal);
			}, byTime);
		}

		// functions ====================================================================================

		function showModal(modal) {
			modal.style.display = 'block';

			const widthScroll = window.innerWidth - document.body.offsetWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${widthScroll}px`;

			window.addEventListener('click', closeModal);
			window.addEventListener('keydown', closeModal);
		}

		function closeModal(e) {
			const target = e.target;
			if (e.code === 'Escape' || target === modal || target.closest(crosshairCloseSelector)) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.paddingRight = '0';
				window.removeEventListener('click', closeModal);
				window.removeEventListener('keydown', closeModal);
			}
		}

	}

};

export default modals;