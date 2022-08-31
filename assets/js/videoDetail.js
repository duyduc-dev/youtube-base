import './jquery.js';
import videos from '../data/video.js';

const frameVideo = $('#video');
const listVideos = $('#list-video');

const videoDetail = {
	dataVideo: [...videos],

	renderVideoDetail() {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop),
		});
		const videoID = params.videoID;

		frameVideo.html(
			`<iframe 
				width="900"
				height="506"
				src="https://www.youtube.com/embed/${videoID}?autoplay=1" 
				title="YouTube video player" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
			>
			</iframe>`
		);
	},

	renderListVideo() {
		listVideos.html(this.dataVideo.map((video) => /*html*/ `<div>${video.title}</div>`));
	},

	init() {
		this.renderVideoDetail();
		this.renderListVideo();
	},
};

videoDetail.init();
