var log = console.log

class Person {
  constructor (name, age) {
    this.name = name
      this.age = age
  }

sayHello () {
  log(`Hello,my name is ${this.name} and I am ${this.age} years old.`)
}
}

const people = [
  new Person('Alice', 30),
  new Person('Bob', 25),
  new Person('Charlie', 35)
]

people.forEach(person => {person.sayHello()
})

