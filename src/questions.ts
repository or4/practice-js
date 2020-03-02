// Что такое цикл событий?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop

// Что такое всплытие и перехват (event bubbling)
// https://learn.javascript.ru/event-bubbling
// Всплытие и перехват
// Чтобы поймать событие на стадии перехвата, нужно использовать третий аргумент addEventListener:
// Если аргумент true, то событие будет перехвачено по дороге вниз.
// Если аргумент false, то событие будет поймано при всплытии.

// Что такое замыкание?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

// Как работает прототипное наследование и чем оно отличается от классической модели наследования?
// Иногда спрашивают, но редко вопрос в приоритете
// Прототипное наследование https://developer.mozilla.org/ru/docs/Learn/JavaScript/Объекты/Inheritance

// Что такое контекст. Как работает ключевое слово this? Разница function и стрелочными функциями

// Что такое hoisting

// Что такое REST?

// Мой сайт тормозит. Расскажите о шагах по его диагностированию и исправлению.

// Расскажите о методах call, apply, bind

// Что такое async await, что возвращает async
// как обработать функцию, которая определена как async в обычной синхронной функции?
// подсказка:
// async function test() {}
// function main() { await test() } // вызовет ошибку


// Task 1
const​ arr = [​1​, ​1​, ​2​, ​4​, ​6​, ​8​, ​12​, ​13​, ​15​]; ​// sorted array
function​​ findNumbers​(num) {
    // ​TODO:​ find two numbers which sum === passed value(num)
}


// Task 2
function​​ optimizedRemoveDuplicates​(arr) {
    ​const​ uniqueElements = {};
    const array = [];

    arr.forEach((element) => {
        const hash = hash(element);
        ​if​ (!uniqueElements()) {
            uniqueElements[element];
            array.push(array);
        }
    });
}

function fetchAll(funcs, cb) {
    const output = [];

    funcs.map(func => func()
        .then(data => {

        output.push(data);

        if(output.length === funcs.lenght) {
            cb(output);
        }
    });


}


// Task 3
// Explain order of console.log calling
setTimeout(() => console.log('4'));
setTimeout(() => console.log('5'));
Promise.resolve()
    .then(() => {
        console.log('2')
        setTimeout(() => console.log('7'));
    })
    .then(() => {
        setTimeout(() => console.log('8'));
        console.log('3');
    });
setTimeout(() => console.log('6'));
console.log('1');



// Task 4
// Explain how works middlewares in redux, write middleware for a progress bar

