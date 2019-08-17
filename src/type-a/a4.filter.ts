/*
 * Задача a4: Создайте собственную реализацию функции filter().
 * Напишите тесты.
 */
export function filter(arr: number[], func: (item: number) => boolean): number[] {
	let newArr: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

/*
	Примеры:

	filter([1, 2, 3, 4], n => n < 3) // [1, 2]
*/
