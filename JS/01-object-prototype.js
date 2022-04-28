/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */


// const objC = {
//     z:5,
// }
// console.log(objC)
// console.log(objC.hasOwnProperty('z')) // true

// const objB = Object.create(objC)
// console.log(objB)

// objB.y = 2;

// console.log(objB.y)
// console.log(objB.z)

// const objA = Object.create(objB)
// console.log(objA)

// objA.z = 1000;
// console.log(objA) // {z: 1000}
// console.log(objC) // {z: 5}


// const dummyObj = {
//     message: 'Это собственное свойство объекта',
// }

// const dummyObj = Object.create({message:'Это свойство на объекте-прототипе'})
// console.log(dummyObj)
// console.log(dummyObj.message)

const dummyObj = Object.create({z: 2})
console.log(dummyObj)

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */


