const btnMenuHeader = $('.header__left-btn-menu');
const containType = $('.contain__type');
const containTypeItem = $('.contain__type-item');
const containVideos = $('#contain-videos');

const containIndex = {
	dataVideo: [
		{
			srcImg: './assets/img/video/i1.webp',
			imgChanel: './assets/img/video/i1-avt.jpg',
			time: '12:52',
			title: 'Quá nhiều hướng đi khi bắt đầu học lập trình, nên chọn hướng nào, công ty nào? | Vũ Nguyễn Coder của Vũ Nguyễn Coder 2 tháng trước 12 phút, 52 giây 72.442 lượt xem',
			chanel: 'Vũ Nguyễn Coder',
			views: '72 N lượt xem',
			timeUpload: '2 tháng trước',
		},
		{
			srcImg: './assets/img/video/i2.webp',
			imgChanel: './assets/img/subscribeChannel/s2.jpg',
			time: '25:10',
			title: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
			chanel: 'F8 Official',
			views: '246 N lượt xem',
			timeUpload: '1 năm trước',
		},
		{
			srcImg: './assets/img/video/i3.webp',
			imgChanel: './assets/img/subscribeChannel/s10.jpg',
			time: '21:06',
			title: 'Luồng nhập và Bộ đệm',
			chanel: 'Huy Nguyen Mai',
			views: '135 lượt xem',
			timeUpload: '5 tháng trước',
		},
		{
			srcImg: './assets/img/video/i4.webp',
			imgChanel: './assets/img/subscribeChannel/s3.jpg',
			time: '10:04',
			title: 'Làm sao để cải thiện UI/UX cho Developer ?',
			chanel: 'evondev',
			views: '10 N lượt xem',
			timeUpload: '1 năm trước',
		},
		{
			srcImg: './assets/img/video/i5.webp',
			imgChanel: './assets/img/subscribeChannel/s6.jpg',
			time: '10:25',
			title: '3027 - Angular 12 - QR Code - Chèn thêm thông tin vào QR Code - Ứng dụng gì ...',
			chanel: 'Code là Ghiền',
			views: '587 lượt xem',
			timeUpload: '8 tháng trước',
		},
		{
			srcImg: './assets/img/video/i6.webp',
			imgChanel: './assets/img/subscribeChannel/s5.jpg',
			time: '1:10:25',
			title: 'How To Create The YouTube Video Player',
			chanel: 'web dev simplified',
			views: '72 N lượt xem',
			timeUpload: '2 tháng trước',
		},
		{
			srcImg: './assets/img/video/i7.webp',
			imgChanel: './assets/img/subscribeChannel/s9.jpg',
			time: '1:06:05',
			title: 'Industry Level REST API using .NET 6 – Tutorial for Beginners',
			chanel: 'freeCodeCamp.org',
			views: '42 N lượt xem',
			timeUpload: '4 ngày trước',
		},
		{
			srcImg: './assets/img/video/i8.webp',
			imgChanel: './assets/img/subscribeChannel/s7.jpg',
			time: '12:21:23',
			title: 'JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)',
			chanel: 'Clever Programmer',
			views: '220 N lượt xem',
			timeUpload: '1 tháng trước',
		},
		{
			srcImg: './assets/img/video/i9.webp',
			imgChanel: './assets/img/subscribeChannel/s1.jpg',
			time: '19:01',
			title: '[Guitar]Hướng dẫn: Bước qua nhau-Vũ.',
			chanel: 'Hiển Râu',
			views: '178 N lượt xem',
			timeUpload: '8 tháng trước',
		},
		{
			srcImg: './assets/img/video/i10.webp',
			imgChanel: './assets/img/subscribeChannel/s4.jpg',
			time: '19:01',
			title: 'TẠI SAO không nên dùng Index làm Key trong React???',
			chanel: 'HoleTex',
			views: '7,6 N lượt xem',
			timeUpload: '2 tuần trước',
		},
		{
			srcImg: './assets/img/video/i11.webp',
			imgChanel: './assets/img/subscribeChannel/s8.jpg',
			time: '1:02:36',
			title: 'Python Django Tutorial for Beginners',
			chanel: 'Programming with Mosh',
			views: '933 N lượt xem',
			timeUpload: '1 năm trước',
		},
		{
			srcImg: './assets/img/video/i12.webp',
			imgChanel: './assets/img/subscribeChannel/s2.jpg',
			time: '13:03',
			title: 'useEffect with dependencies | React hooks 2021',
			chanel: 'F8 Official',
			views: '22 N lượt xem',
			timeUpload: '9 tháng trước',
		},
		{
			srcImg: './assets/img/video/i13.webp',
			imgChanel: './assets/img/subscribeChannel/s1.jpg',
			time: '17:24',
			title: '[Guitar] Palm xập xình với: Bên trên tầng lầu - Tăng Duy Tân',
			chanel: 'Hiển Râu',
			views: '26 N lượt xem',
			timeUpload: '9 ngày trước',
		},
		{
			srcImg: './assets/img/video/i14.webp',
			imgChanel: './assets/img/subscribeChannel/s3.jpg',
			time: '14:58',
			title: 'Destructuring cơ bản trong Javascript mà bạn nên biết',
			chanel: 'evondev',
			views: '2,1 N lượt xem',
			timeUpload: '1 tháng trước',
		},
		{
			srcImg: './assets/img/video/i15.webp',
			imgChanel: './assets/img/subscribeChannel/s10.jpg',
			time: '12:45',
			title: '14 :: Chức năng giỏ hàng - Phần 01',
			chanel: 'Huy Nguyen Mai',
			views: '430 lượt xem',
			timeUpload: '5 tháng trước',
		},
		{
			srcImg: './assets/img/video/i16.webp',
			imgChanel: './assets/img/subscribeChannel/s5.jpg',
			time: '45:22',
			title: 'Build Real Time Face Detection With JavaScript',
			chanel: 'Web Dev Simplified',
			views: '1,2 Tr lượt xem',
			timeUpload: '3 năm trước',
		},
	],
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
				({ title, srcImg, imgChanel, time, chanel, views, timeUpload }) => /*html*/ `
			<div class="col col-12 col-sm-6 col-md-4 col-xl-3">
			<div class="card-wrapper cursor-pointer">
			  <div class="card w-100">
				<a href="#" class="position-relative text-decoration-none">
				  <img
					src="${srcImg}"
					class="card-img-top img-video" alt="...">
				  <div class="time-video position-absolute bottom-0 end-0">${time}</div>
				</a>
				<div class="card-body">
				  <div class="card-body-inner">
					<div class="card-body-avt">
					  <img
						src="${imgChanel}"
						alt="${chanel}">
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

containIndex.init();
