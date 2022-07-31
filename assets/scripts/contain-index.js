const btnMenuHeader = $('.header__left-btn-menu');
const containType = $('.contain__type');
const containTypeItem = $('.contain__type-item');

const containIndex = {
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
	init() {
		this.handleSidebarActive();
		this.handleClickType();
	},
};

containIndex.init();
