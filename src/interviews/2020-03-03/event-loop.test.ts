// Explain order of array.push calling
function runTest() {
	const array = [];

	setTimeout(() => array.push(4));
	setTimeout(() => array.push(5));

	Promise.resolve()
		.then(() => {
			array.push(2);
			setTimeout(() => array.push(7));
		})
		.then(() => {
			setTimeout(() => array.push(8));
			array.push(3);
		});

	setTimeout(() => array.push(6));
	array.push(1);

	return array;
}

describe('event-loop', () => {
	it('should correspond [1,2,3,4,5,6,7,8]', done => {
		const array = runTest();

		setTimeout(() => {
			expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
			done();
		}, 100);
	});
});
