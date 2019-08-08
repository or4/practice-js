/*
 * Задача: написать функцию суммирования произвольного количества аргументов.
 * Аргумент может быть любым типом. Суммировать только числа.
 */

// eslint-disable-next-line
export function sum(...args: any[]): number {
	let acc = 0;

	for (const arg of args) {
		if (typeof arg === 'number') {
			acc = acc + arg;
		}
	}

	return acc;
}
