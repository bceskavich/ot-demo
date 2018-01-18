const { Delta } = require('rich-text')
const challenges = require('./challenges')

test('problem 1: the basics', () => {
  const expected = new Delta()
    .insert('Hello ', { h1: true })
    .insert('World', { h1: true, bold: true })
    .insert('\n', { centered: true })
    .insert('Welcome to my ')
    .insert('demo', { link: 'https://something.com' })

  expect(challenges.basics()).toEqual(expected);
})
