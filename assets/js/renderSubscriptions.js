import './jquery.js';
import videos from '../data/video.js';
const idRender = $('#subscriptions-video');

const renderSubscriptions = {
	dataVideo: [...videos],

	renderVideo() {
		idRender.html(
			this.dataVideo.map(
				(video) => /*html*/ `
          <div class="max-w-[1070px] ml-auto mr-auto first:mt-[80px] mt-[20px] border-b border-[#0000001a] pb-[40px]">
            <div class="flex items-center">
              <img src="${video.imgChanel}" class="w-[32px] rounded-[50%] mr-[10px]" alt="${video.title}"/>
              <p class="text-[#030303] text-[16px] font-[500] truncate">${video.chanel}</p>
            </div>
            <div class="mt-[20px] flex">
              <div class="w-[246px]">
                <img src="${video.srcImg}" class="w-full"/>
              </div>
              <div class="ml-5">
                  <h3 class="max-h-[52px] max-w-[500px] w-100 text-[18px] font-[400] text-ellipsis overflow-hidden line-clamp-2">${video.title}</h3>
                  <p class="text-[#606060] truncate text-[12px] mt-[10px]">${video.chanel}</p>
                  <div class="flex">
                      <p class="text-[#606060] truncate text-[12px] mt-[6px]">${video.views}</p>
                      <p class="text-[#606060] truncate text-[12px] mt-[6px] ml-3">${video.timeUpload}</p>
                  </div>
              </div>
            </div>
          </div>
        `
			)
		);
	},

	init() {
		this.renderVideo();
	},
};

renderSubscriptions.init();
