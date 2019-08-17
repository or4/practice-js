/*
 * Задача a2: Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
 * Реализовать с использованием мемоизации.
 * Напишите тесты.
 */
export function fib(value: number): number {
<<<<<<< HEAD
	if (value === 0) return 0;

	let a = 0,
		b = 1,
		x;

	for (let i = 2
		; i <= value; i++) {
		x = a + b;
		a = b;
		b = x;
	}
	return b;
}

// const memoize = (fn) => {
// let cache = {};
// return (...args) => {
// 	let n = args[0];
// 	if (n in cache) {
// 		console.log('Find in cache');
// 		return cache[n];
// 	} else {
// 		console.log('Calculating result');
// 		let result = fn(n);
// 		cache[n] = result;
// 		return result;
// 	}
// }
// }

// const memoizedFib = memoize(fib)
=======
	return value;
}

>>>>>>> 55b2e7aa7f884bcc5b7b170ee1186a759aa8d443
/*
	Примеры:

	fib(0) // 0
	fib(1) // 1
	fib(10) // 55
	fib(20) // 6765
*/
