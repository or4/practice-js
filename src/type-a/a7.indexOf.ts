/*
 * Задача a7: Создайте собственную реализацию функции indexOf() для массивов.
 * Напишите тесты.
 */
export function indexOf(arr: any[], item: any): number {
	for (let i = 0; i < arr.length; i++) {
		if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
			return i;
		}
	}

	return -1;
}
/*
	Примеры:

	indexOf([1, 2, 3], 1) // 0
	indexOf([1, 2, 3], 4) // -1
*/
