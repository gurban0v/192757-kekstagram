function getMessage (a, b){
	if (typeof a === 'boolean'){
		if(a){
			return '"Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		} else {
			return 'Переданное GIF-изображение не анимировано';
		}
	} else if (typeof a === 'number') {
		return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
	} else if (Array.isArray(a)) {
        if (Array.isArray(b)) {
            return 'Общая площадь артефактов сжатия: ' + getArrayMultiplying(a, b) + ' пикселей';
        } else {
            return 'Количество красных точек во всех строчках изображения: ' + getArraySum(a);
        }
    }
}

function getArraySum (a){
	//сумма значений переданного массива
	var sum = null;
    for (var i = 0; i < a.length; i++){
    	sum += a[i];
    }
    return sum;
}

function getArrayMultiplying (a, b){
	//это сумма произведений соответствующих элементов массивов a и b,
    //cумма произведения первого элемента a с первым элементом b, второго со вторым и так далее
    var square = null;
    for (var i = 0; i < a.length; i++){
    	square += a[i] * b[i];
    }
    return square;
}