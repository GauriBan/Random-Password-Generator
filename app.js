const passwordEl = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");



let character = "ASDFGHJKLPOIUYTREWQZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop1234567890!@#$%^&*()"

let plength = 8;

let password = ""


function generatePassword() {

    password = "";
    for (let i = 0; i < plength; i++) {
        let rendomIndex = Math.floor(Math.random() * character.length)
        password += character[rendomIndex]
    }

    passwordEl.textContent = password
    console.log(password)
}
// background: #10B981;
//  background: #1F2937;

generateBtn.addEventListener("click", function() {
    // password generate function call
    generatePassword();
});

copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordEl.textContent);

    copyBtn.textContent = "✅ Copied!";
    copyBtn.classList.add("copied");

    setTimeout(function() {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
    }, 2000);
});

// copyBtn.addEventListener("click", function() {
//     navigator.clipboard.writeText(passwordEl.textContent);
//     alert("✅ Password copied!");
// });
