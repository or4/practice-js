/*
 * Задача c7: mapLimit
 * Есть массив url, есть функция fetch, которая возвращает промис
 * Есть ограничение по количеству параллельно запущеных request'ов
 * Нужно отправлять запросы ПАРАЛЕЛЛЬНО, при выполнении одного
 * из запросов делать еще один запрос, пока не выполнятся все запросы
 * Результат вернуть в том же порядке, что список url
 * Например, есть 10 url, отправляются 5, как только один из промисов резолвится, в pending'e остаются еще 4,
 * делается fetch следующего из массива url, таким образом, опять пять запросов в pending'e
 * Когда все запросы обработаны, функция возвращает массив с резульататами.
 * Напишите тесты.
 */

const fetch = async (url: string) =>
	new Promise(resolve => {
		resolve(`data: ${url}`);
	});

export function mapLimit(urls: string[], limit = 5) {
	return new Promise(resolove => {
		const output: unknown[] = [];

		const firstUrls = urls.slice(0, limit);
		const restUrls = urls.slice(limit);

		const processUrl = (url: string) => {
			const origUrlIndex: number = urls.indexOf(url);

			fetch(url).then(data => {
				output[origUrlIndex] = data;

				const newUrl = restUrls.shift();

				if (newUrl) {
					processUrl(newUrl);
				} else if (output.length === urls.length) {
					resolove(output);
				}
			});
		};

		for (const url of firstUrls) {
			processUrl(url);
		}
	});
}

describe('mapLimit', () => {
	const urls3 = Array.from(new Array(3)).map((item, index) => `ya.ru/${index + 1}`);
	const urls10 = Array.from(new Array(10)).map((item, index) => `ya.ru/${index + 1}`);

	it('should return promise less limit', () => {
		const promise = mapLimit(urls3);

		expect(promise instanceof Promise).toBe(true);
	});

	it('should return values less limit', async done => {
		const value = await mapLimit(urls3);

		expect(value).toEqual(['data: ya.ru/1', 'data: ya.ru/2', 'data: ya.ru/3']);

		done();
	});

	it('should return values more limit', async done => {
		const value = await mapLimit(urls10);

		expect(value).toEqual([
			'data: ya.ru/1',
			'data: ya.ru/2',
			'data: ya.ru/3',
			'data: ya.ru/4',
			'data: ya.ru/5',
			'data: ya.ru/6',
			'data: ya.ru/7',
			'data: ya.ru/8',
			'data: ya.ru/9',
			'data: ya.ru/10',
		]);

		done();
	});
});
