// Your code here

// Your code here
class Polygon {
  constructor (array) {
      this.array = array;
  }

  get countSides() {
      return this.array.length
  }

  get perimeter() {
      return this.array.reduce((a,b)=> a+b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (this.array.length === 3 &&
      this.array[0] === this.array[1] &&
      this.array[1] === this.array[2]) ? true : false
  }
}

class Square extends Polygon {
  get isValid() {
      return (this.array.length === 4 &&
       this.array[0] === this.array[1] &&
      this.array[1] === this.array[2] &&
      this.array[2] === this.array[3]) ? true : false
  }

  get area() {
      return this.array[0] * this.array[1]
  }
}
