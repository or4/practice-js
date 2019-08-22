/* eslint-disable no-console */
/*
 * Задача b1: Написать фунцкию, которая получает данные из localstorage ассинхронно
 * то есть промифисировать localstorage getItem
 * Напишите тесты.
 */
localStorage.setItem('message', 'Через 2 секунды появилось число 3.');

const promise = new Promise(function(resolve, reject) {
	const result = localStorage.getItem('message');

	if (result !== null) {
		setTimeout(() => resolve(result), 2000);
	} else {
		reject(new Error('Не найдено!'));
	}
});

promise.then(result => console.log(result), error => console.log(error));

console.log('Сначала выведет число 1!');
console.log('Затем выведет число 2!');
// Возможно я неправильно понял задачу. Но точно сделал getItem асинхронно. И еще, я не знаю как написать тест к подобной задаче:(
