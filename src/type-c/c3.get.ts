/*
 * Задача c3: Написать упрощенную версию функции get как в примере
 * Напишите тесты.
 */

/*
	Примеры:
	const obj = {
		a: {
			b: {
				c: 25;
			}
		}
	};

	get(obj, 'a.b.c') // 25
	get(obj, 'a.b') // {c: 25}
	get(obj, 'a.b.d') // undefined
	get(obj, 'a.b.d.e') // undefined
	get(obj, 'a.b.d.e.f.c.e.d.c') // undefined
*/

export function get(obj: any, str: string): any {
	const arr: string[] = str.split('.');

	for (let i = 0; i < arr.length; i++) {
		let property: string = arr[i];

		if (obj[property] === undefined) return undefined;
		obj = obj[property];
	}

	return obj;
}
