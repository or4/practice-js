import { filter } from './a4.filter';

describe('Testing filter', () => {
	it('should [1, 2]', () => {
		expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2]);
	});
	it('should [3, 4]', () => {
		expect(filter([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
	});
});
