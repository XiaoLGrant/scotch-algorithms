const searchReplace = require('./index-START');

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('returns the correct string', () => {
  expect(searchReplace("He is sleeping on the couch", "sleeping", "sitting")).toEqual('He is sitting on the couch');
});


test('returns the correct string if word is capitalized', () => {
  expect(searchReplace("The dog is Sleeping on the fridge", "Sleeping", "sitting")).toEqual('The dog is Sitting on the fridge');
});

// test('returns the index even with an empty array', () => {
//   expect(whereIBelong([], 1)).toEqual(0);
// });

