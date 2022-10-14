const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('pigLatinizes a string that starts with a consonant', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('pigLatinizes a string that starts with a cluster of consonants', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('pigLatinizes a string that starts with a vowel', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});



