const textarea = document.getElementById("floatingTextarea2")
const textarea2 = document.getElementById("floatingTextarea3")
const result = document.getElementById("result")
const select = document.getElementById("floatingSelect")
let version = 8

const CaesarEncryption = (string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newStr = ""

    for(word of string) {
        const index = alphabet.indexOf(word.toUpperCase())
        if(index === -1) {
            newStr += " "
        } else {
            const newIndex = (index + version) % 26
            newStr += alphabet[newIndex]
        }
    }

    return newStr
}

function CaesarDecryption (encryptedString, unshiftAmount) {
    var plainText = "";
    for(var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
        } else {
            plainText += " ";
        }
    }
    return plainText;
}

textarea.addEventListener("input", (event) => {
    version = parseInt(select.value)
    const formValue = event.target.value
    textarea2.value = CaesarEncryption(formValue)
})
textarea2.addEventListener("input", (event) => {
    version = parseInt(select.value)
    const formValue = event.target.value
    textarea.value = CaesarDecryption(formValue.toUpperCase(), version)
})