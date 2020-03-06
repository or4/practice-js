/*
 * D2: Write function fetchAll, that return fetch promise of all input urls
 */

const fetch = (url: string): Promise<string> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`data for url: ${url}`);
		}, 100);
	});
};

export function fetchAll(urls: string[]): Promise<string[]> {
	return new Promise(resolve => {
		return resolve(Promise.all(urls.map(fetch)));
	});
}

describe('fetchAll', () => {
	const urls = Array.from(new Array(5)).map((item, index) => `google.com/v${index}`);

	it('should return promise', () => {
		const promise = fetchAll(urls);

		expect(promise instanceof Promise).toBe(true);
	});

	it('should return values', async done => {
		const values = await fetchAll(urls);

		expect(values).toEqual([
			'data for url: google.com/v0',
			'data for url: google.com/v1',
			'data for url: google.com/v2',
			'data for url: google.com/v3',
			'data for url: google.com/v4',
		]);

		done();
	});
});
