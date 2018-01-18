// #############################################################################
//                               rich-text
// #############################################################################

// problem 1: state delta basics
//
// change the delta below so that:
// - the text "Hello world!" is formatted bold
// - the line containing the "Hello world!" text is centered
// - add more plain text after the line break that says "This is my demo"
function problem1() {
  return [{
    insert: 'Hello world!'
  }, {
    insert: '\n'
  }]
}

// problem 2: more complex formats
function problem2() {
  return [];
}

// problem 3: state delta from scratch
function problem3() {

}

// problem 5: change delta basics
function problem4() {

}

// problem 6: more complex change delta things
function problem5() {

}

// problem 7: change delta from scratch
function problem6() {

}

// #############################################################################
//                                 json0
// #############################################################################

// problem 8: json0 basics
function problem7() {

}

// problem 9: json0 with rich-text subtype
function problem8() {

}

// problem 10: json0 from scratch
function problem9() {

}

// #############################################################################
//                       operational transformations
// #############################################################################

// problem 11: resolve simultaneous editing conflicts
function problem10() {

}

// problem12: write out expected resolutions by hand
function problem11() {

}

// #############################################################################
//                               extra
// #############################################################################

// problem 12: write your own converter
function problem12() {

}





// #############################################################################
//                        don't change me
// #############################################################################

module.exports = {
  problem1,
  problem2,
  problem3,
  problem4,
  problem5,
  problem6,
  problem7,
  problem8,
  problem9,
  problem10,
  problem11,
  problem12
}
