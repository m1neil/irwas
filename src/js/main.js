'use strict';

import modals from './modules/modals';
import tabs from './modules/tabs';
import './slider';

modals('.popup_engineer_btn', '.popup_close');

tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs(
	'.decoration_slider',
	'.no_click',
	'.decoration_content > div > div',
	'after_click'
);
