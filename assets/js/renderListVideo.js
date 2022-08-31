import './jquery.js';
import videos from '../data/video.js';

const btnMenuHeader = $('.header__left-btn-menu');
const containType = $('.contain__type');
const containTypeItem = $('.contain__type-item');
const containVideos = $('#contain-videos');

const renderListVideo = {
	dataVideo: [...videos],
	handleSidebarActive() {
		btnMenuHeader.click((e) => {
			containType.toggleClass('sidebar--active');
		});
	},
	handleClickType() {
		containTypeItem.click((e) => {
			const currentTarget = $(e.currentTarget);
			containTypeItem.removeClass('contain__type-item--active');
			currentTarget.addClass('contain__type-item--active');
			const type = currentTarget.data();

			console.log(type);
		});
	},
	renderVideoItems() {
		containVideos.html(
			this.dataVideo.map(
				({ title, srcImg, imgChanel, time, chanel, views, timeUpload, videoID }) => /*html*/ `
			<div class='col col-12 col-sm-6 col-md-4 col-xl-3'>
			<div class="card-wrapper cursor-pointer">
			  <div class="card w-100">
				<a href="./video-detail.html?videoID=${videoID || ''}" class="position-relative text-decoration-none">
				  <img
					src="${srcImg}"
					class="card-img-top img-video" alt="...">
				  <div class="time-video position-absolute bottom-0 end-0">${time}</div>
				</a>
				<div class="card-body">
				  <div class="card-body-inner">
					<div class="card-body-avt !w-[36px] ml-[0px]">
					  <img
						src="${imgChanel}"
						alt="${chanel}"
						class='!min-w-[36px]'
					>
					</div>
					<div class="card-body-content">
					  <h3 class="card-body-heading mb-0">
						<a class="text-decoration-none" title='${`${title}`}' href="#">${title}</a>
					  </h3>
					  <p class="chanel mb-0"><a href="#" data-tippy-content="${chanel}" data-tippy-placement="top"
						  class="text-decoration-none">${chanel}</a></p>
					  <div class="card-info mt-0">
						<span class="views">${views}</span>
						<span class="time">${timeUpload}</span>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
			`
			)
		);
		tippy('[data-tippy-content]', {
			arrow: false,
			placement: 'bottom',
			delay: [200, 200],
			offset: [0, 20],
		});
	},
	init() {
		this.handleSidebarActive();
		this.handleClickType();
		this.renderVideoItems();
	},
};

renderListVideo.init();

console.log(window.location);
