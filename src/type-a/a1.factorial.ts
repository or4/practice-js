/*
 * Задача a1: Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
 * Напишите тесты.
 */
export function factorial(value: number): number {
<<<<<<< HEAD
	if (value === 0) {
		return 1;
	} 
	
	let val = 1;
	for (let i = 1; i <= value; i++) {
		val *= i;
	}

	return val;
}


=======
	return value;
}

>>>>>>> 55b2e7aa7f884bcc5b7b170ee1186a759aa8d443
/*
	Примеры:

	factorial(0); // 1
	factorial(1); // 1
	factorial(6); // 720
*/
