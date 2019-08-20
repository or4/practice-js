/*
 * Задача a3: Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того,
 * отсортирован ли переданный ей числовой массив.
 * Напишите тесты.
 */
export function isSorted(arr: number[]): boolean {
	if (arr.length === 0) return true;

	let arrEntered = arr;
	let arrFotSort = arrEntered.slice(0);

	arrFotSort.sort((a: number, b: number): number => a - b);

	let str1 = arrFotSort.join('');
	let str2 = arrEntered.join('');

	return str1 === str2;
}

/*
	Примеры:

	isSorted([]) // true
	isSorted([-Infinity, -5, 0, 3, 9]) // true
	isSorted([3, 9, -3, 10]) // false
*/
