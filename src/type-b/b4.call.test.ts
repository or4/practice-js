import { maxCall } from './b4.call';

describe('Testing max', () => {
	it('should 555', () => {
		expect(maxCall(4, 5, 3, 1, 3, 555, 3, 5, 6)).toEqual(555);
	});
	it('should 3', () => {
		expect(maxCall(3, 3, 3)).toEqual(3);
	});
	it('should -1', () => {
		expect(maxCall(-1, -10, -34, -4, -22)).toEqual(-1);
	});
});
