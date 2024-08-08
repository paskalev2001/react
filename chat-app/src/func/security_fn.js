const EN_KEY = "QWERTYUIOPASDFGHJKLZXCVBNM"
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const encrypt = (text, key = EN_KEY) => {
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isUpperCase = char === char.toUpperCase();

        const index = ALPHABET.indexOf(char.toUpperCase());
        if (index !== -1) {
            
            const encryptedChar = key[index];
            encryptedText += isUpperCase ? encryptedChar : encryptedChar.toLowerCase();
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

const decrypt= (encryptedText, key = EN_KEY) => {
  let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i];
        const isUpperCase = char === char.toUpperCase();

        const index = key.indexOf(char.toUpperCase());
        if (index !== -1) {
            const decryptedChar = ALPHABET[index];
            decryptedText += isUpperCase ? decryptedChar : decryptedChar.toLowerCase();
        } else {
            decryptedText += char; 
        }
    }

    return decryptedText;
}

export { encrypt, decrypt }