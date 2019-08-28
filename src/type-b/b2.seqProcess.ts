/*
 * Задача b2: Есть массив url, есть функция fetch, которая возвращает промис
 * Необходимо последовательно обработать запросы,
 * то есть начинать обрабатывать следующий только после выполнения предыдущего
 * Когда все запросы обработаны, функция возвращает массив с резульататами.
 * Напишите тесты.
 */

async function getResults1(urls: string[]) {
	const output = [];

	for (const url of urls) {
		const result = await fetch(url);

		output.push(result);
	}

	return output;
}

function getResults2(urls: string[]) {
	return new Promise(resolve => {
		const output: object[] = [];

		function processResult(data: object) {
			output.push(data);
			const urlLocal = urls.shift();

			if (urlLocal) {
				fetch(urlLocal).then(processResult);
			} else {
				resolve(output);
			}
		}

		const url = urls.shift();

		if (url) {
			fetch(url).then(processResult);
		} else {
			resolve(output);
		}
	});
}
