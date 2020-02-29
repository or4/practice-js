/*
 * A1: Write functiona factorial(), that return factorial number arg.
 */
export function factorial(value: number): number {
	if (value === 0 || value === 1) {
		return 1;
	}

	let sum = 1;

	for (let index = 2; index <= value; index++) {
		sum *= index;
	}

	return sum;
}

describe('factorial', () => {
	it('should return 1 when arg is 0', () => {
		expect(factorial(0)).toBe(1);
	});

	it('should return 1 when arg is 1', () => {
		expect(factorial(1)).toBe(1);
	});

	it('should return 24 when arg is 4', () => {
		expect(factorial(4)).toBe(24);
	});

	it('should return 720 when arg is 6', () => {
		expect(factorial(6)).toBe(720);
	});
});
