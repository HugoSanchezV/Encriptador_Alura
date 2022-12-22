const code = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const decode = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar(texto) {
    array = texto.split('');

    let newString = '';

    array.forEach(letter => {
        if (letter in code) {
            newString += code[letter];
        } else {
            newString += letter;
        }
    });

    return newString;
}

function desencriptar(texto) {
    let words = texto.split(' ');

    let newString = '';
    let new_word = '';

    words.forEach(word => {
        for (const n in decode) {

            if (new_word === '') {
                new_word = word;
            }

            if (new_word.includes(n)) {
                new_word = new_word.replaceAll(n, decode[n]);
            }
        }

        newString += new_word + " ";
        new_word = '';
    });

    return newString;
}