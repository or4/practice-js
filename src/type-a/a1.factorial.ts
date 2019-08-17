/*
 * Задача a1: Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
 * Напишите тесты.
 */
export function factorial(value: number): number {
	if (value === 0) {
		return 1;
	} 
	
	let val = 1;
	for (let i = 1; i <= value; i++) {
		val *= i;
	}

	return val;
}


/*
	Примеры:

	factorial(0); // 1
	factorial(1); // 1
	factorial(6); // 720
*/
