import { reduce } from './a5.reduce';

describe('Testing filter', () => {
	it('should 10', () => {
		expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toEqual(10);
    });
    it('should 120', () => {
		expect(reduce([1, 2, 3, 4], (a, b) => a * b, 5)).toEqual(120);
	});
});
