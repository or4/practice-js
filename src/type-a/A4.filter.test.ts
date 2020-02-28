/*
 * A4: Write own function filter().
 */
export function filter(array: number[], func: (item: number) => boolean): number[] {
	let output: number[] = [];

	for (let index = 0; index < array.length; index++) {
		func(array[index]) && output.push(array[index]);
	}

	return output;
}

describe('filter', () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	it('should return [1,2,3] when predicate is less 4', () => {
		expect(filter(array, item => item < 4)).toEqual([1, 2, 3]);
	});

	it('should return [4] when predicate is equal 4', () => {
		expect(filter(array, item => item === 4)).toEqual([4]);
	});
});
