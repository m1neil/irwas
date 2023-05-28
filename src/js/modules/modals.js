import { bodyController } from './bodyController';

const modals = (triggerSelector, closeModalClass) => {
	const trigger = document.querySelector(triggerSelector);
	if (!trigger) return;

	const modal = document.querySelector(trigger.dataset.modal);
	if (!modal) return;

	trigger.addEventListener('click', openModal);

	// functions ===================================================

	function openModal() {
		modal.style.display = 'block';
		bodyController.lock();
		window.addEventListener('click', closeModal);
		window.addEventListener('keydown', closeModal);
	}

	function closeModal(e) {
		const target = e.target;
		if (
			(target && target === modal) ||
			target.closest(closeModalClass) ||
			e.code === 'Escape'
		) {
			modal.style.display = 'none';
			bodyController.unLock();
			window.removeEventListener('click', closeModal);
			window.removeEventListener('keydown', closeModal);
		}
	}
};

export default modals;
