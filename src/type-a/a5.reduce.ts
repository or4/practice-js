/*
 * Задача a5: Создайте собственную реализацию функции reduce().
 * Напишите тесты.
 */
export function reduce(arr: any[], func: (a: any, b: any) => any, initial?: any): any {
	if (initial !== undefined) {
		let accum: number = initial;

		for (let i = 0; i < arr.length; i++) {
			accum = func(accum, arr[i]);
		}

		return accum;
	} else {
		let accum: number = arr[0];

		for (let i = 0; i < arr.length - 1; i++) {
			accum = func(accum, arr[i + 1]);
		}

		return accum;
	}
}
/*
	Примеры:

	reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
*/
