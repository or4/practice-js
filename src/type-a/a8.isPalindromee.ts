/*
 * Задача a8: Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того,
 * является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
 * Напишите тесты.
 */
export function isPalindrome(str: string): boolean {
	let strReverse: string = Array.from(str.toLowerCase().replace(/\s+/g, '')).reverse().join('');

	if (str.toLowerCase().replace(/\s+/g, '') === strReverse) return true;
	return false;
}
/*
	Примеры:

	isPalindrome('') // true
	isPalindrome('abcdcba') // true
	isPalindrome('abcd') // false
	isPalindrome('A man a plan a canal Panama') // true
*/
