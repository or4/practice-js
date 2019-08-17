import { fib } from './a2.Fibonacci';

describe('Testing fibonacci', () => {
	it('should 1', () => {
		expect(fib(1)).toEqual(1);
    });
    it('should 55', () => {
		expect(fib(10)).toEqual(55);
    });
    it('should 6765', () => {
		expect(fib(20)).toEqual(6765);
	});
});
