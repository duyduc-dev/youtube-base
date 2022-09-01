import './jquery.js';

const shortsVideo = $('#shorts-video');

const renderShortsVideo = {
	idVideoShorts: [
		'y2HDbyzkXT0',
		'y_5XohCS2BU',
		'Ew6xsbTcqiw',
		'b8XHODTwQfo',
		'4MjzAPYi2CM',
		'06-JChds2u8',
		'ycr6NKEtTwE',
		'EM_n7MQ9dmo',
		'LZZexCVBHfM',
	],

	renderVideo() {
		const video = this.idVideoShorts.map(
			(id) => `<div class="mt-[24px] mx-[12px]">
    <iframe
      width="334"
      height="594"
      src="https://www.youtube.com/embed/${id || ''}"
      title="Quan Viên Hai họ #cover #shorts"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>`
		);
		shortsVideo.html(video);
	},

	init() {
		this.renderVideo();
	},
};

renderShortsVideo.init();
