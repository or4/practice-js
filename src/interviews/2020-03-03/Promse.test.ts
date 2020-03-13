const fetchUrl = (url: string) => Promise.resolve(`value: ${url}`);

function promiseAll(urls: string[], cb: (data: string[]) => void) {
	const output: string[] = [];

	urls.map(url =>
		fetchUrl(url).then(data => {
			output.push(data);

			if (output.length === urls.length) {
				cb(output);
			}
		}),
	);
}

describe('promiseAll', () => {
	it('should return data', done => {
		const urls = ['ya.ru/1', 'ya.ru/2', 'ya.ru/3'];

		const cb = (data: string[]) => {
			expect(data).toEqual(['value: ya.ru/1', 'value: ya.ru/2', 'value: ya.ru/3']);
			done();
		};

		promiseAll(urls, cb);
	});
});
