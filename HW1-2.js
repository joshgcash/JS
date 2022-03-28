//Javascript
//HW1-2.js
//Stacks
class Stack {
  constructor() {
    this.items = []
  }

  push(element){
    return this.items.push(element)
  }

  pop(){
    if (this.items.length == 0)
      return
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length - 1]
  }

  check(){
    console.log(`${this.items}`)
  }
}

let Stack1 = new Stack()
Stack1.push(`Milk`)
Stack1.push(`Egg`)
Stack1.check()
Stack1.pop()
Stack1.check()
Stack1.peek()
Stack1.check()
Stack1.pop()
Stack1.check()
