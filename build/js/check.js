function getMessage(a,b) {
	if(typeof a === 'boolean') {
		if(a){
			return 'Переданное GIF-изображение анимировано и содержит' + b + 'кадров'; 
		}else{
		return 'Переданное GIF-изображение не анимировано';
	}
	if(typeof a === 'number') {
		return 'Переданное SVG-изображение содержит' + a + 'объектов и ' + b * 4 + 'атрибутов';
	}


	if(a instanceof Array && !(b instanceof Array) {
		var sum = 0;
		aLength = a.length;
		for (var i = 0; i < aLength - 1; i++) {
			sum += a[i];
		}
		return 'Количество красных точек во всех строчках изображения: ' + sum;
	}

	if(a instanceof Array && b instanceof Array){
		var square = 0;
		for(var i = 0; i < a.length; i++){
			square += (a[i]*b[i]);
		}

		return 'Общая площадь артефактов сжатия: ' + square + 'пикселей';
	}
};