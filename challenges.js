const { Delta } = require('rich-text')

function basics() {
  return new Delta()
    .insert('Hello ', { h1: true })
    .insert('World', { h1: true, bold: true })
    .insert('\n', { centered: true })
    .insert('Welcome to my ')
    .insert('demo', { link: 'https://something.com' })
}

module.exports = {
  basics
}
