const ArrayToBeTested = require("../src/index")

const arrayToBeTested = new ArrayToBeTested([5, 4]);

test(`tests if the array's length's 2` ,() => {
    expect(arrayToBeTested.GetArrayLength()).toBe(2);
})

test(`tests if the last array's item's 4`, () => {
    expect(arrayToBeTested.GetLastItemOfArray()).toBe(4);
})

test(`Verify if every array's item's a number`, () => {
    expect(arrayToBeTested.VerifyIsArrayIsMadeByNumbers()).toBe(true)
})
