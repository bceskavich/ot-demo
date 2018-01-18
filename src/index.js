const choo = require('choo')
const html = require('choo/html')
const devtools = require('choo-devtools')

const app = choo()
app.use(devtools())
app.use(testStore)

app.route('/', mainView)

function testStore(state, emitter) {
  state.valid = true
  emitter.on('toggle', () => {
    state.valid = !state.valid
    emitter.emit('render')
  })
}

function mainView(state, emit) {
  return html`
    <body>
      <h1>Henlo Choo</h1>
      <p>State is Currently: <strong>${state.valid ? 'valid' : 'invalid'}</strong></p>
      <button onclick=${() => emit('toggle')}>Update State</button>
    </body>
  `
}

app.mount('body')
