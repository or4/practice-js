import { compress } from './c6.compress';

describe('Testing conmpress function', () => {
	it('should 0, 2, 4, 6, 11-12, 16', () => {
		expect(compress([0, 2, 4, 6, 11, 12, 16])).toEqual('0, 2, 4, 6, 11-12, 16');
	});

	it('should 1-4, 6-7, 11-12, 16', () => {
		expect(compress([1, 2, 3, 4, 6, 7, 11, 12, 16])).toEqual('1-4, 6-7, 11-12, 16');
	});
	it('should 4', () => {
		expect(compress([4])).toEqual('4');
	});
	it('should "" ', () => {
		expect(compress([])).toEqual('');
	});
});
