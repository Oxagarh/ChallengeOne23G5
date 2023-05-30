
function encrypt() {
    let text = document.querySelector('.encode').value;
    let i = text.length;
    let r;
    let e = '';
    while(i>0){
        switch (text[i-1]) {
            case 'a':
                r = 'ai'
                break;
            case 'e':
                r = 'enter'
                break;
            case 'i':
                r = 'imes'
                break;
            case 'o':
                r = 'ober'
                break;
            case 'u':
                r = 'ufat'
                break;
            default:
                r = text[i-1];
        }
        e = r + e;
        i--;
    }
    return e;
}

function decrypt() {
    let text = document.querySelector('.decode').value;
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i')
    text = text.replaceAll('ober', 'o')
    text = text.replaceAll('ufat', 'u');
    return text;
}

let a = document.querySelector('#encrypt');
let d = document.querySelector('.decode');
a.addEventListener('click', function() {
    b.removeAttribute('disabled');
    d.value = encrypt();
});

let b = document.querySelector('#decrypt');
let e = document.querySelector('.encode');
b.addEventListener('click', function() {
    e.value = decrypt();
});