import keyboardVirtual from "./keyboardVirtual.js";

const inputSearch = $(".header__middle-input-search#input-search");
const spaceHeaderMiddle = $(".header__middle-space");

const keyboardVirtualNode = $(".header-middle__keyboard");
const simpleKeyboard = $(".simple-keyboard");
const wrapperKeyboard = $(".keyboard-virtual");
const btnCloseKeyboard = $(".keyboard-virtual__close");

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
				paddingRight: "39px",
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

	init() {
		this.handleInputSearch();
		this.handleKeyboardVirtual();
	},
};

header.init();
