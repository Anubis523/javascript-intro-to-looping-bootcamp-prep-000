function forLoop (array) {
  for (var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '': 's'}."`)
  }
  return array
}

function whileLoop(countdown) {
 while (countdown > 0) {
   console.log(countdown)
   countdown--
 } 
 return 'done'
}