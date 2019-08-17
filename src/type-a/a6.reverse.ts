/*
 * Задача a6: Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
 * Не пользуйтесь встроенной функцией reverse().
 * Напишите тесты.
 */
export function reverse(str: string): string {
	let newArr: any = [];
	let strArr = str.split('');
	for (let i = strArr.length - 1; i >= 0; i--) {
		newArr.push(strArr[i]);
		console.log(strArr[i])
	}
	let newStr: string = newArr.join('');
	return newStr;
}
/*
	Примеры:

	reverse('') // ''
	reverse('abcdef') // 'fedcba'
*/
