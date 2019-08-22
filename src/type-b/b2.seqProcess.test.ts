import { maxWithRest } from './b3.max';

describe('Testing max', () => {
	it('should 555', () => {
		expect(maxWithRest(4, 5, 3, 1, 3, 555, 3, 5, 6)).toEqual(555);
	});
	it('should 3', () => {
		expect(maxWithRest(3, 3, 3)).toEqual(3);
	});
	it('should -1', () => {
		expect(maxWithRest(-1, -10, -34, -4, -22)).toEqual(-1);
	});
});
