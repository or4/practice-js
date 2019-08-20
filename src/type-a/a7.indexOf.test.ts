import { indexOf } from './a7.indexOf';

describe('Testing indexOf', () => {
	it('should 0', () => {
		expect(indexOf([1, 2, 3], 1)).toEqual(0);
	});
	it('should -1', () => {
		expect(indexOf([1, 2, 3], 4)).toEqual(-1);
	});
	it('should 0', () => {
		expect(indexOf([{ a: 1 }, { b: 2 }, { c: 3 }], { a: 1 })).toEqual(0);
	});
});
