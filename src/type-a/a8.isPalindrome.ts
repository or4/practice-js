/*
 * Задача a8: Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того,
 * является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
 * Напишите тесты.
 */
export function isPalindrome(str: string): boolean {
	const strForComparison: string = str.toLowerCase().replace(/\s/g, '');
	const strReverse: string = Array.from(strForComparison)
		.reverse()
		.join('');

	return strForComparison === strReverse;
}
/*
	Примеры:

	isPalindrome('') // true
	isPalindrome('abcdcba') // true
	isPalindrome('abcd') // false
	isPalindrome('A man a plan a canal Panama') // true
*/
