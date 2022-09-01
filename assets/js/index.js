import './jquery.js';
import './header.js';
import './sidebar.js';

const pathName = window.location.pathname;

$(() => {
	if ($(window).width() <= 1350 || pathName === '/video-detail.html') {
		$('.sidebar.sidebar--active').removeClass('sidebar--active');
		$('.contain__type').addClass('sidebar--active');
		$('.contain').addClass('sidebar--active');
	}

	if (pathName === '/video-detail.html') {
		if ($('.sidebar.sidebar--active').is(':visible')) {
			$('#overlay').show();
		}
	} else {
		if ($('.sidebar').hasClass('sidebar--active')) {
			$('#overlay').hide();
		}
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
