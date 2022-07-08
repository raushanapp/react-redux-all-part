const sum = require("./index")

describe("Testing sum Function",()=>{
//    test suite
  test("add 2 positive numbers",()=>{
    //  test
    // toBe === strict equality
    expect(sum(1,2)).toBe(3)
  })
  test("add 2 negative numbers",()=>{
   
    expect(sum(-1,-2)).toBe(-3)
  })
  test("add 2 string  intgers",()=>{
   
    expect(sum("1","2")).toBe(3)
  })
})


// Test => Behaviour
//  function /application

//  Expectaion
// Actual Results