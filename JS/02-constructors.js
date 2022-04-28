/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// console.log([])

/*
 * Car - Это условный чертёж машины
 */ 
// const Car = function ({brand, model, price} = {}) {
//     // console.log(config)
//     // 2. Функция вызывается в контексте созданного объекта,
//     //    то есть в this записывается ссылка на него
//     // console.log(this)

//     // const {brand, model, price} = config

//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//      // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//     //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

//     // this.changePrice = function (newPrice) {
//     //     this.price = newPrice;
//     // }
    
//     // 4. Ссылка на обьект возвращается в место вызова new Car
// }

// 1. Если функция вызывается через new, создаётся пустой объект

// const myCar1 = new Car({brand:'Audi',model:'Q7',price:35000});
// console.log(myCar1) // это экземпляр класса Car

// const myCar2 = new Car({brand:'BMW',model:'X5',price:55000});
// console.log(myCar2) // это экземпляр класса Car

// const myCar3 = new Car(); // {brand: undefined, model: undefined, price: undefined}  - (config = {})
// console.log(myCar3) // это экземпляр класса Car


// Car.prototype.sayHi = function () {
//     // console.log('this:', this);  // Car {brand: 'Audi', model: 'Q7', price: 35000, changePrice: ƒ}
//     // console.log('Hallo')
// }

// console.log(Car.prototype) // {sayHi: ƒ, constructor: ƒ}
// myCar1.sayHi()


// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// myCar1.changePrice(1000);
// console.log(myCar1)

// console.log(Car.prototype) // {sayHi: ƒ, changePrice: ƒ, constructor: ƒ}


const User = function ({email, password} = {})  {
    this.email = email;
    this.password = password
}

// User.prototype.changeEmail = function (newEmail) { // новый метод в прототипе 
//     this.email = newEmail;
// }

const mango = new User({email: 'mango@mail.com', password:  111111 })  

// console.log(mango)

// mango.changeEmail('newemail@com.ua')
// console.log(mango)


// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()


/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */


User.messsage = 'Я статическое свойство, меня нет на экземплярях и в прототипе';

User.logInfo = function (obj) {
    console.log('User.logInfo -> obj:', obj)
    console.log('Почта: ', obj.email);
    console.log('Пароль: ', obj.password);
}

User.logInfo(mango) 


// User.logInfo('qwe')
console.dir(User)




// Это статические методы на конструкоре Object 

// Object.keys()
// Object.values()
