import { reverse } from './a6.reverse';

describe('Testing reverse', () => {
	it('should ""', () => {
		expect(reverse('')).toEqual('');
    });
    it('should "fedcba"', () => {
		expect(reverse('abcdef')).toEqual('fedcba');
	});
});
