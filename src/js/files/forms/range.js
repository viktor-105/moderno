// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
//import 'nouislider/dist/nouislider.css';


// 	const priceSlider = document.querySelector('#range');
// 	if (priceSlider) {
// 		let textFrom = priceSlider.getAttribute('data-from');
// 		let textTo = priceSlider.getAttribute('data-to');
// 		noUiSlider.create(priceSlider, {
// 			start: 0,// [0,200000]
// 			connect: true,
// 			range: {
// 				'min': [0],
// 				'max': [200000]
// 			}
// 		});
		
// 		const priceStart = document.getElementById('price-start');
// 		const priceEnd = document.getElementById('price-end');
// 		priceStart.addEventListener('change', setPriceValues);
// 		priceEnd.addEventListener('change', setPriceValues);
		
// 		function setPriceValues() {
// 			let priceStartValue;
// 			let priceEndValue;
// 			if (priceStart.value != '') {
// 				priceStartValue = priceStart.value;
// 			}
// 			if (priceEnd.value != '') {
// 				priceEndValue = priceEnd.value;
// 			}
// 			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
// 		}

		
// 	}
// }
// rangeInit();

const rangeSliderInit = () => { // создаем функцию инициализации слайдера
	const range = document.getElementById('range'); // Ищем слайдер
	const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
	const inputMax = document.getElementById('max'); // Ищем input с большим значнием
  
	if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
	const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения
	
	noUiSlider.create(range, { // инициализируем слайдер
		start: [20, 500], // устанавливаем начальные значения
		connect: true, // указываем что нужно показывать выбранный диапазон
		range: { // устанавливаем минимальное и максимальное значения
		  'min': 0,
		  'max': 1000
		},
		step: 1, // шаг изменения значений
	  }
	)
	
	range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
	  inputs[handle].value = parseInt(values[handle]);
	});
	
	inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
	  range.noUiSlider.set([this.value, null]);
	});
	
	inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
	  range.noUiSlider.set([null, this.value]);
	});
	
  }
  
  
	rangeSliderInit() // запускаем функцию инициализации слайдера
  
  
//   window.addEventListener('DOMContentLoaded', init) // запускаем функцию init, когда документ будет загружен и готов к взаимодействию
//   JavaScript
  
