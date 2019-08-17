/*
 * Задача a3: Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того,
 * отсортирован ли переданный ей числовой массив.
 * Напишите тесты.
 */
export function isSorted(arr: number[]): boolean {
	if (arr.length === 0) return true;

  let arrEntered = arr;
  let arrFotSort = arrEntered.slice(0);
  

  arrFotSort.sort((a: number, b: number): any => {
    if (a - b > 0) return 1;
    if (a - b < 0) return -1;
  });

 
  let str1 = arrFotSort.join('');
  let str2 = arrEntered.join('');
  
  if (str1 === str2) return true;
  return false;
}

/*
	Примеры:

	isSorted([]) // true
	isSorted([-Infinity, -5, 0, 3, 9]) // true
	isSorted([3, 9, -3, 10]) // false
*/
