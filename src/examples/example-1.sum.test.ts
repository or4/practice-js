import { sum } from './example-1.sum';

describe('Testing sum with 2 arguments', () => {
	it('should 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});
});
