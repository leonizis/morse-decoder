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
str = expr;
let result = [];

for (let i = 0; i < str.length; i = i + 10) {
    result.push(`${str[i]}${str[i+1]}${str[i+2]}${str[i+3]}${str[i+4]}${str[i+5]}${str[i+6]}${str[i+7]}${str[i+8]}${str[i+9]}`);

    }
for(let j = 0; j < result.length; j++){


    if(result[j] == '**********'){

        result[j] = ' ';
    }else{
        let predRes = result[j].split('1');
        result[j] = result[j].slice(predRes[0].length)
        rezBukv = [];
        for(let v = 0; v < result[j].length; v = v + 2){
            rezBukv.push(`${result[j][v]}${result[j][v+1]}`)
            
        }
        for(let l = 0; l < rezBukv.length; l ++){

        if(rezBukv[l] == '10'){
            rezBukv[l] = '.';
        }
        if(rezBukv[l] == '11'){
            rezBukv[l] = '-';
        }
    }
    
    result[j] = rezBukv.join('', ' ');
        
        
    }
    console.log(result[j])
    if(result[j] != ' '){
    result[j] = MORSE_TABLE[result[j]];
}

}

return result.join('', ' ');
}

module.exports = {
    decode
}

