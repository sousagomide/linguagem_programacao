class A {
    constructor(x) {
      this.x = x
    }
  
    print() {
        console.log('super-classe')
    }
  }
  
  class B extends A {
    constructor(x1, x2) {
      super(x1)  // seta this.x = x1
      this.x = x2  // sobrescreve this.x
    }
  
    print() {
      console.log('sub-classe')
    }

    printSuper() {
        super.print()
    }
  
  }
  
  // Testando
  const obj = new B(10, 20)
  obj.printSuper()
  
  