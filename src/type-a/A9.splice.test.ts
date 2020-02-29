/*
 * A9: Write own function splice()
 */
export function splice(array: number[], startIndex: number, deleteCount: number, ...addValues: number[]): number[] {
	const startArray = array.slice(0, startIndex);
	const endArray = array.slice(startIndex + deleteCount);
	const deletedItems = array.slice(startIndex, startIndex + deleteCount);

	array.length = 0;

	Array.prototype.push.apply(array, [...startArray, ...addValues, ...endArray]);

	return deletedItems;
}

describe('splice', () => {
	let array: number[];
	let expectedArray: number[];

	beforeEach(() => {
		array = [1, 2, 3, 4];
		expectedArray = [...array];
	});

	it('should delete items', () => {
		const resultValue = splice(array, 1, 2);

		const expectedValue = expectedArray.splice(1, 2);

		expect(resultValue).toEqual(expectedValue);
		expect(array).toEqual(expectedArray);
	});

	it('should add items in the center position', () => {
		const resultValue = splice(array, 1, 0, 77, 88);

		const expectedValue = expectedArray.splice(1, 0, 77, 88);

		expect(resultValue).toEqual(expectedValue);
		expect(array).toEqual(expectedArray);
	});

	it('should add items in the begin position', () => {
		const resultValue = splice(array, 0, 0, 77, 88);

		const expectedValue = expectedArray.splice(0, 0, 77, 88);

		expect(resultValue).toEqual(expectedValue);
		expect(array).toEqual(expectedArray);
	});

	it('should add items in the end position', () => {
		const resultValue = splice(array, array.length, 0, 77, 88);

		const expectedValue = expectedArray.splice(expectedArray.length, 0, 77, 88);

		expect(resultValue).toEqual(expectedValue);
		expect(array).toEqual(expectedArray);
	});

	it('should work with all params', () => {
		const resultValue = splice(array, 2, 3, 1, 2, 3, 4, 5);

		const expectedValue = expectedArray.splice(2, 3, 1, 2, 3, 4, 5);

		expect(resultValue).toEqual(expectedValue);
		expect(array).toEqual(expectedArray);
	});
});
