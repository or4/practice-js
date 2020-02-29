/*
 * A6: Write reverse(), that reverse symbols of string.
 */
export function reverse(input: string): string {
	const array = input.split('');
	const output = [];

	for (let index = 0; index < array.length; index++) {
		output.unshift(array[index]);
	}

	return output.join('');
}

describe('reverse', () => {
	const str = 'hello world!';

	it('should return empty string', () => {
		expect(reverse('')).toBe('');
	});

	it('should return reversed string', () => {
		expect(reverse(str)).toBe('!dlrow olleh');
	});
});
