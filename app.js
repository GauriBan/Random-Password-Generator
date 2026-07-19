let character = "ASDFGHJKLPOIUYTREWQZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop1234567890!@#$%^&*()"

let plength = 8;

let password = ""

for (let i = 0; i < plength; i++) {
    let rendomIndex = Math.floor(Math.random() * character.length)

    password += character[rendomIndex]
}
console.log(password)