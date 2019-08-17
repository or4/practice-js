/*
 * Задача a7: Создайте собственную реализацию функции indexOf() для массивов.
 * Напишите тесты.
 */
export function indexOf(arr: number[], item: number): number {
	let index: number = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			index = i;
		}
	}
	return index;	
}
/*
	Примеры:

	indexOf([1, 2, 3], 1) // 0
	indexOf([1, 2, 3], 4) // -1
*/
