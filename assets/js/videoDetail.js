import './jquery.js';
import videos from '../data/video.js';
import copyToClipboard from '../utils/copyToClipboard.js';
import tippyShow from '../utils/tippy.js';

const frameVideo = $('#video');
const listVideos = $('#list-video');
const infoVideoDetail = $('#info-video-detail');

const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});

const videoID = params.videoID;
const videoDetail = {
	dataVideo: [...videos],
	currentVideo: videos.find((video) => video.videoID === videoID),

	renderVideoDetail() {
		frameVideo.html(
			`<iframe 
				class="w-[470px] h-[280px] xl:w-[810px] lg:w-[789px] md:w-[576px] xl:h-[506px] lg:h-[493px] md:h-[360px]"
				src="https://www.youtube.com/embed/${videoID}?autoplay=1" 
				title="YouTube video player" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
			>
			</iframe>`
		);
	},

	renderListVideo() {
		listVideos.html(
			this.dataVideo.map(
				(video) => /*html*/ `
		<div class="mt-6 first:mt-0">
			<a href="./video-detail.html?videoID=${video.videoID || ''}" class="flex hover:text-[#606060]">
				<div class="position-relative">
					<img src="${video.srcImg}" class="min-w-[168px]" width="168"/>
					<div class="bg-[#000000cc] text-white rounded-[2px] text-[12px] px-[3px] position-absolute bottom-0 end-0">${
						video.time
					}</div>
				</div>
				<div class="ml-5">
					<h3 class="max-h-[40px] leading-[20px] text-[14px] font-[500] line-2-3dot" title="${video.title}">${video.title}</h3>
					<p class="truncate text-[12px] text-[#606060] mt-2 font-[500]">${video.chanel}</p>
					<p class="truncate text-[12px] text-[#606060] mt-2 font-[500]">
						<span class="dot">${video.views}</span>
						<span>${video.timeUpload}</span>
					</p>
				</div>
			</a>
		</div>`
			)
		);
	},

	renderInfoVideo() {
		const video = this.currentVideo;
		infoVideoDetail.html(/*html*/ `
			<div class="mt-8">
				<p id="copy" class="hidden">${window.location.href}</p>
				<h1 class="max-h-[56px] text-[20px] text-[#030303] font-[600] line-2-3dot">${video.title}</h1>
				<div class="flex md:flex-row flex-col md:items-center items-start md:justify-between mt-3">
					<div class="mt-6 flex items-center">
						<img src="${video.imgChanel}" width="36" class="rounded-full"/>
						<p class="text-[14px] text-[#030303] truncate font-[500] ml-5">${video.chanel}</p>
					</div>
					<div class="flex md:justify-start justify-center items-center mr-10 mt-4 md:mt-0">
						<div class="flex items-center cursor-pointer" id="btn-like">
							<div class="w-[36px] h-[36px] p-[6px] ">
								<svg id="icon-like" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  style="pointer-events: none; display: block; width: 100%; height: 100%;"><g ><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" ></path></g></svg>
								<svg id="icon-like-fill" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></g></svg>
							</div>
							<span class="select-none">${video.like}</span>
						</div>
						<div class="flex items-center ml-10 cursor-pointer" id="btn-dislike">
							<div class="w-[36px] h-[36px] p-[6px]">
								<svg id="icon-dislike" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></g></svg>
								<svg id="icon-dislike-fill" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></g></svg>
							</div>
							<span class="select-none">${video.dislike}</span>
						</div>
						<div class="flex items-center ml-10 cursor-pointer" data-tippy-content="Copy URL" id="btn-share">
							<div class="w-[36px] h-[36px] p-[6px]">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl=""><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path></g></svg>							
							</div>
							<span class="select-none">Chia sẻ</span>
						</div>
					</div>
				</div>
				<div class="text-[14px] text-[#030303] font-[500] mt-5">
					<span class="dot">${video.views}</span>
					<span>${video.timeUpload}</span>
				</div>
			</div>

		`);
	},

	handleJavaScript() {
		const btnLike = $('#btn-like');
		const numberLike = $('#btn-like span');
		const iconLike = $('#icon-like');
		const iconLikeFill = $('#icon-like-fill');

		const btnDislike = $('#btn-dislike');
		const numberDislike = $('#btn-dislike span');
		const iconDislike = $('#icon-dislike');
		const iconDislikeFill = $('#icon-dislike-fill');

		const btnShare = $('#btn-share');

		let flagLiked = false;
		let flagDislike = false;

		iconLikeFill.hide();
		iconDislikeFill.hide();

		const handleLike = (liked) => {
			if (liked) {
				iconLikeFill.hide();
				iconLike.show();
				numberLike.text(+numberLike.text() - 1);
				flagLiked = false;
			} else {
				iconLikeFill.show();
				iconLike.hide();
				numberLike.text(+numberLike.text() + 1);
				flagLiked = true;
			}
		};
		const handleDislike = (liked) => {
			if (liked) {
				iconDislikeFill.hide();
				iconDislike.show();
				numberDislike.text(+numberDislike.text() - 1);
				flagDislike = false;
			} else {
				iconDislikeFill.show();
				iconDislike.hide();
				numberDislike.text(+numberDislike.text() + 1);
				flagDislike = true;
			}
		};

		btnLike.on('click', () => {
			if (flagDislike) {
				handleDislike(flagDislike);
			}
			handleLike(flagLiked);
		});

		btnDislike.on('click', () => {
			if (flagLiked) {
				handleLike(flagLiked);
			}
			handleDislike(flagDislike);
		});

		btnShare.on('click', () => {
			copyToClipboard('#copy');
		});
	},

	init() {
		this.renderVideoDetail();
		this.renderListVideo();
		this.renderInfoVideo();
		this.handleJavaScript();
		tippyShow({
			selector: '[data-tippy-content]',
		});
	},
};

videoDetail.init();
