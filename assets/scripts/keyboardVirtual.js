const keyboardVirtual = ({ wrapperKeyboard, inputSearch, keyboardVirtualNode, simpleKeyboard, btnClose }) => {
	const defaultTheme = 'hg-theme-default';

	const Keyboard = window.SimpleKeyboard.default;
	const myKeyboard = new Keyboard({
		theme: defaultTheme,
		onChange: (input) => onChange(input),
		onKeyPress: (button) => onKeyPress(button),
		display: {
			'{enter}': 'Enter',
			'{bksp}': 'Backspace',
			'{shift}': 'Shift',
			'{tab}': 'Tab',
			'{lock}': 'Capslock',
			'{space}': '      ',
		},
		layout: {
			default: [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				"{lock} a s d f g h j k l ; ' {enter}",
				'{shift} z x c v b n m , . / {shift}',
				'.com @ {space}',
			],
			shift: [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'{lock} A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'.com @ {space}',
			],
			caps: [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} Q W E R T Y U I O P [ ] \\',
				"{lock} A S D F G H J K L ; ' {enter}",
				'{shift} Z X C V B N M , . / {shift}',
				'.com @ {space}',
			],
		},
		useMouseEvents: true,
		newLineOnEnter: false,
		tabCharOnTab: true,
		preventMouseDownDefault: true,
	});

	/**
	 * Keyboard show toggle
	 */
	keyboardVirtualNode.on('click', (event) => {
		event.stopPropagation();
		if (
			/**
			 * Hide the keyboard when you're not clicking it or when clicking an input
			 * If you have installed a "click outside" library, please use that instead.
			 */
			myKeyboard.options.theme.includes('show-keyboard') &&
			simpleKeyboard.attr('class').includes('simple-keyboard')
		) {
			hideKeyboard();
		} else {
			showKeyboard();
		}
	});

	/**
	 * Update simple-keyboard when input is changed directly
	 */
	inputSearch.on('input propertychange', (event) => {
		myKeyboard.setInput(event.target.value);
	});

	btnClose.click((e) => {
		hideKeyboard();
	});

	function handleShift() {
		let currentLayout = myKeyboard.options.layoutName;
		let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

		myKeyboard.setOptions({
			layoutName: shiftToggle,
		});
	}

	function onKeyPress(button) {
		inputSearch.focus();
		/**
		 * Shift functionality
		 */
		if (button === '{shift}') handleShiftButton();

		/**
		 * Caps functionality
		 */
		if (button === '{lock}') handleCapsButton();
	}

	function handleShiftButton() {
		let currentLayout = myKeyboard.options.layoutName;
		let shiftToggle = currentLayout === 'shift' ? 'default' : 'shift';

		myKeyboard.setOptions({
			layoutName: shiftToggle,
		});
	}

	function handleCapsButton() {
		let currentLayout = myKeyboard.options.layoutName;
		let shiftToggle = currentLayout === 'caps' ? 'default' : 'caps';

		myKeyboard.setOptions({
			layoutName: shiftToggle,
		});
	}

	function onChange(input) {
		inputSearch.val(input);
	}

	/**
	 * Keyboard show
	 */

	function showKeyboard() {
		inputSearch.focus();
		wrapperKeyboard.css({
			display: 'inline-block',
		});
		myKeyboard.setOptions({
			theme: `${defaultTheme} show-keyboard`,
		});
	}

	function hideKeyboard() {
		wrapperKeyboard.css({
			display: 'none',
		});
		inputSearch.blur();
		myKeyboard.setOptions({
			theme: defaultTheme,
		});
	}
};

export default keyboardVirtual;
