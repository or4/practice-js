import { sum } from './task-2.sum';

describe('Testing sum with a lot arguments', () => {
	it('should 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});

	it('should 7', () => {
		expect(sum(3, 4, '5', { a: NaN }, null)).toEqual(7);
	});
});
