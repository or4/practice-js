import { isSorted } from './a3.isSorted';

describe('Testing isSorted', () => {
	it('should true', () => {
		expect(isSorted([])).toEqual(true);
	});
	it('should true', () => {
		expect(isSorted([-Infinity, -5, 0, 3, 9])).toEqual(true);
	});
	it('should false', () => {
		expect(isSorted([3, 9, -3, 10])).toEqual(false);
	});
});
