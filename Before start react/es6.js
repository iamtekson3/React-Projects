// import './css/style.css';
// import k, {square, add} from './js/main';

// console.log(k);

//Global variable decleration
let demo = document.getElementById('demo')

// Javascript class
class Intro {
    constructor(name, rollNo, position) {
        this.name = name;
        this.rollNo = rollNo;
        this.position = position;
    };
    hello() {
        return demo.innerHTML=`<h3>Hello ${this.name}`
    }
}
let d = new Intro('kamal');
d.hello();

//Class Inheritance and Function overright with class
class Student extends Intro {
    info() {
        return console.log(`your roll number ${this.rollNo}, and position ${this.position}`) //template literal
    };
    hello() {
        return console.log(`Name: ${this.name}, your roll number ${this.rollNo}, and position ${this.position}`)
    }
}
const a = new Student('kamal',4,5)
a.hello()

//Destructuring assignment for objects
let developer = {
    name: 'Tek Bahadur Kshetri',
    address: 'Pindikhola 5, Galyang',
    age: 22
}

const {name:Firstname, address, age} = developer;
// console.log(Firstname)
// console.log(age)
// console.log(address)

//Destructuring assignment for array
let array = [
    {name: 'Kamal', age: 42},
    {name: 'John', age: 23},
    {name: 'Deepak', age: 45},
    {name: 'Hira', age: 21}
]
const [one, , three] = array
// console.log(one, three)

//map operation in array
const n = array.map(ar => ar.name)
// console.log(n)

//filter operation in array
let ab = array.filter(ar => ar.age>25)
                .map(ar=> ar.name)
// console.log(ab)

//Rest parameter
const addAll = (...args) => {
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}
// console.log(addAll(1,2,3,4))
// console.log(addAll(1,2,3,4,5,6,7))
// console.log(addAll(1,2))

//Spread operator
let arr = [1,2,3,4,5,6,7,10,11,1.4]
console.log(Math.max(...arr))

//LocalStorage and sessionStorage
localStorage.setItem(developer, arr)
localStorage.removeItem(developer)
localStorage.removeItem('name')

sessionStorage.setItem('age', 22)

// console.log(sessionStorage.getItem('age'))


