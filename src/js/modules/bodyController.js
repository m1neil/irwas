const bodyController = {
	widthScroll: window.innerWidth - document.body.offsetWidth,

	lock: function () {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${this.widthScroll}px`;
	},

	unLock: function () {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '0';
	},
};

export { bodyController };
