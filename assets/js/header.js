import './jquery.js';
import keyboardVirtual from './keyboardVirtual.js';

const headerNode = $('.header');
const headerMiddleNode = $('.header__middle');
const inputSearch = $('.header__middle-input-search#input-search');
const spaceHeaderMiddle = $('.header__middle-space');
const btnDeleteValueInput = $('.btn-delete-text');
const btnMenuHeader = $('.header__left-btn-menu');
const btnSearchMobile = $('#btn-search-mobile');
const btnComeBack = $('.icon-comeback');
const sidebar = $('.sidebar');
const contain = $('.contain');
const overlay = $('#overlay');

const keyboardVirtualNode = $('.header-middle__keyboard');
const simpleKeyboard = $('.simple-keyboard');
const wrapperKeyboard = $('.keyboard-virtual');
const btnCloseKeyboard = $('.keyboard-virtual__close');

const header = {
	handleInputSearch() {
		// handle inputSearch focus
		inputSearch.focus((e) => {
			// show icon search when focus
			spaceHeaderMiddle.css({
				paddingRight: 0,
			});
		});

		// handle inputSearch blur
		inputSearch.blur((e) => {
			// hidden icon search when blur
			spaceHeaderMiddle.css({
				paddingRight: '39px',
			});
		});
	},

	handleKeyboardVirtual() {
		keyboardVirtual({
			wrapperKeyboard,
			inputSearch,
			keyboardVirtualNode,
			simpleKeyboard,
			btnClose: btnCloseKeyboard,
		});
	},

	handleClickBtnDeleteText() {
		btnDeleteValueInput.click(() => {
			inputSearch.focus();
			inputSearch.val('');
		});
	},

	handleClickBtnMenu() {
		btnMenuHeader.click(() => {
			sidebar.toggleClass('sidebar--active');
			contain.toggleClass('sidebar--active');
			overlay.hide();
			if ($(window).width() < 1350 && sidebar.hasClass('sidebar--active')) {
				overlay.show();
			}
		});
	},

	handleClickOverlay() {
		overlay.click((e) => {
			if (overlay.is(':visible')) {
				overlay.hide();
			}
			sidebar.toggleClass('sidebar--active');
			contain.toggleClass('sidebar--active');
		});
	},

	handleClickBtnSearchMobile() {
		btnSearchMobile.click(() => {
			headerMiddleNode.addClass('important-flex header__middle-mobile');
		});

		btnComeBack.click(() => {
			headerMiddleNode.removeClass('important-flex header__middle-mobile');
		});
	},

	init() {
		this.handleInputSearch();
		this.handleKeyboardVirtual();
		this.handleClickBtnDeleteText();
		this.handleClickBtnMenu();
		this.handleClickOverlay();
		this.handleClickBtnSearchMobile();
	},
};

header.init();
