const hash = (value: number) => value;

export function optimizedRemoveDuplicates(array: number[]) {
	const uniqueElements: number[] = [];
	const output: number[] = [];

	array.forEach(element => {
		const hashValue = hash(element);

		if (!uniqueElements[hashValue]) {
			uniqueElements[hashValue] = 1;
			output.push(element);
		}
	});

	return output;
}

describe('optimizedRemoveDuplicates', () => {
	it('should work', () => {
		const array = [1, 1, 3, 4, 3, 8, 12, 13, 15];
		const result = optimizedRemoveDuplicates(array);

		expect(result).toEqual([1, 3, 4, 8, 12, 13, 15]);
	});
});
