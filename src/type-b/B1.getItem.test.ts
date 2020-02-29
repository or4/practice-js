/*
 * B1: Write function that get asynchrony data from localstorage
 */
const localStorage = {
	getItem: (key: string) => `${key}-value`,
};

export function getItem(key: string): Promise<string> {
	return new Promise(resolve => {
		const value = localStorage.getItem(key);

		return resolve(value);
	});
}

describe('localStorage async getItem', () => {
	const key = 'test-key';

	it('should return promise', () => {
		const promise = getItem(key);

		expect(promise instanceof Promise).toBe(true);
	});

	it('should return value', async done => {
		const value = await getItem(key);

		expect(value).toBe(`${key}-value`);

		done();
	});
});
