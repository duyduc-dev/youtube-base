import './header.js';
import './sidebar.js';

$(() => {
	if ($(window).width() <= 1350) {
		$('.sidebar.sidebar--active').removeClass('sidebar--active');
		$('.contain__type').addClass('sidebar--active');
		$('.contain').addClass('sidebar--active');
	}
});

$(window).resize(() => {
	if ($(window).width() < 1350) {
		if ($('.sidebar.sidebar--active').is(':visible')) {
			$('#overlay').show();
		}
	} else {
		if ($('.sidebar').hasClass('sidebar--active')) {
			$('#overlay').hide();
		}
	}
});

