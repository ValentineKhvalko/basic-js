class VigenereCipheringMachine {
    constructor(modification) {
        this.modification = modification;
    }
    encrypt(massage, key) {
        if (!massage || !key) throw new Error();
        
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        let m = massage.toUpperCase().split('');
        let k = key.toUpperCase().split('');

        let cipher = [];
        let j = 0;

        for(let i = 0; i < m.length; i++) {
            if(!m[i].match(/[A-Z]/)) {
                cipher.push(m[i]);
                continue;
            }
            let sum = alphabet.indexOf(m[i]) + alphabet.indexOf(k[j]);
            let letterIndex = alphabet.length - 1 < sum ? sum - alphabet.length : sum;   

            cipher.push(alphabet[letterIndex]);
            j++;
            if(j == k.length) j = 0;
        }
        return this.modification === false ? cipher.reverse().join(''): cipher.join('');
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw new Error();

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        let e = encryptedMessage.toUpperCase().split('');
        let k = key.toUpperCase().split('');

        let massage = [];
        let j = 0;

        for(let i = 0; i < e.length; i++){
            if(!e[i].match(/[A-Z]/)) {
                massage.push(e[i]);
                continue;
            }

            let diff = alphabet.indexOf(e[i]) - alphabet.indexOf(k[j]);
            let letterIndex = diff < 0 ? diff + alphabet.length : diff;

            massage.push(alphabet[letterIndex]);
            j++;
            if(j == k.length) j = 0;
        }
        return this.modification === false ? massage.reverse().join('') : massage.join('');
    }
}

module.exports = VigenereCipheringMachine;
