/*
 * Задача b1: Написать фунцкию, которая получает данные из localstorage ассинхронно
 * то есть промифисировать localstorage getItem
 * Напишите тесты.
 */

localStorage.setItem('message', 'Через 2 секунды появилось это сообщение');

export function getMessage(message: string): Promise<unknown> {
	const promise = new Promise(function(resolve, reject) {
		const result = localStorage.getItem(message);

		if (result !== null) {
			setTimeout(() => resolve(result), 2000);
		} else {
			reject(new Error('Не найдено!'));
		}
	});

	return promise;
}
