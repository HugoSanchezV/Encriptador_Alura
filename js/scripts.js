btnEncriptar = document.querySelector('#encriptar');
btnDesencriptar = document.querySelector('#desencriptar');
btnCopiar = document.querySelector('#copiar');
textArea = document.querySelector('#input-text');
textAreaResult = document.querySelector('#text-area-resultado');
textDerecha = document.querySelector('#datos-derecha');

btnCopiar.addEventListener('click', (e) => {
    e.preventDefault();

    const aux = document.createElement('INPUT');

    const texto = textAreaResult.textContent;

    aux.value = texto;

    document.body.appendChild(aux);

    aux.select();

    aux.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(aux.value);

    document.body.removeChild(aux);

    btnCopiar.innerHTML = 'Listo';

    setTimeout(() => {
        btnCopiar.innerHTML = 'Copiar';
    }, 300);
});

btnEncriptar.addEventListener('click', (e) => {
    e.preventDefault();

    const text = textArea.value;
    const newText = encriptar(text);

    if (newText === '') {
        textAreaResult.classList.add('no-display');
        btnCopiar.classList.add('no-display');
        textDerecha.classList.add('add-display');
    } else {

        deleteMargin();
        textAreaResult.innerHTML = newText;
    }
});

btnDesencriptar.addEventListener('click', (e) => {
    e.preventDefault();

    const text = textArea.value;
    const newText = desencriptar(text);

    if (text === '') { 
        textAreaResult.classList.add('no-display');
        btnCopiar.classList.add('no-display');
        textDerecha.classList.add('add-display');
    } else {
        deleteMargin();

        textAreaResult.innerHTML = newText;
    }

});

function deleteMargin() {
    textDerecha.classList.remove('add-display');
    textDerecha.classList.add('no-display');

    btnCopiar.classList.remove('btn-copiar');
    btnCopiar.classList.remove('no-display');

    textAreaResult.classList.remove('no-display');
    textAreaResult.classList.add('add-margin');

    textArea.value = '';
}

