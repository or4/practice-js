/*
 * A5: Create function reduce().
 */
export function reduce(array: number[], func: (acc: number, item: number) => number, initValue: number): number {
	let acc: number = initValue;

	for (let index = 0; index < array.length; index++) {
		acc = func(acc, array[index]);
	}

	return acc;
}

describe('reduce', () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	it('should return sum of array', () => {
		expect(reduce(array, (acc, item) => acc + item, 0)).toBe(55);
	});

	it('should return max value of array', () => {
		expect(reduce(array, (acc, item) => Math.max(acc, item), 0)).toBe(10);
	});
});
