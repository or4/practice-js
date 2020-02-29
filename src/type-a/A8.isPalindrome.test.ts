/*
 * A8: Write function isPalindrome(), that return true or false depending is the string a palindrom
 * function is not sensitive for uppercase and lowercase and is not sensitive to exists spaces
 */
export function isPalindrome(input: string): boolean {
	const string = input.toLowerCase().replace(/ /g, '');
	const reversed = string
		.split('')
		.reverse()
		.join('');

	return string === reversed;
}

describe('isPalindrome', () => {
	it('should return true for empty string', () => {
		const str = '';

		expect(isPalindrome(str)).toBe(true);
	});

	it('should return true for `abcdcba`', () => {
		const str = 'abcdcba';

		expect(isPalindrome(str)).toBe(true);
	});

	it('should return false for `abcd`', () => {
		const str = 'abcd';

		expect(isPalindrome(str)).toBe(false);
	});

	it('should return false for `abcd`', () => {
		const str = 'A man a plan    a canal Panama';

		expect(isPalindrome(str)).toBe(true);
	});
});
