class TestArray {
    constructor(ArrayToBeTested) {
      this.ArrayToBeTested = ArrayToBeTested;
    }
  
    get GetArrayLength(){
      return this.ArrayLength;
    }
  
    get GetLastItemOfArray(){
      return this.LastItemOfArray;
    }
  
    get VerifyIsArrayIsMadeByNumbers() {
      return this.VerifyIsArrayIsMadeByNumbers()
    }
  
    VerifyIsArrayIsMadeByNumbers() {
        return this.ArrayToBeTested.every(index => typeof(index) == "number");    
    }
  
    LastItemOfArray() {
      let lastItem = this.ArrayToBeTested.pop()
      return lastItem;
    }
    
    ArrayLength() {
      return this.ArrayToBeTested.length;
    }
  }
  
module.exports = TestArray;