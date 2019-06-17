


class Car {
  constructor(make, modelName, year, color, sound){
    this.make = make || ""
    this.model = modelName
    this.year = year
    this.color = color
    this.sound = sound
    this.gasTank = 100
    console.log("Car Created!")
  }

  start(){
    console.log(this.sound)
  }

  drive(miles){
    this.gasTank -= miles
  }
}

class Target{
  constructor(health){
    this.health = health
    this.hits = 0
  }
  slap(){
    this.health -= 1
    return this.health
  }
}

let target = new Target(200)

let myCar = new Car("Corvette", 1962, "Fire Engine Red", "VROOOM")

let yourCar = new Car("Chevy", "Tracker", 1989, "Olive Drab", "Strange Knocking Sound")


console.log(myCar)
console.log(yourCar)
