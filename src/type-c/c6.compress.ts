/*
 * Задача c6: Сжатие массива с числами. Есть массив чисел [1,2,3,4,6,7,11,12,16] привести к такой строке 1-4, 6-7, 11-12, 16
 * Напишите тесты.
 */

/*
	Примеры:

	compress([1,2,3,4,6,7,11,12,16]) //  1-4, 6-7, 11-12, 16
*/
// Я вообще не уверен, нормально ли такое решение?)

export function compress(arr: number[]): string {
	let str = arr.length !== 0 ? arr[0] + '' : '';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] === arr[i] + 1 || arr[i + 1] === undefined) {
			continue;
		} else {
			if (arr[i] - arr[i - 1] !== 1) {
				str = str + ', ' + arr[i + 1];
			} else {
				str = str + '-' + arr[i] + ', ' + arr[i + 1];
			}
		}
	}

	return str;
}
