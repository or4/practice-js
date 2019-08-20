import { factorial } from './a1.factorial';

describe('Testing factorial', () => {
	it('should 720', () => {
		expect(factorial(6)).toEqual(720);
	});
});
