/*
Параллельные асинхронные запросы
Описание
    Есть список ссылок. Необходимо написать функцию, которая опросит их все.
    Количество одновременно выполняемых запросов задаётся параметром.
    После получения всех ответов нужно вызвать обработчик и
    передать в него список ответов в том же порядке, что и список ссылок.

    Функция должна обладать мемоизацией – если в списке есть одинаковые элементы,
    то повторного запроса быть не должно. Ошибки запроса обрабатывать не нужно.
 */
export function parallelLimit(urls, limit, cb) {
	let result = [];
	let cache = {};
	let total = 0;
	let count = 0;

	limit = Math.min(urls.length, limit);

	function get(url) {
		if (!cache[url]) {
			cache[url] = fetch(url);
		}

		return cache[url];
	}

	function request(index) {
		count++;

		let url = urls[index];

		let isCached = Boolean(cache[url]);

		if (!isCached) {
			total++;
		}

		get(url)
			.then(res => res.clone().text())
			.then(data => {
				result[index] = data;

				if (!isCached) {
					total--;
				}

				if (count < urls.length) {
					request(count);
				} else if (total === 0) {
					cb(null, result);
				}
			});
	}

	while (total < limit) {
		request(count);
	}
}
