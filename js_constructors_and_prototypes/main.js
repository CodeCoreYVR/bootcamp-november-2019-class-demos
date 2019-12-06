// Constructors
// Prototypes
// this keyword
// inheritance
// class syntax for constructors

// Guest1
// const guest1 = {
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     // +
//     full_name: firstname + lastname;
// }

// .
// .
// .

// const guest100 = {
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     // +
//     full_name: firstname + lastname;
// }

// construtctors are just functions that are use to generate objects

function Guest(firstname, lastname, email, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.full_name = function () {
        return `${this.firstname} ${this.lastname}`
    }
}

const guest1 = new Guest('Alan', 'Mathew', 'alan@gmail.com', '778 777 0000');
const guest2 = new Guest('Roman', 'John', 'roman@gmail.com', '778 777 1100');
// const guest1 = {}

// console.log('guest1: ', guest1);
// console.log('guest2: ', guest2);

function Dog(name, age) {
    this.name = name;
    this.age = age;
}

// Create an instance of a Dgo with the 'new' keyword

const sonicSam = new Dog('Sonic Sam', 5);

// console.log(sonicSam);

const counter = {
    currentCount: 0,
    step: 1,
    set(n) {
        this.currentCount = n;
    },
    inc() {
        this.currentCount += 1;
    },
    dec() {
        this.currentCount -= 1;
    },

    now() {
        console.log(this.currentCount);
    },
    // now: function() {
    //     console.log(this.currentCount);
    // },
    setStep(n) {
        this.step = n;
        return this;
    }
}

// Demo: Counter

if (false) {
    function Counter(currentCount, step) {
        this.currentCount = currentCount;
        this.step = step;
        this.set = function (n) {
            return this.currentCount = n;
        };

        this.inc = function () {
            return this.currentCount += 1;
        };
        this.dec = function () {
            return this.currentCount -= 1;
        };

        this.now = function () {
            console.log(this.currentCount);
        };

        this.setStep = function (n) {
            this.step = n;
            return this;
        };
    }

    const counterInstance1 = new Counter(0, 1);
    console.log(counterInstance1);


    const counterInstance2 = new Counter(100, 20);
    console.log(counterInstance2);

    function Counter(currentCount, step) {
        this.currentCount = currentCount;
        this.step = step;
    }

    // Counter.prototype.theNameOfthePropertyOrMethod = ...
    Counter.prototype.set = function (n) {
        this.currentCount = n;
    };

    Counter.prototype.inc = function () {
        this.currentCount += 1;
    };

    Counter.prototype.dec = function () {
        this.currentCount -= 1;
    };

    Counter.prototype.now = function () {
        return this.currentCount;
    };

    Counter.prototype.setStep = function (n) {
        this.step = n;
        // return this;
    };

    const counterIns1 = new Counter(0, 1);
    console.log(counterIns1);


    const counterIns2 = new Counter(100, 20);
    console.log(counterIns2);

    function Doggo(name, age) {
        this.name = name;
        this.age = age;
    }

    Doggo.prototype.bark = function () {
        return `${this.name} barks woof woof`
    }

    function DoggoFighter(name, age, specialAbility) {
        this.name = name;
        this.age = age;
        this.specialAbility = specialAbility;
    }

    // const dogo1 = new Doggo('snow', 4);

    Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

    DoggoFighter.prototype.fight = function () {
        const contestants = [this.name, 'Pixy', 'rufus'];
        const winner = contestants[Math.floor(Math.random() * 3)]
        return `${winner} won`;
    }

    // this 👇 bark method will override the Doggo bark method
    // DoggoFighter.prototype.bark = function () {
    //     return `${this.name} barks Miaw miaw`
    // }

    const lumberjackLawrence = new DoggoFighter(
        'Lumberjack Lawrence',
        9,
        'chucks'
    )
}


class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // You can not have two constructors for a class!!!!
    // this will result in an error
    // constructor(name, age, other) {
    //     this.name = name;
    //     this.age = age;
    //     this.other = other;
    // }

    bark() {
        return `${this.name} barks "Bork bork bork`;
    }

    sleep() {
        return 'Zzzzzzz....';
    }
}

const moneybagsMichaels = new Doggo('Money Bags Michaels', 5);

// Cannnot do this with classes 
// But you never want to do this anyway
// const otherDoggo = Doggo('name', 2);

// 'child' inherits from 'parent' 

class DoggoFighter extends/* inherits */ Doggo {
    constructor(name, age, specialAbility) {
        super();
        this.name = name;
        this.age = age;
        this.specialAbility = specialAbility;
    }

    fight() {
        const contestants = [this.name, 'Pixy', 'rufus'];
        const winner = contestants[Math.floor(Math.random() * 3)]
        return `${winner} won`;
    }

}

const dogo = new DoggoFighter('jimmy', 7, 'fly');

// Counter class
class Counter {
    constructor(currentCount, step) {
        this.currentCount = currentCount;
        this.step = step;
    }

    set(n) {
        this.currentCount = n;
    }

    inc() {
        this.currentCount += this.step;
    }

    dec() {
        this.currentCount -= this.step;
    }

    now() {
        return this.currentCount;
    }

    setStep(counterStep) {
        this.step = counterStep;
    }
}

const counter1 = new Counter(20, 5);

// console.log('Inside Script: ', this);
// 'this' outside a method will be the global
// window object in browser
// or the global object in Node. 

// These Objects (window, global object in node) contain a host of properties related to
// the platforms they belong to 

myVariable = 10;

window.myVariable; // 10

function whatsMyThis() {
    // console.log('thisInside whatsMyThis function: ', this);
    return this;
}

// window.whatsMyThis() === whatsMyThis(); // true

const can = {
    greetings: 'hi!',
    touchThis: function () {
        return this;
    },

    whatsMyThis: whatsMyThis,
}

// We say that 'this' is dynamic
// in other words, it is not determined by its placement
// in the code, but instead, by where it is called at the time which we run the code
console.log('can.touchThis(): ', can.touchThis());
console.log('can.whatsMyThis(): ', can.whatsMyThis());
console.log('whatsMyThis(): ', whatsMyThis());