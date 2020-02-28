/*
 * A2: Write function fib(), that return n-th number Fibonacci.
 * Write with using memoization.
 */
export function fib(value: number): number {
	let acc: { [key: string]: number } = {};

	const fibInner = function(aValue: number): number {
		if (aValue === 0 || aValue === 1) {
			return aValue;
		}

		if (!acc[aValue]) {
			acc[aValue] = fibInner(aValue - 1) + fibInner(aValue - 2);
		}

		return acc[aValue];
	};

	return fibInner(value);
}

describe('fib', () => {
	it('should return 1 when arg is 0', () => {
		expect(fib(0)).toBe(0);
	});

	it('should return 1 when arg is 1', () => {
		expect(fib(1)).toBe(1);
	});

	it('should return 55 when arg is 10', () => {
		expect(fib(10)).toBe(55);
	});

	it('should return 6765 when arg is 20', () => {
		expect(fib(20)).toBe(6765);
	});
});
