/*
 * A3: Write function isSorted() that return true or false when sorted or not number array.
 */
export function isSorted(array: number[]): boolean {
	if (array.length < 2) {
		return true;
	}

	for (let index = 0; index < array.length; index++) {
		if (array[index] - array[index - 1] < 0) {
			return false;
		}
	}

	return true;
}

describe('isSorted', () => {
	it('should return true when arg is []', () => {
		expect(isSorted([0])).toBe(true);
	});

	it('should return true when arg is [0]', () => {
		expect(isSorted([0])).toBe(true);
	});

	it('should return true when arg is [-Infinity, -5, 0, 3, 9]', () => {
		expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
	});

	it('should return false when arg is [3, 9, -3, 10]]', () => {
		expect(isSorted([3, 9, -3, 10])).toBe(false);
	});
});
