/*
 * Задача a2: Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
 * Реализовать с использованием мемоизации.
 * Напишите тесты.
 */
const mem: { [index: number]: number } = {};

export function fib(value: number): number {
	if (mem[value]) {
		return mem[value];
	}

	if (value <= 1) return value;
	mem[value] = fib(value - 1) + fib(value - 2);

	return mem[value];
}

/*
	Примеры:

	fib(0) // 0
	fib(1) // 1
	fib(10) // 55
	fib(20) // 6765
*/
