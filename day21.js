// #41: Regular Expression--"""" http://www.codewars.com/kata/573e6831e3201f6a9b000971
const regex = /\b(\S)(\w?)(\S?)\S?\3?\2\1\b/g;
console.log("1231 12341 123451 1234561".match(regex));
//solved 105 tests / don't solve 4 tests
