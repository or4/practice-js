/*
 * Задача b5: Что вернет вызов функции и почему

case 1:
const obj = {
	value: 4,
	inc: value => value + 1,
	getInc: function() {
		return inc(a);
	},
};
obj.getInc(); // ?


case 2:
const obj = {
	value: 4,
	inc: value => value + 1,
	getInc: function() {
		return this.inc(a);
	},
};
const {getInc} = obj;
getInc(); // ?


case 3:
obj = {
  foo: function () {
    console.log('foo', this); // ?
  }
}
obj.foo();


case 4:
obj = function() { } as any
obj.foo = function () {
  console.log('foo', this);
}
obj.foo(); // ?


case 5:
obj = function() { } as any
obj.foo = () => {
  console.log('foo', this);
}
obj.foo(); // ?


case 6:
obj = {
  foo: function() {
    const fn = function() {
      console.log('inner callback', this);
    }
    fn(); // ?
  }
};
obj.foo();


case 7:
obj = {
  a: 1,
  foo: function(fn: any) {
    fn(); // ?
  }
};
obj.foo(function() {
  console.log('callback', this);
});


case 8:
var arr = [1, 2, 3, 4] as any;
(Array.prototype as any).myCustomFunc = function() {
 console.log(this);
};
arr.myCustomFunc(); // ?


case 9:
arr = [1, 2, 3, 4];
arr.forEach(function() {
 console.log(this);
}); // ?


case 10:
arr = [1, 2, 3, 4];
arr.forEach(function() {
 console.log(this);
}, arr); // ?


case 11:
obj = {
  a: 2,
  b: this.a * 2
 };
 console.log( obj.b ); // ?


 case 12:
 var myObj = {
  a: 2,
  b: this.myObj.a * 2 // ?
 };
 */
