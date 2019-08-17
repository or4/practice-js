import { isPalindrome } from './a8.isPalindromee';

describe('Testing isPalindrome', () => {
	it('should true', () => {
		expect(isPalindrome('')).toEqual(true);
    });

    it('should "abcdcba"', () => {
		expect(isPalindrome('abcdcba')).toEqual(true);
    });
    
    it('should "abcd"', () => {
		expect(isPalindrome('abcd')).toEqual(false);
    });
    
    it('should "A man a plan a canal Panama"', () => {
		expect(isPalindrome('A man a plan a canal Panama')).toEqual(true);
	});
});
