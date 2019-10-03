const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var arr = [];
  var result = [];
  while (expr.length) {
    arr.push(expr.substring(0, 10));
    expr = expr.substring(10);
  }
  arr.map(i => {
    var mas = [];

    i = +i;
    i = i.toString()
    for (let n = 0; n < i.length; n++) {
      if (i[n] + i[n + 1] == "10") { mas.push(".") } else if (i == 'NaN') {
        result.push(" ");
        break
      } else { mas.push('-') }
      n++;
    }
    mas = mas.join('')
    if (mas in MORSE_TABLE) {
      result.push(MORSE_TABLE[mas]);
    }

  })

  return result.join('');
}

module.exports = {
    decode
}