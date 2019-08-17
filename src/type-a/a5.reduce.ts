/*
 * Задача a5: Создайте собственную реализацию функции reduce().
 * Напишите тесты.
 */
<<<<<<< HEAD
export function reduce(arr: number[], func: (a: number, b: number) => number, initial: number): number {
	
		let initNum: number = initial;
		
		for (let i = 0; i < arr.length; i++) {
		initNum = func(initNum, arr[i]);
		}	
	return initNum;
}
=======

>>>>>>> 55b2e7aa7f884bcc5b7b170ee1186a759aa8d443
/*
	Примеры:

	reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
*/
