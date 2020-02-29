/*
 * A7: Write own function indexOf() for array.
 */
export function indexOf(array: number[], value: number): number {
	for (let index = 0; index < array.length; index++) {
		if (array[index] === value) {
			return index;
		}
	}

	return -1;
}

describe('indexOf', () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	it('should not found item and return -1', () => {
		expect(indexOf(array, 31)).toBe(-1);
	});

	it('should return index of value', () => {
		expect(indexOf(array, 3)).toBe(2);
	});
});
