const arr = [1, 2, 3, 4, 6, 8, 12, 13, 15]; // sorted array

// ​TODO:​ find two numbers which sum === value
function findNumbers(value: number) {
	for (let currentIndex = 1; currentIndex < arr.length; currentIndex++) {
		for (let index = 0; index < currentIndex; index++) {
			if (arr[index] + arr[currentIndex] === value) {
				return { index1: index, index2: currentIndex };
			}
		}
	}

	return null;
}

describe('findNumbers', () => {
	it('should work', () => {
		const result = findNumbers(5);

		expect(result).toEqual({ index1: 1, index2: 2 });
	});
});
