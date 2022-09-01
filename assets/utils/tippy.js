const tippyShow = ({ selector = '[data-tippy-content]', arrow = false, placement = 'bottom' }) => {
	tippy(selector || '[data-tippy-content]', {
		arrow,
		placement,
		delay: [200, 200],
		offset: [0, 20],
	});
};
export default tippyShow;
