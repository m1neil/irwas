const tabs = (containerNavSelector, tabSelector, contentSelector, classActive) => {

	const containerNav = document.querySelector(containerNavSelector),
		tabs = document.querySelectorAll(tabSelector),
		contents = document.querySelectorAll(contentSelector);

	containerNav.addEventListener('click', (e) => {
		const target = e.target;
		if (target &&
			target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.closest(tabSelector)) {

			tabs.forEach((item, i) => {
				if (item === target || target.closest(tabSelector) === item) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});

	// functions ====================================================================================================	
	function hideTabs() {
		tabs.forEach(item => {
			item.classList.remove(classActive);
		});

		contents.forEach(item => {
			item.style.display = 'none';
		});
	}

	function showTabs(i = 0) {
		tabs[i].classList.add(classActive);
		contents[i].style.display = 'block';
	}

};

export default tabs;