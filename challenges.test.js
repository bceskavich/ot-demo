const { Delta } = require('rich-text')
const challenges = require('./challenges')

test('problem 1: the basics', () => {
  const expected = new Delta()
    .insert('Hello world!', { bold: true })
    .insert('\n', { centered: true })
    .insert('This is my demo')
    .ops

  expect(challenges.problem1()).toEqual(expected);
})
