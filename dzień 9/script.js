//zadanie 1

const user = {
    name: "John",
    surname: "Smith"
};

user.name = "Pete";

console.log(user);

//delete(user.name); wykomentowane aby nie rzucało błędami

//console.log(user); wykomentowane aby nie rzucało błędami

//zadanie 2

const fullName = user.name + " " + user.surname;

console.log(fullName);

//zadanie 3

let people = {
    John: 25,
    Ann: 40,
    Pete: 76
}

const allAges = obj => Object.values(obj).reduce((a, b) => a + b);

console.log(allAges(people));

//zadanie 3 następne ;)

let person = {
    age: 20,
    friends: 5,
    name: "Ann"
};

function numericMultiply(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

numericMultiply(person);

console.log(person);

//zadanie 4

let counter = {
    count: 0,
    up() {
      this.count++;
      return this;
    },
    down() {
      this.count--;
      return this;
    },
    showStep() {
        console.log(this.count);
        return this;
    }
};

counter
    .up()
    .up()
    .up()
    .down()
    .showStep();