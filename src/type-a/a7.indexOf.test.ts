import { indexOf } from './a7.indexOfArr';

describe('Testing indexOf', () => {
	it('should 0', () => {
		expect(indexOf([1, 2, 3], 1)).toEqual(0);
    });
    it('should -1', () => {
		expect(indexOf([1, 2, 3], 4)).toEqual(-1);
	});
});
