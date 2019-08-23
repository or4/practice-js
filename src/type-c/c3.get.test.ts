import { get } from './c3.get';

describe('Testing function "get"', () => {
	it('should undefined', () => {
		expect(get({ a: { b: { c: 25 } } }, '')).toEqual(undefined);
	});
	it('should 25', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a.b.c')).toEqual(25);
	});
	it('should { c: 25 }', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a.b')).toEqual({ c: 25 });
	});
	it('should { b: { c: 25 } }', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a')).toEqual({ b: { c: 25 } });
	});
	it('should undefined', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a.b.d')).toEqual(undefined);
	});
	it('should undefined', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a.b.c.d.e')).toEqual(undefined);
	});
	it('should undefined', () => {
		expect(get({ a: { b: { c: 25 } } }, 'a.b.c.d.e.f.g.h.i')).toEqual(undefined);
	});
});
